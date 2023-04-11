using System;
using System.ComponentModel.DataAnnotations;

namespace APIfor14.Data
{
	public class MovieData
	{
		[Key]
		public int MovieID { get; set; }
		public string? Category { get; set; }
		public string? Title { get; set; }
		public int Year { get; set; }
		public string? Director { get; set; }
		public int Rating { get; set; }
		public string Edited { get; set; }
	}
}

