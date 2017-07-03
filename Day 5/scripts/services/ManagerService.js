/**
 * Created by Milan.Stojiljkovic on 7/3/2017.
 */
hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findManagers: function (findManagerFnt) {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl);



            }
        }
    }]
);