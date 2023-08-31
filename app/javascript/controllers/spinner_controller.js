import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="spinner"
export default class extends Controller {
  static targets = ["spinner"];
  show() {
    this.spinnerTarget.classList.remove("invisible");
  }
}
