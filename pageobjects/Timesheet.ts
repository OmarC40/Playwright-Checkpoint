import { Page, Locator } from "@playwright/test";

export class Timesheet {
  frame;

  timeReportingCode: Locator;

  businessUnitPc: Locator;
  businessUnitPcLookup: Locator;

  projectId: Locator;
  projectIdLookup: Locator;

  activityId: Locator;
  activityIdLookup: Locator;

  constructor(public page: Page) {
    this.frame = page.frameLocator("#ptifrmtgtframe");

    // Replace ONLY these selectors with the ones from your Inspector
    this.timeReportingCode = this.frame.locator("PUT_TRC_DROPDOWN_SELECTOR_HERE");

    this.businessUnitPc = this.frame.locator('input[name="BUSINESS_UNIT_PC$0"]');
    this.projectId = this.frame.locator('input[name="PROJECT_ID$0"]');
    this.activityId = this.frame.locator('input[name="ACTIVITY_ID$0"]');

    // Lookup (magnifier) next to each input

    //page.frameLocator('#ptModFrame_0').getByText('APSYS', { exact: true })
    //page.frameLocator('#ptModFrame_1').getByRole('link', { name: '04681' })

    // If your DOM is different, just replace these 3 lookup locators with Inspector ones.
    this.businessUnitPcLookup = this.businessUnitPc.locator('xpath=ancestor::td[1]//a[contains(@title,"Look Up") or contains(@aria-label,"Look Up")]')

    this.projectIdLookup = this.projectId.locator('xpath=ancestor::td[1]//a[contains(@title,"Look Up") or contains(@aria-label,"Look Up")]')

    this.activityIdLookup = this.activityId.locator('xpath=ancestor::td[1]//a[contains(@title,"Look Up") or contains(@aria-label,"Look Up")]')
  }

  async fillWeekdaysWith8(row = 0) {
    for (let day = 2; day <= 6; day++) {
      const cell = this.frame.locator(`[name="QTY_DAY${day}$${row}"]`);
      await cell.fill("8");
      await cell.press("Tab");
    }
  }

  async selectTimeReportingCode(labelText: string) {
    await this.timeReportingCode.selectOption({ label: labelText });
  }

  async lookupAndSelect(lookupIcon: Locator, valueToPick: string) {
    const popupPromise = this.page.waitForEvent("popup");
    await lookupIcon.click();

    const popup = await popupPromise;
    await popup.waitForLoadState();

    await popup.locator('input[type="text"]').first().fill(valueToPick);
    await popup
      .locator('button:has-text("Search"), input[value="Search"]')
      .first()
      .click();
    await popup.locator(`a:has-text("${valueToPick}")`).first().click();

    await this.page.bringToFront();
  }

  async setBusinessUnitPC(value: string) {
    await this.lookupAndSelect(this.businessUnitPcLookup, value);
  }

  async setProjectId(value: string) {
    await this.lookupAndSelect(this.projectIdLookup, value);
  }

  async setActivityId(value: string) {
    await this.lookupAndSelect(this.activityIdLookup, value);
  }
}
