import { Button, Flex } from "@fluentui/react-northstar";
import { app, dialog } from "@microsoft/teams-js";

import { booleanToString } from "../../helpers";
import { isMobile } from "react-device-detect";

/**
 * This component Open's a dialog with a form and
 * on submit it logs the json value in the console and closes the dialog
 */
export const Dialog = () => {
  // Check to see if capability is isInitialized
  if (app.isInitialized()) {
    // check to see if capability is supported
    if (dialog.url.isSupported()) {
      // return buttons to open dialog
      return (
        <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
          <Button
            onClick={() => {
              const baseUrl = `https://${window.location.host}`;

              dialog.url.open(
                {
                  title: "Dialog Example",
                  fallbackUrl: `${baseUrl}/index.html#/privacy`,
                  url: `${baseUrl}/index.html#/dialog`,
                  size: { height: 300, width: 500 },
                },
                (response) => {
                  if (response.err) {
                    console.log(response.err);
                  }
                  console.log("submitHandler:", response.result);
                },
                (res) => {
                  console.log("dialogListener", res);
                }
              );
            }}
          >
            Open Dialog dialog.url.submit
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

export const DialogUrlIsSupported = () =>
  booleanToString(dialog.url.isSupported());
