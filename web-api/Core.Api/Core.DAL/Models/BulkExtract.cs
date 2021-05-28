using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Core.DAL.Models
{
    [Table("bulk_extract")]
    public class BulkExtract
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int bulk_extract_id { get; set; }
        public string bulk_extract_title { get; set; }
        public string bulk_extract_description { get; set; }
        public string bulk_extract_path { get; set; }
        public DateTime? bulk_extract_date { get; set; }
        public string user_id { get; set; }
        public int total_documents { get; set; }
        public int processed_documents { get; set; }
        public int uploaded_documents { get; set; }
        public string document_type { get; set; }
        
    }
}
