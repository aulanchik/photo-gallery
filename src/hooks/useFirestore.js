import React from 'react'
import { firestore } from '../firebase'

const useFirestore = (collection) => {
    const [docs, setDocs] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = firestore
            .collection(collection)
            .orderBy("createdAt", "desc")
            .onSnapshot((snap) => {
            let documents = [];
                snap.forEach((doc) => {
                    let data = doc.data();
                    documents.push({ ...data, id: doc.id });
                });
            setDocs(documents);
        });
  
      return () => unsubscribe();
    }, [collection])

    return { docs };
}

export default useFirestore;