using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace pizzeria_app.Models
{
    public class Order
    {
        [Key]
        public Guid Id { get; set; }

        public double Price { get; set; }

        public Size? Size { get; set; }

        public List<OrderTopping>? OrderToppings { get; set; }

        public DateTime? SubmissionDate { get; set; }
    }


}
