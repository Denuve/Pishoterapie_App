using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Psihoterapie.Models
{
    public class Message
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string MessageContent { get; set; }
    }
}
