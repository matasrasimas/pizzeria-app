using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pizzeria_app.Data;
using pizzeria_app.Models;
using pizzeria_app.Services;

namespace pizzeria_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToppingController : Controller
    {
        private readonly IToppingService _toppingService;

        public ToppingController(IToppingService toppingService)
        {
            _toppingService = toppingService;
        }

        [HttpGet("gettoppings")]
        public async Task<ActionResult<List<Size>>> GetToppings()
        {
            var toppings = await _toppingService.GetToppings();
            if (toppings == null) {
                return BadRequest(new { message = "No Toppings found" });
            }
            return Ok(toppings);
        }
    }
}
