import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {VacancyResponseType} from "../../api/api";
import Plug from "../../components/Plug/Plug";
import {fetchFavorite, setFavorite} from "../../redux/jobReducer";
import Item from "../../components/Item/Item";

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector<AppStateType, VacancyResponseType[]>(state => state.job.favorites)
    useEffect(() => {
        dispatch<AppDispatch>(fetchFavorite())
    }, [])
    const favoriteCallback = (id: number, isFavorite: boolean) => dispatch<AppDispatch>(setFavorite(id, isFavorite))
    const list = favorites.map(v => <Item key={v.id}
                                          id={v.id}
                                          profession={v.profession}
                                          payment_from={v.payment_from}
                                          payment_to={v.payment_to}
                                          type_of_work={v.type_of_work.title}
                                          currency={v.currency}
                                          town={v.town.title}
                                          favorite={v.favorite}
                                          favoriteCallback={favoriteCallback}
                                          blankCallback={()=>{}}
        />
    )
    return (
        <div>
            {list.length ? list : <Plug/>}
        </div>
    );
};

export default Favorites;