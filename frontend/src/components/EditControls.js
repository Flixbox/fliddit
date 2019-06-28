import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => ({
    editControls: {
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'row',
        height: 'fit-content',
    },
    icon: {
        margin: theme.spacing(1),
    },
}))

const EditControls = ({ editMode, retryMode, onSave, onCancel, onEdit, onTrash, onRetry }) => {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <Box className={classes.editControls} m={1}>
            {retryMode && (
                <Button onClick={onRetry}>
                    <Typography color="error">Retry?</Typography>
                    <FontAwesomeIcon
                        icon="sync"
                        className={classes.icon}
                        color={theme.palette.error.main}
                    />
                </Button>
            )}
            {editMode ? (
                <>
                    <Button onClick={onSave}>
                        Save
                        <FontAwesomeIcon icon="save" className={classes.icon} />
                    </Button>
                    <Button onClick={onCancel}>
                        Cancel
                        <FontAwesomeIcon icon="window-close" className={classes.icon} />
                    </Button>
                </>
            ) : (
                <>
                    <Button onClick={onEdit}>
                        Edit
                        <FontAwesomeIcon icon="edit" className={classes.icon} />
                    </Button>
                    <Button onClick={onTrash}>
                        Delete
                        <FontAwesomeIcon icon="trash" className={classes.icon} />
                    </Button>
                </>
            )}
        </Box>
    )
}

export default EditControls
