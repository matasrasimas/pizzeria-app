using Microsoft.EntityFrameworkCore;
using pizzeria_app.Data;
using pizzeria_app.Models;

namespace pizzeria_app.Services
{
    public class OrderService : IOrderService
    {
        private readonly PizzeriaDbContext _context;

        public OrderService(PizzeriaDbContext context)
        {
            _context = context;
        }


        public async Task<List<GetOrderDTO>?> GetOrders()
        {
            var orders = await _context.Orders
                .Include(o => o.Size)
                .Include(o => o.OrderToppings)
                .ToListAsync();
            if (orders == null) {
                return null;
            }



            var result = orders.Select(o => new GetOrderDTO
            {
                Id = o.Id,
                Price = o.Price,
                Size = o.Size,
                Toppings = _context.Toppings.Where(t => o.OrderToppings.Select(o => o.ToppingId).ToList().Contains(t.Id)).ToList(),
                SubmissionDate = o.SubmissionDate,
            }).ToList();

            return result;
        }

        public async Task<double> GetPrice(CreateOrderDTO dto)
        {
            double price = 0;
            Size? orderSize = dto.Size;

            if (orderSize != null) {
                switch (orderSize.Title.ToLower()) {
                    case "small":
                        price += 8;
                        break;
                    case "medium":
                        price += 10;
                        break;
                    case "large":
                        price += 12;
                        break;
                    default:
                        break;
                }       
            }

            List<Topping>? toppings = dto.Toppings;
            if (toppings != null) {
                price += toppings.Count;
                if (toppings.Count > 3) {
                    // If user selects more than 3 toppings, apply 10% discount
                    price *= 0.9;
                }
            }

            return price;
        }

        public async Task<Order>? CreateOrder(CreateOrderDTO dto)
        {
            if (dto == null || dto.Size == null)
            {
                return null;
            }

            var newSize = await _context.Sizes.FindAsync(dto.Size.Id);

            // Create a list of toppings based on the IDs in dto.Toppings
            var newToppings = dto.Toppings
                .Select(t => _context.Toppings.Find(t.Id))
                .ToList();

            // Calculate the price using the GetPrice method
            double price = await GetPrice(dto);

            var newOrder = new Order
            {
                Id = Guid.NewGuid(),
                Price = price,
                Size = newSize,
                SubmissionDate = DateTime.Now,
            };

            // Create OrderTopping instances to represent the many-to-many relationship
            var orderToppings = newToppings.Select(t => new OrderTopping
            {
                OrderId = newOrder.Id,
                ToppingId = t.Id
            }).ToList();



            newOrder.OrderToppings = orderToppings;

            // Add the new order and associated OrderToppings to the context
            await _context.Orders.AddAsync(newOrder);
            await _context.OrderToppings.AddRangeAsync(orderToppings);

            await _context.SaveChangesAsync();

            return newOrder;
        }
    }
}
