function ShowLoginScreen()
{
    gigya.accounts.showScreenSet({
            screenSet: 'csmservicenow-dev-RegistrationLogin',
            startScreen: 'gigya-login-screen',
            //customLang: customLangParams,
            containerID: 'LoginScreen'
            
        });
}
