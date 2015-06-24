##Introduction:

This is a `ionic-toast` bower component which can be used with any Ionic framework's application.

[View Demo](http://rajeshwarpatlolla.github.io/ionic-toast-demo/demo/ "Demo") 


##Prerequisites.

1) node.js, bower and gulp.

##How to use:

1) In your project repository install the ionic-toast using bower

    bower install ionic-toast --save

This will install the latest version released.
    
2) Then you can see the following directory structure see in your project folder

Give the path of  `style.css, templates.js and ionic-datepicker.js` in your `index.html` file.

````html
<link href="lib/ionic-toast/dist/style.css" rel="stylesheet"> 
<!-- path to ionic/angularjs js -->
<script src="lib/ionic-toast/dist/ionic-toast.js"></script>
````    
    
3) In your application module inject the dependency `ionic-toast`, in order to work with the ionic toast.

````javascript
angular.module('mainModuleName', ['ionic', 'ionic-toast']){
 //
}
````

4) In your controller, inject 'ionicToast'.

````javascript
.controller('HomeCtrl', [$'scope', 'ionicToast', function($scope, ionicToast) {
  //code here
}])
````

5) I your controller you can use like below

````javascript
$scope.showToast = function(){
<!-- ionicToast.show(message, position, stick, time); -->
  ionicToast.show('This is a toast at the top.', 'top', true, 2500);
};
````

The arguments are as follows. The order fo arguments should not be changed.

a) `message` is the first argument, which takes any string message.

b) `position` is the second argument, which takes on of the three values(top, middle, bottom).

c) `stick` is the third argument, which takes either `true` or `false`.
- If the value is true, the toast will not close automatically. It will be closed once you click on the close button.
- If the value is true, the toast will close automatically, after the given time. 

d) `time` is the fourth argument, which takes time in milliseconds. If the value is greater than 5000, then it will be considered as 5000(5 seconds) only.

##Screen Shots:

Once you are successfully done with the above steps, you should be able to see the below screen shots.
I have used three buttons here. 

The first screen shot shows only the buttons before clicking on them.
Once you click on the button you should see the remaining screen shots.
 
![ionic-toast buttons](https://lh3.googleusercontent.com/Fc4fUe9_k6DktTMoNrpih_z5sSNoZs9XHuiyn4AcClw=w320-h568-no "ionic-toast buttons") 
![ionic-toast top](https://lh3.googleusercontent.com/VDO5p9Z9KH6tC7zpTTk6mbkchKKBA4VYWpZuqLp9Jzc=w320-h568-no "ionic-toast top")
![ionic-toast middle](https://lh3.googleusercontent.com/J7n3YRhRx68hIQmKLRJEKq6QfkxkAD7y_Jqc9eFDOtk=w320-h568-no "ionic-toast middle")
![ionic-toast bottom](https://lh3.googleusercontent.com/rkHPsKCKRYzOOVuPgnv7nD97AoYjx0WfzAtwlgHSsiI=w320-h568-no "ionic-toast bottom")

##Versions:

### 1) v0.1.0
The whole ionic-toast functionality has been implemented, and can be installed with  `bower install ionic-toast --save`

##License:
[MIT](https://github.com/rajeshwarpatlolla/ionic-toast/blob/master/LICENSE.MD "MIT")

##Contact:
gmail : rajeshwar.patlolla@gmail.com

github : https://github.com/rajeshwarpatlolla

twitter : https://twitter.com/rajeshwar_9032

facebook : https://www.facebook.com/rajeshwarpatlolla

paypal : rajeshwar.patlolla@gmail.com