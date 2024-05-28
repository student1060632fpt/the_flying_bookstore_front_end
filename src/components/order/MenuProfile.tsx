"use client";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import Image from "next/image";
import AvaImg from "@/assets/images/no avatar.jpeg";
import { CiUser, CiBag1, CiViewList, CiCirclePlus } from "react-icons/ci";
import { PiBriefcaseLight } from "react-icons/pi";
import Link from "next/link";
import { useAuthStore } from "../../hooks/user";

const MenuProfile = () => {
  const { profile } = useAuthStore();
  return (
    <MenuList>
      <MenuItem sx={{ py: 1.5, px: 2 }}>
        <ListItemIcon>
          <div className="relative w-14 h-14">
            <Image
              src={profile?.avatarUrl ? profile?.avatarUrl : AvaImg}
              alt="ava"
              sizes="14"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </ListItemIcon>
        <ListItemText sx={{ ml: 2 }}>Chào {profile?.firstName}</ListItemText>
      </MenuItem>
      <Divider />
      <Link href="/profile">
        <MenuItem sx={{ py: 1.5, px: 2 }}>
          <ListItemIcon>
            <CiUser size={22} />
          </ListItemIcon>
          <ListItemText>Cài đặt tài khoản</ListItemText>
        </MenuItem>
      </Link>
      <Link href="/my-order/0">
        <MenuItem sx={{ py: 1.5, px: 2 }}>
          <ListItemIcon>
            <CiBag1 size={22} />
          </ListItemIcon>
          <ListItemText>Quản lý đơn hàng của tôi</ListItemText>
        </MenuItem>
      </Link>
      <Link href="/customer-order">
        <MenuItem sx={{ py: 1.5, px: 2 }}>
          <ListItemIcon>
            <PiBriefcaseLight size={22} />
          </ListItemIcon>
          <ListItemText>Quản lý đơn hàng của khách</ListItemText>
        </MenuItem>
      </Link>
        <MenuItem sx={{ py: 1.5, px: 2 }}>
          <ListItemIcon>
            <CiViewList size={22} />
          </ListItemIcon>
          <ListItemText>Quản lý bài đăng</ListItemText>
        </MenuItem>
        <MenuItem sx={{ py: 1.5, px: 2 }}>
          <ListItemIcon>
            <CiCirclePlus size={22} />
          </ListItemIcon>
          <ListItemText>Thêm bài đăng</ListItemText>
        </MenuItem>
    </MenuList>
  );
};

export default MenuProfile;
