/**
 * Created by Milan.Stojiljkovic on 6/28/2017.
 */
hrApp.controller('DescriptionController', ['$rootScope','$scope', function ($rootScope, $scope) {
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function () {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function (val) {
        $scope.firstVariable = val;
    };
    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function()
    {
        if($scope.descriptionShow){
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }
    };
}]);