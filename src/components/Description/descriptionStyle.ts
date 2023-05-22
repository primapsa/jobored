import {createStyles, rem} from "@mantine/core";

export const useDescriptopnStyles = createStyles((theme) => ({
    paper: {
        width: `100%`,
        border: `1px solid #EAEBED`,
        borderRadius: rem(12),
        padding: rem(24),
        marginTop: rem(20),
        [theme.fn.smallerThan('xs')]: {
            padding: rem(12),
        }
    }
}));
