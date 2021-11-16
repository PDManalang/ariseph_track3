import { useState, useEffect } from 'react';
import { storage, projectFirestore, timestamp } from '../../config/firebaseConfig';
import firebase from "firebase/compat/app";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = storage.ref(file.name);
        const collectionRef = projectFirestore.collection('files');

        storageRef.put(file).on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url:url, name: file.name, createdAt });
            setUrl(url);
            
        })
    }, [file]);

    return { progress, url, error }

}

export default useStorage;