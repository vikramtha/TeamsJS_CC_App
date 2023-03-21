import { Button, Flex } from "@fluentui/react-northstar";
import { app, pages } from "@microsoft/teams-js";

import { booleanToString } from "../../helpers";
import { useData } from "@microsoft/teamsfx-react";

/**
 * Provides APIs for querying and navigating between contextual tabs of an application. 
 * Unlike personal tabs, contextual tabs are pages associated with a specific context, such as channel or chat.
 */
export const PagesDeprecated = () => {

    const hubName = useData(async () => {
        await app.initialize();
        const context = await app.getContext();
        return context.app.host.name;
    })?.data;

    let commingSoon = <>Comming Soon</>;
    if (hubName === "Teams") {
        commingSoon = <></>;
    }
    // check to see if capability is supported
    // see TabConfig.tsx for more details on pages.config namespace usage
    if (!pages.isSupported()) { return (<></>); }
    // check to see if navigating back is supported
    if (pages.backStack.isSupported()) {
        // register back button event handler
        pages.backStack.registerBackButtonHandler(() => {
            console.log("Back button pressed");
            return true;
        });
    }
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
    // register handler for full screen event on a tab
    pages.registerFullScreenHandler(() => {
        console.log("fullScreenHandler");
    });

    return (
        <Flex gap="gap.small" vAlign="center">
            {commingSoon}
            {pages.tabs.isSupported() &&
                <>
                    <Button onClick={async () => {
                        const config = await pages.tabs.getTabInstances();
                        console.log(config)
                    }}>
                        Get tab instances
                    </Button>
                    <Button onClick={async () => {
                        const config = await pages.tabs.getMruTabInstances();
                        console.log(config);
                    }}>
                        Get Most Recently Used tab instances
                    </Button>
                    <Button onClick={async () => {
                        // only works for channel tabs, see
                        // https://stackoverflow.com/questions/62390440/msteams-development-navigate-between-personal-tabs
                        const baseUrl = `https://${window.location.hostname}:${window.location.port}`;
                        // deprecated? check docs
                        await pages.tabs.navigateToTab({
                            tabName: 'Terms of use',
                            entityId: 'tou1',
                            url: `${baseUrl}/index.html#/termsofuse`,
                            websiteUrl: `${baseUrl}/index.html#/termsofuse`
                        });
                    }}>
                        Navigate to tab
                    </Button>
                </>
            }
        </Flex>
    )
}

export const PagesDeprecatedIsSupported = () => booleanToString(pages.isSupported());
