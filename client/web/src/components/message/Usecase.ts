import Peer, { MeshRoom } from "skyway-js";
export class Usecase {
    public callback: (stream: MediaStream) => void;
    private localStream: MediaStream;
    private peer = new Peer({
        key: "f51b5282-c8f0-4419-8141-ea6f926e3ba7",
        debug: 3,
    });

    public init() {
        this.peer.on("open", (peerId: string) => {
            this.makeroom();
        });
    }

    private makeroom() {
        const room = this.peer.joinRoom("debug", { mode: "mesh" });
        room.on("stream", (stream: MediaStream) => {
            this.callback(stream);
        });
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(video => {
            room.replaceStream(video);
        });
    }
}
