import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material"
import Image from "next/image"
import AvaImg from "./../../assets/images/avatar.jpg";
import { CiUser, CiBag1, CiViewList } from "react-icons/ci";
import { PiBriefcaseLight } from "react-icons/pi";

const MenuProfile = () => {
  return (
    <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <div className="relative w-14 h-14">
                    <Image src={AvaImg} alt="ava" fill className="object-cover rounded-full" />
                  </div>
                </ListItemIcon>
                <ListItemText sx={{ml: 2}}>
                  Chào Hòa
                </ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <CiUser />
                </ListItemIcon>
                <ListItemText>Cài đặt tài khoản</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CiBag1 />
                </ListItemIcon>
                <ListItemText>Quản lý đơn hàng của tôi</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <PiBriefcaseLight />
                </ListItemIcon>
                <ListItemText>Quản lý đơn hàng của khách</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CiViewList />
                </ListItemIcon>
                <ListItemText>Quản lý bài đăng</ListItemText>
              </MenuItem>
            </MenuList>
  )
}

export default MenuProfile