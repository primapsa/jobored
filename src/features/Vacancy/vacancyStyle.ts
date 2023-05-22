import {createStyles, rem} from "@mantine/core";

export const useVacancyStyles = createStyles((theme) => ({

    wrapper: {
        width: rem(773),
        margin: `${rem(40)} auto`,
        padding: 0,
        [theme.fn.smallerThan('lg')]: {
            width: `100%`,
            padding: `0 ${rem(20)}`
        },
    }


}));