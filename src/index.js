import {nuskin} from './application';
window.nuskin = nuskin;
nuskin.init(nuskin.runmodes.TEST).then(function(configuration) {
    console.log("done. message:",configuration);
});

import timestamp from 'time-stamp';

console.log("test1, printing timestamp:",timestamp());

import 'test2-eric';
import 'test3';

