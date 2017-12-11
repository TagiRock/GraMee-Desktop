/* tslint:disable:no-console*/
import Peer from "skyway-js";
export class ScreenShareingUseCase {
    private peer: Peer = new Peer({
        key: "9038bfbb-29a3-4bf6-9f6c-c51502ede073",
        debug: 3
    });
    constructor() {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
            .then((stream: MediaStream) => {
                //
            }).catch((error: Error) => {
               console.error(error);
            });
    }

}
