using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KendoApp_Backend.Models
{
    public class Address
    {
        [Key]
        public int addressId { get; set; }
        public string city { get; set; }
        public string country { get; set; }

        public ICollection<Person> People { get; set; }
    }
}
