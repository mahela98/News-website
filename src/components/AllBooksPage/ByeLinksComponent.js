const ByLinksComponent = ({ buy_links, saleInfo }) => {
    console.log(buy_links)
    console.log(saleInfo)

    return (
        <>
            <ul className="pl-10 pb-10 list-disc ">
                {saleInfo && saleInfo.buyLink && (
                    <li className="my-link" > <a target="_blank" rel="noopener noreferrer" href={saleInfo.buyLink}> Google Play</a>   </li>
                )}
                {saleInfo && saleInfo.saleability === "NOT_FOR_SALE" && (<h1> Not For Sale </h1>)}

                {buy_links && (
                    buy_links.map((buy_link) =>
                        <li className="my-link" key={buy_link.url}> <a target="_blank" rel="noopener noreferrer" href={buy_link.url}> {buy_link.name}</a>   </li>
                    )
                )}
            </ul>
        </>
    );
}

export default ByLinksComponent;