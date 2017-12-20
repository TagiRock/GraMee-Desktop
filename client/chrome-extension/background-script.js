
const port = chrome.runtime.onConnect();
port.onMessage.addListener(function(massage){
    if(massage === 'requestScreenSourceId'){
         chrome.desktopCapture.chooseDesktopMedia(
            ['screen', 'window'],
            port.sender.tab,
            function(streamId){
                if(!streamId){
                    port.postMessage({
                        type: 'error',
                        message: 'PermissionDeniedError'
                    });
                }else{
                    port.postMessage({
                        type: 'success',
                        streamId: streamId
                    });
                }
            }
        );
    }
})