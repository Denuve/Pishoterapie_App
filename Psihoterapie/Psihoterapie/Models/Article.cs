using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Psihoterapie.Models
{
    public class Article
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Category { get; set; }

        public DateTime Date { get; set; }

        public string ImagePath { get; set; }

        public string Content { get; set; }

    }
}
