import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

export default async function OrganizationPage({ params }: Params) {
    const { organizationName } = params;
    return (
        <div className={"my-32"}>
            <h1>Welcome to {organizationName}</h1>
        </div>
    )
}
