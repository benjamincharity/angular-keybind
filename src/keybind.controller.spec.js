describe('KeybindController', () => {
    let $compile;
    let $rootScope;
    const KEY_ENTER = '13';
    const KEY_SHIFT = '16';
    const KEY_SPACE = '32';
    const KEY_SLASH = '191';
    const KEY_PERIOD = '190';

    // Include the module
    beforeEach(angular.mock.module('bc.AngularKeybind'));

    // Inject
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));


    describe(`keypress`, () => {
        let $scope;
        let element;
        let $ctrl;
        const THREE_DAYS = 3;

        beforeEach(() => {
            $scope = $rootScope.$new();
            $scope.myMethod = (event) => {};
            $scope.myMethod2 = (event) => {};
            $scope.myMethod3 = (event) => {};
            element = angular.element(`
                <input type="text"
                    bc-keybind
                    bc-keys="['13', '16']"
                    bc-method="myMethod"
                    bc-keys2="['32']"
                    bc-method2="myMethod2"
                    bc-keys3="['191', '190']"
                    bc-method3="myMethod3"
                >
            `);
            element = $compile(element)($scope);
            $scope.$apply();
            $ctrl = element.isolateScope().$ctrl;

            spyOn($scope, 'myMethod');
            spyOn($scope, 'myMethod2');
            spyOn($scope, 'myMethod3');
        });

        describe('for method', () => {

            it('should trigger the method on correct keypress', () => {
                element.triggerHandler({
                    type: 'keydown',
                    which: KEY_ENTER,
                });

                expect($scope.myMethod).toHaveBeenCalled();

                const event = $scope.myMethod.calls.allArgs()[0][0];
                const actual = event.which.toString();
                const expected = KEY_ENTER;
                expect(actual).toEqual(expected);
            });

            it('should NOT trigger the method on incorrect keypress', () => {
                element.triggerHandler({
                    type: 'keydown',
                    which: KEY_SLASH,
                });

                const actual = $scope.myMethod.calls.any();
                expect(actual).toBe(false);
            });

        });

        describe('for method2', () => {

            it('should trigger the method on correct keypress', () => {
                element.triggerHandler({
                    type: 'keydown',
                    which: KEY_SPACE,
                });

                expect($scope.myMethod2).toHaveBeenCalled();

                const event = $scope.myMethod2.calls.allArgs()[0][0];
                const actual = event.which.toString();
                const expected = KEY_SPACE;
                expect(actual).toEqual(expected);
            });

            it('should NOT trigger the method on incorrect keypress', () => {
                element.triggerHandler({
                    type: 'keydown',
                    which: KEY_SLASH,
                });

                const actual = $scope.myMethod2.calls.any();
                expect(actual).toBe(false);
            });

        });

        describe('for method3', () => {

            it('should trigger the method on correct keypress', () => {
                element.triggerHandler({
                    type: 'keydown',
                    which: KEY_PERIOD,
                });

                expect($scope.myMethod3).toHaveBeenCalled();

                const event = $scope.myMethod3.calls.allArgs()[0][0];
                const actual = event.which.toString();
                const expected = KEY_PERIOD;
                expect(actual).toEqual(expected);
            });

            it('should NOT trigger the method on incorrect keypress', () => {
                element.triggerHandler({
                    type: 'keydown',
                    which: KEY_ENTER,
                });

                const actual = $scope.myMethod3.calls.any();
                expect(actual).toBe(false);
            });

        });

    });

});

