(function () {
    'use strict';

    angular
        .module('app.controllers.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['logger', 'messageCount', 'people', 'news'];

    /* @ngInject */
    function DashboardController(logger, messageCount, people, news) {
        var vm = this;

        vm.init = init;
        vm.messageCount = messageCount;
        vm.people = people;
        vm.news = news;

        function init() {
            logger.info('Activated Dashboard View');
        }

        vm.title = 'Dashboard';
    }
})();
