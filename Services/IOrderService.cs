using pizzeria_app.Models;

namespace pizzeria_app.Services
{
    public interface IOrderService
    {
        Task<List<GetOrderDTO>?> GetOrders();
        Task<double> GetPrice(CreateOrderDTO dto);

        Task<Order>? CreateOrder(CreateOrderDTO dto);
    }
}
