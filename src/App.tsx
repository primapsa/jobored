import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Main from "./features/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Favorites from "./features/Favorites/Favorites";
import Vacancy from "./features/Vacancy/Vacancy";
import {Container, MantineProvider, rem} from "@mantine/core";
import {HeaderSimple} from "./components/Header/HeaderMantine";

const styles = {width: '100%', padding: 0, maxWidth: '100%'}
const App = () => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
            globalStyles : (theme) => ({
                body: {
                    backgroundColor: '#F5F5F5',
                    boxSizing: 'border-box',
                    position: "relative"

                },
                input: {
                    "::placeholder": {
                        fontSize: rem(14)
                    }
                },
                '.active': {
                    color: `#5E96FC`
                },
            }),
            breakpoints: {
                xs: '30em',
                sm: '48em',
                md: '64em',
                lm: '52em',
                lg: '74em',
                xl: '90em',
            },
            fontFamily: "Inter, sans-serif",
            loader: "oval"


            // components: {
            //     Text: {
            //         styles: () => ({
            //             root: {
            //                 fontSize: '50px'
            //             }
            //         })
            //     }
            // }

        }}>
            <BrowserRouter>
                <Container sx={styles}>
                    <HeaderSimple
                        links={[{link: '/vacancies', label: 'Поиск Вакансий'}, {link: '/favorites', label: 'Избранное'}]}/>
                    <Routes>
                        <Route path={'/'} element={<Main/>}/>
                        <Route path={'/vacancy/:id'} element={<Vacancy/>}/>
                        <Route path={'/vacancies'} element={<Main/>}/>
                        <Route path={'/favorites'} element={<Favorites/>}/>
                    </Routes>
                </Container>
            </BrowserRouter>
        </MantineProvider>
    )
}

export default App;
