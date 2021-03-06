/* jshint -W117, -W030 */
describe('DashboardController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.controllers.dashboard', 'app.resolve.messageCount',
            'app.resolve.people', 'app.resolve.news');

        bard.inject('$controller', '$log', '$q', '$rootScope',
            'messageCount', 'people', 'news');
    });

    beforeEach(function () {
        controller = $controller('DashboardController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Dashboard controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Dashboard', function () {
                expect(controller.title).to.equal('Dashboard');
            });

            it('should have logged "Activated"', function() {
                controller.init();
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have news', function () {
                expect(controller.news).to.not.be.empty;
            });

            it('should have at least 1 person', function () {
                expect(controller.people).to.have.length.above(0);
            });

            it('should have people count of 5', function () {
                expect(controller.people).to.have.length(7);
            });
        });
    });
});
