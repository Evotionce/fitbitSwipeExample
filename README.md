## Getting Started

To use the **Swipe Controller** in your own Project copy the [file](https://github.com/Evotionce/fitbitSwipeExample/blob/main/app/SwipeController.js). The [index.view](https://github.com/Evotionce/fitbitSwipeExample/blob/main/resources/index.view) gives an example of the swipe area. Those *id's* correlate with the variables *VIEWS* and *SWIPE_ELEMENT* of the **Swipe Controller**

*Example consumption:*
``` javascript
import { SwipeController } from "./SwipeController.js";

const VIEWS = [["leftNav","left"],["currentNav", "middle"], ["rightNav", "right"]]; // All html elements that need adjustment if the view changes
const START_VIEW_POINTER = 1; // Defines the elements that should be visible during initialization
const SWIPE_ELEMENT = "swipeArea"; // Id of the htmlElement that has pointer-events="all"

const swipeController = new SwipeController(VIEWS, START_VIEW_POINTER);
swipeController.initElement(SWIPE_ELEMENT);
```

## Debugging

1. Clone repository
2. Install packages with `npm i`
3. Start fitbit cli with `npx fitbit`
4. Login if required and connect phone `connect phone` and device `connect device`
5. Start app with `build-and-install`
