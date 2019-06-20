import { createMuiTheme } from '@material-ui/core/styles'

export const navWidth = 200

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
    overrides: {
        MuiDrawer: {
            paper: {
                width: `${navWidth}px`,
                maxWidth: `${navWidth}px`,
            },
        },
    },
    typography: { useNextVariants: true },
})
