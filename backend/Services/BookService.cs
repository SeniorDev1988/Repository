namespace Backend.Services
{
    public class BookService : IBookService
    {
        public List<Book> GetBooks()
        {
            // Sample data or actual implementation
            return new List<Book>
            {
                new Book { Title = "Book A", Author = "Author A" },
                new Book { Title = "Book B", Author = "Author B" }
            };
        }
    }
}
