import React from 'react'
import { Drawer, ListItem, List, ListItemText, Divider } from '@material-ui/core'

const Navigation = () => {
    return (
        <Drawer variant="permanent" open>
            <List>
                <NavigationItem title="FLIDDIT" subtitle="A social platform" />
                <Divider />
                <NavigationItem title="My Account" />
                <Divider />
            </List>
        </Drawer>
    )
}

const NavigationItem = ({ title, subtitle }) => {
    return (
        <ListItem button>
            <ListItemText primary={title} secondary={subtitle} />
        </ListItem>
    )
}

export default Navigation
