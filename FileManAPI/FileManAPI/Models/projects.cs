using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FileManAPI.Models
{
    public class projects
    {
        public Guid ProjectID { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}