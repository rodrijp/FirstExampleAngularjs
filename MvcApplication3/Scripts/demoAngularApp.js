angular.module('demoApp', []).
  config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
          when('/Message', { templateUrl: 'content/demoAngular/Message.html', controller: demoMessageController }).
          when('/MessageSended', { templateUrl: 'content/demoAngular/MessageSended.html', controller: demoMessageSendedController }).
          when('/MessageConfig', { templateUrl: 'content/demoAngular/MessageConfig.html', controller: demoMessageConfigController }).
          otherwise({ redirectTo: '/Message' });
  }]);