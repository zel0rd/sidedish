import * as style from "./MenuCard.style.jsx"

const MiddleCard = ({data, onClick}) => {
    return (
        <style.MiddleCard className="MiddleCard" onClick={onClick}>
            { MiddleImg(data.img) }
            { InfoTitle(data.title) }
            { InfoContents(data.contents)}
            <style.FlexRowContainer>
                { NpriceCheck(data) }
            </style.FlexRowContainer>
            <style.FlexRowContainer>
                { EventPrice(data) }
                { LaunchingPrice(data) }
            </style.FlexRowContainer>
        </style.MiddleCard>
    )
}

const MiddleImg = (url) => {
    return (
        <div style={{ display:"inline-block", position:"relative", marginBottom:"16px", height:"308px"}}>
            <style.MiddleImg
                url={url} 
            >
            </style.MiddleImg>
            { HoverDiv() }
        </div>

    )    
}

const HoverDiv = () => {
    return (
        <style.HoverStyle>
            <div>새벽배송</div>
            <div style={{ margin:"16px 0", backgroundColor:"white", height:"1px", width:"89px"}}></div>
            <div>전국택배</div>
        </style.HoverStyle>
    )
}

const NpriceCheck = ({n_price, s_price}) => {
    if(n_price === "0원"){
        return (
            <style.FlexRowContainer>
                { PriceAfter(s_price) }
            </style.FlexRowContainer>
        )
    } else {
        return (
            <style.FlexRowContainer>
                { PriceAfter(s_price) }
                { PriceBefore(n_price) }
            </style.FlexRowContainer>
        )
    }

}

const InfoTitle = (text) => {
    return (
        <style.LargeInfoTitle>
            {text}
        </style.LargeInfoTitle>)

}

const InfoContents = (text) => {
    return (
        <style.MiddleInfoContents>
            {text}
        </style.MiddleInfoContents>
    )
}

const PriceAfter = (price) => {
    return (
        <style.LargePriceAfter>
            { price }
        </style.LargePriceAfter>
    )
}

const PriceBefore = (price) => {
    return (
        <style.LargePriceBefore>
            { price }
        </style.LargePriceBefore>
    )
}

const EventPrice = (data) => {
    return  (data.badge && data.badge.includes("이벤트특가")) ?  <style.LargeEventPrice>이벤트특가</style.LargeEventPrice> : ""
}

const LaunchingPrice = (data) => {
    return (data.badge && data.badge.includes("론칭특가")) ? <style.LargeLaunchingPrice>런칭특가</style.LargeLaunchingPrice> : ""
}

export { MiddleCard }
