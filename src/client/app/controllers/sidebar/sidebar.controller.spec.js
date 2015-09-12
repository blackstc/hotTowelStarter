/* jshint -W117, -W030 */
describe('Controller: sidebar', function() {
    var controller;
    var views = {
        dashboard: 'app/controllers/dashboard/dashboard.html',
        customers: 'app/customers/customers.html'
    };

    beforeEach(function() {
        module('app.controllers.sidebar', bard.fakeToastr);
        bard.inject(
            '$controller',
            '$httpBackend',
            '$location',
            '$rootScope',
            '$state',
            'routerHelper'
        );
    });
});
