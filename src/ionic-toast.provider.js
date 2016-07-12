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

        //console.log(defaultConfig);
        var provider = {};
        var $scope = $rootScope.$new();
        var toastTimer = defaultConfig.timeOut;

        var defaultScope = {
          toastClass: '',
          toastMessage: '',
          toastStyle: {
            // display: 'none',
            // opacity: 0
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

        $scope.hideToast = function () {
          delete $scope.ionicToast.toastStyle.transform;
          $timeout(function(){
            delete $scope.ionicToast.toastStyle.transition;
          },600);
        };

        provider.show = function (message, position, isSticky, duration, customClass) {
          //console.log(message, position, isSticky, duration, defaultConfig);

          if (!message) return;
          position = position || defaultConfig.position;
          duration = duration || defaultConfig.timeOut;

          if (duration > 10000) duration = 10000;

          angular.extend($scope.ionicToast, {
            toastClass: toastPosition[position] + ' ' + (isSticky ? 'ionic_toast_sticky' : ''),
            toastMessage: message
          });
          
          element = document.getElementById("ionic_toast");
          element.className = 'ionic_toast ' + toastPosition[position] + ' ' + (isSticky ? 'ionic_toast_sticky' : '');
          if(customClass)
            element.className += " " + customClass;

          $timeout(function () {
            $scope.ionicToast.toastStyle = {
              transform: "translate3d(0,0,0)",
              transition: ".5s transform"
            };
          }, 30);

          $timeout(function () {
            $scope.hideToast();
          }, duration)

        };

        return provider;

      }
    ];
  });