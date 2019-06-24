import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => ({}))

const VoteControls = ({ voteScore, upvote, downvote }) => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <FontAwesomeIcon icon="arrow-circle-up" />
            <FontAwesomeIcon icon="arrow-circle-down" />
        </Box>
    )
}

export default VoteControls
