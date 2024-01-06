using pizzeria_app.Models;

namespace pizzeria_app.Data
{
    public class SeedData
    {
        public static async Task Seed(PizzeriaDbContext dbContext)
        {
            dbContext.Database.EnsureDeleted();
            dbContext.Database.EnsureCreated();


            var sizes = new List<Size> {
                new Size() { Id = Guid.NewGuid(), Title = "Small"},
                new Size() { Id = Guid.NewGuid(), Title = "Medium"},
                new Size() { Id = Guid.NewGuid(), Title = "Large"},
            };


            var toppings = new List<Topping> {
                new Topping() { Id = Guid.NewGuid(), Title = "Pepperoni"},
                new Topping() { Id = Guid.NewGuid(), Title = "Sausage"},
                new Topping() { Id = Guid.NewGuid(), Title = "Pineapple"},
                new Topping() { Id = Guid.NewGuid(), Title = "Onion"},
                new Topping() { Id = Guid.NewGuid(), Title = "Mushroom"},
                new Topping() { Id = Guid.NewGuid(), Title = "Ham"},
                new Topping() { Id = Guid.NewGuid(), Title = "Chili pepper"},
                new Topping() { Id = Guid.NewGuid(), Title = "Cucumber"},
            };

            var orders = new List<Order>();
            var orderToppings = new List<OrderTopping>();
                            
            

            await dbContext.AddRangeAsync(sizes);
            await dbContext.AddRangeAsync(toppings);
            await dbContext.AddRangeAsync(orders);
            await dbContext.AddRangeAsync(orderToppings);
            await dbContext.SaveChangesAsync();
        }
    }
}
