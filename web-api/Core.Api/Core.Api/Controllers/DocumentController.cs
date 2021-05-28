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
    public class DocumentController : ControllerBase
    {
        private IDocumentRepository _documentRepository;
        private string documentStorePath = "./../../../data/documents/";
        private string networkStorePath = "//192.168.105.86/data/documents";

        public DocumentController(IDocumentRepository documentRepository)
        {
            _documentRepository = documentRepository;
        }

        [HttpGet("GetDocuments/{type}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<DocumentDto>))]
        public IActionResult GetDocuments(IDocumentRepository.TYPE type)
        {
            var documents = _documentRepository.GetDocuments(type);
            var documentDtoList = new List<DocumentDto>();
            foreach (var doc in documents)
            {
                documentDtoList.Add(EntityMapper.MappDocument(doc));
            }
            return Ok(documentDtoList);
        }
        [HttpPost("AddDocument")]

        [ProducesResponseType(200, Type = typeof(DocumentDto))]
        public IActionResult AddDocument([FromBody] DocumentDto documentDto)
        {

            DocumentDto result = EntityMapper.MappDocument(_documentRepository.AddDocument(EntityMapper.MappDocumentDto(documentDto)));

            return Ok(result);
        }
        [HttpPost("UploadDocument"), DisableRequestSizeLimit]
        //[Consumes("multipart/form-data")]
        [ProducesResponseType(200, Type = typeof(bool))]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(415)]
        public IActionResult UploadDocument(IFormFile uploadFile, [FromForm] string uploadedFilename)
        {
            if (uploadFile == null)
            {
                return Ok(false);
            }
            if (System.IO.File.Exists(documentStorePath + uploadedFilename))
            {
                System.IO.File.Delete(documentStorePath + uploadedFilename);
            }
            using (var stream = new FileStream(documentStorePath + uploadedFilename, FileMode.Create))
            {
                uploadFile.CopyTo(stream);
            }

            return Ok(true);
        }
        [HttpPost("UpdateDocument")]
        [ProducesResponseType(200, Type = typeof(DocumentDto))]
        public IActionResult UpdateDocument([FromBody] DocumentDto documentDto)
        {
            DocumentDto result = EntityMapper.MappDocument(_documentRepository.UpdateDocument(EntityMapper.MappDocumentDto(documentDto)));

            return Ok(result);
        }
        [HttpPost("DeleteDocumentNormal")]
        [ProducesResponseType(200, Type = typeof(bool))]
        public IActionResult DeleteDocumentNormal([FromBody] DocumentDto documentDto)
        {
            bool result = _documentRepository.DeleteDocumentNormal(EntityMapper.MappDocumentDto(documentDto));
            return Ok(result);
        }
        [HttpPost("DeleteDocumentPermanently")]
        [ProducesResponseType(200, Type = typeof(bool))]
        public IActionResult DeleteDocumentPermanently([FromBody] DocumentDto documentDto)
        {
            bool result = _documentRepository.DeleteDocumentPermanently(EntityMapper.MappDocumentDto(documentDto));
            return Ok(result);
        }
        [HttpPost("RestoreDocument")]
        [ProducesResponseType(200, Type = typeof(bool))]
        public IActionResult RestoreDocument([FromBody] DocumentDto documentDto)
        {
            bool result = _documentRepository.RestoreDocument(EntityMapper.MappDocumentDto(documentDto));
            return Ok(result);
        }

        [HttpPost("BulkUpdateDocuments")]
        [ProducesResponseType(200, Type = typeof(bool))]
        public IActionResult BulkUpdateDocuments([FromBody] DocumentDto[] documentDtos)
        {
            Document[] docs = new Document[documentDtos.Length];
            for(int i=0;i<documentDtos.Length;i++)
            {
                docs[i] = EntityMapper.MappDocumentDto(documentDtos[i]);
            }
            bool result = _documentRepository.BulkUpdateDocuments(docs);
            return Ok(result);
        }
        [HttpPost("BulkDeleteDocuments")]
        [ProducesResponseType(200, Type = typeof(bool))]
        public IActionResult BulkDeleteDocuments([FromBody] DocumentDto[] documentDtos)
        {
            Document[] docs = new Document[documentDtos.Length];
            for (int i = 0; i < documentDtos.Length; i++)
            {
                docs[i] = EntityMapper.MappDocumentDto(documentDtos[i]);
            }
            bool result = _documentRepository.BulkDeleteDocuments(docs);
            return Ok(result);
        }

        [HttpPost("BulkRestoreDocuments")]
        [ProducesResponseType(200, Type = typeof(bool))]
        public IActionResult BulkRestoreDocuments([FromBody] DocumentDto[] documentDtos)
        {
            Document[] docs = new Document[documentDtos.Length];
            for (int i = 0; i < documentDtos.Length; i++)
            {
                docs[i] = EntityMapper.MappDocumentDto(documentDtos[i]);
            }
            bool result = _documentRepository.BulkRestoreDocuments(docs);
            return Ok(result);
        }

        [HttpPost("BulkDeleteDocumentsPermanently")]
        [ProducesResponseType(200, Type = typeof(bool))]
        public IActionResult BulkDeleteDocumentsPermanently([FromBody] DocumentDto[] documentDtos)
        {
            Document[] docs = new Document[documentDtos.Length];
            for (int i = 0; i < documentDtos.Length; i++)
            {
                docs[i] = EntityMapper.MappDocumentDto(documentDtos[i]);
            }
            bool result = _documentRepository.BulkDeleteDocumentsPermanently(docs);
            return Ok(result);
        }
        [HttpPost("GetWebAddressForFile")]
        [ProducesResponseType(200, Type = typeof(string))]
        public IActionResult GetWebAddressForFile(string param)
        {
            string[] splits = param.Split(new char[]{ '/','\\'});
            string filename = splits.Last();
            return Ok(networkStorePath+"/"+filename);
        }
    }
}
