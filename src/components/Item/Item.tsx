import React from 'react';
import {formatSalary} from "../../utils/formatSalary";
import {Link} from "react-router-dom";
import {Button, Container, Paper} from "@mantine/core";
import {useItemStyles} from "./itemStyle";
import {IconMapPin} from '@tabler/icons-react';
import Star from "../Star/Star";

const Item = ({
                  id, profession, payment_from, payment_to, currency, type_of_work,
                  town, favorite, favoriteCallback, blankCallback, style
              }: ItemPropsType) => {
    const {classes} = useItemStyles()
    const salary = formatSalary(payment_from, payment_to)
    const delimiter = salary ? '•' : ''
    const onClickHandler = () => favoriteCallback(id, !favorite)
    const onClickBlankHandler = () => {
    }
    return (
        <Paper className={classes.item} data-elem={`vacancy-${id}`}>
            <Container className={classes.itemHeader}>
                <Link to={`/vacancy/${id}`} className={classes.itemLink}
                      onClick={onClickBlankHandler}>{profession}</Link>
                <Button
                    data-elem={`vacancy-${id}-shortlist-button`}
                    className={classes.star}
                    classNames={{rightIcon: classes.buttonRightIcon,
                    root: classes.buttonRoot}}
                    onClick={onClickHandler}
                    rightIcon={<Star isFilled={favorite}/>}
                ></Button>
            </Container>
            <Container className={classes.itemMain}>
                <span className={classes.itemSalary}>{salary ? `${salary} ${currency}` : ''}</span>
                <span className={classes.itemDelimiter}>{delimiter}</span>
                <span className={classes.itemWork}>{type_of_work}</span>
            </Container>
            <Container className={classes.itemFooter}>
                <IconMapPin color={'#ACADB9'} height={20} width={20}/>
                <span className={classes.itemTown}>{town}</span>
            </Container>
        </Paper>
    );
};

export default Item;

type ItemPropsType = {
    id: number
    profession: string
    payment_from: number
    payment_to: number
    type_of_work: string
    currency: string
    town: string
    favorite: boolean
    favoriteCallback: (id: number, isFavorite: boolean) => void
    blankCallback: (id: number) => void
    style?: any
}