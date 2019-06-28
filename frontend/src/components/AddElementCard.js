import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
    Box,
    Typography,
    Card,
    CardActions,
    Chip,
    Avatar,
    Input,
    IconButton,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { VoteControls, EditControls } from '.'
import { vote, editComment, deleteComment } from '../actions/comments'

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
}))

const AddElementCard = ({ children, onSubmit }) => {
    const classes = useStyles()
    return (
        <Card>
            <Box className={classes.details}>
                <Box className={classes.content}>{children}</Box>
                <Box className={classes.editControls}>
                    <IconButton onClick={onSubmit}>
                        <FontAwesomeIcon icon="paper-plane" />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    )
}

const mapDispatchToProps = dispatch => dispatch

export default connect(mapDispatchToProps)(AddElementCard)
