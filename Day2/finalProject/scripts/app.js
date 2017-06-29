/**
 * Created by Milan.Stojiljkovic on 6/28/2017.
 */
var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/employeeslist', {
            templateUrl: 'views/employeelist.html',
            controller: 'EmployeeListController'
        }).when('/employeeview/:employeeid', {
            templateUrl: 'views/employeeview.html',
            controller: 'EmployeeViewController'
        }).otherwise({
            redirectTo: '/'
        });
    }]);