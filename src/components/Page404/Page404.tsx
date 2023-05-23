import {createStyles, Title, Text, Button, Container, Group, rem} from '@mantine/core';
import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../const/routes";

export const Page404 = ({isActive, children}: Page404PropsType) => {
    const {classes} = useStyles();

    return (
        <>
            {
                isActive ? children : <Container className={classes.root}>
                    <div className={classes.label}>404</div>
                    <Title className={classes.title}>You have found a secret place.</Title>
                    <Text color="dimmed" size="lg" align="center" className={classes.description}>
                        Запрашиваемя страница не найдена
                    </Text>
                    <Group position="center">
                        <Button className={classes.button} component={Link} to={`/${ROUTES.VACANCIES}`}>Поиск
                            Вакансий</Button>
                    </Group>
                </Container>

            }
        </>
    );
}
type Page404PropsType = {
    isActive: boolean
    children: React.ReactNode
}
const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: rem(80),
        paddingBottom: rem(80),
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(220),
        lineHeight: 1,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(120),
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(38),

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(32),
        },
    },
    description: {
        maxWidth: rem(500),
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
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