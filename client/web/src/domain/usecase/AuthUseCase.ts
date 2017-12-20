import firebase from "firebase";
import { Observable, Observer } from "rxjs";
import { UserModel } from "domain/model/UserModel";
import { AccountModel } from "domain/model/AccountModel";
export class AuthUseCase {
    public signinEmail(email: string, password: string): Observable<AccountModel> {
        return Observable.create((emitter: Observer<AccountModel>) => {
            /*firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    const user = firebase.auth().currentUser;
                    if (user !== null) {
                        const account = new AccountModel();
                        // account.name = user.displayName;
                        account.id = user.uid;
                        // account.token = user.getToken().then;
                        emitter.next(account);
                    }
                }).catch(error => emitter.error(error));*/
        });
    }
    //FIXME 
    public loginEmail(email: string, password: string): Observable<AccountModel> {
        return Observable.create((emitter: Observer<AccountModel>) => {
            /*firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    const user = firebase.auth().currentUser;
                    if (user !== null) {
                        const account = new AccountModel();
                        // account.name = user.displayName;
                        account.id = user.uid;
                        // account.token = user.getToken().then;
                        emitter.next(account);

                    }
                }).catch(error => emitter.error(error));*/
        });
    }

    public logout() {
        //firebase.auth().signOut();
    }

}
