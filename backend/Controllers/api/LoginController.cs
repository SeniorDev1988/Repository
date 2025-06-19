using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace crud_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;

        // Constructor to initialize the book list with mock data
        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }


        [HttpPost]
        public ActionResult<Login> ValidateUser([FromBody] Login login)
        {

            if (login == null || string.IsNullOrEmpty(login.Email))
            {
                return BadRequest(new { Token = (string?)null, Message = "Email is required." });
            }
            if (string.IsNullOrEmpty(login.Password))
            {
                return BadRequest(new { Token = (string?)null, Message = "Password is required." });
            }
            var isValidUser = _loginService.ValidateUser(login);
            if (!isValidUser)
            {
                return Unauthorized(new { Message = "Invalid email or password." });
            }

            var token = _loginService.GenerateToken(login.Email);
            return Ok(new { Token = token, Message = "Login successful." });
        }
    }

}