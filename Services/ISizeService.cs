using pizzeria_app.Models;

namespace pizzeria_app.Services
{
    public interface ISizeService
    {
        Task<List<Size>?> GetSizes();
    }
}
