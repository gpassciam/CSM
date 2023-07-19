function ShowLoginScreen()
{
    gigya.accounts.showScreenSet({
            screenSet: 'csmservicenow-dev-RegistrationLogin',
            startScreen: 'gigya-login-screen',
            //customLang: customLangParams,
            containerID: 'LoginScreen'
            
        });

    gigya.socialize.addEventHandlers({
            onLogin: function() {
            alert("hello");
                var params = {
//set up the callback to handle the response
callback: doCallback
};

fidm.saml.continueSSO(params);
            }
        });

    function doCallback(response) {
alert(JSON.stringify(response));
}

}
