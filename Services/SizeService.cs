using Microsoft.EntityFrameworkCore;
using pizzeria_app.Data;
using pizzeria_app.Models;

namespace pizzeria_app.Services
{
    public class SizeService : ISizeService
    {
        private readonly PizzeriaDbContext _context;

        public SizeService(PizzeriaDbContext context)
        {
            _context = context;
        }

        public async Task<List<Size>?> GetSizes()
        {
            var sizes = await _context.Sizes.ToListAsync();
            if (sizes == null) {
                return null;
            }
            return sizes;
        }
    }
}
