import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { Container, UserMenuContainer } from './styles';
import { UserStateInterface } from '../../store/reducers/userReducer/types';
import { logoutUser } from '../../store/actions';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const userState = useSelector((state: UserStateInterface) => state.user);
  const dispatch = useDispatch();
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const { user } = userState;
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <Container>
      <Typography component="p">BChat</Typography>
      <UserMenuContainer
        onClick={handleToggle}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography component="p">{`${user.firstName} ${user.lastName}`}</Typography>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="menu-list-grow">
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem
                      onClick={(e: React.MouseEvent) => {
                        dispatch(logoutUser());
                        handleClose(e);
                      }}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </UserMenuContainer>
    </Container>
  );
};

export default Navbar;
