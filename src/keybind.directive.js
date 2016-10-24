import { KeybindController } from './keybind.controller';

export function KeybindDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'A',
        replace: true,
        scope: {},
        bindToController: {
            bcMethod1: '&',
            bcKeys1: '@',
            bcMethod2: '&',
            bcKeys2: '@',
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
        $element.bind('keydown keypress', (event) => {
            const key = typeof event.which === 'undefined' ? event.keyCode : event.which;
            console.log('key: ', key);
            //const correctKeypress = bcKeys1.filter((item) => {

            //});
            /*
             *if (event.which === 13) {
             *    $scope.$apply(() => {
             *        $scope.$eval($attrs.myEnter);
             *    });
             *    event.preventDefault();
             *}
             */
        });
    }

}


