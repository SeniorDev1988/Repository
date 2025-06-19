using System.Collections.Generic;

namespace FakeData
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    public static class UserInfo
    {
        public static List<User> Users = new List<User>
        {

            new User { Id = 1, Email = "alice@gmail.com", Password = "password123", FirstName = "Alice", LastName = "Smith" },
            new User { Id = 2, Email = "bob@yahoo.com", Password = "securepass", FirstName = "Bob", LastName = "Johnson" },
            new User { Id = 3, Email = "charlie@gmail.com", Password = "charlie2024", FirstName = "Charlie", LastName = "Brown" },
            new User { Id = 4, Email = "hosseinghane1988@gmail.com", Password = "1", FirstName = "Hossein", LastName = "Ghane" }

        };
    }
}