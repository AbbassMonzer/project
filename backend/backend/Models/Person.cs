using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KendoApp_Backend.Models
{
    public class Person
    {
        [Key]

        public int id { get; set; }
        public string fname { get; set; }

        public string lname { get; set; }

        [NotMapped]
        public Address address { get; set; }
        public int addressID { get; set; }
    }
}
