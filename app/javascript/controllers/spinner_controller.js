import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="spinner"
export default class extends Controller {
  static targets = ["spinner"];

  show() {
    // Simply make the spinner that is initially hidden visible when the form starts submitting
    this.spinnerTarget.classList.remove("invisible");
  }
}
