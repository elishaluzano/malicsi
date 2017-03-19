(function() {
    angular
        .module('app', ['ui.router']);

    require('./app.router');

    require('./services/user-log.service');
})();
