import { app, barCode } from "@microsoft/teams-js";

import { Button } from "@fluentui/react-northstar";
import { booleanToString } from "../../helpers";

export const BarCode = async () => {
    await app.initialize();

    if (app.isInitialized()) {
        // check to see if capability is supported
        if (barCode.isSupported()) {
            // return button to scan barcode
            return (
                <Button onClick={async () => {
                    await barCode.scanBarCode({})
                }}>
                    Scan Bar Code
                </Button>
            )
        };
    }
    // return empty fragment if capability is not supported
    return (<></>);
}

export const BarCodeIsSupported = async () => booleanToString(barCode.isSupported());
