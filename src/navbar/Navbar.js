import React from "react";
import { Link as LinkS } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Typography,
  styled,
} from "@mui/material";

const navItems = ["Skills", "Projects", "Contact"];

const Navbar = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          {/* fix: logo to home */}

          {navItems.map((item) => (
            <Button key={item}>
              <LinkS
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item}
              </LinkS>
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
