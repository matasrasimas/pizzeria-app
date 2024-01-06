using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pizzeria_app.Data;
using pizzeria_app.Models;
using pizzeria_app.Services;

namespace pizzeria_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SizeController : Controller
    {
        private readonly ISizeService _sizeService;

        public SizeController(ISizeService sizeService)
        {
            _sizeService = sizeService;
        }

        [HttpGet("getsizes")]
        public async Task<ActionResult<List<Size>>> GetSizes() {
            var sizes = await _sizeService.GetSizes();
            if (sizes == null) {
                return BadRequest(new { message = "No sizes found" });
            }
            return Ok(sizes);
        }
    }
}
