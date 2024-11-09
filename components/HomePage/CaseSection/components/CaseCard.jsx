export const CaseCard = ({item}) => {

    return (
        <div
            className="flex-shrink-0 sm:h-[850px] sm:w-[340px] md:h-[720px] md:w-[480px] rounded-[10px] px-[20px] py-[40px] mr-[20px] bg-base-weak">
            <p className="text-mobile-text-md text-smoke-strong pb-[20px]">{item.index}</p>
            <div className="mb-[40px]">{item.logo}</div>
            <p className="text-mobile-text-lg text-base-strong">Industry: {item.industry}</p>
            <p className="text-mobile-text-lg text-base-strong mb-[40px]">Key Features: {item.feature}</p>
            <p className="text-mobile-text-lg text-base-strong mb-[20px]">Challenge</p>
            <p className="text-mobile-text-md text-smoke-strong mb-[40px]">{item.challenge}</p>
            <p className="text-mobile-text-lg text-base-strong mb-[20px]">Solution</p>
            <p className="text-mobile-text-md text-smoke-strong">{item.solution}</p>
        </div>
    )
}