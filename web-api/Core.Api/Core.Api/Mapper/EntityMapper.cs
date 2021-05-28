using Core.Api.Dtos;
using Core.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Api.Mapper
{
	public static class EntityMapper
	{
		public static UserDto MappUser(User user)
		{
			return new UserDto
			{
				UserId = user.user_id,
				Username = user.username,
				Password = user.password,
                FirstName = user.first_name,
                LastName = user.last_name,
				RoleId = user.role_id,
			};



		}
		public static DocumentDto MappDocument(Document document)
		{
			return new DocumentDto
			{

                DocumentId = document.document_id,
                DocumentTitle = document.document_title,
                DocumentType = document.document_title,
                DocumentPath = document.document_path,
                DocumentAuthor = document.document_author,
                DocumentDate = document.document_date,
                WellName = document.well_name,
                CategoryName = document.category_name,
                SubcategoryName = document.subcategory_name,
                DepartmentName = document.department_name,
                StakeholderName = document.stakeholder_name,
                EventName = document.event_name,
                LocationName = document.location_name,
                UploadStatus = document.upload_status,
                ContentExtracted = document.content_extracted,
                IsUploadedDocument = document.is_uploaded_document,
                IsProcessedDocument = document.is_processed_document,
                DocModifiedPublishDate = document.doc_modified_publish_date,
                DocUploadDate = document.doc_upload_date,
                DocumentDescription = document.document_description,
                DocumentAddress = document.document_address,
                DocumentCustomContent = document.document_custom_content,
                DocumentApproval = document.document_approval,
                TagName = document.tag_name,
                Deleted = document.deleted,
                OcrStatus = document.ocr_status,
                BulkExtractId = document.bulk_extract_id
            };
		}
        public static Document MappDocumentDto(DocumentDto documentDto)
        {
            return new Document
            {
                document_id = documentDto.DocumentId,
                document_title = documentDto.DocumentTitle,
                document_type = documentDto.DocumentType,
                document_path = documentDto.DocumentPath,
                document_author = documentDto.DocumentAuthor,
                document_date = documentDto.DocumentDate,
                well_name = documentDto.WellName,
                category_name = documentDto.CategoryName,
                subcategory_name = documentDto.SubcategoryName,
                department_name = documentDto.DepartmentName,
                stakeholder_name = documentDto.StakeholderName,
                event_name = documentDto.EventName,
                location_name = documentDto.LocationName,
                upload_status = documentDto.UploadStatus,
                content_extracted = documentDto.ContentExtracted,
                is_uploaded_document = documentDto.IsUploadedDocument,
                is_processed_document = documentDto.IsProcessedDocument,
                doc_modified_publish_date = documentDto.DocModifiedPublishDate,
                doc_upload_date = documentDto.DocUploadDate,
                document_description = documentDto.DocumentDescription,
                document_address = documentDto.DocumentAddress,
                document_custom_content = documentDto.DocumentCustomContent,
                document_approval = documentDto.DocumentApproval,
                tag_name = documentDto.TagName,
                deleted = documentDto.Deleted,
                ocr_status = documentDto.OcrStatus,
                bulk_extract_id = documentDto.BulkExtractId
            };
        }
        public static BulkExtractDto MappBulkExtract(BulkExtract bulkExtract)
        {
            return new BulkExtractDto
            {
                BulkExtractId = bulkExtract.bulk_extract_id,
                BulkExtractTitle = bulkExtract.bulk_extract_title,
                BulkExtractDescription = bulkExtract.bulk_extract_description,
                BulkExtractPath = bulkExtract.bulk_extract_path,
                BulkExtractDate = bulkExtract.bulk_extract_date,
                UserId = bulkExtract.user_id,
                TotalDocuments = bulkExtract.total_documents,
                ProcessedDocuments = bulkExtract.processed_documents,
                UploadedDocuments = bulkExtract.uploaded_documents,
                DocumentType = bulkExtract.document_type
            };
        }
        public static BulkExtract MappBulkExtractDto(BulkExtractDto bulkExtractDto)
        {
            return new BulkExtract
            {
                bulk_extract_id = bulkExtractDto.BulkExtractId,
                bulk_extract_title = bulkExtractDto.BulkExtractTitle,
                bulk_extract_description = bulkExtractDto.BulkExtractDescription,
                bulk_extract_path = bulkExtractDto.BulkExtractPath,
                bulk_extract_date = bulkExtractDto.BulkExtractDate,
                user_id = bulkExtractDto.UserId,
                total_documents = bulkExtractDto.TotalDocuments,
                processed_documents = bulkExtractDto.ProcessedDocuments,
                uploaded_documents = bulkExtractDto.UploadedDocuments,
                document_type = bulkExtractDto.DocumentType
            };
        }
    }
}
