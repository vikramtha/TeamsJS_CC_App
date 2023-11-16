import { Button, Flex, Tooltip } from "@fluentui/react-northstar";
import { app, videoEffects } from "@microsoft/teams-js";

import { CapabilityStatus } from "../../helpers/constants";
import { booleanToString } from "../../helpers/utils";
import { isMobile } from "react-device-detect";

/**
 * This component is coming soon
 */
export const VideoEffects = () => {
  // Check to see if capability is isInitialized
  if (app.isInitialized()) {
    // check to see if capability is supported
    if (videoEffects.isSupported()) {
      //video.notifySelectedVideoEffectChanged(0, "");
      return (<Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">
        <Tooltip content="videoEffects.registerForVideoFrame()" trigger={
          <Button onClick={() => {
            videoEffects.registerForVideoFrame({
              videoBufferHandler: (e) => {
                console.log(e)
              }, videoFrameHandler: async (receivedVideoFrame: videoEffects.VideoFrameData) => { return receivedVideoFrame.videoFrame }, config: { format: videoEffects.VideoFrameFormat.NV12 }
            })
          }}>
            RegisterForVideoFrame
          </Button>
        } />
        <Tooltip content="videoEffects.notifySelectedVideoEffectChanged()" trigger={
          <Button onClick={() => {
            videoEffects.notifySelectedVideoEffectChanged(videoEffects.EffectChangeType.EffectChanged, "");
          }}>
            NotifySelectedVideoEffectChanged
          </Button>
        } />
        <Tooltip content="videoEffects.registerForVideoEffect()" trigger={
          <Button onClick={() => {
            videoEffects.registerForVideoEffect(async (e) => {
              console.log(e);
            });
          }}>
            RegisterForVideoEffect
          </Button>
        } />
      </Flex>);
    } else {
      // return's if capability is not supported
      return <Flex gap="gap.small" className={isMobile ? "ui_flex_button_mobile" : ""} vAlign="center">{CapabilityStatus.NotSupported}</Flex>;
    }
  }
  // return's if App is not initialized.
  return <>{CapabilityStatus.NotInitialized}</>;
};

export const VideoIsSupported = () => booleanToString(videoEffects.isSupported());
