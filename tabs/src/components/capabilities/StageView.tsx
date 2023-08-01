import { Button, Flex, Tooltip } from "@fluentui/react-northstar";
import {
  CapabilityStatus,
  developersPortal,
  developersPortalThreadId,
} from "../../helpers/constants";
import { app, stageView } from "@microsoft/teams-js";

import { booleanToString } from "../../helpers";
import { isMobile } from "react-device-detect";

/**
 * This component open Developer Portal app in stage view
 */
export const StageView = () => {
  // Check to see if capability is isInitialized
  if (app.isInitialized()) {
    // check to see if capability is supported
    if (stageView.isSupported()) {
      return (
        <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
          <Tooltip content="stageView.open()" trigger={
            <Button
              onClick={async () => {
                // open Developer Portal app in stage view
                try {
                  await stageView.open({
                    appId: developersPortal.appId,
                    contentUrl: "https://dev.teams.microsoft.com/home?host=teams",
                    threadId: developersPortalThreadId,
                    title: developersPortal.name,
                  });
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Open Stage View
            </Button>
          } />
        </Flex>
      );
    } else {
      // return's if capability is not supported
      return <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">{CapabilityStatus.NotSupported}</Flex>;
    }
  }
  // return's if App is not initialized.
  return <>{CapabilityStatus.NotInitialized}</>;
};

export const StageViewIsSupported = () =>
  booleanToString(stageView.isSupported());
