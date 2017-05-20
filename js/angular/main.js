// Configuration Options
require.config({
    baseUrl: 'app',    
    // paths: maps ids with paths (no extension)
    paths: {
        'angular': 'https://code.angularjs.org/1.3.5/angular',
        'router': 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router',
    },
    // shim: makes external libraries reachable
    shim: {
      angular: {
          exports : 'angular'
      },      
      router: ['angular']
    }
});

// Angular Bootstrap 
require(['app'], function (app) {
  // initialisation code defined within app.js
  app.init();
});