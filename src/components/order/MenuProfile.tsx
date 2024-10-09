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
const sizeIcon = 22;
const menuItems = [
  {
    href: '/profile',
    icon: <CiUser size={sizeIcon} />,
    text: 'Cài đặt tài khoản',
  },
  {
    href: '/my-order/0',
    icon: <CiBag1 size={sizeIcon} />,
    text: 'Đơn thuê',
  },
  {
    href: '/customer-order',
    icon: <PiBriefcaseLight size={sizeIcon} />,
    text: 'Đơn cho thuê',
  },
  {
    href: '/buy-order',
    icon: <CiBag1 size={sizeIcon} />,
    text: 'Đơn mua',
  },
  {
    href: '/sell-order',
    icon: <PiBriefcaseLight size={sizeIcon} />,
    text: 'Đơn bán',
  },
  {
    href: '/manager-post',
    icon: <CiViewList size={sizeIcon} />,
    text: 'Quản lý bài đăng',
  },
  {
    href: '/manager-post/add-post',
    icon: <CiCirclePlus size={sizeIcon} />,
    text: 'Thêm bài đăng',
  },
];
const MenuProfile = () => {
  const { profile } = useAuthStore();

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <Link key={index} href={item.href}>
        <MenuItem sx={{ py: 1.5, px: 2 }}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>{item.text}</ListItemText>
        </MenuItem>
      </Link>
    ));
  };
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
        <ListItemText sx={{ ml: 2 }}>Chào {profile?.firstName ? profile?.firstName : profile?.username}</ListItemText>
      </MenuItem>
      <Divider />
      {renderMenuItems()}
    </MenuList>
  );
};

export default MenuProfile;
