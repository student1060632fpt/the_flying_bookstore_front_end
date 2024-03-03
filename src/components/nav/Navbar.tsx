"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { CiShoppingCart } from "react-icons/ci";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import logoImage from "./../../assets/images/logo.jpg";
import { Avatar, Button, useTheme } from "@mui/material";
import { BorderColor } from "@mui/icons-material";
import BookMenus from "./BookMenu";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import AvatarImage from "./../../assets/images/avatar.jpg";
import Link from "next/link";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 2),
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create("width"),
    color: theme.palette.primary.main,
    width: "100%",
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const theme = useTheme();
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{ marginTop: 6 }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Đăng xuất</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <CiShoppingCart />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <CiBellOn />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "background.paper" }}>
        <Toolbar>
          <Link href="/">
            <Button sx={{ textTransform: "none" }}>
              <Image
                src={logoImage}
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <Box sx={{ display: { xs: "none", sm: "block" }, ml: 2 }}>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                    lineHeight: 1.2,
                    fontSize: 26,
                  }}
                >
                  The Flying
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  textAlign="left"
                  sx={{
                    letterSpacing: 7,
                    fontWeight: "light",
                    fontFamily: "Montserrat",
                  }}
                >
                  bookstore
                </Typography>
              </Box>
            </Button>
          </Link>
          <Box sx={{ flexGrow: 0.5 }} />

          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              borderRadius: 1,
              backgroundColor: "#F8F8F8",
            }}
          >
            <BookMenus />
            <StyledInputBase
              placeholder="Tìm sách…"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <CiSearch size={25} />
            </SearchIconWrapper>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link href="/cart">
              <IconButton size="large" aria-label="show 4 new mails">
                <Badge badgeContent={5} color="error">
                  <CiShoppingCart color={theme.palette.primary.main} />
                </Badge>
              </IconButton>
            </Link>
            <IconButton size="large" aria-label="show 17 new notifications">
              <Badge badgeContent={17} color="error">
                <CiBellOn color={theme.palette.primary.main} />
              </Badge>
            </IconButton>

            <Button
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Image
                src={AvatarImage}
                alt="Name"
                width={40}
                height={40}
                className="rounded"
              />
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
