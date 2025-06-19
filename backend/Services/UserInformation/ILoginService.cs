    public interface ILoginService
    {
        bool ValidateUser(Login login);
        string GenerateToken(string username);
    }
