import * as Fluent from "@fluentui/react-northstar";

import { app, pages } from "@microsoft/teams-js";

/**
 * This component returns a button which returns focus to search bar.
 */
export const ReturnFocusToSearchBar = () => {
  // Check if app is initialized;
  if (app.isInitialized()) {
    return (
      <>
        {pages.isSupported() && (
          <Fluent.Segment className="ui-pagessegment">
            <Fluent.Header content="Return Focus To Search Box" as="h3" />
            <Fluent.Flex gap="gap.small" vAlign="center">
              <Fluent.Text
                className="ui-pagestext"
                content="Returns focus to the host's Search box. (Curently works only in teams)"
              />
            </Fluent.Flex>
            <Fluent.Flex space="between">
              <Fluent.Tooltip content="pages.returnFocus(true)" trigger={
                <Fluent.Button
                  onClick={async () => {
                    pages.returnFocus(true);
                  }}
                >
                  Click me to Return focus to search box
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
