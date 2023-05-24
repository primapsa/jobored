import React from 'react';
import {formatSalary} from "../../utils/formatSalary";
import {Button, Container, Paper} from "@mantine/core";
import {useItemStyles} from "./itemStyle";
import {IconMapPin} from '@tabler/icons-react';
import Star from "../Star/Star";
import {COLORS} from "../../const/colors";

const ItemSimple = ({
                        id, profession, payment_from, payment_to, currency, type_of_work,
                        town, favorite, favoriteCallback
                    }: ItemPropsType) => {
    const {classes} = useItemStyles()
    const salary = formatSalary(payment_from, payment_to)
    const delimiter = salary ? '•' : ''
    const onClickHandler = () => favoriteCallback(id, !favorite)

    return (
        <Paper className={classes.itemSimple} data-elem={`vacancy-${id}`}>
            <Container className={classes.itemHeader}>
                <span className={classes.itemLinkSimple}>{profession}</span>
                <Button
                    data-elem={`vacancy-${id}-shortlist-button`}
                    className={classes.star}
                    classNames={{
                        rightIcon: classes.buttonRightIcon,
                        root: classes.buttonRoot
                    }}
                    onClick={onClickHandler}
                    rightIcon={<Star isFilled={favorite}/>}
                ></Button>
            </Container>
            <Container className={classes.itemMainSimple}>
                <span className={classes.itemSalarySimple}>{salary ? `${salary} ${currency}` : ''}</span>
                <span className={classes.itemDelimiter}>{delimiter}</span>
                <span className={classes.itemWorkSimple}>{type_of_work}</span>
            </Container>
            <Container className={classes.itemFooter}>
                <IconMapPin color={COLORS.GRAY500} height={20} width={20}/>
                <span className={classes.itemTownSimple}>{town}</span>
            </Container>
        </Paper>
    );
};

export default ItemSimple;

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
}