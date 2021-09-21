import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

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
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function Navbar(props) {
  const [selectedOpt,setSelctedOpt]=useState();
  const history=useHistory();
  const handelOptChange=(index)=>{
    setSelctedOpt(index);
    // props.handeNavOptChangeEvent(index);
    switch (index) {
      case 1:
        history.push('/home')
        break;
      case 2:
        history.push('/cities')
        break;
      case 3:
        history.push('/addNewCity')
        break;
      case 4:
        history.push('/aboutUs')
        break;
      case 4:
        history.push('/contactUs')
        break;
    
      default:
        break;
    }
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:'#05214f'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>

          <div style={{marginRight:'1rem',fontSize:20,cursor:'pointer',textDecoration:(selectedOpt===1) ? 'UnderLine' : '',}} onClick={()=>{
            handelOptChange(1);
          }}>Home</div>
          {/* <div style={{marginRight:'1rem',fontSize:20,cursor:'pointer',textDecoration:(selectedOpt===2) ? 'UnderLine' : '',}} onClick={()=>{
            handelOptChange(2);
          }}>Cities</div> */}
          <div style={{marginRight:'1rem',fontSize:20,cursor:'pointer',textDecoration:(selectedOpt===3) ? 'UnderLine' : '',}} onClick={()=>{
            handelOptChange(3);
          }}>Add New City</div>
          <div style={{marginRight:'1rem',fontSize:20,cursor:'pointer',textDecoration:(selectedOpt===4) ? 'UnderLine' : '',}} onClick={()=>{
            handelOptChange(4);
          }}>About Us</div>
        <div style={{marginRight:'1rem',fontSize:20,cursor:'pointer',textDecoration:(selectedOpt===5) ? 'UnderLine' : '',}} onClick={()=>{
            handelOptChange(5);
          }}>Contact Us</div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
