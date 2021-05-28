using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Core.Api.Dtos;
using Core.Api.Mapper;
using Core.DAL.Models;
using Core.DAL.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BulkExtractController : ControllerBase
    {
        private IBulkExtractRepository _bulkExtractRepository;
        private IDocumentRepository _documentRepository;

        private string documentStorePath = "./../../../data/documents/";
        private string networkStorePath = "//192.168.105.86/data/documents";

        public BulkExtractController(IBulkExtractRepository bulkExtractRepository, IDocumentRepository documentRepository)
        {
            _bulkExtractRepository = bulkExtractRepository;
            _documentRepository = documentRepository;
        }

        [HttpGet("GetBulkExtracts")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<BulkExtractDto>))]
        public IActionResult GetBulkExtracts()
        {
            var bulkExtracts = _bulkExtractRepository.GetBulkExtracts();
            var bulkExtractDtoList = new List<BulkExtractDto>();
            foreach (var bulkExtract in bulkExtracts)
            {
                bulkExtractDtoList.Add(EntityMapper.MappBulkExtract(bulkExtract));
            }
            return Ok(bulkExtractDtoList);
        }
        [HttpGet("GetOcrDocsByBulkId/{bulkExtractId}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<DocumentDto>))]
        public IActionResult GetOcrDocsByBulkId(int bulkExtractId)
        {
            var documents = _documentRepository.GetOcrDocsByBulkId(bulkExtractId);
            var documentDtoList = new List<DocumentDto>();
            foreach (var doc in documents)
            {
                documentDtoList.Add(EntityMapper.MappDocument(doc));
            }
            return Ok(documentDtoList);
        }
        [HttpGet("GetImportedDocsByBulkId/{bulkExtractId}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<DocumentDto>))]
        public IActionResult GetImportedDocsByBulkId(int bulkExtractId)
        {
            var documents = _documentRepository.GetImportedDocsByBulkId(bulkExtractId);
            var documentDtoList = new List<DocumentDto>();
            foreach (var doc in documents)
            {
                documentDtoList.Add(EntityMapper.MappDocument(doc));
            }
            return Ok(documentDtoList);
        }
        [HttpPost("ImportDocuments")]
        [ProducesResponseType(200, Type = typeof(bool))]
        public IActionResult ImportDocuments([FromBody] string[] args)
        {
            string networkPath = args[0];
            string bulkExtractTitle = args[1];
            string bulkExtractDescription = args[2];
            string documentType = args[3];

            string searchPattern = "*.*";
            if(documentType == null)
            {
                documentType = "All Types of Files";
            }
            if(documentType.Equals("PDF Files Only"))
            {
                searchPattern = "*.pdf";
            }
            else if(documentType.Equals("LAS Files Only"))
            {
                searchPattern = "*.las";
            }
            if(!Directory.Exists(@networkPath))
            {
                return Ok(false);
            }
            string[] networkFiles = Directory.GetFiles(@networkPath, searchPattern);

            BulkExtractDto addedBulkExtract = EntityMapper.MappBulkExtract(
                _bulkExtractRepository.AddBulkExtract(
                    EntityMapper.MappBulkExtractDto( new BulkExtractDto
                        {
                            BulkExtractTitle = bulkExtractTitle,
                            BulkExtractDescription = bulkExtractDescription,
                            BulkExtractPath = networkPath,
                            BulkExtractDate = DateTime.Today,
                            UserId = "Syed",
                            DocumentType = documentType
                        }
                    )
                )
            );
            for(int i=0;i< networkFiles.Length;i++)
            {
                _documentRepository.AddDocument(EntityMapper.MappDocumentDto(
                    new DocumentDto
                    {
                        DocumentPath = networkFiles[i],
                        DocumentDate = DateTime.Today,
                        BulkExtractId = addedBulkExtract.BulkExtractId
                    }
                ));
            }
            
            return Ok(true);
        }
        [HttpPost("ProcessImportedDocuments")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<DocumentDto>))]
        public IActionResult ProcessImportedDocuments([FromBody] DocumentDto[] documentDtos)
        {
            if(documentDtos.Length > 0)
            {
                for (int i = 0; i < documentDtos.Length;i++)
                {
                    string webAddress = getDocumentPathFromNetworkFile(documentDtos[i].DocumentPath);
                    System.IO.File.Copy(documentDtos[i].DocumentPath, webAddress);

                    if(System.IO.File.Exists(webAddress))
                    {
                        documentDtos[i].IsUploadedDocument = 1;
                        documentDtos[i].IsProcessedDocument = 1;
                        documentDtos[i].DocumentPath = webAddress;
                    }
                }
            }
            for (int i = 0; i < documentDtos.Length; i++)
            {
                var doc = _documentRepository.UpdateDocument(EntityMapper.MappDocumentDto(documentDtos[i]));
                documentDtos[i] = EntityMapper.MappDocument(doc);
            }

            return Ok(documentDtos);
        }
        public string getDocumentPathFromNetworkFile(string param)
        {
            string[] splits = param.Split(new char[] { '/', '\\' });
            string filename = splits.Last();
            return networkStorePath + "/" + filename;
        }
    }
}
