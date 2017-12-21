import firebase from "firebase";
import { Observable, Observer } from "rxjs";
import { User } from "domain/model/User";
import { Account } from "domain/model/Account";
export class AuthUseCase {
    public signinEmail(email: string, password: string): Observable<Account> {
        return Observable.create((emitter: Observer<Account>) => {
            /*firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    const user = firebase.auth().currentUser;
                    if (user !== null) {
                        const account = new Account();
                        // account.name = user.displayName;
                        account.id = user.uid;
                        // account.token = user.getToken().then;
                        emitter.next(account);
                    }
                }).catch(error => emitter.error(error));*/
        });
    }
    //FIXME 
    public loginEmail(email: string, password: string): Observable<Account> {
        return Observable.create((emitter: Observer<Account>) => {
            /*firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    const user = firebase.auth().currentUser;
                    if (user !== null) {
                        const account = new Account();
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
