import { Flex, Text } from "@fluentui/react-northstar";
import { app, video } from "@microsoft/teams-js";

import { booleanToString } from "../../helpers";
import { isMobile } from "react-device-detect";

/**
 * This component is coming soon
 */
export const Video = () => {
  // Check to see if capability is isInitialized
  if (app.isInitialized()) {
    // check to see if capability is supported
    if (video.isSupported()) {
      //video.notifySelectedVideoEffectChanged(0, "");
      return <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
        <Text content="Coming Soon" />
      </Flex>;
    } else {
      // return's if capability is not supported
      return <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">Capability is not supported</Flex>;;
    }
  }
  // return's if capability is not initialized.
  return <>Capability is not initialized</>;
};

export const VideoIsSupported = () => booleanToString(video.isSupported());
