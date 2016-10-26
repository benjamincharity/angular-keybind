export class KeybindController {

    constructor() {
    }




    /**
     * If the key matches a key code, fire the appropriate event
     *
     * @param {Object} event
     */
    checkAndFire(event) {
        const DELAY = 500;

        const key = (typeof event.which === 'undefined' ?
            event.keyCode : event.which).toString();

        if (this.bcKeys1 && this.bcKeys1.length > 0) {
            if (this._triggerMatchesInput(key, this.bcKeys1)) {
                this.bcMethod1()(event);
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
        const correctKeypress = keys.find((item) => {
            return key === item;
        });

        return correctKeypress ? true : false;
    }


}

