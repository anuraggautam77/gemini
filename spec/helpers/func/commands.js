
// add commands for all project
module.exports = {

    // for example, add cookie
    addCookiesRuLang(actions) {
        actions.executeJS(function (window) {
            window.document.cookie = "langKey=RUS";
            window.document.cookie = "lang=ru";
            window.location.reload();
        });
    }

};
