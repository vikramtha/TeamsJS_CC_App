import { Button, Dropdown, Flex, Tooltip } from "@fluentui/react-northstar";
import { app, sharing } from "@microsoft/teams-js";

import { booleanToString } from "../../helpers";
import { isMobile } from "react-device-detect";
import { urlList } from "../../helpers/constants";
import { useState } from "react";

/**
 * This component open's a dialog with shareable content
 */
export const Sharing = () => {
  const [url, setUrl] = useState("");
  // Check to see if capability is isInitialized
  if (app.isInitialized()) {
    // check to see if capability is supported
    if (sharing.isSupported()) {
      return (
        <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
          <Dropdown
            search
            items={urlList}
            placeholder="Enter or select Url to share"
            onSelect={(e: any) => {
              const value = e.target.value ? e.target.value : "";
              setUrl(value);
            }}
          />
          <Tooltip content="sharing.shareWebContent()" trigger={
            <Button
              onClick={async () => {
                try {
                  await sharing.shareWebContent({
                    content: [
                      {
                        type: "URL",
                        url: url,
                        message: "Check out this link!",
                        preview: true,
                      },
                    ],
                  });
                } catch {
                  console.log("User aborted");
                }
              }}
            >Share web content
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

export const SharingIsSupported = () => booleanToString(sharing.isSupported());
