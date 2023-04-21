import { Button, Flex, Tooltip } from "@fluentui/react-northstar";
import { app, appInstallDialog } from "@microsoft/teams-js";

import { booleanToString } from "../../helpers";
import { developersPortalAppId } from "../../helpers/constants";
import { isMobile } from "react-device-detect";

/**
 * This component Open's a dialog with particular application to install.
 */
export const AppInstallDialog = () => {
  // Check if app is initialized
  if (app.isInitialized()) {
    // check to see if capability is supported
    if (appInstallDialog.isSupported()) {
      // return button to open dialog
      return (
        <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
          <Tooltip trigger={
            <Button
              onClick={async () => {
                // open the install dialog for the Developer Portal app
                await appInstallDialog.openAppInstallDialog({
                  appId: developersPortalAppId,
                });
              }}
            >
              Open App Install Dialog
            </Button>} content="appInstallDialog.openAppInstallDialog()" />
        </Flex>
      );
    }
  }
  // return's if capability is not supported.
  return <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">Capability is not supported</Flex>;;
};

export const AppInstallDialogIsSupported = () =>
  booleanToString(appInstallDialog.isSupported());
