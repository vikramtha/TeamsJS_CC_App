import { Button } from "@fluentui/react-northstar";
import { booleanToString } from "../../helpers";
import { dialog } from "@microsoft/teams-js";

export const Dialog = () => {
    // check to see if capability is supported
    if (dialog.isSupported()) {
        // return buttons to open dialog
        return (
            <Button onClick={() =>
                dialog.url.open({
                    title: 'Dialog Example',
                    fallbackUrl: 'https://localhost:53000/index.html#/privacy',
                    url: 'https://localhost:53000/index.html#/dialog',
                    size: { height: 300, width: 500 }
                }, (response) => {
                    if (response.err) {
                        console.log(response.err);
                    }
                    console.log('submitHandler:', response.result);
                }, (res) => {
                    console.log('dialogListener', res);
                })}>
                Open Dialog
            </Button>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const DialogIsSupported = () => booleanToString(dialog.isSupported());
export const DialogUrlIsSupported = () => booleanToString(dialog.url.isSupported());
export const DialogAdaptivecardIsSupported = () => booleanToString(dialog.adaptiveCard.isSupported());

