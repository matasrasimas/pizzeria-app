using Microsoft.EntityFrameworkCore;
using pizzeria_app.Data;
using pizzeria_app.Models;

namespace pizzeria_app.Services
{
    public class ToppingService : IToppingService
    {
        private readonly PizzeriaDbContext _context;

        public ToppingService(PizzeriaDbContext context)
        {
            _context = context;
        }

        public async Task<List<Topping>?> GetToppings()
        {
            var toppings = await _context.Toppings.ToListAsync();
            if (toppings == null) {
                return null;
            }
            return toppings;
        }
    }
}
