(function() {
    'use strict';

    angular
        .module('app.controllers.shell')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['config', 'logger'];
    /* @ngInject */
    function ShellController(config, logger) {
        var vm = this;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.navline = {
            title: config.appTitle,
            text: 'Blog Post Bidder',
            link: 'http://www.google.com'
        };

        init();

        function init() {
            logger.success(config.appTitle + ' loaded!', null);
        }
    }
})();
