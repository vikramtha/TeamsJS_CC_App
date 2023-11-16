import * as Fluent from "@fluentui/react-northstar";
import * as capabilities from './capabilities';

import { getModuleDetails } from "../helpers/utils";

export const AllModules = () => {
    let modules: any = [];
    let modulesIsSupported: any = [];

    if (typeof capabilities === "object") {
        // filtering functions without 'isSupported' name

        const capabs = Object.entries(capabilities);

        modules = capabs.filter((value, index) => {
            return value[0].search("IsSupported") !== -1 ? false : value
        }) as [];

        modulesIsSupported = capabs.filter((value, index) => {
            return value[0].search("IsSupported") === -1 ? false : value
        }) as [];
    }

    const dataTable = modules.map((element: any) => {
        try {
            const moduleName = element[0] as string;

            const isSupportedElement = modulesIsSupported.find((supportedElement: any) => supportedElement[0] === `${moduleName}IsSupported`);

            const moduleDetails = getModuleDetails(moduleName.toLowerCase());

            let iconName: any = [];

            if (typeof Fluent === "object") {
                iconName = Object.entries(Fluent).find((value, index) =>
                    value[0] === moduleDetails?.iconName ? value : undefined
                );
            }

            const el = element[1];
            const elSupported = isSupportedElement[1] as Function;
            const Icon = iconName[1];

            const Capability = el as Function;
            const supported: string = elSupported()

            const capabilityName: JSX.Element | string = <>
                <Icon />
                <Fluent.Text>
                    {moduleName}
                    {moduleDetails?.deprecated &&
                        <Fluent.Text className="short-top-text" content="D" />
                    }
                    {moduleDetails?.beta &&
                        <Fluent.Text className="short-top-text" content="β" />
                    }
                    {moduleDetails?.internal &&
                        <Fluent.Text className="short-top-text" content="i" />
                    }
                </Fluent.Text>
            </>;
            return {
                key: moduleName,
                items: [
                    {
                        key: `${moduleName}-1`,
                        content: capabilityName
                    },
                    { key: `${moduleName}-2`, content: supported },
                    { key: `${moduleName}-3`, content: <Capability />, className: `ui_action ${moduleName === 'AppOpenLink' ? 'ui_openlink' : ''}` },
                ],
            }
        } catch (error) {
            console.log(error);
        }
        return [];
    });
    return dataTable;
}