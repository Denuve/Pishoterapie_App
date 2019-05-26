using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Psihoterapie.Models;

namespace Psihoterapie.Models
{
    public class PsihoterapieContext : DbContext
    {
        public PsihoterapieContext (DbContextOptions<PsihoterapieContext> options)
            : base(options)
        {
        }

        public DbSet<Psihoterapie.Models.Article> Articles { get; set; }

        public DbSet<Psihoterapie.Models.Patient> Patient { get; set; }

        public DbSet<Psihoterapie.Models.Message> Message { get; set; }
    }
}
