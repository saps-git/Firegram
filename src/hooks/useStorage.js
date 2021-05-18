import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name); //will create a ref to the file with its name
        const collectionRef = projectFirestore.collection('images'); //create a collection named images in the database

        storageRef.put(file).on('state_changed', (snap) => { //uploading the file 
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; //calculating percentage
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => { //after the pic is uploaded, you'll get a download url
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({ url, createdAt }) //adding the url and time to db
            setUrl(url);
        })
    }, [file])

    return { progress, url, error}
}

export default useStorage
