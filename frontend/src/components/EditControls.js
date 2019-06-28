import React from 'react'
import { Box, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => ({
    editControls: {
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'row',
        height: 'fit-content',
    },
}))

const EditControls = ({ editMode, onSave, onCancel, onEdit, onTrash }) => {
    const classes = useStyles()
    return (
        <Box className={classes.editControls}>
            {editMode ? (
                <>
                    <IconButton onClick={onSave}>
                        <FontAwesomeIcon icon="save" />
                    </IconButton>
                    <IconButton onClick={onCancel}>
                        <FontAwesomeIcon icon="window-close" />
                    </IconButton>
                </>
            ) : (
                <>
                    <IconButton onClick={onEdit}>
                        <FontAwesomeIcon icon="edit" />
                    </IconButton>
                    <IconButton onClick={onTrash}>
                        <FontAwesomeIcon icon="trash" />
                    </IconButton>
                </>
            )}
        </Box>
    )
}

export default EditControls
