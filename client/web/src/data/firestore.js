import firebase from "firebase";
import "firebase/firestore";
module.exports = function(){
    return firebase.firestore();
}

