import { firebaseStorage } from "../config";
import {ref, uploadBytesResumable, listAll} from "firebase/storage"
import { async } from "@firebase/util";

export const upload = (file) => {
    if(!file){
        alert('Porfavor escoge un archivo antes de subir');
    }

    const storageRef = ref(firebaseStorage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);

    return uploadTask;
}

export const getAll = async () => {
    const listRef = ref(firebaseStorage, '/files/');
    return listAll(listRef);
}