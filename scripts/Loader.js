import { Common, HIDDEN_SCREEN, VISIBLE_SCREEN } from './Common.js';

const LOAD_CURRENT_ID = 'js-loading-screen-current';
const LOAD_TOTAL_ID = 'js-loading-screen-total';
const LOADER_ELEMENT_ID = 'js-loading-screen';

export const DATALOADED_EVENT_NAME = 'dataLoaded'

class Loader extends Common {
    constructor() {
        super(LOADER_ELEMENT_ID);
        this.bindToElements();
        this.clearFlags();
    }

    bindToElements() {
        this.currentElement = this.bindToElement(LOAD_CURRENT_ID);
        this.totalElement = this.bindToElement(LOAD_TOTAL_ID);
    }

    loadImage(imageUrl) {
        this.changeScreenVisibility(this.element, VISIBLE_SCREEN);
        this.totalCounter++;
        const image = new Image();

        image.src = imageUrl;
        image.addEventListener('load', event => this.itemLoaded(event), false);
        return image;
    }

    itemLoaded(event) {
        event.target.removeEventListener(event.type, this.itemLoaded, false);
        this.loadedCounter++;
        this.currentElement.textContent = this.loadedCounter;
        this.totalElement = this.totalCounter;

        if (this.loadedCounter === this.totalCounter) {
            this.clearFlags();
            this.changeScreenVisibility(this.element, DATALOADED_EVENT_NAME);
            window.dispatchEvent(new CustomEvent('dataLoaded'))
        }
    }
    clearFlags() {
        this.isLoaded = true;
        this.loadedCounter = 0;
        this.totalCounter = 0;
    }
}

export const loader = new Loader();