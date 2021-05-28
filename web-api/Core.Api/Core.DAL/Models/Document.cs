using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Core.DAL.Models
{
    [Table("document")]
    public class Document
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int document_id { get; set; }
        public string document_title { get; set; }
        public string document_type { get; set; }
        public string document_path { get; set; }
        public string document_author { get; set; }
        public DateTime? document_date { get; set; }
        public string well_name { get; set; }
        public string category_name { get; set; }
        public string subcategory_name { get; set; }
        public string department_name { get; set; }
        public string stakeholder_name { get; set; }
        public string event_name { get; set; }
        public string location_name { get; set; }
        public string upload_status { get; set; }
        public string content_extracted { get; set; }
        public int? is_uploaded_document { get; set; }
        public int? is_processed_document { get; set; }
        public DateTime? doc_modified_publish_date { get; set; }
        public DateTime? doc_upload_date { get; set; }
        public string document_description { get; set; }
        public string document_address { get; set; }
        public string document_custom_content { get; set; }
        public string document_approval { get; set; }
        public string tag_name { get; set; }
        public int deleted { get; set; }
        public string ocr_status { get; set; }
        public int? bulk_extract_id { get; set; }

    }
}
