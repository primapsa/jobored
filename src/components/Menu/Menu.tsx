import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
           <ul>
               <li>
                   <NavLink to={'/vacancies'}>Поиск Вакансий</NavLink>
               </li>
               <li>
                   <NavLink to={'/favorites'}>Избранное</NavLink>
               </li>
           </ul>
        </div>
    );
};

export default Menu;