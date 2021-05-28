using Core.DAL.Contexts;
using Core.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.DAL.Services
{
    public class DocumentRepository : IDocumentRepository
	{
		private CoreDBContext _dbContext;

		public DocumentRepository(CoreDBContext context)
		{
			_dbContext = context;
		}

		public ICollection<Document> GetDocuments(IDocumentRepository.TYPE type)
		{
			if(type == IDocumentRepository.TYPE.ALL)
            {
				return _dbContext.Document.Where(doc => doc.deleted == 0).ToList();
			}
			else if(type == IDocumentRepository.TYPE.MINE)
            {
				//temp
				return _dbContext.Document.Where(doc => doc.deleted == 0).ToList();
			}
			else if(type == IDocumentRepository.TYPE.APPROVED)
            {
				return _dbContext.Document.Where(doc => doc.document_approval.Equals("Approved") && doc.deleted == 0).ToList();
			}
			else if (type == IDocumentRepository.TYPE.IN_REVIEW)
			{
				return _dbContext.Document.Where(doc => doc.document_approval.Equals("In Review") && doc.deleted == 0).ToList();
			}
			else if (type == IDocumentRepository.TYPE.REJECTED)
			{
				return _dbContext.Document.Where(doc => doc.document_approval.Equals("Rejected") && doc.deleted == 0).ToList();
			}
			else if (type == IDocumentRepository.TYPE.OCR_QUEUE)
			{
				return _dbContext.Document.Where(doc => doc.ocr_status != null && doc.deleted == 0).ToList();
			}
			else if (type == IDocumentRepository.TYPE.TRASH)
			{
				return _dbContext.Document.Where(doc => doc.deleted == 1).ToList();
			}
			return _dbContext.Document.Where(doc => true).ToList();
		}
		public ICollection<Document> GetOcrDocsByBulkId(int bulkExtractId)
        {
			return _dbContext.Document.Where(doc => doc.ocr_status != null && doc.deleted == 0 && doc.bulk_extract_id == bulkExtractId).ToList();
		}
		public ICollection<Document> GetImportedDocsByBulkId(int bulkExtractId)
        {
			return _dbContext.Document.Where(doc => (doc.is_processed_document == 0 || doc.is_processed_document == null) && doc.deleted == 0 && doc.bulk_extract_id == bulkExtractId).ToList();
		}
		public Document AddDocument(Document doc)
        {
			_dbContext.Document.Add(doc);
			Save();
			return _dbContext.Document.OrderBy(c => c.document_id).LastOrDefault();
		}
		public Document UpdateDocument(Document doc)
        {
            try
            {
				_dbContext.Document.Update(doc);
			}
			catch(Exception e)
            {

            }
			Save();
			return _dbContext.Document.Where(d=>d.document_id == doc.document_id).FirstOrDefault();
		}
		public bool DeleteDocumentNormal(Document doc)
        {
			doc.deleted = 1;
			_dbContext.Document.Update(doc);
			return Save();
		}
		public bool RestoreDocument(Document doc)
        {
			doc.deleted = 0;
			_dbContext.Document.Update(doc);
			return Save();
		}
		public bool DeleteDocumentPermanently(Document doc)
        {
			_dbContext.Document.Remove(doc);
			return Save();
		}


		public bool BulkUpdateDocuments(Document[] docs)
        {
			_dbContext.Document.UpdateRange(docs);
			return Save();
		}
		public bool BulkDeleteDocuments(Document[] docs)
        {
			for(int i=0; i< docs.Length;i++)
            {
				docs[i].deleted = 1;
            }
			_dbContext.Document.UpdateRange(docs);
			return Save();
		}
		public bool BulkDeleteDocumentsPermanently(Document[] docs)
        {
			_dbContext.Document.RemoveRange(docs);
			return Save();
		}
		public bool BulkRestoreDocuments(Document[] docs)
        {
			for (int i = 0; i < docs.Length; i++)
			{
				docs[i].deleted = 0;
			}
			_dbContext.Document.UpdateRange(docs);
			return Save();
		}


		public bool Save()
		{
			var saved = _dbContext.SaveChanges();
			return saved >= 0 ? true : false;
		}
	}
}
