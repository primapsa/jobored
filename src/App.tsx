import React from 'react';
import './App.module.css';
import Main from "./features/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Favorites from "./features/Favorites/Favorites";
import Vacancy from "./features/Vacancy/Vacancy";
import {Container, MantineProvider} from "@mantine/core";
import {HeaderSimple} from "./components/Header/HeaderMantine";
import {appTheme, styles} from "./appTheme";
import {HeaderLinks, ROUTES} from "./const/routes";

const App = () => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={appTheme}>
            <BrowserRouter>
                <Container sx={styles}>
                    <HeaderSimple
                        links={HeaderLinks}/>
                    <Routes>
                        <Route path={'/'} element={<Main/>}/>
                        <Route path={`/${ROUTES.VACANCY}/:id`} element={<Vacancy/>}/>
                        <Route path={`/${ROUTES.VACANCIES}`} element={<Main/>}/>
                        <Route path={`/${ROUTES.FAVORITES}`} element={<Favorites/>}/>
                    </Routes>
                </Container>
            </BrowserRouter>
        </MantineProvider>
    )
}

export default App;
