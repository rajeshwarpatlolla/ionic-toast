'use strict';
angular.module('ionic-toast')

  .run(['$templateCache', function ($templateCache) {
    var toastTemplate = '<div class="ionic_toast ionic_toast_top" id="ionic_toast" ng-class="ionicToast.toastClass" ng-style="ionicToast.toastStyle">' +
      '<div class="toast_section">' +
      '<span class="ionic_toast_close" ng-click="hideToast()">' +
      '<i class="ion-android-close toast_close_icon"></i>' +
      '</span>' +
      '<span ng-bind-html="ionicToast.toastMessage"></span>' +
      '</div>' +
      '</div>';

    $templateCache.put('ionic-toast/templates/ionic-toast.html', toastTemplate);
  }]);
