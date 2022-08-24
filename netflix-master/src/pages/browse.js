import React from "react";

import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from '../containers/header';

import { useContent } from "../hooks";


export default function Browse() {
    const series = useContent('series', 5);
    console.log(series);
    
    return (
        <>
            <HeaderContainer >
            </HeaderContainer>

            <FaqsContainer />
            <FooterContainer />
        </>
    )
};
