import { Button, Flex, Tooltip } from "@fluentui/react-northstar";
import { app, stageView } from "@microsoft/teams-js";
import {
  developersPortalAppId,
  developersPortalThreadId,
} from "../../helpers/constants";

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
                await stageView.open({
                  appId: developersPortalAppId,
                  contentUrl: "https://dev.teams.microsoft.com/home?host=teams",
                  threadId: developersPortalThreadId,
                  title: "Developer Portal",
                });
              }}
            >
              Open Stage View
            </Button>
          } />
        </Flex>
      );
    } else {
      // return's if capability is not supported
      return <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">Capability is not supported</Flex>;;
    }
  }
  // return's if capability is not initialized.
  return <>Capability is not initialized</>;
};

export const StageViewIsSupported = () =>
  booleanToString(stageView.isSupported());
