var port = chrome.runtime.connect();

port.onMessage.addListener(function (message) {
    window.postMessage(message, '*');
});

window.addEventListener('message', function (event) {
    console.log(event);
    if (event.source === window) {
        port.postMessage( event.data ,function(res){});
    }
});