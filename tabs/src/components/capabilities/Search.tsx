import { Button, Flex } from "@fluentui/react-northstar";

import { booleanToString } from "../../helpers";
import { search } from "@microsoft/teams-js";

export const Search = () => {
    // check to see if capability is supported
    if (search.isSupported()) {
        // onClosed handler
        const onClosed = () => {
            console.log("Search closed");
        };
        // onExecute handler
        const onExecute = () => {
            console.log("Search executed");
        };
        // onChange handler
        const onChange = () => {
            console.log("Search changed");
        };

        return (
            <Flex gap="gap.small" vAlign="center">
                <Button onClick={async () => {
                    // register search handlers
                    search.registerHandlers(onClosed, onExecute, onChange);
                }}>
                    Register Handlers
                </Button>
                <Button onClick={async () => {
                    // unregister search handlers
                    search.unregisterHandlers();
                }}>
                    Unregister Handlers
                </Button>
            </Flex>
        )
    };
    // return empty fragment if capability is not supported.
    return (<>Capability is not supported</>);
}

export const SearchIsSupported = () => booleanToString(search.isSupported());
