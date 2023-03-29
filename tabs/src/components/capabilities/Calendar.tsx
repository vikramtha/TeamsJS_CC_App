import { booleanToString, convertRestIdToEwsId } from "../../helpers";

import { Button } from "@fluentui/react-northstar";
import { CalendersGraph } from '../../helpers/graph';
import { calendar } from "@microsoft/teams-js";
import { useState } from "react";

/**
 * This component returns button to compose a meeting
 */
export const Calendar = () => {
    const calendersApi = CalendersGraph();
    const [calenders, setCalenders] = useState({} as any);

    // check to see if capability is supported
    if (calendar.isSupported()) {
        return (
            <>
                <Button onClick={async () => {
                    await calendar.composeMeeting({
                        attendees: [
                            'AdeleV@6plbfs.onmicrosoft.com',
                            'AlexW@6plbfs.onmicrosoft.com'
                        ],
                        content: "Meeting Agenda",
                        subject: "Meeting created by Teams JS"
                    })
                }}>
                    Compose Meeting
                </Button>
                <Button onClick={async () => {
                    try {
                        calendersApi.reload();
                        if (calendersApi.data) {
                            setCalenders(calendersApi.data.calenders);
                        }
                        if (calenders && calenders.value.length > 0 && calenders.value[0].id) {
                            await calendar.openCalendarItem({
                                itemId: convertRestIdToEwsId(calenders.value[0].id)
                            });
                        } else {
                            console.log("Please check if you are authenticated");
                        }
                    } catch (error) {
                        console.log("Something went wrong", error);
                    }

                }}>
                    Open Calendar Item
                </Button>
            </>
        )
    };
    // return's  if capability is not supported.
    return (<>Capability is not supported</>);
}

export const CalendarIsSupported = () => booleanToString(calendar.isSupported());
