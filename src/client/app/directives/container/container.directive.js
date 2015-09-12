(function() {
    angular.module('app.directives.container')
        .directive('container', containerDirective);

    function containerDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/container/container.html',
            scope: {
                title: '@',
                color: '@'
            },
            controller: ContainerController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: true
        };
    }

    function ContainerController() {
        var vm = this;

        vm.wColor = 'w' + vm.color;
        vm.showContent = true;
    }
})();
