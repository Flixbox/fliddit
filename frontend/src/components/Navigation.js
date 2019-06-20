import React from 'react'
import { Link } from 'react-router-dom'
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

const NavigationItem = ({ title, subtitle, route = '/' }) => {
    return (
        <Link to={route} replace>
            <ListItem button>
                <ListItemText primary={title} secondary={subtitle} />
            </ListItem>
        </Link>
    )
}

export default Navigation
