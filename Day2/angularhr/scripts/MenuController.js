/**
 * Created by Milan.Stojiljkovic on 6/28/2017.
 */
hrApp.controller('MenuController', ['$scope', function($scope) {
    $scope.demoActionList = [
        {
            label: "OtherScope",
            url: "views/childscope.html"
        },
        {
            label: "DemoMath",
            url: "views/demomath.html"

        }
    ];
}]);
