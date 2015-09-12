(function() {
    angular.module('app.directives.news')
        .directive('news', newsDirective);

    function newsDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/news/news.html',
            scope: {
                news: '='
            },
            controller: NewsController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    function NewsController() {
        var vm = this;
    }
})();
