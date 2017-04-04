(function() {
    /*
        Credits to: 
            https://egghead.io/lessons/angularjs-file-uploads
     */
        
    angular
        .module('app')
        .directive('fileInput', function($parse) {
            return {
                restrict: 'A',
                link: function(scope, el, attrs) {
                    el.bind('change', function() {
                        $parse(attrs.fileInput)
                            .assign(scope, el[0].files);
                        scope.$apply();
                    });
                }
            }
        });
})();
