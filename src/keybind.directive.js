import { KeybindController } from './keybind.controller';

export function KeybindDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'A',
        replace: true,
        scope: {},
        bindToController: {
        },
        link: linkFunction,
        controller: KeybindController,
        controllerAs: 'vm',
    };

    return directive;


    /**
     * Link
     */
    function linkFunction($scope, $element, $attrs, vm) {

    }

}


