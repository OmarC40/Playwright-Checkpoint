import { Page , Locator } from "@playwright/test";


export class LoginPage {

    signInbutton: Locator;
    userName: Locator;
    password: Locator;


    constructor(public page: Page)
    {
        this.signInbutton= page.locator("input[value='Sign In']");
        this.userName = page.locator("input#userid");
        this.password = page.locator("input#pwd");
    
    }
    
    async goTo()
    {
        await this.page.goto("https://myapexinternal.apexsystemsinc.com/psp/INTERNAL/?cmd=login&languageCd=ENG");
    }
   
    async validLogin(username:string,password:string)
    {
         await  this.userName.fill(username);
         await this.password.fill(password);
         await this.signInbutton.click();
    
    }
    
    }