import { Page } from "@playwright/test";
import { LoginPage } from './LoginPage';
import { DashBoard } from './DashboardPage';

export class POManager
{
    
    
    loginPage: LoginPage;
    dashboardPage: DashBoard;

constructor(public page: Page)
{

    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashBoard(this.page);
}

getLoginPage()
{
    return this.loginPage;
}

gatDashboardPage()
{
    return this.dashboardPage;

}

}
