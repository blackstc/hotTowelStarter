/* jshint -W117, -W030 */
(function() {
    'use strict';

    describe('Directive: people', function() {

        var element,
            vm;

        beforeEach(function() {
            bard.appModule('app.directives.people');
            bard.inject(
                '$compile',
                '$q',
                '$rootScope',
                '$state',
                '$templateCache'
            );
        });

        beforeEach(function() {
            var html = angular.element('<people></people>');
            $rootScope = $rootScope.$new();
            $templateCache.put('app/directives/people/people.html', '');
            element = $compile(html)($rootScope);

            $rootScope.$digest(element);

            vm = element.controller('people');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('Opens the people directive', function () {
            expect(element).to.be.ok();
            expect(vm).to.be.ok();
        });
    });
})();
