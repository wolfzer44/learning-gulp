(function() {
  'use strict';

  angular
    .module('gulp.controllers', [])
    .controller('gulpCtrl', gulpCtrl);

    gulpCtrl.$inject = ['$scope'];

    function gulpCtrl($scope) {
      var vm = this;
      vm.text = "Hello World";
    };

}());
