import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  ShopOutlined,
  CaretRightOutlined,
  SettingOutlined,
  ProfileOutlined,
  GroupOutlined,
} from "@ant-design/icons";

import "./styles.css";
import { NavLink, useLocation } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  let location = useLocation();

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo">
        <CaretRightOutlined />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["/"]}
        selectedKeys={[location.pathname]}
        defaultOpenKeys={["sub4"]}
        mode="inline"
      >
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>

        <SubMenu key="sub1" icon={<ShopOutlined />} title="Empresas">
          <Menu.Item key="/company/new">
            <NavLink to="/company/new">Cadastrar empresa</NavLink>
          </Menu.Item>
          <Menu.Item key="/company/list">
            <NavLink to="/company/list">Listar empresas</NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<GroupOutlined />} title="Unidades">
          <Menu.Item key="/unit/new">
            <NavLink to="/unit/new">Cadastrar unidade</NavLink>
          </Menu.Item>
          <Menu.Item key="/unit/list">
            <NavLink to="/unit/list">Listar unidades</NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<SettingOutlined />} title="Ativos">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="7">Team 2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<TeamOutlined />} title="Usuários">
          <Menu.Item key="/user/new">
            <NavLink to="/user/new">Cadastrar usuário</NavLink>
          </Menu.Item>
          <Menu.Item key="/user/list">
            <NavLink to="/user/list">Listar usuários</NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<ProfileOutlined />} title="Categorias">
          <Menu.Item key="/category/new">
            <NavLink to="/category/new">Cadastrar categoria</NavLink>
          </Menu.Item>
          <Menu.Item key="/category/list">
            <NavLink to="/category/list">Listar categorias</NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
