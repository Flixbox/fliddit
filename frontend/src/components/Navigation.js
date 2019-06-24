import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Drawer, ListItem, List, ListItemText, Divider } from '@material-ui/core'

const Navigation = ({ categories }) => {
    return (
        <Drawer variant="permanent" open>
            <List>
                <NavigationItem title="FLIDDIT" subtitle="A social platform" />
                <Divider />
                <NavigationItem title="My Account" />
                <Divider />
                {Object.keys(categories).length &&
                    Object.keys(categories).map(id => (
                        <NavigationItem
                            title={categories[id].name}
                            key={id}
                            route={`/${categories[id].path}`}
                        />
                    ))}
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

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps)(Navigation)
