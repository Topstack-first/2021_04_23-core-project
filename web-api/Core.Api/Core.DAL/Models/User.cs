using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Core.DAL.Models
{
	[Table("user")]
	public class User
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int user_id { get; set; }
		public string username { get; set; } 
		public string password { get; set; }
		public string first_name { get; set; }
		public string last_name { get; set; }
		public int role_id { get; set; }

	}
}
