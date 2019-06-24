import React from 'react'
import { Box, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}))

const VoteControls = ({ voteScore, upvote, downvote }) => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <IconButton onClick={upvote}>
                <FontAwesomeIcon icon="arrow-circle-up" />
            </IconButton>
            <Typography>{voteScore}</Typography>
            <IconButton onClick={downvote}>
                <FontAwesomeIcon icon="arrow-circle-down" />
            </IconButton>
        </Box>
    )
}

export default VoteControls
