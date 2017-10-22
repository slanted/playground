import {configurationManager} from './configurationManager';
import {runmodes} from './runmodes';

export function createApplication() {
    var country;
    var language;
    var runmode;

    function init(config = {country:'US', language:'en', runmode:runmodes.DEV}) {
        country = config.country || 'US';
        language = config.language || 'en';
        runmode = config.runmode || runmodes.DEV;
        if (config.baseUrl) {
            console.log("Overriding base url:"+config.baseUrl);
            runmode.baseUrl = config.baseUrl;
        }


        return configurationManager.getConfiguration(country, runmode.baseUrl);
    }
    return {
        init: init,
        runmodes: runmodes,
        country: country,
    }
}

export var nuskin = createApplication();