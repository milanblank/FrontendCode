/**
 * Created by Milan.Stojiljkovic on 6/28/2017.
 */
hrApp.controller('ScopesController', ['$rootScope','$scope', function ($rootScope, $scope) {
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'views/childscope.html';
    $scope.resetFirstVariable = function () {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function (val) {
        $scope.firstVariable = val;
    };
}]);