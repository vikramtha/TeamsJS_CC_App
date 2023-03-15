import { Button, Flex } from "@fluentui/react-northstar";

import { booleanToString } from "../../helpers";
import { pages } from "@microsoft/teams-js";

export const PagesCurrent = () => {
    // check to see if capability is supported
    if (pages.isSupported()) {

        if (pages.currentApp.isSupported()) {
            return (
                <Flex>
                    <Button onClick={async () => {
                        await pages.currentApp.navigateTo({
                            pageId: '72c73d2e-a890-4580-9c68-513c8cb6efcd'
                        })
                    }}>
                        Navigate Current App
                    </Button>
                    <Button onClick={async () => {
                        await pages.currentApp.navigateToDefaultPage();
                    }}>
                        Navigate To Default Page
                    </Button>
                </Flex>
            );
        }
    }
    return (<></>);
}

export const PagesIsCurrent = () => booleanToString(pages.currentApp.isSupported());
