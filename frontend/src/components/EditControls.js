import React from 'react'
import { Box, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => ({
    editControls: {
        marginLeft: 'auto',
    },
}))

const EditControls = ({ editMode, onSaveClick, onCancelClick, onEditClick, onTrashClick }) => {
    const classes = useStyles()
    return (
        <Box className={classes.editControls}>
            {editMode ? (
                <>
                    <IconButton onClick={onSaveClick}>
                        <FontAwesomeIcon icon="save" />
                    </IconButton>
                    <IconButton onClick={onCancelClick}>
                        <FontAwesomeIcon icon="window-close" />
                    </IconButton>
                </>
            ) : (
                <>
                    <IconButton onClick={onEditClick}>
                        <FontAwesomeIcon icon="edit" />
                    </IconButton>
                    <IconButton onClick={onTrashClick}>
                        <FontAwesomeIcon icon="trash" />
                    </IconButton>
                </>
            )}
        </Box>
    )
}
