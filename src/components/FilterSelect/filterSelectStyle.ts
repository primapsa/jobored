import {createStyles, rem} from "@mantine/core";

export const useFilterSelectStyle = createStyles((theme) => ({
    container: {
        width: rem(315),
        padding: rem(19),
        border: `1px solid #EAEBED`,
        borderRadius: rem(12),
        [theme.fn.smallerThan('md')]: {
            maxWidth: rem(270),
            width: `100%`
        },
        [theme.fn.smallerThan('sm')]: {
            margin: `${rem(20)} auto`,
            maxWidth: rem(400),
            width: `100%`
        },

    },
    header: {
        fontSize: rem('20px'),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: rem('20px'),


    },
    title: {
        marginTop: rem(16),
        marginBottom: rem(8),
        color: `#232134`,
        lineHeight: rem('19'),
        fontSize: rem('16'),
        fontStyle: 'normal',
        fontWeight: 700,

    },
    reset: {
        height: rem('20px'),
        background: "transparent",
        padding: rem(0),
        color: '#ACADB9',
        fontWeight: 500,
        fontSize: rem('14px'),
        lineHeight: rem('20px'),

        '&: hover': {
            color: `#92C1FF`,
            backgroundColor: "transparent",

        },
        '&: active': {
            color: `#5E96FC`
        }

    },
    label: {
        display: "flex",

    },
    rightIcon: {
        width: rem('16px'),
        height: rem('16px'),
        marginLeft: rem(4)
    },
    select: {
        width: rem(275),
        height: rem(42),
        padding: `${rem(8)} ${rem(12)}`,
        border: `1px solid #D5D6D`,
        borderRadius: rem(8),
        boxSizing: 'border-box',
        [theme.fn.smallerThan('md')]: {
            width: `100%`
        },

    },
    selectItem: {
        '&:hover': {
            background: `#DEECFF`,
            borderRadius: rem(8)
        }
    },
    selectRightSection: {
        width: `auto`,
        right: rem(12),
    },
    numberTitle: {
        marginTop: rem(20),
        marginBottom: rem(8),
        color: `#232134`,
        lineHeight: rem('19'),
        fontSize: rem('16'),
        fontStyle: 'normal',
        fontWeight: 700,
    },
    numberUp: {
        alignItems: "flex-end",
        border: 0,
        color: "#ACADB9",
        backgroundColor: "transparent",
        cursor: "pointer",
    },
    numberDown: {
        alignItems: "flex-start",
        border: 0,
        color: "#ACADB9",
        backgroundColor: "transparent",
        cursor: "pointer",
    },
    imputTo: {
        marginTop: rem(8)
    },
    submit: {
        width: rem(275),
        height: rem(40),
        padding: `${rem(4)} ${rem(20)}`,
        marginTop: rem(20),
        backgroundColor: '#5E96FC',
        borderRadius: rem(8),
        fontWeight: 500,
        lineHeight: rem(21),
        color: '#FFFFFF',
        [theme.fn.smallerThan('md')]: {
            width: `100%`
        },
        '&:hover': {
            backgroundColor: '#92C1FF',
        },
        '&:active': {
            backgroundColor: '#3B7CD3',
        }


    }




}))