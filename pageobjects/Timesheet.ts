import { Page, Locator } from "@playwright/test";

export class Timesheet {
  tableFrame;
  businessUnitFrame;
  projectIdFrame;

  timeReportingCodeOption:Locator;

  businessUnitButton: Locator;

  projectIdButton: Locator;

  //activityId: Locator;
 // activityIdOptions: Locator;

  constructor(public page: Page) {
    this.tableFrame = page.frameLocator("#ptifrmtgtframe");
   
    this.timeReportingCodeOption = this.tableFrame.locator('select[name="TRC$0"]')

    this.businessUnitButton = this.tableFrame.locator('[name="BUSINESS_UNIT_PC$prompt$0"]')
    
    this.businessUnitFrame = page.frameLocator('iframe[id^="ptModFrame_0"]');

    this.projectIdButton = this.tableFrame.locator('[name="AX_PROJECT_ID$prompt$0"]')
    
    this.projectIdFrame = page.frameLocator('iframe[id^="ptModFrame_0"]');





















   

    




   // this.projectIdOptions = 

   // this.activityIdOptions =
  }

  async selectTRC(value: string) {
    await this.timeReportingCodeOption.selectOption({ value });
  }

  lookupBussinessUnitPC(text: string): Locator {
  return this.businessUnitFrame.getByText(text, { exact: true });
}

async selectLookupOptionBussinessUnitPC(text: string) {
  await this.businessUnitButton.click();
  await this.lookupBussinessUnitPC(text).click();
}

lookupProjectID(text: string): Locator {
  return this.businessUnitFrame.getByText(text, { exact: true });
}

async selectLookupOptionProjectID(text: string) {
  await this.businessUnitButton.click();
  await this.lookupBussinessUnitPC(text).click();
}



















/*

  async selectTimeReportingCode(labelText: string) {
    await this.timeReportingCode.selectOption({ label: labelText });
  }
  optionBusinessUnit(value: string): Locator {
    return this.businessUnitFrame.getByRole("link", { name: value });
    
  }

  async selectBusinessUnitOption(value: string) {
  await this.lookupSearchInput.fill(value);
  await this.lookupSearchButton.click();
  await this.optionByText(value).click();
}



  async fillWeekdaysWith8(row = 0) {
    for (let day = 2; day <= 6; day++) {
      const cell = this.tableFrame.locator(`[name="QTY_DAY${day}$${row}"]`);
      await cell.fill("8");
      await cell.press("Tab");
    }
  }*/
}
