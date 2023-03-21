import { Button, Flex } from "@fluentui/react-northstar";

import { booleanToString } from "../../helpers";
import { teamsCore } from "@microsoft/teams-js";

/**
 * This component enable print capability to support printing page using 
 * Ctrl+P and cmd+P and opens a default print page 
 */
export const TeamsCore = () => {
    // check to see if capability is supported
    if (teamsCore.isSupported()) {
        // register a handler for page unload event
        teamsCore.registerBeforeUnloadHandler(() => {
            console.log("BeforeUnloadHandler");
            return true;
        });

        // register a handler for page unload event
        teamsCore.registerOnLoadHandler(() => {
            console.log("OnLoadHandler");
            return true;
        });

        return (
            <Flex gap="gap.small" vAlign="center">
                <Button onClick={async () => {
                    teamsCore.enablePrintCapability();
                }}>
                    Enable Print Capability
                </Button>
                <Button onClick={async () => {
                    teamsCore.print();
                }}>
                    Print
                </Button>
            </Flex>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const TeamsCoreIsSupported = () => booleanToString(teamsCore.isSupported());
