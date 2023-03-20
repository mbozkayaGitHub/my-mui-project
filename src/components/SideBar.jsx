import { AccountBox, Groups, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch,} from '@mui/material'
import React from 'react'

const SideBar = () => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
          <List>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#home">
              <ListItemIcon>
              <Home/>
           
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#Pages">
              <ListItemIcon>
              <Home/>
           
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#home">
              <ListItemIcon>
              <Groups/>
           
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon>
              <Storefront/>
           
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon>
              <Person/>
           
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon>
              <Settings/>
           
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon>
              <AccountBox/>
           
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon>
              <ModeNight/>
           
              </ListItemIcon>
          <Switch> </Switch>
            </ListItemButton>
          </ListItem>
             </List>
    </Box >
  )
};

export default SideBar