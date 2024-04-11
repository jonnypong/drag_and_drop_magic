import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
  }

  initialize() {
    this.isDragging = false
    this.xOffset = 0
    this.yOffset = 0
  }

  mousedown(event) {
    this.isDragging = true

    this.initialX = event.clientX - this.xOffset
    this.initialY = event.clientY - this.yOffset
    console.log("mouse down has been activated")

  }
  mouseup() {
    this.isDragging = false

    console.log("mouse up you\'re done with drag")
  }
  mousemove(event) {

    if (!this.isDragging) { return; }

    this.xOffset = event.clientX - this.initialX
    this.yOffset = event.clientY - this.initialY

    this.element.style.transform = `translate(${this.xOffset}px,${this.yOffset}px`
  }
}

