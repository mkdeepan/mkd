'use strict';

define(['http://localhost/mywork/mkd_html/app/app.js'], function (app) {

    //This controller retrieves data from the customersService and associates it with the $scope
    //The $scope is ultimately bound to the customers view due to convention followed by the routeResolver
    app.controller('homeController', ['$scope', function ($scope) {
        //Controller code goes here    
        alert("home controller");
        $scope.name = "Deepan";
     }]);
});
