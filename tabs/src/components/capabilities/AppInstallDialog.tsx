import { Button, Dropdown, DropdownItemProps, Flex, Tooltip } from "@fluentui/react-northstar";
import { app, appInstallDialog } from "@microsoft/teams-js";
import { developersPortal, powerBI } from "../../helpers/constants";

import { booleanToString } from "../../helpers";
import { isMobile } from "react-device-detect";
import { useState } from "react";

/**
 * This component Open's a dialog with particular application to install.
 */
export const AppInstallDialog = () => {
  const appIds: DropdownItemProps[] = [{
    content: developersPortal.appId,
    header: developersPortal.name
  }, {
    content: powerBI.appId,
    header: powerBI.name
  }]
  const [appId, setAppId] = useState("");
  // Check if app is initialized
  if (app.isInitialized()) {
    // check to see if capability is supported
    if (appInstallDialog.isSupported()) {
      // return button to open dialog
      return (
        <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
          <Dropdown
            search
            items={appIds}
            placeholder="Enter app Id or select"
            onSelect={(e: any) => {
              const value = e.target.value ? e.target.value : "";
              setAppId(value);
            }}
          />
          <Tooltip trigger={
            <Button
              onClick={async () => {
                // open the install dialog for the Developer Portal app
                await appInstallDialog.openAppInstallDialog({
                  appId: appId,
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
