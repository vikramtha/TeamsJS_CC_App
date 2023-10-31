import * as Fluent from "@fluentui/react-northstar";
import * as capabilities from './capabilities';

import { getModuleDetails } from "../helpers/utils";

export const ModulePage = () => {
    let modules: any = [];
    let modulesIsSupported: any = [];
    if (typeof capabilities === "object") {
        modules = Object.entries(capabilities).filter(([_, value]) =>
            value.name.search("IsSupported") !== -1 ? false : value
        ) as [];

        modulesIsSupported = Object.entries(capabilities).filter(([_, value]) =>
            value.name.search("IsSupported") === -1 ? false : value
        ) as [];
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
            const supported = isSupportedElement[1]();
            const Icon = iconName[1];

            const Capability = el as Function;
            // const supported = elString();

            const content: JSX.Element | string = <>
                <Icon />
                <Fluent.Text>
                    {moduleName}
                    {moduleDetails?.deprecated &&
                        <Fluent.Text className="short-top-text" content="D" />
                    }
                    {moduleDetails?.beta &&
                        <Fluent.Text className="short-top-text" content="β" />
                    }
                </Fluent.Text>
            </>;
            return {
                key: moduleName,
                items: [
                    {
                        key: `${moduleName}-1`,
                        content: content
                    },
                    { key: `${moduleName}-2`, content: supported },
                    { key: `${moduleName}-3`, content: <Capability />, className: `ui_action ${moduleName === 'AppOpenLink' ? 'ui_openlink' : ''}` },
                ],
            }
        } catch (error) {
            console.log(error);
        }

    });
    return dataTable;
}