import { Button, Flex, Tooltip } from "@fluentui/react-northstar";
import { app, chat } from "@microsoft/teams-js";

import { booleanToString } from "../../helpers";
import { isMobile } from "react-device-detect";

/**
 * This component returns button to start 1:1 and group chat
 */
export const Chat = () => {
  // Check to see if capability is isInitialized
  if (app.isInitialized()) {
    // Check to see if capability is supported
    if (chat.isSupported()) {
      return (
        <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
          <Tooltip content="chat.openChat()" trigger={
            <Button
              onClick={async () => {
                await chat.openChat({
                  user: "AdeleV@6plbfs.onmicrosoft.com",
                  message: "This is the first message you are sending to AdeleV",
                });
              }}
            >
              Start Chat
            </Button>
          } />
          <Tooltip content="chat.openGroupChat()" trigger={
            <Button
              onClick={async () =>
                await chat.openGroupChat({
                  users: [
                    "AdeleV@6plbfs.onmicrosoft.com",
                    "AlexW@6plbfs.onmicrosoft.com",
                  ],
                  message:
                    "This is the first message you are sending to Group Chat",
                  topic: "Group Chat",
                })
              }
            >
              Start Group Chat
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

export const ChatIsSupported = () => booleanToString(chat.isSupported());
