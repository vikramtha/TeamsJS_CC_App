import { Button, Flex, Tooltip } from "@fluentui/react-northstar";
import { app, monetization } from "@microsoft/teams-js";

import { booleanToString } from "../../helpers";
import { isMobile } from "react-device-detect";

/**
 * This component is for monetizing purpose
 */
export const Monetization = () => {
  // Check to see if capability is isInitialized
  if (app.isInitialized()) {
    // check to see if capability is supported
    if (monetization.isSupported()) {
      return (
        <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
          <Tooltip content="monetization.openPurchaseExperience()" trigger={
            <Button
              onClick={async () => {
                // To use this provide plan id and term of plan
                await monetization.openPurchaseExperience({
                  planId: "",
                  term: "",
                });
              }}
            >
              OpenPurchaseExperience
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

export const MonetizationIsSupported = () =>
  booleanToString(monetization.isSupported());
