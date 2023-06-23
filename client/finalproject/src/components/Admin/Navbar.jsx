import * as React from 'react';
import "./adminnav.scss"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function Navbar() {
  const [state, setState] = React.useState({
    // top: false,
    left: false
    // bottom: false,
    // right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
  {[
    { text: 'Admin', link: '/admin' },
    { text: 'Hotelinfo', link: '/admin/homeadmin' },
    { text: 'About', link: '/admin/aboutadmin' },
    { text: 'Entertainment', link: '/admin/entadmin' },
    { text: 'Entertainmentimg', link: '/admin/entimgadmin' },
    { text: 'Media', link: '/admin/mediaadmin' },
    { text: 'Parties', link: '/admin/partiesimgadmin' },
    { text: 'Restaurants', link: '/admin/resadmin' },
    { text: 'Rooms', link: '/admin/roomadmin' },
    { text: 'Roominfo', link: '/admin/roominfoadmin' },
    { text: 'Spainfo', link: '/admin/spainfoadmin' },
    { text: 'SpaImages', link: '/admin/spaimages' },
    { text: 'Tour', link: '/admin/touradmin' },
    { text: 'Tourimg', link: '/admin/tourimgadmin' },  
  ].map(({ text, link }) => (
    <ListItem key={text} disablePadding>
      <ListItemButton component="a" href={link}>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div className='navadmin'>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className='hamburger' onClick={toggleDrawer(anchor, true)}><i class="fa-solid fa-bars"></i></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}