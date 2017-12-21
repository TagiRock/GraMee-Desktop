import { Account } from "domain/model/Account";
export interface AppMutations {
    signinEmail: {
       account: Account
    };
    loginEmail: {
        account: Account
     };
}
