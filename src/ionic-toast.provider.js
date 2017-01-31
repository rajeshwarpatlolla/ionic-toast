'use strict';
angular.module('ionic-toast.provider', [])

  .provider('ionicToast', function () {

    var defaultConfig = {
      position: 'top',
      showClose: false,
      theme: 'dark',
      timeOut: 4000,
      backgroundToast: 'rgba(0, 0, 0, 0.75)'
    };

    this.configure = function (inputObj) {
      angular.extend(defaultConfig, inputObj);
    };

    function validateColor(color) {
      var regex = /^(?:#(?:[A-Fa-f0-9]{3}){1,2}|(?:rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}|hsl[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*|(?:rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}|hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,)\s*0*(?:\.\d+|1(?:\.0*)?)\s*)[)])$/gm;
      return regex.exec(color);
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

        var toggleDisplayOfToast = function (display, opacity, background, callback) {
          $scope.ionicToast.toastStyle = {
            display: display,
            opacity: opacity,
            'background-color': background
          };
          $scope.ionicToast.toastStyle.opacity = opacity;
          callback();
        };

        $scope.hideToast = function () {
          toggleDisplayOfToast('none', 0, null, function () {
          });
        };

        provider.show = function (message, position, isSticky, duration, background) {

          if (!message) return;
          position = position || defaultConfig.position;
          duration = duration || defaultConfig.timeOut;

          if (duration > 10000) duration = 10000;

          if (!validateColor(background)) {
            background = defaultConfig.backgroundToast;
          }
          angular.extend($scope.ionicToast, {
            toastClass: toastPosition[position] + ' ' + (isSticky ? 'ionic_toast_sticky' : ''),
            toastMessage: message
          });

          toggleDisplayOfToast('block', 1, background, function () {
            if (isSticky)  return;
            $timeout.cancel(toastTimer);
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
