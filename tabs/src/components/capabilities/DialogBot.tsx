import { Button, Flex } from "@fluentui/react-northstar";
import { app, dialog } from "@microsoft/teams-js";

import { booleanToString } from "../../helpers";
import { isMobile } from "react-device-detect";

/**
 * This component Open's a dialag in a bot application
 */
export const DialogBot = () => {
  // check to see if capability is isInitialized
  if (app.isInitialized()) {
    // check to see if capability is supported
    if (dialog.url.bot.isSupported()) {
      return (
        <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
          <Button
            onClick={() => {
              const baseUrl = `https://${window.location.host}`;
              dialog.url.bot.open(
                {
                  // Specifies a bot ID to send the result of the user's interaction with the task module
                  completionBotId: "",
                  size: { height: 300, width: 500 },
                  url: `${baseUrl}/index.html#/dialog`,
                },
                (handler) => {
                  console.log("Submithandler called", handler);
                }
              );
            }}
          >
            Open Dialog Url Bot
          </Button>
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

export const DialogUrlBotIsSupported = () =>
  booleanToString(dialog.url.bot.isSupported());
