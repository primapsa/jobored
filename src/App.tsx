import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Main from "./features/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Favorites from "./features/Favorites/Favorites";
import Vacancy from "./features/Vacancy/Vacancy";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/vacancy/:id'} element={<Vacancy/>}/>
                <Route path={'/vacancies'} element={<Main/>}/>
                <Route path={'/favorites'} element={<Favorites/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
