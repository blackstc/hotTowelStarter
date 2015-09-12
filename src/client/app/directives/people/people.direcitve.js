(function() {
    angular.module('app.directives.people')
        .directive('people', peopleDirective);

    function peopleDirective () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/people/people.html',
            scope: {
                people: '='
            },
            controller: PeopleController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    PeopleController.$inject = [];

    function PeopleController() {
        var vm = this;

        vm.clickPerson = clickPerson;

        function clickPerson(person) {
            window.alert(JSON.stringify(person));
        }
    }
})();
