using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Psihoterapie.Models
{
    public class Patient
    {
        public Guid Id { get; set; }

        public string FirstName { get; set; }

        public string  LastName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public int Age { get; set; }

        public string TheraphyReason { get; set; }

        public string MajorTrauma { get; set; }

        public string  FamilyRelationship { get; set; }

        public string MedicalDisease { get; set; }

        public string Medication { get; set; }

        public string OtherInformations { get; set; }

        public DateTime Appointment { get; set; }
    }
}
