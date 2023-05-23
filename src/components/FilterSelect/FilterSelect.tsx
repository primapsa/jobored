import React, {useState} from 'react';
import {Select} from "@mantine/core";
import {IconChevronDown, IconChevronUp} from "@tabler/icons-react";
import {COLORS} from "../../const/colors";
import {useFilterSelectStyle} from "./filterSelectStyle";

const FilterSelect = ({catalog, currentCatalog, callBack}: FilterSelectPropsType) => {

    const {classes} = useFilterSelectStyle()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const onDropdownOpenHandler = () => setIsOpen(true)
    const onDropdownCloseHandler = () => setIsOpen(false)

    return (
        <Select
            data-elem="industry-select"
            mt="md" withinPortal
            data={catalog}
            placeholder="Выберите отрасль"
            label={'Отрасль'}
            value={currentCatalog}
            onChange={callBack}
            classNames={{
                label: classes.title,
                input: classes.select,
                rightSection: classes.selectRightSection,
                item: classes.selectItem
            }}
            onDropdownOpen={onDropdownOpenHandler}
            onDropdownClose={onDropdownCloseHandler}
            rightSection={isOpen ? <IconChevronUp color={COLORS.BLUE500}/> :
                <IconChevronDown color={COLORS.GRAY500}/>}/>
    );
};

export default FilterSelect;

type FilterSelectPropsType = {
    catalog: CatalogType[]
    currentCatalog: string | null
    callBack: (id: string | null) => void
}
type CatalogType = {
    value: string
    label: string
}