import React from 'react';
import {Button, Container, Text} from "@mantine/core";
import {Link} from "react-router-dom";
import {usePlugStyles} from "./plugStyle";
import {ROUTES} from "../../const/routes";

const Plug = ({isActive, children, isButton = true}: PlugPropsType) => {
    const {classes} = usePlugStyles()
    return (
        <>
            {
                isActive ? children :
                    <Container className={classes.wrapper}>
                        <div className={classes.image}></div>
                        <Text className={classes.text}>Упс, здесь еще ничего нет!</Text>
                        {
                            isButton && <Button className={classes.button} component={Link} to={`/${ROUTES.VACANCIES}`}>Поиск Вакансий</Button>
                        }
                    </Container>
            }
        </>

    );
};

export default Plug;

type PlugPropsType = {
    isActive: boolean
    children: React.ReactNode
    isButton?: boolean
}

