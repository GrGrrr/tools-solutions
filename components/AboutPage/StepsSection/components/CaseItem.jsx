export const CaseItem = ({item, activeTab, index}) => {
    return (
        <div
            className={`${activeTab === index ? 'block' : 'hidden'} h-fit 2xl:px-[20px] 2xl:pb-[40px] 3xl:px-[40px] 3xl:pb-[80px]`}>
            <p className="text-desktop-text-lg text-base-strong">{item.text}</p>
        </div>
    )
}