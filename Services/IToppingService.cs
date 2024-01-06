using pizzeria_app.Models;

namespace pizzeria_app.Services
{
    public interface IToppingService
    {
        Task<List<Topping>?> GetToppings();
    }
}
