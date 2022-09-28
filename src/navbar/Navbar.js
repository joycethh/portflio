import React from "react";
import { Link as LinkS } from "react-scroll";
import {
  styled,
  AppBar,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../images/jt.svg";
const navItems = ["Skills", "Projects", "Contact"];

const StyledAppBar = styled(AppBar)({
  borderBottom: "3px solid #00ADB5",
});

const Navbar = () => {
  return (
    <div>
      <StyledAppBar position="sticky">
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
              style={{ width: "55px", height: "55px" }}
            />
          </LinkS>
          {/* mobile */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", justifyContent: "center" },
            }}
          ></Box>
          {/* not mobile */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {navItems.map((item) => (
              <MenuItem key={item}>
                <LinkS
                  activeClass="active"
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item}
                </LinkS>
              </MenuItem>
            ))}
          </Box>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};

export default Navbar;
