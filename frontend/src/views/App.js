import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Navigation } from '../components'
import { Root, Filtered } from '.'

import { loadInitialData } from '../actions/shared'
import { theme, navWidth } from '../helpers/theme'

const useStyles = makeStyles(() => ({
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
        paddingLeft: theme.spacing(1) + navWidth,
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        width: '100%',
    },
}))

/**
 * The main app that contains the entire page.
 * This also contains the theme provider.
 *
 * @class App
 * @extends {Component}
 */
const App = ({ dispatch }) => {
    const classes = useStyles()

    useEffect(() => dispatch(loadInitialData()), [dispatch])

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
                            <Route exact path="/:category" component={Filtered} />
                        </Switch>
                    </Grid>
                </Grid>
            </Router>
        </MuiThemeProvider>
    )
}

const mapDispatchToProps = dispatch => dispatch

export default connect(mapDispatchToProps)(App)
