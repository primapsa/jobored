import React from 'react';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../const/routes";

const Menu = () => {
    return (
        <div>
           <ul>
               <li>
                   <NavLink to={`/${ROUTES.VACANCIES}`}>Поиск Вакансий</NavLink>
               </li>
               <li>
                   <NavLink to={`/${ROUTES.FAVORITES}`}>Избранное</NavLink>
               </li>
           </ul>
        </div>
    );
};

export default Menu;