import { Text } from "@fluentui/react-northstar";
import { booleanToString } from "../../helpers";
import { monetization } from "@microsoft/teams-js";

/**
 * This component is comming soon
 */
export const Monetization = () => {
    // check to see if capability is supported
    if (monetization.isSupported()) {
        return (
            <Text content="Coming Soon" />
        )
    };
    // return empty fragment if capability is not supported.
    return (<>Capability is not supported</>);
}

export const MonetizationIsSupported = () => booleanToString(monetization.isSupported());
