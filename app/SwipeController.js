import * as document from "document";



export class SwipeController {
  SWIPE_THRESHOLD = 40;
  views = [];
  currentViewPointer = -1;
  y = 0;
  x = 0;

  constructor(elementPerViews, startIndex) {
    this.views = elementPerViews;
    this.currentViewPointer = startIndex;
    console.log(`Swipe Controller initialized with ${JSON.stringify(this.views)} and pointer ${this.currentViewPointer}`)
  }

  initElement(swipeElement) {
    let swipeArea = document.getElementById("swipeArea");
 
    swipeArea.onmousedown = this.onMouseDown.bind(this); 
    swipeArea.onmouseup = this.onMouseUp.bind(this);
  }

  onMouseDown(evt) {
    // y = evt.screenY; // incase swipe down/up is relevant
    this.x = evt.screenX;
  }

  onMouseUp(evt) {
    // let yMove = evt.screenY-y; // incase swipe down/up is relevant
    let xMove = evt.screenX-this.x;
    if (xMove< this.SWIPE_THRESHOLD * -1) {
      this.moveToView(-1) // Swipe left
    };

    if (xMove> this.SWIPE_THRESHOLD) {
      this.moveToView(1) // Swipe right
    };

  }

  moveToView(amount) {
    if (!this.validMoveToViewBy(amount)) {
      return
    }

    // First hide original view
    this.switchElementFromTo("show","hide");

    this.currentViewPointer += 1 * amount;
    // Then show new view
    this.switchElementFromTo("hide","show");

    console.log(`Swipe ${amount} with new position: ${this.currentViewPointer}`)
  }

  switchElementFromTo(originalSubClass, replacedSubClass) {
    if (!this.views[this.currentViewPointer]) {
      console.log(`Index out of bounds ${this.currentViewPointer}`);
      return;
    }
    for (let elementId of this.views[this.currentViewPointer]) {
      const element = document.getElementById(elementId);
      element.class = element.class.replace(originalSubClass,replacedSubClass);
    }
  }

  // Switch currentViewPointer by given amount and return true, if boundaries are reached set boundary value and return false
  validMoveToViewBy(amount) {
    var testViewPointer = this.currentViewPointer + amount;
    if (testViewPointer < 0) {
      return false;
    }
    if (testViewPointer >= this.views.length) {
      return false;    
    }
    return true;
  }

}
