import {Container, Group, Header, Title} from '@mantine/core';
import Logo from '../../img/logo/joboredLogo.svg';
import {NavLink} from "react-router-dom";
import {useStyles} from "./HeaderStyle";

export function HeaderSimple({links}: HeaderSimpleProps) {
    const {classes} = useStyles();
    const items = links.map((link) => (
        <NavLink key={link.label} to={link.link} className = {classes.link}>
            {link.label}
        </NavLink>
    ));

    return (
        <Header height={'100%'} className={classes.header}>
            <Container className={classes.container}>
                <NavLink to={'/vacancies'} className={classes.home}>
                    <img src={Logo} alt={'logo'}/>
                    <Title order={1} className={classes.linkHeader}>Jobored</Title>
                </NavLink>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
            </Container>
        </Header>
    );
}

interface HeaderSimpleProps {
    links: { link: string; label: string }[];
}

