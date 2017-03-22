(function() {
    angular
        .module('app', ['ui.router']);

    require('./app.router');
<<<<<<< HEAD
    require.context('./assets', true, /.*\.(png|jpg|gif)$/);
    require.context('./services', true, /.*\.service\.js$/);
    require.context('./components', true, /.*\.component\.js$/);
    require.context('./shared', true, /.*\.component\.js$/);

    require('./components/registration-card/registration-card.component');
    require('./services/user.service.js');
=======

    var assets = require.context('./assets', true, /.*\.(png|jpg|gif)$/);
    var services = require.context('./services', true, /.*\.service\.js$/);
    var shared = require.context('./shared', true, /.*\.component\.js$/);
    var components = require.context('./components', true, /.*\.component\.js$/);

    assets.keys().forEach(assets);
    services.keys().forEach(services);
    shared.keys().forEach(shared);
    components.keys().forEach(components);

>>>>>>> 1407cf627d758a71081a1559215ee3f50f1b2b16
})();
