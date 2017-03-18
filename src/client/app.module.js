(function() {
    angular
        .module('app', ['ui.router']);

    require('./app.router');
    require('./services/team.service');
})();
