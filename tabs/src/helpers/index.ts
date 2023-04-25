export const booleanToString = (value: boolean) => {
  return value ? "Yes" : "No";
};

export const convertRestIdToEwsId = (restId: String) => {
  let retId = restId.replace(/_/g, "+");
  retId = retId.replace(/-/g, "/");
  return retId;
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
