export const CaseItem = ({item, activeTab, index}) => {
    return (
        <div
            className={`${activeTab === index ? 'block' : 'hidden'} h-fit rounded-[10px] 2xl:px-[20px] 2xl:pt-[20px] 2xl:pb-[40px] 3xl:px-[40px] 3xl:pt-[40px] 3xl:pb-[80px] bg-base-weak`}>
            <p className="text-mobile-text-md text-smoke-strong pb-[20px]">{item.index}</p>
            <p className="text-mobile-text-lg text-base-strong">Industry: {item.industry}</p>
            <p className="text-mobile-text-lg text-base-strong mb-[40px]">Key Features: {item.feature}</p>
            <div className="grid 3xl:grid-cols-2 3xl:gap-[40px]">
                <div>
                    <p className="text-desktop-subtitle text-base-strong mb-[20px]">Challenge</p>
                    <p className="text-desktop-text-md text-smoke-strong mb-[40px]">{item.challenge}</p>
                </div>
                <div>
                    <p className="text-desktop-subtitle text-base-strong mb-[20px]">Solution</p>
                    <p className="text-desktop-text-md text-smoke-strong">{item.solution}</p>
                </div>
            </div>
        </div>
    )
}