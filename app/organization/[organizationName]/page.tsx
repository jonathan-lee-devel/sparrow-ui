interface OrganizationPageProps {
    params: {
        organizationName: string;
    }
}

export default async function OrganizationPage({ params }: OrganizationPageProps) {
    const { organizationName } = params;
    return (
        <div className={"my-32"}>
            <h1>Welcome to {organizationName}</h1>
        </div>
    )
}
