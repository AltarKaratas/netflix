import { useContext, useEffect, useState } from "react";
import { collection, query, limit, getDocs } from 'firebase/firestore';
import {AppContext} from '../context/app-context';


export default function useContent(targetCollection, pageSize) {
    const [content, setContent] = useState([]);
    const {db} = useContext(AppContext);
    
    useEffect(() => {

        getDocs(
            query(
                collection(db, targetCollection),  
                limit(pageSize)
            )
            // get next page
            // query(
            //     collection(db, targetCollection),
            //     startAfter(
            //         documentSnapshots.docs[documentSnapshots.docs.length-1]
            //     ), limit(25)
            // );
        ).then((response) => {
            setContent(
                response.docs.map((doc) => ({
                    ...doc.data(),
                    docId: doc.id
                }))
            );
        }).catch((err) => {
            console.error(err.message);
        });

    },[]);

    return content;
};
