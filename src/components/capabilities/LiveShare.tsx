import { Flex, Text, Tooltip } from "@fluentui/react-northstar";

import { booleanToString } from "../../helpers/utils";
import { isMobile } from "react-device-detect";

/**
 * This component 
 */
export const LiveShare = () => {
    return (
        <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
            <Tooltip content="liveshare" trigger={
                <Text content="LiveShare is allowed in following contexts: meetingStage, sidePanel" />
            } />
        </Flex>
    )
}

export const LiveShareIsSupported = () => booleanToString(false);
