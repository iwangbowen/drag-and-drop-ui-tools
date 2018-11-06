const parent = window.parent;

function sendMessage(msg) {
    parent.postMessage(msg, '*');
}

function initMessageListener() {
    $(window).on('message', ({ originalEvent: { data } }) => {
        if (data.type == 'edit') {
            Vvveb.FileManager.loadPageFromMessage(data.html);
        } else {
            const page = Vvveb.FileManager.getPage(data.template);
            Vvveb.Builder.loadUrl(page.url);
        }
    });
}

export {
    initMessageListener,
    sendMessage
};