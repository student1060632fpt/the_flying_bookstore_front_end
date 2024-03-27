import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import Image from "next/image";
import AvaImg from "./../../assets/images/avatar.jpg";
import { CiUser, CiBag1, CiViewList } from "react-icons/ci";
import { PiBriefcaseLight } from "react-icons/pi";
import Link from "next/link";

const MenuProfile = () => {
  return (
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <div className="relative w-14 h-14">
            <Image
              src={AvaImg}
              alt="ava"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </ListItemIcon>
        <ListItemText sx={{ ml: 2 }}>Chào Hòa</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <CiUser />
        </ListItemIcon>
        <Link href="/profile">
          <ListItemText>Cài đặt tài khoản</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <CiBag1 />
        </ListItemIcon>
        <Link href="/my-order">
          <ListItemText>Quản lý đơn hàng của tôi</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <PiBriefcaseLight />
        </ListItemIcon>
        <Link href="/customer-order">
          <ListItemText>Quản lý đơn hàng của khách</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <CiViewList />
        </ListItemIcon>
        <Link href="/manager-post">
          <ListItemText>Quản lý bài đăng</ListItemText>
        </Link>
      </MenuItem>
    </MenuList>
  );
};

export default MenuProfile;
