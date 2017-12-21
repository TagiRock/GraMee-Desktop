import "reflect-metadata";
import { Container } from "inversify";
import { Identifer } from "./identifer.config";
import { ISchoolRepository } from "src/data/repository/interfaces/ISchoolRepository";
import { SchoolRepository } from "src/data/repository/SchoolRepository";
import firebase from "firebase";
import "firebase/firestore";
import { FirebaseFirestore } from "@firebase/firestore-types";
export const container = new Container();
container.bind<ISchoolRepository>(Identifer.SchoolRepository).to(SchoolRepository);

const firestore: FirebaseFirestore | undefined = firebase.firestore();
if (!firestore) {
    //container.bind<FirebaseFirestore>(Identifer.FireStore).to(firestore);
}