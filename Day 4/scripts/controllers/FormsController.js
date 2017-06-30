/**
 * Created by Milan.Stojiljkovic on 6/30/2017.
 */
hrApp.controller('FormsController', ['$scope', function ($scope) {
    $scope.userType = 'guest';
    $scope.check;

    $scope.validate = function () {
        if ($scope.myForm.$valid)
            $scope.check = 'Success!';
        else
            $scope.check = 'Invalid input!';
    }
}]);