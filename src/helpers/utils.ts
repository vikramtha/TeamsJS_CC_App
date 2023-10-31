export const booleanToString = (value: boolean) => {
  return value ? "Yes" : "No";
};
/**
 * Convert's restId to Microsoft Exchange Web Services Id (ewsId).
 * @param restId - It is an itemId of the element
 * @returns ewsId - It is a Microsoft Exchange Web Services Id, (EWS) is a native API built by Microsoft that allows 
 * server/client applications to integrate with Exchange Servers and Office 365
 */
export const convertRestIdToEwsId = (restId: String) => {
  let ewsId = restId.replace(/_/g, "+");
  ewsId = ewsId.replace(/-/g, "/");
  return ewsId;
};

export const validateGuid = (str: string) => {
  // Regex to check valid
  // GUID 
  let regex = new RegExp(/^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$/);

  // if str
  // is empty return false
  if (str === null) {
    return false;
  }

  // Return true if the str
  // matched the ReGex
  if (regex.test(str) === true) {
    return true;
  }
  else {
    return false;
  }
}

export interface IModuleDetails {
  deprecated?: boolean;
  internal?: boolean;
  hidden?: boolean;
  beta?: boolean;
  iconName?: string
}

export function getModuleDetails(path: string): IModuleDetails | undefined {
  return moduleDetailsMap.get(path);
}

const moduleDetailsMap: Map<string, IModuleDetails> = new Map([
  ["app", { iconName: "AppsIcon" }],
  ["appopenlink", { iconName: "AppsIcon" }],
  [
    "appentity",
    {
      hidden: true,
      internal: true,
    },
  ],
  ["appinstalldialog", { iconName: "DownloadIcon" }],
  [
    "barcode",
    {
      beta: true,
      iconName: "TranscriptIcon"
    },
  ],
  ["calendar", { iconName: "CalendarIcon" }],
  ["call", { iconName: "CallIcon" }],
  [
    "chat",
    {
      beta: true,
      iconName: "ChatIcon"
    },
  ],
  [
    "clipboard",
    {
      beta: true,
      iconName: "ChatIcon"
    },
  ],
  [
    "conversations",
    {
      hidden: true,
      internal: true,
    },
  ],
  ["dialog", { iconName: "CustomerHubIcon" }],
  [
    "dialogurl",
    {
      beta: true,
      iconName: "CustomerHubIcon"
    },
  ],
  [
    "dialogurlbot",
    {
      beta: true,
      iconName: "CustomerHubIcon"
    },
  ],
  [
    "dialogupdate",
    {
      beta: true,
      iconName: "CustomerHubIcon"
    },
  ],
  [
    "dialogadaptivecard",
    {
      beta: true,
      iconName: "CustomerHubIcon"
    },
  ],
  [
    "dialogadaptivecardbot",
    {
      beta: true,
      iconName: "CustomerHubIcon"
    },
  ],
  [
    "geolocation",
    {
      beta: true,
      iconName: "LocationIcon"
    },
  ],
  [
    "geolocationmap",
    {
      beta: true,
      iconName: "ShareLocationIcon"
    },
  ],
  ["liveshare", { iconName: "EmailIcon" }],
  [
    "location",
    {
      deprecated: true,
      iconName: "LocationIcon"
    },
  ],
  [
    "logs",
    {
      hidden: true,
      internal: true,
    },
  ],
  ["mail", {
    iconName: "EmailIcon"
  }],
  [
    "marketplace",
    {
      hidden: true,
      beta: true,
    },
  ],
  [
    "meetingroom",
    {
      hidden: true,
      internal: true,
    },
  ],
  ["menus", { iconName: "MenuIcon" }],
  ["monetization", { iconName: "PollIcon" }],
  ["notifications", {}],
  ["pages", { iconName: "FilesTxtIcon" }],
  ["pagestabs", { iconName: "FilesTxtIcon" }],
  ["pagesconfig", { iconName: "FilesTxtIcon" }],
  ["pagesbackstack", { iconName: "FilesTxtIcon" }],
  [
    "pagesfulltrust",
    {
      hidden: true,
    },
  ],
  ["pagesappbutton", { iconName: "FilesTxtIcon" }],
  [
    "pagescurrentapp",
    {
      beta: true,
      iconName: "FilesTxtIcon"
    },
  ],
  ["people", { iconName: "AttendeeIcon" }],
  [
    "profile",
    {
      beta: true,
      iconName: "ContactCardIcon"
    },
  ],
  [
    "remotecamera",
    {
      hidden: true,
      internal: true,
    },
  ],
  [
    "search",
    {
      beta: true,
      iconName: "SearchIcon"
    },
  ],
  [
    "secondarybrowser",
    {
      beta: true,
    },
  ],
  ["sharing", { iconName: "ScreenshareIcon" }],
  [
    "stageview",
    {
      beta: true,
      iconName: "PanoramaIcon"
    },
  ],
  [
    "teams",
    {
      hidden: true,
      internal: true,
    },
  ],
  [
    "teamsfulltrust",
    {
      hidden: true,
      internal: true,
    },
  ],
  [
    "teamsfulltrustjoinedteams",
    {
      hidden: true,
      internal: true,
    },
  ],
  ["teamscore", { iconName: "TeamsMonochromeIcon" }],
  [
    "video",
    {
      beta: true,
      iconName: "CallVideoIcon"
    },
  ],
  [
    "videoex",
    {
      beta: true,
      hidden: true,
      internal: true,
    },
  ],
  [
    "webstorage",
    {
      beta: true, iconName: "BriefcaseIcon"
    },
  ],
]);