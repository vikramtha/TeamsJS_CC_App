import * as microsoftTeams from '@microsoft/teams-js';

import { Button, MenuButton } from '@fluentui/react-northstar';

import React from 'react';

const navItems = [
       {
              id: '0',
              title: 'Home',
              icon: "there is an <svg></svg> tag here but I shortened it for easier reading",
              enabled: true,
              viewData: null as any,
              selected: false,
       },
       {
              id: '1',
              title: 'News',
              icon: "there is an <svg></svg> tag here but I shortened it for easier reading",
              enabled: true,
              viewData: null as any,
              selected: false,
       },
       {
              id: '2',
              title: 'Contact',
              icon: "there is an <svg></svg> tag here but I shortened it for easier reading",
              enabled: true,
              viewData: null as any,
              selected: false,
       },
       {
              id: '3',
              title: 'About',
              icon: "there is an <svg></svg> tag here but I shortened it for easier reading",
              enabled: true,
              viewData: null as any,
              selected: false,
       },
       {
              id: '4',
              title: 'Dashboard',
              icon: "there is an <svg></svg> tag here but I shortened it for easier reading",
              enabled: true,
              viewData: null as any,
              selected: false,
       }
];
export interface INavProps {
}
interface INavState {
       menuId: string;
}
class SetNavBarMenu extends React.Component<INavProps, INavState> {
       constructor(props: any) {
              super(props);
              this.state = {
                     menuId: "0"
              }
       }

       public async componentDidMount() {
              microsoftTeams.menus.initialize();
              this.navBarMenu();
       }

       public navBarMenu = async () => {
              microsoftTeams.menus.setNavBarMenu(navItems, (id: string) => {
                     console.log(id);
                     this.setState({ menuId: id })
                     return true;
              });
       }

       public render() {
              let content;
              if (this.state.menuId === "0") {
                     content = navItems[0].title
              } else if (this.state.menuId === "1") {
                     content = navItems[1].title
              } else if (this.state.menuId === "2") {
                     content = navItems[2].title
              } else if (this.state.menuId === "3") {
                     content = navItems[3].title
              } else if (this.state.menuId === "4") {
                     content = navItems[4].title
              }
              return (
                     <>
                            <MenuButton
                                   trigger={<Button content={`Set NavBar Menu (${content})`} aria-label="Hover button" />}
                                   menu={['0', '1', '2', '3', '4']}
                                   on="click"
                                   onMenuItemClick={(e) => {
                                          this.setState({
                                                 menuId: e.currentTarget.textContent ? e.currentTarget.textContent : ""
                                          })
                                   }}

                            />
                     </>
              );
       }
}
export default SetNavBarMenu;