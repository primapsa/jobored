import {createStyles, rem} from "@mantine/core";

export const useItemStyles = createStyles((theme) => ({

    item: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: rem(16),
        width: '100%',
        height: rem(137),
        padding: rem(24),
        background: `#FFFFFF`,
        border: `1px solid #EAEBED`,
        borderRadius: rem(12),
        [theme.fn.smallerThan('lg')]: {
            minHeight: rem(137),
            height: `100%`
        }

    },
    itemSimple: {

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: rem(16),
        minHeight: rem(157),
        height: `100%`,

        padding: rem(24),
        background: `#FFFFFF`,
        border: `1px solid #EAEBED`,
        borderRadius: rem(12),

        [theme.fn.smallerThan('lg')]: {
            minHeight: rem(157),
            height: `100%`
        },
        [theme.fn.smallerThan('xs')]: {
            padding: rem(12),
        },
    },
    itemHeader: {
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "space-between"
    },
    itemLink: {
        fontWeight: 600,
        fontSize: rem(20),
        lineHeight: rem(24),
        color: `#5E96FC`,
        textDecoration: "none",
        '&:hover': {
            color: "#d64030"
        },
        [theme.fn.smallerThan('lm')]: {
            fontSize: rem(18),
        }
    },
    itemLinkSimple: {
        fontWeight: 700,
        fontSize: rem(28),
        lineHeight: rem(34),
        color: `#232134`,
        [theme.fn.smallerThan('lm')]: {
            fontSize: rem(18),
        }

    },
    itemSalary: {
        fontWeight: 600,
        fontSize: rem(16),
        lineHeight: rem(20),
        color: `#232134`,
        [theme.fn.smallerThan('lm')]: {
            margin: `${rem(10)} 0`
        }
    },
    itemSalarySimple: {
        fontWeight: 700,
        fontSize: rem(20),
        lineHeight: rem(20),
        color: `#232134`,
        [theme.fn.smallerThan('lm')]: {
            margin: `${rem(10)} 0`,
            fontWeight: 600,
            fontSize: rem(18),
        },
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(16),
            fontWeight: 600
        }
    },
    itemDelimiter: {
        margin: `0 ${rem(12)}`,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: rem(20),
        lineHeight: rem(21),
        color: `#7B7C88`,
        [theme.fn.smallerThan('lm')]: {
            display: "none"
        }
    },
    itemSalaryContainer: {
        display: "flex"
    },
    itemWork: {
        fontSize: rem(16),
        fontWeight: 400,
        lineHeight: rem(20),
        color: `#232134`,
    },
    itemWorkSimple: {
        fontSize: rem(20),
        fontWeight: 400,
        lineHeight: rem(20),
        color: `#232134`,
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(14),

        }
    },
    itemTown: {
        marginLeft: rem(8),
        fontSize: rem(16),
        fontWeight: 400,
        lineHeight: rem(19),
        color: `#232134`,
    }, itemTownSimple: {
        marginLeft: rem(8),
        fontSize: rem(16),
        fontWeight: 400,
        lineHeight: rem(19),
        color: `#232134`,
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(14),

        }
    },
    itemMain: {
        padding: 0,
        margin: 0,
        display: "flex",
        [theme.fn.smallerThan('lg')]: {
            margin: `${rem(10)} 0`,

        },

        [theme.fn.smallerThan('lm')]: {

            flexDirection: 'column'
        }
    }, itemMainSimple: {
        padding: 0,
        margin: `${rem(16)} 0`,
        display: "flex",
        [theme.fn.smallerThan('lg')]: {
            margin: `${rem(10)} 0`,

        },

        [theme.fn.smallerThan('lm')]: {

            flexDirection: 'column'
        }
    },

    itemFooter: {
        padding: 0,
        margin: 0,
        display: "flex"
    },
    input: {
        padding: `0 ${rem(12)} 0 ${rem(36)} !important`,
        height: rem(48),
        background: '#FFFFFF',
        borderRadius: rem(8),
        border: `1px solid #EAEBED`,

    },
    rightSection: {
        width: rem(84),
        right: rem(12)
    },
    star: {
        width: rem(22),
        height: rem(22),
        backgroundColor: "transparent",
        border: 0,
    },
    buttonRightIcon: {
        margin: 0
    },
    buttonRoot: {
        padding: 0,
        '&:hover': {
            backgroundColor: "transparent"
        }
    },
    button: {
        width: rem(83),
        height: rem(32),
        background: `#5E96FC`,
        borderRadius: rem(8),
        fontWeight: 500,
        fontSize: rem(14),
        lineHeight: rem(21),
        color: `#FFFFFF`,

    }
}));
