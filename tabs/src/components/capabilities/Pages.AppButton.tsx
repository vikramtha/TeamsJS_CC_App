import { Flex, Input, Text } from "@fluentui/react-northstar";
import { app, pages } from "@microsoft/teams-js";

import React from "react";
import { booleanToString } from "../../helpers";
import { isMobile } from "react-device-detect";

/**
 * This component returns 
 */
export const PagesAppButton = () => {
    const [text, setText] = React.useState("");
    // Check to see if capability is isInitialized
    if (app.isInitialized()) {
        // check to see if app button is supported
        if (pages.appButton.isSupported()) {
            // register handler for hover over event
            pages.appButton.onHoverEnter(() => {
                console.log("onHoverEnter");
                setText("onHoverEnter");
            });
            // register handler for hover out event
            pages.appButton.onHoverLeave(() => {
                console.log("onHoverLeave");
                setText("onHoverLeave");
            });
            // register handler for click event
            pages.appButton.onClick(() => {
                console.log("onClick");
                setText("onClick");

            });
            return <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
                <Text content="Check the current app's icon in App Bar section and hover / click on it to see the effect" />
                <Input fluid value={text} />
            </Flex>;

        }
    } else {
        // return's if capability is not supported
        return <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">Capability is not supported</Flex>;;

    }
    // return's if capability is not initialized.
    return <>Capability is not initialized</>;
};

export const PagesAppButtonIsSupported = () => booleanToString(pages.appButton.isSupported());
