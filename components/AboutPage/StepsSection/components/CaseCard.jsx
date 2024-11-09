export const CaseCard = ({item}) => {

    return (
        <div
            className="flex-shrink-0 sm:h-[850px] sm:w-[340px] md:h-[720px] md:w-[480px] px-[20px] py-[40px] mr-[20px]">
            <p className="text-mobile-text-lg text-base-strong mb-[20px]">{item.text}</p>
        </div>
    )
}