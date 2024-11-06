export const VerticalTab = ({item, onClick, activeTab, index}) => {
    const handleClick = () => onClick(index);

    return (
        <div
            className="flex items-center h-[80px] mb-[10px]"
            onClick={handleClick}>
            <div className={`border-[1px] border-base-strong w-full mr-[40px] ${activeTab === index ? 'visible' : 'invisible'}`} />
            <div>
                {item.logo}
            </div>
        </div>
    )
}