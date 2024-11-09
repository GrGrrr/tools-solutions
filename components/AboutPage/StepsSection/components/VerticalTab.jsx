export const VerticalTab = ({item, onClick, activeTab, index}) => {
    const handleClick = () => onClick(index);

    return (
        <div
            className="grid grid-cols-2 items-center justify-start mb-[10px]"
            onClick={handleClick}>
            <div
                className={`flex text-desktop-subtitle ${activeTab === index ? 'text-base-strong' : 'text-smoke-strong'}`}>
                {item.label}
            </div>
            <div className={`border-[1px] border-base-strong w-full ${activeTab === index ? 'visible' : 'invisible'}`}/>
        </div>
    )
}