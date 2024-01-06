namespace pizzeria_app.Models
{
    public class OrderTopping
    {
        public Guid OrderId { get; set; }
        public Guid ToppingId { get; set; }
    }
}
