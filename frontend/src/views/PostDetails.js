import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { loadCommentSection } from '../actions/comments'

const useStyles = makeStyles(theme => ({}))

const PostDetails = ({ dispatch, match, comments }) => {
    const { category, postId } = match.params
    console.log(comments)

    useEffect(() => {
        const load = () => dispatch(loadCommentSection({ postId }))
        load()
    }, [postId, dispatch])
    return <Box>PostDetails</Box>
}

const mapStateToProps = ({ comments, dispatch }) => ({ comments, dispatch })

export default connect(mapStateToProps)(withRouter(PostDetails))
