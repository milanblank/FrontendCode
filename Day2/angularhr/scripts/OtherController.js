/**
 * Created by Milan.Stojiljkovic on 6/28/2017.
 */
hrApp.controller('OtherController', ['$rootScope','$scope', function ($rootScope, $scope) {
    // $scope.title = 'Two Way Binding Demo';
    $scope.setTitle = function () {
        $scope.title = "Other title";
    };

}]);