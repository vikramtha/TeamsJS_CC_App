import { app } from "@microsoft/teams-js";
import { useData } from "@microsoft/teamsfx-react";
import { browserName, CustomView, isMobile } from 'react-device-detect';
import "./App.css";
export const Hub = () => {
    const hubName = useData(async () => {
        await app.initialize();
        const context = await app.getContext();
        return context.app.host.name;
      })?.data;
    return (
        <div className="center">
            {hubName && (
                <p className="center">Current Host: {hubName}</p>
            )}
            <CustomView condition={browserName === "Chrome"}>
            <p className="center">Current Browser: Chrome</p>
            </CustomView>
            <CustomView condition={browserName === "Edge"}>
            <p className="center">Current Browser: Edge</p>
            </CustomView>
            <CustomView condition={browserName === "Firefox"}>
            <p className="center">Current Browser: Firefox</p>
            </CustomView>
            <CustomView condition={browserName === "Safari"}>
            <p className="center">Current Browser: Safari</p>
            </CustomView>
            <div>
                <p  className="center"> {isMobile? 'This is a mobile device': 'This is a desktop device'} </p>
            </div>
        </div>
        
    );

}


