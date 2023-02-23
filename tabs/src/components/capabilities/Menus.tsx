import { Button, Flex } from "@fluentui/react-northstar";

import SetNavBarMenu from "./SetNavBarMenu";
import { booleanToString } from "../../helpers";
import { menus } from "@microsoft/teams-js";

export const Menus = () => {
    // check to see if capability is supported
    if (menus.isSupported()) {
        menus.initialize();
        const menuItem: menus.MenuItem = {
            id: '1',
            enabled: true,
            icon: '',
            selected: true,
            title: 'test menu',
            displayMode: menus.DisplayMode.ifRoom,
            viewData: {
                listTitle: 'test menu list',
                listType: menus.MenuListType.dropDown,
                listItems: [
                    {
                        id: '1-1',
                        enabled: true,
                        icon: '',
                        selected: true,
                        title: 'test menu list1'
                    }
                ]
            }
        }

        return (
            <Flex gap="gap.small" vAlign="center">
                <Button onClick={() => {
                    menus.setUpViews([{ id: "1", title: "View 1" }], (id: string) => {
                        console.log(id);
                        return true;
                    });
                }}>
                    Setup Views
                </Button>
                <SetNavBarMenu />

                <Button onClick={() => {
                    menus.showActionMenu({ items: [menuItem], title: "Menu Title" }, (id: string) => {

                        return true;
                    });
                }}>
                    Show Action Menu
                </Button>
            </Flex>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const MenusIsSupported = () => booleanToString(menus.isSupported());
