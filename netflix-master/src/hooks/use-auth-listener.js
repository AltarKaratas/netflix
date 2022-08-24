import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useState, useEffect, useContext } from "react";


export default function useAuthListener() {
    const [user, setUser] = useState(
        JSON.parse(
            localStorage.getItem('authUser')
        )
    );

    useEffect(() => {
        const listener = onAuthStateChanged(
            getAuth(),
            (authUser) => {
                if (authUser)
                    localStorage.setItem(
                        'authUser', 
                        JSON.stringify(authUser)
                    );
                else
                    localStorage.removeItem(
                        'authUser'
                    );
                setUser(authUser);
            }
        );

        return () => listener();    
    }, []);

    return { user };
};
