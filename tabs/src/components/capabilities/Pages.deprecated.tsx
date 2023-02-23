import { Button, Flex } from "@fluentui/react-northstar";

import { booleanToString } from "../../helpers";
import { pages } from "@microsoft/teams-js";

export const PagesDeprecated = () => {
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
                            tabName: 'Dialog',
                            entityId: 'dialog',
                            url: `${baseUrl}/index.html#/dialog`,
                            websiteUrl: `${baseUrl}/index.html#/dialog`
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
