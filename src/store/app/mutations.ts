import {UserModel} from "domain/model/UserModel";
export interface AppMutations {
    signinEmail: {
        user: UserModel;
    };
}
