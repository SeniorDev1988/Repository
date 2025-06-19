using System;
using FakeData;
public class LoginService : ILoginService
{

    public bool ValidateUser(Login login)
    {
        var isValidUser = UserInfo.Users
            .Any(user => user.Email == login.Email && user.Password == login.Password);
        // Sample validation logic
        return isValidUser;
    }

    public string GenerateToken(string username)
    {
        // Sample token generation logic
        return Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(username));
    }
}

