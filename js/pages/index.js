
import {content} from "../data/data-index.js";
import {activities, education} from "../data/data-common.js";
import { bindContentToDom } from "../utils/utils.js";

const bindTargets = [{domId: '#introduction', dataKey: 'introduction'}
    ,{domId: '#introduction', dataKey: 'introduction'}
    ,{domId: '#full-stack', dataKey: 'full_stack'}
    ,{domId: '#qa', dataKey: 'qa'}
    ,{domId: '#devops', dataKey: 'devops'}
];

bindTargets.forEach(({domId, dataKey}) => bindContentToDom(domId, content[dataKey]));
bindContentToDom('#activities', activities[0]);
bindContentToDom('#education-item-1', education[0]);
bindContentToDom('#education-item-2', education[1]);