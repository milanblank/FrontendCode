hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'EmployeeAddService',
    function($scope, $http, $location, CommonResourcesFactory, EmployeeAddService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1
        var employeeNew = {};

        $scope.managers = [];

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

        var promise1 = EmployeeAddService.findJobs();
        var promise2 = EmployeeAddService.findDepartments();
        EmployeeAddService.findManagers().then(findManagerFnt);


        promise1.then(
            function (result) {
                $scope.jobs = result.data;
            }
        );

        promise2.then(
            function (result) {
                $scope.departments = result.data;
            }
        );


        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);