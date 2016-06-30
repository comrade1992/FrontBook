// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
'use strict';

var FrontbookModule = angular.module('FrontBookApp', ['ionic','ionic.service.core', 'FrontBookApp.controllers', 'FrontBookApp.services']);

var services = angular.module('FrontBookApp.services', []);

FrontbookModule
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar ab  ove the keyboard
    // for form inputs)

    /*var push = new Ionic.Push({
      "debug": true
    });

    push.register(function(token) {
      console.log("Device token:",token.token);
    });*/

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.aboutUs',{
      url: '/aboutUs',
      views: {
        'menuContent': {
          templateUrl: 'templates/aboutUs.html',
          controller: 'AboutUsCtrl'
        }
      }
    })

    .state('app.about',{
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
          controller: 'AboutCtrl'
        }
      }
    })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.teams', {
      url: '/teams',
      views: {
        'menuContent': {
          templateUrl: 'templates/teams.html',
          controller: 'TeamsCtrl'
        }
      }
    })

  .state('app.team', {
      url: '/team/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/team.html',
          controller: 'TeamCtrl'
        }
      }
    })

    .state('app.people', {
      url: '/people',
      views: {
        'menuContent': {
          templateUrl: 'templates/people.html',
          controller: 'PeopleCtrl'
        }
      }
    })

    .state('app.employee', {
      url: '/employeeProfile/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/employeeProfile.html',
          controller: 'EmployeeCtrl'
        }
      }
    })

    .state('app.admin', {
      url: '/admin',
      views: {
        'menuContent': {
          templateUrl: 'templates/admin.html',
          controller: 'AdminCtrl'
        }
      }
    })

    .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/teams');
});
