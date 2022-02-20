import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function PopoverNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div >
      <AccountCircleIcon aria-describedby={id} onClick={handleClick} sx={{fontSize: 50}} className="botoncuenta"/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        
      >
        <Typography sx={{ p: 2 }} className='pophover'>
            <h4>Sign-in</h4>
            <label>Email:</label>
            <input type="email" placeholder='exaple@mail.com' className='input'></input>
            <label>Password:</label>
            <input type="password" placeholder='*********' className='input'></input>
            <h4>¿You still don’t have an account?</h4>
            <button>Click to register</button>
        </Typography>
      </Popover>
    </div>
  );
}
