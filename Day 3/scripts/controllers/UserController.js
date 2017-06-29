/**
 * Created by Milan.Stojiljkovic on 6/29/2017.
 */
hrApp.controller('UserController', ['$scope', '$http', '$location', '$routeParams', 'UserService',
    function ($scope, $http, $location, $routeParams,UserService) {

        $scope.user = {}; // Employee list
        $scope.tableShow = false;

        $scope.listUsers = UserService;
        $scope.back = function () {
            $location.path($routeParams.main);
        };
        $scope.reset = function () {
            $scope.user = {};
        };
        $scope.save = function () {
            UserService.push(angular.copy($scope.user));
            $scope.listUsers = UserService;
        };
        $scope.show = function () {
            if($scope.tableShow){
                $scope.tableShow = false;
            } else {
                $scope.tableShow = true;
            }
        };


    }]);