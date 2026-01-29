import { Page } from "@playwright/test";
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';

export class POManager
{
    
    
    loginPage: LoginPage;
    dashboardPage: DashboardPage;

constructor(public page: Page)
{

    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
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
