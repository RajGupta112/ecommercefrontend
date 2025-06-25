import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';

const Navbar = () => {
  const theme=useTheme();
  const isLarge=useMediaQuery(theme.breakpoints.up("lg"))
  return (
    <>
      <Box>
        <div className='flex items-center justify-between px-2 lg:px-20 h-[70px] border-b'>
          <div>
            <div className='flex items-center gap-1'>
     <IconButton>
      <MenuIcon/>
     </IconButton>
     <h1 className='logo font-pacifico cursor-pointer text-lg md:text-2xl text-[#00927c]'>Stella</h1>
            </div>
          </div>
       <div className='flex items-center '>
        <IconButton>
        <SearchIcon/>
       </IconButton>
       {
        true ? <Button className='flex items-center gap-2'> <Avatar 
        sx={{width:29,height:29}}
        src='https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_1280.jpg'/>
         <h1 className='font-semibold hidden lg:block'>Stella</h1>
          </Button>:<Button>Login</Button>
       }
       <IconButton>
        <FavoriteBorder sx={{fontSize:29}}/>
       </IconButton>
       <IconButton>
        <AddShoppingCart className='text-gray-700'   sx={{fontSize:29}}/>
       </IconButton>
      {isLarge &&  <Button startIcon={<Storefront/>} variant='outlined'>
        Become Seller
       </Button>}
       </div>
        </div>
      </Box>
    </>
  )
}

export default Navbar
