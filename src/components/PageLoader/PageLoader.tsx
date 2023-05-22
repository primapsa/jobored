import React from 'react';
import {Loader} from "@mantine/core";

const PageLoader = ({isActive, children}: PageLoaderPropsType) => {
    return (
    <>
        {
            isActive ? <Loader sx={{position: "fixed", top: `50%`, left: `50%`}}/> : children
        }
    </>

    );
};

export default PageLoader;

type PageLoaderPropsType = {
    isActive: boolean
    children: React.ReactNode
}