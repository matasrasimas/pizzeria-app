using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pizzeria_app.Data;
using pizzeria_app.Models;
using pizzeria_app.Services;

namespace pizzeria_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet("getorders")]
        public async Task<ActionResult<List<Order>>> GetOrders() {
            var orders = await _orderService.GetOrders();
            if (orders == null) {
                return BadRequest(new { message = "Orders not found" });
            }
            return Ok(orders);
        }

        [HttpPost("getprice")]
        public async Task<ActionResult<double>> GetPrice([FromBody] CreateOrderDTO dto) {
            double price = await _orderService.GetPrice(dto);
            return Ok(price);
        }

        [HttpPost("createorder")]
        public async Task<ActionResult<Order>> CreateOrder([FromBody] CreateOrderDTO dto) {
        
            var result = await _orderService.CreateOrder(dto);

            if (result == null) {
                return BadRequest(new { message = "An error occurred while creating an order" });
            }

            return Ok(result);
        }
    }
}
