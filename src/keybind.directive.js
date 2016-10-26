import { KeybindController } from './keybind.controller';

export function KeybindDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'A',
        replace: true,
        scope: {},
        bindToController: {
            bcKeys: '=',
            bcMethod: '&',
            bcKeys2: '=?',
            bcMethod2: '&?',
            bcKeys3: '=?',
            bcMethod3: '&?',
        },
        link: linkFunction,
        controller: KeybindController,
        controllerAs: 'vm',
    };

    return directive;


    /**
     * Link
     */
    function linkFunction($scope, $element, $attrs, $ctrl) {

        // Trigger the ctrl logic on every keydown event
        $element.bind('keydown', (event) => {
            $ctrl.checkAndFire(event);
        });

    }


}

