import { hideAuxiliaryElementsInParent } from './iframe-drag-n-drop';
import { droppableSelector, getDetailPopupSelector, rowColumnSelector, formSelector, addOrEditPopupFormSelector } from '../common';
import wrap from 'lodash/wrap';
import isElement from 'lodash/isElement';

function disableDroppable(selector) {
    window.parent.disableDroppable(selector);
}

function enableDroppable(selector) {
    window.parent.enableDroppable(selector);
}

function enableDroppableInPopup(popup) {
    // Compatible with add or edit popup form window
    if (popup.is('form')) {
        enableDroppable(popup);
    } else {
        enableDroppable(getDetailPopupSelector(popup));
    }
    enableDroppable(popup.find(`${rowColumnSelector}, ${formSelector}`));
}

// Fix bugs in nested detail popup windows
// Disable droppable when all opened popup windows have been closed
const detailPopups = [];

function wrapper(func, popup = $(`${addOrEditPopupFormSelector}`), url, data) {
    // Compatible with add or edit button triggered popup
    // Function call popupAdd(this) or popupEdit(this);
    if (isElement(popup)) {
        popup = $(`${addOrEditPopupFormSelector}`);
    }
    hideAuxiliaryElementsInParent();
    disableDroppable(droppableSelector);
    detailPopups.push(popup);
    enableDroppableInPopup(popup);
    return func(popup, url, data);
}

function end() {
    $('div.popup-window#add form').trigger('reset');
    $('div.popup-window#edit form').trigger('reset');

    detailPopups.pop();
    if (detailPopups.length) {
        enableDroppableInPopup(detailPopups[detailPopups.length - 1]);
    } else {
        enableDroppable(droppableSelector);
    }
}

function _popupAdd() {
    layer.open({
        type: 1,
        title: '新增',
        area: ['600px', '350px'],
        skin: 'layui-layer-rim', //加上边框
        content: $('div.popup-window#add'),
        end
    });
}

// url and data are only used out of UI Builder,
// which can be used to query detail and show the result in popup window
function _popupDetail(popup, url, data) {
    // Compatible with previous only one detail popup window
    var content = popup && popup.length ? popup : $('div.popup-window#detail');
    layer.open({
        type: 1,
        title: '信息',
        area: ['660px', '330px'],
        skin: 'layui-layer-rim', //加上边框
        content: content,
        end
    });
}

function _popupEdit() {
    disableDroppable();
    layer.open({
        type: 1,
        title: '修改',
        area: ['600px', '350px'],
        skin: 'layui-layer-rim', //加上边框
        content: $('div.popup-window#edit'),
        end
    });
}

function _popupCommon(popup) {
    layer.open({
        type: 1,
        title: '信息',
        area: ['660px', '330px'],
        skin: 'layui-layer-rim', //加上边框
        content: popup,
        end
    });
}

// Element refers to the element which triggers the popup window
function popupDelete(element, msg, confirmCb, cancelCb) {
    layer.confirm(msg || '您确定需要删除吗？', {
        btn: ['确定', '取消']
    }, confirmCb, cancelCb);
}

function exportData() {
}

const [popupAdd, popupEdit, popupDetail, popupCommon] =
    [_popupAdd, _popupEdit, _popupDetail, _popupCommon]
        .map(func => wrap(func, wrapper));

export {
    popupAdd,
    popupEdit,
    popupDelete,
    popupDetail,
    exportData,
    popupCommon
};