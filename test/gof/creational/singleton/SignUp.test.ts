import Login from "../../../../src/gof/creational/singleton/use-case/Login";
import Signup from "../../../../src/gof/creational/singleton/use-case/Signup";

test("Deve criar uma conta de usuário", async() => {
    const signup = new Signup();
    const login = new Login();

    const inputSignup = {
        name: "name",
        email: "name@gmail.com",
        password: "password",
    }

    await signup.execute(inputSignup);
    
    const inputLogin = {
        email: "name@gmail.com",
        password: "password",
    }

    const responseLogin = await login.execute(inputLogin);
    expect(responseLogin.success).toBe(true);
})