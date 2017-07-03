hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory',
    'ManagerService', 'EmployeeService', 'EmployeeAddService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, ManagerService, EmployeeService , EmployeeAddService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        $scope.employee = {};
        $scope.managers = [];
        $scope.departments = [];
        $scope.jobs =[];


        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        $http.get(CommonResourcesFactory.findAllJobsUrl)
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });
        $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
            .success(function (data, status, headers, config) {
                $scope.departments = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });

        var findManagerFnt = function (employees) {
            for(var i in employees.data){
                var found = false;
                if(employees.data[i].managerId != null ){
                    for(var j in $scope.managers){
                        if (employees.data[i].managerId.employeeId == $scope.managers[j].employeeId){
                            found = true;
                        }
                    }
                    if (!found)  {
                        $scope.managers.push(employees.data[i].managerId);
                    }
                }

            }
        };
        EmployeeAddService.findManagers().then(findManagerFnt);


        /**
         * Reset form
         */
        $scope.back = function () {
            $location.url('/employeeList');
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.save = function (updateEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: updateEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeList/');
                    //$location.url('/employeeEdit/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);