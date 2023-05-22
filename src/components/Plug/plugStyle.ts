import {createStyles, rem} from "@mantine/core";
import plug from "../../img/plug.svg";

export const usePlugStyles = createStyles((theme) => ({

    wrapper: {
        margin: `${rem(120)} auto 0 auto`,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        padding: 0,
    },
    root: {
        width: `100%`
    },
    image: {
        width: rem(240),
        height: rem(230),
        backgroundImage: `url(${plug})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    },
    text: {
        margin: `${rem(32)} 0`,
        fontWeight: 700,
        fontSize: rem(24),
        lineHeight: rem(29),
        color: `#343A40`,
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(18),
        }
    },
    button: {
        width: rem(164),
        height: rem(42),
        background: '#DEECFF',
        borderRadius: rem(8),
        fontFamily: "Open Sans, serif",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: rem(14),
        lineHeight: '155%',
        color: '#3B7CD3',
        '&:hover': {
            background: '#E8F2FF'
        }
    }
}));