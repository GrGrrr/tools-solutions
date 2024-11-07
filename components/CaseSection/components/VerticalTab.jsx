export const VerticalTab = ({item, onClick, activeTab, index}) => {
    const handleClick = () => onClick(index);

    return (
        <div
            className="flex items-center justify-center h-[80px] mb-[10px]"
            onClick={handleClick}>
            <div className={`border-[1px] border-base-strong w-full mr-[40px] ${activeTab === index ? 'visible' : 'invisible'}`} />
            <div className="flex justify-center min-w-[182px]">
                {item.logo}
            </div>
        </div>
    )
}