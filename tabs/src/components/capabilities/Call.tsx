import { Button, Flex, Tooltip } from "@fluentui/react-northstar";
import { app, call } from "@microsoft/teams-js";

import { booleanToString } from "../../helpers";
import { isMobile } from "react-device-detect";

/**
 * This component returns button to start a call.
 */
export const Call = () => {
  // Check to see if capability is isInitialized
  if (app.isInitialized()) {
    // Check to see if capability is supported
    if (call.isSupported()) {
      // return button to start a call
      return (
        <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
          <Tooltip content="call.startCall()" trigger={
            <Button
              onClick={async () => {
                await call.startCall({
                  targets: [
                    "AdeleV@6plbfs.onmicrosoft.com",
                    "AlexW@6plbfs.onmicrosoft.com",
                  ],
                  requestedModalities: [
                    call.CallModalities.Audio,
                    call.CallModalities.Video,
                    call.CallModalities.VideoBasedScreenSharing,
                    call.CallModalities.Data,
                  ],
                });
              }}
            >
              Start Call
            </Button>
          } />
        </Flex>
      );
    } else {
      // return's  if capability is not supported.
      return <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">Capability is not supported</Flex>;;
    }
  }
  // return's  if capability is not initialized.
  return <>Capability is not initialized</>;
};

export const CallIsSupported = () => booleanToString(call.isSupported());
