'use client'

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { usePathname } from 'next/navigation'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  
  const pathname = usePathname()
  const [isBackVisible,setIsBackVisible] = React.useState(false)
  
  React.useEffect(()=>{
  //  console.log(pathname) 
   if (pathname != '/') {
    setIsBackVisible(true)
   } else {
    setIsBackVisible(false)
   }
  }, [pathname])
  
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar sx={{display:'flex',justifyContent:'center',alignItems:'space-around'}}>
          <div className='flex flex-row justify-between items-center w-full'>
          <div className='flex flex-row'>
          {/* {isBackVisible && <Link type="button" href="/"><Button variant="outlined"><ArrowBackIcon fontSize="small"/> back</Button></Link>} */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            <Link style={{position:'relative',right:'0%'}} href={'/'}>CS2SMOKES</Link>
          </Typography>
          </div>

          <Link href={'/liked'}><BookmarkIcon /></Link>
          </div>


          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    // </Box>
  );
}

function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const map_list = [
        {
            name: 'Mirage',
            code:'mirage',
        },
        {
          name: 'Inferno',
          code:'inferno',
      }
    ]
  
    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {map_list.map(({name, code}) => (
            <ListItem key={code} disablePadding>
              <ListItemButton>
                <Link href={`/mirage`}><ListItemText primary={name} /></Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    );
  
    return (
      <div>
        <MenuIcon className='mr-3' onClick={toggleDrawer(true)}/>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    );
  }