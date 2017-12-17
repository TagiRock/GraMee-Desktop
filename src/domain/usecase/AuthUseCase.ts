import firebase from "firebase";
import { Observable, Observer } from "rxjs";
import { UserModel } from "domain/model/UserModel";
import { AccountModel } from "domain/model/AccountModel";
export class AuthUseCase {

    public signinEmail(email: string, password: string): Observable<AccountModel> {
        return Observable.create((emitter: Observer<AccountModel>) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    const user = firebase.auth().currentUser;
                    if (user !== null) {
                        // user => emitter.next(user);
                        // console.log("SuccessCreateUser");
                        // user.uid
                        // AccountModel
                    }
                }).catch(error => emitter.error(error));
        });
    }

    public login(email: string, password: string): Observable<UserModel> {
        return Observable.create((emitter: Observer<UserModel>) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    const user = firebase.auth().currentUser;
                    if (user !== null) {
                        // this.signinEmail(email, password);
                        console.log("SuccessLogin");

                    }
                }).catch(error => emitter.error(error));
        });
    }

    public logout() {
        firebase.auth().signOut();
    }

}
