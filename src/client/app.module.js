(function() {
    angular
        .module('app', ['ui.router']);

    require('./app.router');
    // IMPORT ALL SERVICES BELOW
    require('./services/user-log.service');
    require('./services/team.service');
    require('./services/game.service');

    // IMPORT ALL COMPONENTS BELOW

})();
