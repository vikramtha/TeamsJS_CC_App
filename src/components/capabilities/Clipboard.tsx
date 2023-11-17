
import { Button, Dropdown, Flex, Tooltip } from "@fluentui/react-northstar";
import {
  adobeAcrobat,
  CapabilityStatus,
  developersPortal,
  powerBI,
  vivaEngage,
  vivaInsight,
} from "../../helpers/constants";
import { app, clipboard } from "@microsoft/teams-js";

import { booleanToString } from "../../helpers/convert";
import { isMobile } from "react-device-detect";
import { useState } from "react";

interface IDropDrownProps {
  content: string;
  header: string;
}

/**
 * This component open Developer Portal app in stage view
 */

export const Clipboard = () => {
  if (app.isInitialized()) {
    booleanToString(clipboard.isSupported());
  }
  else return <>{CapabilityStatus.NotInitialized}</>;
};


export const ClipboardIsSupported = () =>
  booleanToString(clipboard.isSupported());


