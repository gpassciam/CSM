function ShowLoginScreen()
{
    gigya.socialize.addEventHandlers({
            onLogin: function() {
            alert("hello");
                var params = {
//set up the callback to handle the response
callback: doCallback
};

gigya.fidm.saml.continueSSO(params);
            }
        });

    gigya.accounts.showScreenSet({
            screenSet: 'csmservicenow-dev-RegistrationLogin',
            startScreen: 'gigya-login-screen',
            //customLang: customLangParams,
            containerID: 'LoginScreen'
            
        });

    
    function doCallback(response) {
alert(JSON.stringify(response));
}

}
