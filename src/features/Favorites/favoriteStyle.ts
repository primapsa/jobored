import {createStyles, rem} from "@mantine/core";

export const useFavoritesStyles = createStyles((theme) => ({
    wrapper: {
        width: '100%',
        maxWidth: rem(805),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: `${rem(24)} auto}`,
        [theme.fn.smallerThan('lm')]: {
            padding: `0 ${rem(16)}`
        },
    },
    pagination: {
        marginTop: rem(64)
    }
}));