import * as Fluent from "@fluentui/react-northstar";

import { app, pages } from "@microsoft/teams-js";

/**
 * This component returns a button which navigate to the currently 
 * running application's first static page defined in the application manifest
 */
export const NavigateToDefaultPage = () => {
    // Check if app is initialized;
    if (app.isInitialized()) {
        return (
            <>
                {pages.currentApp.isSupported() && (
                    <Fluent.Segment className="ui-pagessegment">
                        <Fluent.Header content="Navigate To Default Page (Pages.CurrentApp)" as="h3" />
                        <Fluent.Flex gap="gap.small" vAlign="center">
                            <Fluent.Text
                                className="ui-pagestext"
                                content="Navigate to the currently running application's first static page defined in the application manifest"
                            />
                        </Fluent.Flex>
                        <Fluent.Flex space="between">
                            <Fluent.Tooltip content="pages.currentApp.navigateToDefaultPage()" trigger={
                                <Fluent.Button
                                    onClick={async () => {
                                        await pages.currentApp.navigateToDefaultPage();
                                    }}>
                                    Navigate To Default Page
                                </Fluent.Button>
                            } />
                        </Fluent.Flex>
                    </Fluent.Segment>
                )}
            </>
        );
    }
    // return's if sub capability is not supported.
    return <>Sub-capability is not initialized</>;
};
