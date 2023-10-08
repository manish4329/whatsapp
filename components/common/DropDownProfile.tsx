"use client";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React, { useRef, useState } from "react";

const options = [
  "New group",
  "New community",
  "Starred messages",
  "Select chats",
  "Settings",
  "Log out",
];

const DropDownProfile: React.FC = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleClick = () => {
    console.log("Handle Click");
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleMenuItemClick = () => {
    console.log("handleMenuItemClick");
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? "split-button-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-label="dropDown"
        aria-haspopup="menu"
        onClick={handleToggle}
      >
        <KeyboardArrowDown />
      </IconButton>
      <Popper
        sx={{
          zIndex: 1,
        }}
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
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === 0}
                      onClick={() => handleMenuItemClick()}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default React.memo(DropDownProfile);
