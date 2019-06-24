import React from 'react'
import { Box, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
}))

const VoteControls = ({ voteScore, upvote, downvote }) => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <IconButton>
                <FontAwesomeIcon icon="arrow-circle-up" />
            </IconButton>
            <IconButton>
                <FontAwesomeIcon icon="arrow-circle-down" />
            </IconButton>
        </Box>
    )
}

export default VoteControls
