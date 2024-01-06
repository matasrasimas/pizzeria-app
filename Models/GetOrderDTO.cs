namespace pizzeria_app.Models
{
    public class GetOrderDTO
    {
        public Guid Id { get; set; }

        public double Price { get; set; }

        public Size? Size { get; set; }

        public List<Topping>? Toppings { get; set; }

        public DateTime? SubmissionDate { get; set; }
    }
}
