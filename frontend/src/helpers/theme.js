import { createMuiTheme } from '@material-ui/core/styles'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faUser, faTag } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faTag)

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
