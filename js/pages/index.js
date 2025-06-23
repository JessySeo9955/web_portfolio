
import {content} from "../data/data-content.js";
import { bindContentToDom } from "../utils/utils.js";

const bindTargets = [{domId: '#introduction', dataKey: 'introduction'}
    ,{domId: '#introduction', dataKey: 'introduction'}
    ,{domId: '#full-stack', dataKey: 'full_stack'}
    ,{domId: '#qa', dataKey: 'qa'}
    ,{domId: '#devops', dataKey: 'devops'}
    ,{domId: '#activities', dataKey: 'activities'}
    ,{domId: '#college', dataKey: 'college'}
];

bindTargets.forEach(({domId, dataKey}) => bindContentToDom(domId, content[dataKey]));

