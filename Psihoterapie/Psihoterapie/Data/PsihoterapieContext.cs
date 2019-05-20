using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Psihoterapie.Models
{
    public class PsihoterapieContext : DbContext
    {
        public PsihoterapieContext (DbContextOptions<PsihoterapieContext> options)
            : base(options)
        {
        }

        public DbSet<Psihoterapie.Models.Article> Articles { get; set; }
    }
}
