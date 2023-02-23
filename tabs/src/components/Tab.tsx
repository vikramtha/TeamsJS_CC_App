import * as Fluent from "@fluentui/react-northstar";

import { App, AppIsSupported } from "./capabilities/App";
import { AppInstallDialog, AppInstallDialogIsSupported } from "./capabilities/AppInstallDialog";
import { BarCode, BarCodeIsSupported } from "./capabilities/BarCode";
import { Calendar, CalendarIsSupported } from "./capabilities/Calendar";
import { Call, CallIsSupported } from "./capabilities/Call";
import { Chat, ChatIsSupported } from "./capabilities/Chat";
import { Dialog, DialogIsSupported } from "./capabilities/Dialog";
import { GeoLocation, GeoLocationIsSupported } from "./capabilities/GeoLocation";
import { Mail, MailIsSupported } from "./capabilities/Mail";
import { Menus, MenusIsSupported } from "./capabilities/Menus";
import { Monetization, MonetizationIsSupported } from "./capabilities/Monetization";
import { Pages, PagesCurrent, PagesIsSupported } from "./capabilities/Pages";
import { PagesDeprecated, PagesDeprecatedIsSupported } from "./capabilities/Pages.deprecated";
import { People, PeopleIsSupported } from "./capabilities/People";
import { Profile, ProfileIsSupported } from "./capabilities/Profile";
import { Search, SearchIsSupported } from "./capabilities/Search";
import { Sharing, SharingIsSupported } from "./capabilities/Sharing";
import { StageView, StageViewIsSupported } from "./capabilities/StageView";
import { TeamsCore, TeamsCoreIsSupported } from "./capabilities/TeamsCore";
import { Video, VideoIsSupported } from "./capabilities/Video";
import { WebStorage, WebStorageIsSupported } from "./capabilities/WebStorage";
import { useContext, useEffect, useState } from "react";

import { Hub } from "./Host";
import { TeamsFxContext } from "./Context";
import packageJSON from "../../package.json";

const Tab = () => {
  const { themeString } = useContext(TeamsFxContext);

  const header: Fluent.ShorthandValue<Fluent.TableRowProps> = {
    key: 'header',
    items: [
      { key: 'capability', content: <Fluent.Text size={"medium"} weight="bold" content="Capabilities" />, },
      { key: 'supported', content: <Fluent.Text size={"medium"} weight="bold" content="Supported" /> },
      { key: 'actions', content: <Fluent.Text size={"medium"} weight="bold" content="Actions" />, className: 'ui_action' }
    ]
  };

  const [showSupportedOnly, setShowSupportedOnly] = useState(true);
  const [tableRows, setTableRows] = useState([] as Fluent.ShorthandCollection<Fluent.TableRowProps, Record<string, {}>>);

  useEffect(() => {
    const defaultRows = [
      {
        key: 0,
        items: [
          { key: '0-1', content: <><Fluent.AppsIcon title="App" />App</> },
          { key: '0-2', content: AppIsSupported() },
          { key: '0-3', content: <App />, className: 'ui_action' }
        ]
      },
      {
        key: 1,
        items: [
          { key: '1-1', content: <><Fluent.DownloadIcon />App Install Dialog</> },
          { key: '1-2', content: AppInstallDialogIsSupported() },
          { key: '1-3', content: <AppInstallDialog />, className: 'ui_action' }
        ]
      },
      {
        key: 2,
        items: [
          { key: '2-1', content: 'Bar Code' },
          { key: '2-2', content: BarCodeIsSupported() },
          { key: '2-3', content: <BarCode />, className: 'ui_action' }
        ],
      },
      {
        key: 3,
        items: [
          { key: '3-1', content: 'Calendar' },
          { key: '3-2', content: CalendarIsSupported() },
          { key: '3-3', content: <Calendar />, className: 'ui_action' }
        ],
      },
      {
        key: 4,
        items: [
          { key: '4-1', content: <><Fluent.CallIcon />Call</> },
          { key: '4-2', content: CallIsSupported() },
          { key: '4-3', content: <Call />, className: 'ui_action' }
        ],
      },
      {
        key: 5,
        items: [
          { key: '5-1', content: <><Fluent.ChatIcon />Chat</> },
          { key: '5-2', content: ChatIsSupported() },
          { key: '5-3', content: <Chat />, className: 'ui_action' }
        ],
      },
      {
        key: 6,
        items: [
          { key: '6-1', content: <><Fluent.CustomerHubIcon />Dialog</> },
          { key: '6-2', content: DialogIsSupported() },
          { key: '6-3', content: <Dialog />, className: 'ui_action' }
        ],
      },
      {
        key: 7,
        items: [
          { key: '7-1', content: <><Fluent.LocationIcon />Geo Location</> },
          { key: '7-2', content: GeoLocationIsSupported() },
          { key: '7-3', content: <GeoLocation />, className: 'ui_action' }
        ],
      },
      {
        key: 8,
        items: [
          { key: '8-1', content: <><Fluent.EmailIcon />Mail</> },
          { key: '8-2', content: MailIsSupported() },
          { key: '8-3', content: <Mail />, className: 'ui_action' }
        ],
      },
      {
        key: 9,
        items: [
          { key: '9-1', content: <><Fluent.MenuIcon />Menus</> },
          { key: '9-2', content: MenusIsSupported() },
          { key: '9-3', content: <Menus />, className: 'ui_action' }
        ],
      },
      {
        key: 10,
        items: [
          { key: '10-1', content: <>Monetization</> },
          { key: '10-2', content: MonetizationIsSupported() },
          { key: '10-3', content: <Monetization />, className: 'ui_action' }
        ],
      },
      {
        key: 11,
        items: [
          { key: '11-1', content: <><Fluent.FilesErrorIcon />Pages.deprecated</> },
          { key: '11-2', content: PagesDeprecatedIsSupported() },
          { key: '11-3', content: <PagesDeprecated />, className: 'ui_action' }
        ],
      },
      {
        key: 12,
        items: [
          { key: '12-1', content: <><Fluent.FilesTxtIcon />Pages.current</> },
          { key: '12-2', content: PagesCurrent() },
          { key: '12-3', content: <Pages />, className: 'ui_action' }
        ],
      },
      {
        key: 13,
        items: [
          { key: '13-1', content: <><Fluent.FilesTxtIcon />Pages</> },
          { key: '13-2', content: PagesIsSupported() },
          { key: '13-3', content: <Pages />, className: 'ui_action' }
        ],
      },
      {
        key: 14,
        items: [
          { key: '14-1', content: <><Fluent.AttendeeIcon />People</> },
          { key: '14-2', content: PeopleIsSupported() },
          { key: '14-3', content: <People />, className: 'ui_action' }
        ]
      },
      {
        key: 15,
        items: [
          { key: '15-1', content: <><Fluent.ContactCardIcon />Profile</> },
          { key: '15-2', content: ProfileIsSupported() },
          { key: '15-3', content: <Profile />, className: 'ui_action' }
        ],
      },
      {
        key: 16,
        items: [
          { key: '16-1', content: <><Fluent.SearchIcon />Search</> },
          { key: '16-2', content: SearchIsSupported() },
          { key: '16-3', content: <Search />, className: 'ui_action' }
        ],
      },
      {
        key: 17,
        items: [
          { key: '17-1', content: <><Fluent.ScreenshareIcon />Sharing</> },
          { key: '17-2', content: SharingIsSupported() },
          { key: '17-3', content: <Sharing />, className: 'ui_action' }
        ],
      },
      {
        key: 18,
        items: [
          { key: '18-1', content: <><Fluent.PanoramaIcon />Stage View</> },
          { key: '18-2', content: StageViewIsSupported() },
          { key: '18-3', content: <StageView />, className: 'ui_action' }
        ],
      },
      {
        key: 19,
        items: [
          { key: '19-1', content: <><Fluent.TeamsMonochromeIcon />Teams Core</> },
          { key: '19-2', content: TeamsCoreIsSupported() },
          { key: '19-3', content: <TeamsCore />, className: 'ui_action' }
        ],
      },
      {
        key: 20,
        items: [
          { key: '20-1', content: <><Fluent.CallVideoIcon />Video</> },
          { key: '20-2', content: VideoIsSupported() },
          { key: '20-3', content: <Video />, className: 'ui_action' }
        ],
      },
      {
        key: 21,
        items: [
          { key: '21-1', content: <><Fluent.BriefcaseIcon />Web Storage</> },
          { key: '21-2', content: WebStorageIsSupported() },
          { key: '21-3', content: <WebStorage />, className: 'ui_action' }
        ],
      }
    ];

    if (showSupportedOnly) {
      const rows = defaultRows.filter((r) => { return r.items[1].content === 'Yes' });
      setTableRows(rows);
    } else {
      setTableRows(defaultRows);
    }
  }, [showSupportedOnly]);

  return (
    <div className={themeString === "default" ? "" : "dark"}>
      <Fluent.Flex column={true} gap={"gap.small"} padding={"padding.medium"} >
        <Fluent.Segment>
          <Hub />
        </Fluent.Segment>
        <Fluent.Segment>
          <Fluent.Flex space="between">
            <Fluent.Checkbox
              label="Show supported only"
              checked={showSupportedOnly}
              onClick={() => setShowSupportedOnly(!showSupportedOnly)}
              toggle />
            <Fluent.Flex gap="gap.small">
              <Fluent.Label>{packageJSON.dependencies["@microsoft/teams-js"]}</Fluent.Label>
            </Fluent.Flex>
          </Fluent.Flex>
        </Fluent.Segment>
        <Fluent.Segment>
          <Fluent.Table
            aria-label="Static table"
            header={header}
            rows={tableRows} />
        </Fluent.Segment>
      </Fluent.Flex >
    </div >
  );
}

export default Tab;
