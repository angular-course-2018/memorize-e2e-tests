import { authPageLoginButton, loginPageUsernameInput, loginPagePasswordInput, loginPageSubmitButton } from "./login.selectors";
import { ClientFunction, Role } from "testcafe";

fixture('login page').page('http://localhost:4200/auth');



test('should successfully login to the app with test username and pasword', async (controller) => {
    await controller
        .click(authPageLoginButton)
        .typeText(loginPageUsernameInput, 'testcafe')
        .typeText(loginPagePasswordInput, 'Aa123456')
        .click(loginPageSubmitButton)
        .expect(getLocation()).eql('http://localhost:4200/');
});

const getLocation = ClientFunction(() => {
    return window.location.href;
});