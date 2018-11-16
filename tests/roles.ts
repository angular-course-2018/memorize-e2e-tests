import { Role } from 'testcafe';
import { authPageLoginButton, loginPageUsernameInput, loginPagePasswordInput, loginPageSubmitButton } from './login.selectors';

export const defaultUserRole = Role('http://localhost:4200/auth', async (controller) => {
    await controller.click(authPageLoginButton)
        .typeText(loginPageUsernameInput, 'testcafe')
        .typeText(loginPagePasswordInput, 'Aa123456')
        .click(loginPageSubmitButton)
});