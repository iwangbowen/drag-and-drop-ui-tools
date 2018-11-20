import { dataComponentId, sortableClass, formGroup, rowClass, col_sm_9 } from '../common';
import { bootstrapmanualselectinputfieldid } from './ids';
import label from './label';
import _ from 'lodash';
import bootstrapmanualselectinput from './bootstrapmanualselectinput';
import manualselectinputfield from './manualselectinputfield';

const bootstrapmanualselectinputfield = _.extend({}, manualselectinputfield, {
    name: "Munual Select Field",
    image: "icons/select_input.svg",
    html: `<div class="${formGroup} ${sortableClass} ${rowClass}" ${dataComponentId}="${bootstrapmanualselectinputfieldid}">
               ${label.html}
               <div class="${col_sm_9}">
                ${bootstrapmanualselectinput.html}
               </div>
           </div>`
});

export default bootstrapmanualselectinputfield;