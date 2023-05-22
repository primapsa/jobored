import React from 'react';
import {Button, Container, createStyles, rem, Text} from "@mantine/core";
import plug from './../../img/plug.svg'
import {Link} from "react-router-dom";
import {usePlugStyles} from "./plugStyle";

const Plug = ({isActive, children}: PlugPropsType) => {
    const {classes} = usePlugStyles()
    return (
        <>
            {
                isActive ? children :
                    <Container className={classes.wrapper}>
                        <div className={classes.image}></div>
                        <Text className={classes.text}>Упс, здесь еще ничего нет!</Text>
                        <Button className={classes.button} component={Link} to={'/vacancies'}>Поиск Вакансий</Button>
                    </Container>

            }
        </>

    );
};

export default Plug;

type PlugPropsType = {
    isActive: boolean
    children: React.ReactNode
}

