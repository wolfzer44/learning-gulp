(function() {
  'use strict';

  angular
    .module('gulp', ['gulp.controllers'])
    .run(run);

    run.$inject = ['$log'];
    function run($log) {
      $log.debug('inital project!!!');
    };

}())
