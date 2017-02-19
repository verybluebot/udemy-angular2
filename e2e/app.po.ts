import { browser, element, by } from 'protractor';

export class HamstersBookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hb-root h1')).getText();
  }
}
