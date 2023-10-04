import { MeetingApi } from "./capabilities/meeting/MeetingApi";
import { TeamsFxContext } from "./Context";
import { useContext } from "react";

/**
 * This component contains all the supported pages capability.
 */
const MeetingTab = () => {
    const { themeString } = useContext(TeamsFxContext);

    return (
        <div className={themeString === "default" ? "" : "dark"}>
            <MeetingApi />
        </div>
    )
}

export default MeetingTab;