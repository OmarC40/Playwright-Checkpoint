import { Page , Locator } from "@playwright/test";


export class DashBoard {

    navBarButton: Locator;
    navFrame;
    menu:Locator;
    selfserviceButton: Locator;
    timeReportingButton:Locator;
    reportTime:Locator;
    timesheet:Locator;



    constructor(public page: Page)
    {
        this.navBarButton= page.locator('#PT_NAVBAR');
        this.navFrame=page.frameLocator('#psNavBarIFrame');
        this.menu = this.navFrame.locator('[id="grouplet_PTNB$PTNUI_NB_MENU"]')
        this.selfserviceButton = this.navFrame.getByText('Self Service');
        this.timeReportingButton = this.navFrame.getByText('Time Reporting');
        this.reportTime = this.navFrame.getByText('Report Time');
        this.timesheet = this.navFrame.getByText('TimeSheet');;
    
    }

    async clickNav() {
        await this.navBarButton.click();
    }
    async clickMenuButton() {
        await this.menu.click();
    }
    async clickServiceButton() {
        await this.selfserviceButton.click();
    }
    async clickTimeReporting() {
        await this.timeReportingButton.click();
    }
    async clickReportTime() {
        await this.reportTime.click();
    }
    async clickTimeSheet() {
        await this.timesheet.click();
    }
    
    
    }

