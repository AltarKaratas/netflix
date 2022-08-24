import React from "react";
import { Navigate } from "react-router-dom";


export function RenderOrRedirect({condition, pathToRedirect, children}) {

    return (
        <>
            {
                condition ? children : <Navigate to={pathToRedirect} />
            }
        </>
    );
};
