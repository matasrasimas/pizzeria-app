using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace pizzeria_app.Models
{
    public class Topping
    {
        [Key]
        public Guid Id { get; set; }
        public string? Title { get; set; }
    }
}
