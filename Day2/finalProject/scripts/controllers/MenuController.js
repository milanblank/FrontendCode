/**
 * Created by Milan.Stojiljkovic on 6/28/2017.
 */
hrApp.controller('MenuController', ['$scope', function($scope) {
    $scope.ActionList = [
        {
            label: "List Employees",
            url: "views/employees.html"
        },
        {
            label: "List Employees Again",
            url: "views/employees.html"

        }
    ];
}]);
