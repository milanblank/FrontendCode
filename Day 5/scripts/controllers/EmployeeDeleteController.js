/**
 * Created by Milan.Stojiljkovic on 7/3/2017.
 */
hrApp.controller('EmployeeDeleteController', ['$scope', '$http', '$routeParams', '$location', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, EmployeeService) {


        // Handle a promise
        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        $scope.back = function () {
            $location.url('/employeeList');
        }
        $scope.delete = function (deleteEmployee) {
            $http({url: CommonResourcesFactory.deleteEmployeeUrl, method: 'DELETE', data: deleteEmployee,
            headers: {'Content-Type': 'application/json'}})
                .success(function (data) {
                    $scope.employee = {};
                    $location.url('/employeeList/');
                });
        };
    }]);