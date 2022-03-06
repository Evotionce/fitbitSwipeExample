import { SwipeController } from "./SwipeController.js";

const VIEWS = [["leftNav","left"],["currentNav", "middle"], ["rightNav", "right"]];
const START_VIEW_POINTER = 1;
const SWIPE_ELEMENT = "swipeArea";

const swipeController = new SwipeController(VIEWS, START_VIEW_POINTER);
swipeController.initElement(SWIPE_ELEMENT);