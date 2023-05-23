import {createStyles, rem} from "@mantine/core";

export const useInputsStyles = createStyles((theme) => ({

    input: {
        padding: `0 ${rem(12)} 0 ${rem(36)} !important`,
        height: rem(48),
        background: '#FFFFFF',
        borderRadius: rem(8),
        border: `1px solid #EAEBED`,
        [theme.fn.smallerThan('sm')]: {
            padding: `0 ${rem(5)} 0 ${rem(30)} !important`,

        },


    },
    rightSection: {
        width: rem(84),
        right: rem(12),
        [theme.fn.smallerThan('sm')]: {
            width: rem(60),
            right: rem(5),

        }
    },
    button: {
        width: rem(83),
        height: rem(32),
        background: `#5E96FC`,
        borderRadius: rem(8),
        fontWeight: 500,
        backgroundColor: '#5E96FC',
        fontSize: rem(14),
        lineHeight: rem(21),
        color: `#FFFFFF`,
        [theme.fn.smallerThan('sm')]: {
            padding: `0 ${rem(5)}`,
            width: rem(60),
            fontSize: rem(12)
            
        },
        '&:hover': {
            backgroundColor: '#92C1FF',
        },
        '&:active': {
            backgroundColor: '#3B7CD3',
        }


    }


}));