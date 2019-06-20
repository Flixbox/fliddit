import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Navigation } from '../components'
import { Root } from '.'

// import { handleInitialData } from '../actions/shared'
import { theme, navWidth } from '../helpers/theme'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    '@global': {
        a: {
            textDecoration: 'none',
            color: 'inherit',
        },
    },
    nav: {
        width: navWidth,
    },
    content: {
        paddingLeft: theme.spacing(1),
        paddingTop: theme.spacing(1),
    },
}))

/**
 * The main app that contains the entire page.
 * This also contains the theme provider.
 *
 * @class App
 * @extends {Component}
 */
const App = () => {
    const classes = useStyles()
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Grid container>
                    <Grid item className={classes.nav}>
                        <Navigation />
                    </Grid>
                    <Grid item className={classes.content}>
                        <Switch>
                            <Route exact path="/" component={Root} />
                        </Switch>
                    </Grid>
                </Grid>
            </Router>
        </MuiThemeProvider>
    )
}

export default App
