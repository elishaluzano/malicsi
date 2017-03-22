(function() {
    angular
        .module('app', ['ui.router']);

    require('./app.router');
    require.context('./assets', true, /.*\.(png|jpg|gif)$/);
    require.context('./services', true, /.*\.service\.js$/);
    require.context('./components', true, /.*\.component\.js$/);
    require.context('./shared', true, /.*\.component\.js$/);

    require('./components/registration-card/registration-card.component');
    require('./services/user.service.js');
})();
