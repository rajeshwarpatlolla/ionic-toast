'use strict';
angular.module('ionic-toast.provider', [])

  .provider('ionicToast', function () {

    var defaultConfig = {
      position: 'top',
      showClose: false,
      theme: 'dark',
      timeOut: 4000
    };

    this.configure = function (inputObj) {
      angular.extend(defaultConfig, inputObj);
    };


    this.$get = ['$compile', '$document', '$interval', '$rootScope', '$templateCache', '$timeout',
      function ($compile, $document, $interval, $rootScope, $templateCache, $timeout) {

        var provider = {};
        var $scope = $rootScope.$new();
        var toastTimer = defaultConfig.timeOut;

        var defaultScope = {
          toastClass: '',
          toastMessage: '',
          toastStyle: {
            display: 'none',
            opacity: 0
          }
        };

        var toastPosition = {
          top: 'ionic_toast_top',
          middle: 'ionic_toast_middle',
          bottom: 'ionic_toast_bottom'
        };

        var toastTemplate = $compile($templateCache.get('ionic-toast/templates/ionic-toast.html'))($scope);

        $scope.ionicToast = defaultScope;

        $document.find('body').append(toastTemplate);

        var toggleDisplayOfToast = function (display, opacity, callback) {
          $scope.ionicToast.toastStyle = {
            display: display,
            opacity: opacity
          };
          $scope.ionicToast.toastStyle.opacity = opacity;
          callback();
        };

        $scope.hideToast = function () {
          toggleDisplayOfToast('none', 0, function () {
          });
        };

        provider.show = function (message, position, isSticky, duration) {

          if (!message) return;
          position = position || defaultConfig.position;
          duration = duration || defaultConfig.timeOut;

          if (duration > 10000) duration = 10000;

          angular.extend($scope.ionicToast, {
            toastClass: toastPosition[position] + ' ' + (isSticky ? 'ionic_toast_sticky' : ''),
            toastMessage: message
          });

          toggleDisplayOfToast('block', 1, function () {
            if (isSticky)  return;

            toastTimer = $timeout(function () {
              $scope.hideToast();
            }, duration);
          });
        };

        provider.hide = function () {
          $scope.hideToast();
        };

        return provider;

      }
    ];
  });