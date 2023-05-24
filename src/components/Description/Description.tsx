import React from 'react';
import {Paper, TypographyStylesProvider} from "@mantine/core";
import {useDescriptopnStyles} from "./descriptionStyle";

const Description = ({text}: DescriptionPropsType) => {
    const {classes} = useDescriptopnStyles()
    return (
        <Paper className={classes.paper}>

            <TypographyStylesProvider>
                <div dangerouslySetInnerHTML={{__html: text}}/>
            </TypographyStylesProvider>
        </Paper>
    );
};

export default Description;

type DescriptionPropsType = {
    text: string
}
