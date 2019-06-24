import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentCard from './CommentCard'

const useStyles = makeStyles(theme => ({}))

const CommentSection = ({ comments }) => {
    const classes = useStyles()

    return (
        <Box>
            {comments.map(comment => (
                <Box mt={1} key={comment.id}>
                    <CommentCard {...comment} />
                </Box>
            ))}
        </Box>
    )
}

export default CommentSection
