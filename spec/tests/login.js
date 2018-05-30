const login          = require('../helpers/locators/LoginPage');
const url            = require('../helpers/url/urlList');

gemini.suite('login', (suite) => {
    suite
        .setUrl(url.login)
        .before((actions) => {
            actions.waitForElementToShow(login.pageLogin, 15000);
        })
        .setCaptureElements(login.pageLogin)

        .capture('plain')
        .capture('hover on button', (actions) => {
            actions.mouseMove(login.singInBtn);
        })
        .capture('with text', (actions) => {
            actions
                .sendKeys(login.loginInput, 'mail@mail.com')
                .sendKeys(login.passwordInput, 'qwerty');
        })
        .capture('show error', (actions) => {
            actions
                .click(login.singInBtn)
                .waitForElementToShow(login.error, 15000);
        });
});
