import { Button, Flex } from "@fluentui/react-northstar";
import { app, pages } from "@microsoft/teams-js";

import { booleanToString } from "../../helpers";
import { isMobile } from "react-device-detect";

/**
 * This component returns a button which navigates to particular tab
 * with pageId or to a default page.
 */
export const PagesCurrent = () => {
  // Check to see if capability is isInitialized
  if (app.isInitialized()) {
    // check to see if capability is supported
    if (pages.isSupported()) {
      if (pages.currentApp.isSupported()) {
        return (
          <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
            <Button
              onClick={async () => {
                await pages.currentApp.navigateTo({
                  pageId: "pagesTab",
                });
              }}
            >
              Navigate Current App (PagesTab)
            </Button>
          </Flex>
        );
      }
    } else {
      // return's if capability is not supported
      return <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">Capability is not supported</Flex>;;
    }
  }
  // return's if capability is not initialized.
  return <>Capability is not initialized</>;
};

export const IsPagesCurrentAppSupported = () =>
  booleanToString(pages.currentApp.isSupported());
