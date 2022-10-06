import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import {
  styled,
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../images/jt.svg";
const navItems = ["Skills", "Projects", "Contact"];

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  padding: theme.spacing(1, 0),
  "&:active": {
    backgroundColor: "#61C0BF",
  },
}));

const StyledListItemWeb = styled(ListItem)(({ theme }) => ({
  color: "#F5F5F5",
  "&:active": {
    borderBottom: "solid 2px #FF2E63",
  },
}));
const Navbar = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const handleOpenNavMenu = () => {
    setMobileNavIsOpen(!mobileNavIsOpen);
  };

  const listItemProps = {
    component: LinkS,
    spy: true,
    smooth: true,
    offset: 0,
    duration: 500,
  };

  return (
    <div>
      <AppBar
        position="sticky"
        sx={{ borderBottom: 3, borderColor: "#00ADB5" }}
      >
        <Toolbar>
          {/* fix: logo to home */}
          <LinkS
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img
              src={logo}
              alt="Joyce Tang"
              style={{ width: "70px", height: "70px" }}
            />
          </LinkS>

          {/* mobile */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
                flexDirection: "row-reverse",
              },
            }}
          >
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon sx={{ fontSize: 35, color: "#00ADB5 " }} />
            </IconButton>

            <Drawer
              open={mobileNavIsOpen}
              onClose={() => setMobileNavIsOpen(false)}
              onClick={() => setMobileNavIsOpen(false)}
              anchor="top"
            >
              <List>
                {navItems.map((item) => (
                  <ListItem
                    key={item}
                    {...listItemProps}
                    to={item.toLowerCase()}
                    onClick={() => setMobileNavIsOpen(false)}
                  >
                    <StyledListItem>{item} </StyledListItem>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          {/* web */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            <List component={Stack} spacing={4} direction="row">
              {navItems.map((item) => (
                <ListItem key={item} {...listItemProps} to={item.toLowerCase()}>
                  <StyledListItemWeb>{item} </StyledListItemWeb>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
