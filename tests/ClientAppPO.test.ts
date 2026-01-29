import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';


//const { DashboardPage } = require('../pageobjects/DashboardPage');
const dataset =  JSON.parse(JSON.stringify(require("../utils/TestDataLoginPage.json")));



test('@Regression Client App login for', async ({page})=>
{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(dataset.username,dataset.password); 
// validating Dashboard page
    const dashboardPage = poManager.gatDashboardPage();
    await dashboardPage.validDashboard();
    

});




