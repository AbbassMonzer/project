using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KendoApp_Backend.Data;
using KendoApp_Backend.Models;
using Microsoft.VisualBasic;
using System.Data;

namespace KendoApp_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly DataContext _context;

        public PersonController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Person
        [HttpGet]
        public async Task<List<PersonAddress>> GetPerson()
        {

            var result = (from p in _context.Person
                          join a in _context.Address on p.addressID equals a.addressId
                          select new PersonAddress { fname = p.fname, lname = p.lname, city = a.city, country = a.country }).ToList();

            return result;
        }

        // GET: api/Person
        [HttpGet]
        [Route("address-data")]
        public async Task<List<AddressCount>> GetPersons()
        {
            var count =  _context.Person.GroupBy(s => s.addressID).Select(g => g.Count());
            var query = (from p in _context.Person
                         join a in _context.Address on p.addressID equals a.addressId
                         group p by new { a.city, a.country } into g
                         select new AddressCount { count = g.Count(), city = g.Key.city, country = g.Key.country }).ToList();
            return query;  
        }       



        // PUT: api/Person/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPerson(int id, Person person)
        {
            if (id != person.id)
            {
                return BadRequest();
            }

            _context.Entry(person).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Person
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Person>> PostPerson(Person person)
        {
            _context.Person.Add(person);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPerson", new { id = person.id }, person);
        }

        // DELETE: api/Person/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Person>> DeletePerson(int id)
        {
            var person = await _context.Person.FindAsync(id);
            if (person == null)
            {
                return NotFound();
            }

            _context.Person.Remove(person);
            await _context.SaveChangesAsync();

            return person;
        }

        private bool PersonExists(int id)
        {
            return _context.Person.Any(e => e.id == id);
        }
    }
}
