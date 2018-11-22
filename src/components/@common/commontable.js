import { dataComponentId, dataEnableRowClick } from '../common';
import { table } from './table';
import { commontableid } from './ids';
import extend from 'lodash/extend';

const commontable = extend({}, table, {
    name: "Common ag-Grid",
    html: `<div ${dataComponentId}="${commontableid}" ${dataEnableRowClick}="true" style="width: 200px; height: 100px;" class="resize-drag draggable ag-theme-blue horizontal-stripes"></div>`
});

export default commontable;