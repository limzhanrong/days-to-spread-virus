import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';

export default function CustomizedMenus({text, IconComponent, options, color="primary"}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () =>{
    setAnchorEl(null);
  }
  const customFunction = (func) => {
    func();
    handleClose();
  };


  return (
    <div>

      <Button 
        variant="contained" 
        onClick={handleClick}
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color={color}
        sx={{
            justifyContent: "flex-start",
            maxWidth: '300px', 
            maxHeight: '30px', 
            minWidth: '130px', 
            minHeight: '30px'
        }} 
        disableElevation
        startIcon={IconComponent}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {text}
      </Button>

      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
          options.map((option)=>{
            return (
            <MenuItem key={"menu" + option.name} onClick={()=>customFunction(option.function)}>
              {option.image && <Avatar sx={{ width: 36, height: 36, my:"auto" }} variant="square" src={option.image} />}
              {option.name}
            </MenuItem>)
          })
        }
      </Menu>
    </div>
  );
}