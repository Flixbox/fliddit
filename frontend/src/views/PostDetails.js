import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { loadCommentSection } from '../actions/comments'

const useStyles = makeStyles(theme => ({}))

const PostDetails = ({ dispatch, match }) => {
    const { category, postId } = match.params

    useEffect(() => {
        const load = () => dispatch(loadCommentSection({ postId }))
        load()
    }, [postId, dispatch])
    return <Box>PostDetails</Box>
}

const mapDispatchToProps = dispatch => dispatch

export default connect(mapDispatchToProps)(withRouter(PostDetails))
