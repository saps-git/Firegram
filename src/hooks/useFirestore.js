import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc') 
            .onSnapshot((snap) => { //will take a snapshot of the db instance
                let documents = [];
                snap.forEach((doc) => { //at each snap , fill the document array with the contents
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            });

        return () => unsub(); // this is a cleanup function that react will run when a component using the hook unmounts

    }, [collection])
    
    return {docs};
}

export default useFirestore
