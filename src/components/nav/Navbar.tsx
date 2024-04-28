"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CiBag1 } from "react-icons/ci";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { CiShoppingCart } from "react-icons/ci";
import MoreIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import logoImage from "./../../assets/images/logo.jpg";
import { Alert, Button, Divider, Snackbar, useTheme } from "@mui/material";
import BookMenus from "./BookMenu";
import { CiBellOn } from "react-icons/ci";
import AvatarImage from "@/assets/images/no avatar.jpeg";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useStoreCart } from "@/hooks/cart";
import { useAuthStore } from "@/hooks/user";
import { IAlert } from "@/app/(auth)/sign-up/[[...sign-up]]/page";
import AlertSignOut from "./AlertSignOut";
import { getAllOrder } from "../../api/order";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const theme = useTheme();
  const [orderNumber, setOrderNumber] = React.useState(0);
  const cart = useStoreCart((state) => state.cart);
  const [alert, setAlert] = React.useState<IAlert>({
    open: false,
    message: "",
    severity: "success",
  });
  const [menuOrderOpen, setMenuOrderOpen] = React.useState<null | HTMLElement>(
    null
  );
  const { isLogin, profile, removeToken } = useAuthStore();
  const openMenu = Boolean(menuOrderOpen);
  const handleClickOpenMenuOrder = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setMenuOrderOpen(event.currentTarget);
  };
  const handleCloseMenuOrder = () => setMenuOrderOpen(null);
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
  const logout = () => {
    removeToken();
    setAlert({
      message: "Đăng xuất thành công",
      severity: "success",
      open: true,
    });
    handleMenuClose();
  };

  React.useEffect(() => {
    const callApiGetAllOrder = async () => {
      if (!profile?.id) return;
      return await getAllOrder(profile?.id).then((res) => {
        if (res && Array.isArray(res)) {
          setOrderNumber(res?.length);
        }
      });
    };
    callApiGetAllOrder();
  }, []);

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
      <MenuItem onClick={handleMenuClose}>Chào {profile?.username}</MenuItem>
      <MenuItem onClick={handleMenuClose}>Cài đặt</MenuItem>
      <MenuItem onClick={logout}>Đăng xuất</MenuItem>
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
          <Badge badgeContent={cart ? 1 : 0} color="error">
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
  const renderOrderMenu = (
    <Menu
      id="order-menu"
      anchorEl={menuOrderOpen}
      open={openMenu}
      onClose={handleCloseMenuOrder}
      MenuListProps={{ "aria-labelledby": "order-button" }}
    >
      <Link href={"/my-order"}>
        <MenuItem onClick={handleCloseMenuOrder}>Đơn hàng của tôi</MenuItem>
      </Link>
      <MenuItem onClick={handleCloseMenuOrder}>Đơn hàng của khách</MenuItem>
    </Menu>
  );

  const renderIsAuth = React.useCallback(() => {
    if (!isLogin) {
      return (
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Link href="/login">
            <Button variant="outlined" size="medium">
              Đăng nhập
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="contained" size="medium">
              Đăng ký
            </Button>
          </Link>
        </Box>
      );
    }

    return (
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Link href="/my-order">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            aria-controls={openMenu ? "order-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClickOpenMenuOrder}
          >
            <Badge badgeContent={orderNumber} color="error">
              <CiBag1 color={theme.palette.primary.main} />
            </Badge>
          </IconButton>
        </Link>
        <Link href="/cart">
          <IconButton size="large" aria-label="show 4 new mails">
            <Badge badgeContent={cart ? 1 : 0} color="error">
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
            src={profile?.avatarUrl ? profile?.avatarUrl : AvatarImage}
            alt="Name"
            width={40}
            height={40}
            className="rounded"
          />
        </Button>
      </Box>
    );
  }, [isLogin, cart]);
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
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          {renderIsAuth()}
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
      {renderOrderMenu}
      <AlertSignOut alert={alert} setAlert={setAlert} />
    </div>
  );
}
