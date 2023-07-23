function ShowLoginScreen()
{
    
    gigya.accounts.showScreenSet({
            screenSet: 'csmservicenow-dev-RegistrationLogin',
            startScreen: 'gigya-login-screen',
            //customLang: customLangParams,
            containerID: 'LoginScreen'
            
        });

    
    
}
function ShowForgotPassScreen()
{
    
    gigya.accounts.showScreenSet({
            screenSet: 'csmservicenow-dev-RegistrationLogin',
            startScreen: 'gigya-forgot-password-screen',
            //customLang: customLangParams,
            containerID: 'ShowForgotPassScreen'
            
        });

    
    
}
