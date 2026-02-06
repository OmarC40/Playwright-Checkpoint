import { Page, Locator } from "@playwright/test";

export class Timesheet {
  tableFrame;
  //businessUnitFrame;
  //projectIdFrame;
  //activityIdFrame;

  timeReportingCodeOption:Locator;

  businessUnitButton: Locator;

  projectIdButton: Locator;

  activityIdButton: Locator;
 

  constructor(public page: Page) {
    this.tableFrame = page.frameLocator("#ptifrmtgtframe");
   
    this.timeReportingCodeOption = this.tableFrame.locator('select[name="TRC$0"]')

    this.businessUnitButton = this.tableFrame.locator('[name="BUSINESS_UNIT_PC$prompt$0"]')
    
    //this.businessUnitFrame = page.frameLocator('iframe[id^="ptModFrame_0"]');

    this.projectIdButton = this.tableFrame.locator('[name="AX_PROJECT_ID$prompt$0"]')
    
    //this.projectIdFrame = page.frameLocator('iframe[id^="ptModFrame_1"]');

    this.activityIdButton=this.tableFrame.locator('[name="ACTIVITY_ID$prompt$0"]')

    //this.activityIdFrame = page.frameLocator('iframe[id^="ptModFrame_2"]');




  
  }

  async selectTRC(value: string) {
    await this.timeReportingCodeOption.selectOption({ value });
  }
/*
  lookupBussinessUnitPC(text: string): Locator {
  return this.businessUnitFrame.getByText(text, { exact: true });
}

async selectLookupOptionBussinessUnitPC(text: string) {
  await this.businessUnitButton.click();
  await this.lookupBussinessUnitPC(text).click();
}

lookupProjectID(text: string): Locator {
  return this.projectIdFrame.getByText(text, { exact: true });
}

async selectLookupOptionProjectID(text: string) {
  await this.projectIdButton.click();
  await this.lookupProjectID(text).click();
}

lookupActivityID(text: string): Locator {
  return this.activityIdFrame.getByText(text, { exact: true });
}

async selectLookupOptionActivityID(text: string) {
  await this.activityIdButton.click();
  await this.lookupActivityID(text).click();
}
*/
async fillWeekdaysWith8(row = 0) {
    for (let day = 2; day <= 6; day++) {
      const cell = this.tableFrame.locator(`[name="QTY_DAY${day}$${row}"]`);
      await cell.fill("8");
      await cell.press("Tab");
    }
  }

//-------------------------------
getLookupFrame() {
  return this.page.frameLocator('iframe[id^="ptModFrame_"]:visible');
}

async selectLookupOption(button: Locator, text: string) {
  await button.click();
  const lookupFrame = this.getLookupFrame();
  await lookupFrame.getByText(text, { exact: true }).click();

}
async selectLookupOptionBussinessUnitPC(text: string) {
    await this.selectLookupOption(this.businessUnitButton, text);
  }

  async selectLookupOptionProjectID(text: string) {
    await this.selectLookupOption(this.projectIdButton, text);
  }

  async selectLookupOptionActivityID(text: string) {
    await this.selectLookupOption(this.activityIdButton, text);
  }
}
