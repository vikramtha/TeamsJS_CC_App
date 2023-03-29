import { Button, Flex } from "@fluentui/react-northstar";
import { booleanToString, convertRestIdToEwsId } from "../../helpers";

import { MailGraph } from "../../helpers/graph";
import { mail } from "@microsoft/teams-js";
import { useState } from "react";

/**
 * This component compose a new mail and open's an existing mail with mailItemId
 */
export const Mail = () => {
    const mailApi = MailGraph();
    const [mails, setMails] = useState({} as any);

    // check to see if capability is supported
    if (mail.isSupported()) {
        return (
            <Flex gap="gap.small" vAlign="center">
                <Button onClick={async () => {
                    await mail.composeMail({
                        type: mail.ComposeMailType.New,
                        subject: "Here goes the mail subject ",
                        message: "This is the first mail you are about to send",
                        toRecipients: [
                            'AdeleV@6plbfs.onmicrosoft.com',
                            'AlexW@6plbfs.onmicrosoft.com'
                        ],
                    })
                }}>
                    Compose Mail
                </Button>
                <Button onClick={async () => {
                    try {
                        mailApi.reload();
                        if (mailApi.data) {
                            setMails(mailApi.data.mail);
                        }
                        if (mails && mails.value.length > 0 && mails.value[0].id) {
                            await mail.openMailItem({
                                itemId: convertRestIdToEwsId(mails.value[0].id),
                            });
                        } else {
                            console.log("Please check if you are authenticated");
                        }
                    } catch (error) {
                        console.log("Something went wrong", error);
                    }

                }}>
                    Open Mail Item
                </Button>
            </Flex>
        )
    };
    // return's  if capability is not supported
    return (<>Capability is not supported</>);
}

export const MailIsSupported = () => booleanToString(mail.isSupported());
