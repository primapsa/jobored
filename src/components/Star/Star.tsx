import React, {useState} from 'react';
import star from './../../img/icons/star.svg'
import filledStar from './../../img/icons/starfilled.svg'
import hoverStar from './../../img/icons/starHover.svg'

const Star = ({isFilled}: StarPropsType) =>{
    const [hover, setHover] = useState(false)
    const mouseEnterHandle = () => setHover(true)
    const mouseLeaveHandle = () => setHover(false)
    const style = {
        width: '1.375rem',
        height: '1.375rem',
        backgroundImage: `url(${isFilled ? filledStar : hover ? hoverStar :star})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }

    return (
        <div style={style} onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle}></div>
    )
}

export default React.memo(Star);

type StarPropsType = {
    isFilled: boolean
}