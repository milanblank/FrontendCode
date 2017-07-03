/**
 * Created by Milan.Stojiljkovic on 7/3/2017.
 */
hrApp.service('EmployeeAddService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
    return {
        findJobs: function () {
            return $http.get(CommonResourcesFactory.findAllJobsUrl);

        },
        findDepartments: function () {
            return $http.get(CommonResourcesFactory.findAllDepartmentsUrl);

        },
        findManagers: function () {
            return $http.get(CommonResourcesFactory.findAllEmployeesUrl);
        }
    }}
]);
