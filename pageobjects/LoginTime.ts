import { Page, Locator } from '@playwright/test';

export class LoginTime{
    userIdTitle:Locator;
    userId:Locator;
    passwordTitle:Locator;
    password:Locator;
    signInButton:Locator;
    
    constructor(public page:Page){
        this.userIdTitle=page.locator('text=User ID:')
        this.userId=page.locator('("#userid")'),
        this.passwordTitle=page.locator('text=Password:')
        this.password=page.locator('("input[type="password"]")')
        this.signInButton=page.locator('("input[type="submit"]")')
    }
    
    async fillUseId(useridnumber: string) {
        await this.userId.fill(useridnumber);
    }

    async fillPassword(password: string) {
        await this.password.fill( password);
    }

    async clickLogin() {
        await this.signInButton.click();
    }
    async login(useridnumber: string, password: string) {
        await this.fillUseId(useridnumber);
        await this.fillPassword(password);
        await this.clickLogin();
  }

}
