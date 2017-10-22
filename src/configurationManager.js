function createConfigurationManager() {
    function saveConfiguration(json) {
        localStorage.setItem('configuration', JSON.stringify(json));
        console.log("Saved configuration");
    }

    function getConfiguration(country, baseUrl) {
        return fetch(baseUrl+"/content/configuration/global/markets/americas.service."+country+".json", {mode:'cors'}).then(function(response) {
            return response.json();
        }).then(function(json) {
            saveConfiguration(json);
            return Promise.resolve(json);
        });
    }

    return {
        getConfiguration: getConfiguration,
        saveConfiguration: saveConfiguration
    }
}

export var configurationManager = createConfigurationManager();