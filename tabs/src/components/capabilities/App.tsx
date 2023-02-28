import { Button, Text, TextArea } from "@fluentui/react-northstar";

import { app } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";
import { useState } from "react";

export const App = () => {
    const [text, setText] = useState("");
    const [showText, setShowText] = useState(false);
    // check to see if app has been initialized
    if (app.isInitialized()) {
        app.registerOnThemeChangeHandler(() => {
            console.log("Theme changed");
        });

        // return button to get context
        return (<>
            <Button onClick={async () => {
                const context = await app.getContext();
                const contextString = JSON.stringify(context);
                setText(contextString);
                setShowText(true);
                console.log(contextString);
            }}>
                Get Context
            </Button>
            {showText &&
                <TextArea resize="horizontal" value={text} />}
        </>
        )
    }
    // return empty fragment if app has not been initialized
    return (<></>);
}

export const AppIsSupported = () => booleanToString(true);
