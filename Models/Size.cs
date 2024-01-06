using System.ComponentModel.DataAnnotations;

namespace pizzeria_app.Models
{
    public class Size
    {
        [Key]
        public Guid Id { get; set; }

        public string? Title { get; set; }
    }
}
