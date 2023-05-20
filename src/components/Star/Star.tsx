import React from 'react';
import star from './../../img/icons/star.svg'
import filledStar from './../../img/icons/starfilled.svg'

const Star = ({isFilled}: StarPropsType) =>

    <div style={
        {
            backgroundImage: `url(${isFilled ? filledStar : star})`,
            width: '1.375rem',
            height: '1.375rem',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }
    }></div>


export default Star;

type StarPropsType = {
    isFilled: boolean
}