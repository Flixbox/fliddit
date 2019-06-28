import React from 'react'
import { connect } from 'react-redux'
import { Box, Card, IconButton, Button, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => ({
    details: {
        display: 'flex',
        flexDirection: 'row',
    },
    editControls: {
        marginLeft: 'auto',
    },
    content: {
        padding: theme.spacing(1),
        width: '100%',
    },
    icon: {
        margin: theme.spacing(1),
    },
}))

const AddElementCard = ({ children, retryMode, onSubmit, onRetry }) => {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <Card>
            <Box className={classes.details}>
                <Box className={classes.content}>{children}</Box>
                <Box className={classes.editControls} m={1}>
                    {retryMode ? (
                        <Button onClick={onRetry}>
                            <Typography color="error">Retry?</Typography>
                            <FontAwesomeIcon
                                icon="sync"
                                className={classes.icon}
                                color={theme.palette.error.main}
                            />
                        </Button>
                    ) : (
                        <Button onClick={onSubmit}>
                            Add
                            <FontAwesomeIcon icon="paper-plane" className={classes.icon} />
                        </Button>
                    )}
                </Box>
            </Box>
        </Card>
    )
}

const mapDispatchToProps = dispatch => dispatch

export default connect(mapDispatchToProps)(AddElementCard)
