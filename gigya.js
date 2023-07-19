function ShowLoginScreen()
{
    gigya.socialize.addEventHandlers({
            onLogin: function() {
            alert("hello");
                var params = {
//set up the callback to handle the respon
spName: 'CSMServiceNow'
callback: doCallback
};

gigya.fidm.saml.initSSO(params);

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
