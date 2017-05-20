define(['angular','router','services/routeResolver'], function (angular) {
  var app = angular.module('myApp', ['ui.router','routeResolverServices']);

  app.init = function () {
    angular.bootstrap(document, ['myApp']);
  };

  app.config(function($stateProvider, $locationProvider,routeResolverProvider) {
    
    var route = routeResolverProvider.route;

    $stateProvider
      .state('home', {
        url: "/home",
        template: "<p>Hello {{name}}. Would you like to... <a href='#lazy'>load lazy</a>?</p>",
        controller: route.resolve('home')
      })
      .state('lazy', {
        url: "/lazy",
        controller: 'lazyCtrl'
      });
  
    //$locationProvider.html5Mode(true);
  });
  
  // app.controller('mainCtrl', function($scope) {
  //   $scope.name = 'World';
  // });
  
  return app;
});
