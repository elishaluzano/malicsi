(function() {
    angular
        .module('app', [
            'ui.router',
            'ui.materialize'
        ]);
    
    require('./app.router');

    var assets = require.context('./assets', true, /.*\.(png|jpg|gif)$/);
    var services = require.context('./services', true, /.*\.service\.js$/);
    var shared = require.context('./shared', true, /.*\.component\.js$/);
    var components = require.context('./components', true, /.*\.component\.js$/);

    assets.keys().forEach(assets);
    services.keys().forEach(services);
    shared.keys().forEach(shared);
    components.keys().forEach(components);

})();
