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

const navItems = ["About", "Skills", "Projects", "Contact"];

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
  paddingRight: theme.spacing(5),
  fontSize: "13px",
  textTransform: "uppercase",
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
      <AppBar elevation={0} sx={{ borderBottom: 3, borderColor: "#00ADB5" }}>
        <Toolbar>
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
              style={{ width: "50px", height: "50px" }}
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
              <MenuIcon sx={{ fontSize: 30, color: "#00ADB5 " }} />
            </IconButton>

            <Drawer
              open={mobileNavIsOpen}
              onClose={() => setMobileNavIsOpen(false)}
              onClick={() => setMobileNavIsOpen(false)}
              anchor="top"
            >
              <List>
                {navItems.map((item) => (
                  <StyledListItem
                    key={item}
                    {...listItemProps}
                    to={item.toLowerCase()}
                    onClick={() => setMobileNavIsOpen(false)}
                  >
                    {item}
                  </StyledListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          {/* web */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            <List component={Stack} spacing={4} direction="row">
              {navItems.map((item) => (
                <StyledListItemWeb
                  key={item}
                  {...listItemProps}
                  to={item.toLowerCase()}
                >
                  {item}
                </StyledListItemWeb>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
