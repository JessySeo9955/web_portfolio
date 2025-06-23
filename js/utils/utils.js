function bindContentToDom(domId, data) {
    const content$ = window.document.querySelector(domId);
    content$.content = data;  
}

export {bindContentToDom};