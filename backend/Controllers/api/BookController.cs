using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Backend.Services;

namespace crud_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
       private readonly IBookService _bookService;

        // Constructor to initialize the book list with mock data
        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        // Mock data for demonstration purposes

        // GET: api/Book
        [HttpGet]
        public ActionResult<IEnumerable<Book>> GetBooks()
        {
            return Ok(_bookService.GetBooks());
        }

        //     // GET: api/Book/{id}
        //     [HttpGet("{id}")]
        //     public ActionResult<Book> GetBook(int id)
        //     {
        //         var book = books.Find(b => b.Id == id);
        //         if (book == null)
        //         {
        //             return NotFound();
        //         }
        //         return Ok(book);
        //     }

        //     // POST: api/Book
        //     [HttpPost]
        //     public ActionResult<Book> CreateBook([FromBody] Book newBook)
        //     {
        //         newBook.Id = books.Count + 1;
        //         books.Add(newBook);
        //         return CreatedAtAction(nameof(GetBook), new { id = newBook.Id }, newBook);
        //     }

        //     // PUT: api/Book/{id}
        //     [HttpPut("{id}")]
        //     public ActionResult UpdateBook(int id, [FromBody] Book updatedBook)
        //     {
        //         var book = books.Find(b => b.Id == id);
        //         if (book == null)
        //         {
        //             return NotFound();
        //         }

        //         book.Title = updatedBook.Title;
        //         book.Author = updatedBook.Author;
        //         return NoContent();
        //     }

        //     // DELETE: api/Book/{id}
        //     [HttpDelete("{id}")]
        //     public ActionResult DeleteBook(int id)
        //     {
        //         var book = books.Find(b => b.Id == id);
        //         if (book == null)
        //         {
        //             return NotFound();
        //         }

        //         books.Remove(book);
        //         return NoContent();
        //     }
    }

    // Book model for demonstration purposes

}