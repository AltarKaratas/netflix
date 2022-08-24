import React from "react";
import { Navigate } from "react-router-dom";


export function RenderOnCondition({condition, redirectIfFalse, children}) {

    return (
        <>
            {
                condition ? children : <Navigate to={redirectIfFalse} />
            }
        </>
    );
};
