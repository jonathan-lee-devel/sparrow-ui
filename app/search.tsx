interface SearchTermsProps {
    rawSearchTerms: string;
}

export default function Search({ rawSearchTerms }: SearchTermsProps) {
    return (
        <div>
            <h1>{rawSearchTerms}</h1>
        </div>
    )
}
