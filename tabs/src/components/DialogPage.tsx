import { Flex, Form, FormButton, FormInput, Segment } from "@fluentui/react-northstar";

import { dialog } from "@microsoft/teams-js";

const DialogPage = () => {
    return (
        <Flex column={true} gap={"gap.small"} padding={"padding.medium"}>
            <Segment>
                <Form
                    onSubmit={(event, data) => {
                        const formData = new FormData(event.currentTarget as any);
                        const json: any = {};
                        const appIDs = ['647b5a9f-51e7-4751-8864-cc0253b492b6'] //this is the state.local.json AppID - probably won't work if you use this for anything else
                        formData.forEach((value, key) => (json[key] = value));
                        dialog.url.submit(json, appIDs);
                    }}
                >
                    <FormInput
                        label="First name"
                        name="firstname"
                        id="first-name"
                        required
                        showSuccessIndicator={false}
                    />
                    <FormButton content="Submit" primary />
                </Form>
            </Segment>
        </Flex>
    );
}

export default DialogPage;
