function createApplication() {
    var configuration;
    function init(config) {
        configuration = config;
        console.log("Init!");
        return Promise.resolve("Done with init!");
    }

    return {
        init: init,
        runmodes: {DEV:1},
        display: function() {
            console.log("In display. config:",configuration);
        }
    }
}

export var nuskin = createApplication();