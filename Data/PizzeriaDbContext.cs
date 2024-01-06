
using Microsoft.EntityFrameworkCore;
using pizzeria_app.Models;

namespace pizzeria_app.Data
{
    public class PizzeriaDbContext : DbContext
    {

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "pizzeria");
        }

        public DbSet<Order> Orders { get; set; }
        public DbSet<Size> Sizes { get; set; }
        public DbSet<Topping> Toppings { get; set; }
        public DbSet<OrderTopping> OrderToppings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderTopping>()
                .HasKey(ot => new { ot.OrderId, ot.ToppingId });
        }
    }
}
