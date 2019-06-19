import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Navigation } from '../components'
import { Root } from '.'

// import { handleInitialData } from '../actions/shared'
import { theme } from '../helpers/theme'
import { Grid } from '@material-ui/core'

/**
 * The main app that contains the entire page.
 * This also contains the theme provider.
 *
 * @class App
 * @extends {Component}
 */
const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Grid container>
                    <Grid item xs={12} md={1}>
                        <Navigation />
                    </Grid>
                    <Grid item>
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
