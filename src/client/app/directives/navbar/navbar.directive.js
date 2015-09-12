(function() {
    'use strict';

    angular
        .module('app.directives.navbar')
        .directive('navBar', NavBar);

    /* @ngInject */
    function NavBar () {
        var directive = {
            bindToController: true,
            controller: NavBarController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '='
            },
            templateUrl: 'app/directives/navbar/navbar.html'
        };

        /* @ngInject */
        function NavBarController() {
            var vm = this;
        }

        return directive;
    }
})();
