import { Selector } from 'testcafe';

export const loginPageUsernameInput = Selector('input[name="username"]');
export const loginPagePasswordInput = Selector('input[name="password"]');
export const loginPageSubmitButton = Selector('button[data-test-id="login-page-login-button"]');
export const authPageLoginButton = Selector('button[data-test-id="auth-page-login-button"]');