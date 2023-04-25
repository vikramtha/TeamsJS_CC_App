import * as Fluent from "@fluentui/react-northstar";

import { app, pages } from "@microsoft/teams-js";

/**
 * This component returns a button which returns focus to app bar.
 */
export const ReturnFocusToAppBar = () => {
  // Check if app is initialized;
  if (app.isInitialized()) {
    return (
      <>
        {pages.isSupported() && (
          <Fluent.Segment className="ui-pagessegment">
            <Fluent.Header content="Return Focus To App Bar" as="h3" />
            <Fluent.Flex gap="gap.small" vAlign="center">
              <Fluent.Text
                className="ui-pagestext"
                content="Returns focus to the host's App bar. (Curently works only in teams)"
              />
            </Fluent.Flex>
            <Fluent.Flex space="between">
              <Fluent.Tooltip content="pages.returnFocus(false)" trigger={
                <Fluent.Button
                  onClick={() => {
                    pages.returnFocus(false);
                  }}
                >
                  Click me Return focus to App Bar
                </Fluent.Button>
              } />
            </Fluent.Flex>
          </Fluent.Segment>
        )}
      </>
    );
  }
  // return's if sub capability is not supported.
  return <>SubCapability is not initialized</>;
};
