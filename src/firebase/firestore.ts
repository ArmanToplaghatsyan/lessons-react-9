import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { IUser } from "../type/type";
import { db } from "./config";

export const addUser = async (data: IUser):Promise<string>=>{
    const call = collection(db, 'users');
    const x = await addDoc(call, data);
    console.log('x=>', x);    
    return x.id
}

export const getUsers = async ():Promise<IUser[]> => {
    const call = collection(db, 'users');
    const x = await getDocs(call)
    const arr = x.docs.map((elm) => ({...elm.data(), id:elm.id} as IUser))
    return arr;
}

export const deleteUserById = async (id: string):Promise<boolean> => {
    const call = collection(db, 'users');

    const x = await deleteDoc(doc(call, id))

    return true
}

export const getUserById = async (id: string):Promise<IUser> => {
    const call = collection(db, 'users');

    const x = await getDoc(doc(call, id))

    return {...x.data(), id: x.id} as IUser
} 