export class KeybindController {

    constructor() {}


    /**
     * If the key matches a key code, fire the appropriate event
     *
     * @param {Object} event
     */
    checkAndFire(event) {
        const DELAY = 500;

        const key = (typeof event.which === 'undefined' ?
            event.keyCode : event.which).toString();

        if (this.bcKeys && this.bcKeys.length > 0) {
            if (this._triggerMatchesInput(key, this.bcKeys)) {
                this.bcMethod()(event);
            }
        }

        if (this.bcKeys2 && this.bcKeys2.length > 0) {
            if (this._triggerMatchesInput(key, this.bcKeys2)) {
                this.bcMethod2()(event);
            }
        }

        if (this.bcKeys3 && this.bcKeys3.length > 0) {
            if (this._triggerMatchesInput(key, this.bcKeys3)) {
                this.bcMethod3()(event);
            }
        }
    }


    /**
     * Determine if a key is found in an array of keys
     *
     * @param {String} key
     * @param {Array} keys
     * @return {Bool} found
     */
    _triggerMatchesInput(key, keys) {
        // Check to see if the key matches one in our array
        const correctKeypress = keys.findIndex((item) => {
            return key === item;
        });

        return correctKeypress >= 0 ? true : false;
    }

}

