import {nuskin} from './application';
window.nuskin = nuskin;
nuskin.init(nuskin.runmodes.TEST).then(function(configuration) {
    console.log("done. message:",configuration);
});