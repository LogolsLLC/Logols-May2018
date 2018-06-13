using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TimeMachine.WebAPI;

namespace TimeMachine.WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class TimeTravelerController : Controller
    {
        TimeTravelerRepository timeTravelerRepository;

        public TimeTravelerController()
        {
            timeTravelerRepository = new TimeTravelerRepository();
        }

        // GET api/TimeTravelers
        [HttpGet]
        public IEnumerable<TimeTraveler> Get()
        {
            /* 
            List<TimeTraveler> travelers = new List<TimeTraveler>();
            travelers.Add(new TimeTraveler() 
            { 
                TimeTravelerId = 1,
                FirstName = "test",
                LastName = "test"
             });
            travelers.Add(new TimeTraveler() 
            { 
                TimeTravelerId = 2,
                FirstName = "test2",
                LastName = "test2"
             });
            return travelers;
            */
            return timeTravelerRepository.GetAll();
        }

        // GET api/TimeTravelers/5
        [HttpGet("{id}")]
        public TimeTraveler Get(int id)
        {
            /* 
            return new TimeTraveler() 
            { 
                TimeTravelerId = 1,
                FirstName = "test",
                LastName = "test"
             };
             */
            return timeTravelerRepository.Get(id);
        }

        // POST api/TimeTravelers
        [HttpPost]
        public void Post([FromBody]TimeTraveler timeTraveler)
        {
            //timeTravelerRepository.Insert(timeTraveler);
        }

        // PUT api/TimeTravelers/5
        [HttpPut]
        public void Put([FromBody]TimeTraveler timeTraveler)
        {
            //timeTravelerRepository.Update(timeTraveler);
        }

        // DELETE api/TimeTravelers/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            //timeTravelerRepository.Delete(id);
        }
    }
}
