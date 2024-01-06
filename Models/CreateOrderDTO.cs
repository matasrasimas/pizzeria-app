namespace pizzeria_app.Models
{
    public class CreateOrderDTO
    {
        public Size? Size { get; set; }
        public List<Topping>? Toppings { get; set; }
    }
}
