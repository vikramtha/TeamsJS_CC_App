import { Flex, Text } from "@fluentui/react-northstar";

import { booleanToString } from "../../helpers";
import { pages } from "@microsoft/teams-js";

export const Pages = () => {
    // check to see if capability is supported
    // see TabConfig.tsx for more details on pages.config namespace usage
    if (!pages.isSupported()) { return (<></>); }

    // check to see if app button is supported
    if (pages.appButton.isSupported()) {
        // register handler for hover over event
        pages.appButton.onHoverEnter(() => {
            console.log("onHoverEnter");
        });
        // register handler for hover out event
        pages.appButton.onHoverLeave(() => {
            console.log("onHoverLeave");
        });
        // register handler for click event
        pages.appButton.onClick(() => {
            console.log("onClick");
        });
    }

    return (
        <Flex gap="gap.small" vAlign="center">
            <Text content="Please check the Tabs (Navigate Back, Navigate To App, Return Focus To App, Return Focus To Search, Share Link, Set Current frame)" />

        </Flex>
    )
}

export const PagesIsSupported = () => booleanToString(pages.isSupported());
export const PagesCurrent = () => booleanToString(pages.currentApp.isSupported());
