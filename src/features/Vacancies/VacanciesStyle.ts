import {createStyles, rem} from "@mantine/core";

export const useVacanciesStyles = createStyles((theme) => ({

    vacancyWrapper: {
        [theme.fn.largerThan('sm')]: {
            display: 'flex',
            alignItems: 'start',
            width: '100%',
            margin: `${rem(40)} auto 0`,
            maxWidth: rem(1116),
            padding: 0,
            backgroundColor: '#F5F5F5'
        },
        [theme.fn.smallerThan('lg')]: {
            padding: `${rem(20)} ${rem(10)}}`,
        },
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: "center",
            margin: 0
        },
    },
    jobContainer: {
        display: "flex",
        flexDirection: "column",
        maxWidth: rem(829),
        width: '100%',
        marginLeft: rem(28),
        padding: 0,
        [theme.fn.smallerThan('sm')]: {
            margin: `${rem(20)} 0 0 0`
        },
    }
}));