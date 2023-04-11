using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIfor14.Data;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APIfor14.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }

        // GET: /<controller>/
        public IEnumerable<MovieData> Get()
        {
            var x = context.Movies.ToArray();
            return context.Movies.ToArray();
        }
    }
}

