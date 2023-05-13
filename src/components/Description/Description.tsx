import React from 'react';

const Description = ({text}: DescriptionPropsType) => {
    return (
        <div>
            {text}
        </div>
    );
};

export default Description;

type DescriptionPropsType = {
    text: string
}