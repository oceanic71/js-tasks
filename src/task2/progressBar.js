/**
 * Created by Zorin on 24.07.2017.
 */

export default class ProgressBar {

  constructor(barNode, labelNode, value) {
    this.htmlBar = barNode;
    this.htmlLabel = labelNode;
    this.currentValue = value;
    this.init();
  }

  init() {
    this.htmlLabel.textContent = this.currentValue.toFixed(1) + "%";
    this.htmlBar.style.width = this.currentValue.toFixed(1) + "%";
  }
  get value() {
    return this.currentValue;
  }
  set value(value) {
    if (typeof value !== "number") return;

    this.currentValue = value;
    if (value > 100) {
      this.currentValue -= 100;
    }

    this.htmlLabel.textContent = this.currentValue.toFixed(1) + "%";
    this.htmlBar.style.width = this.currentValue.toFixed(1) + "%";
  }

}