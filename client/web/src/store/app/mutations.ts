import { AccountModel } from "domain/model/AccountModel";
export interface AppMutations {
    signinEmail: {
       account: AccountModel
    };
    loginEmail: {
        account: AccountModel
     };
}
