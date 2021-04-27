import * as style from "./MenuCard.style.jsx"

const MiddleCard = ({data}) => {
    console.log(data)

    return (
        <style.MiddleCard className="MiddleCard">
            { MiddleImg(data.img)}
            {/* { InfoTitle(data.title) }
            { InfoContents(data.contents)}
            <style.FlexRowContainer>
                { NpriceCheck(data) }
            </style.FlexRowContainer>
            <style.FlexRowContainer style = {{ margin: "10px" }}>
                { EventPrice(data) }
                { LaunchingPrice(data) }
            </style.FlexRowContainer> */}
        </style.MiddleCard>
    )
}

const NpriceCheck = (data) => {
    if(data.n_price){
        return (
            <style.FlexRowContainer>
                { PriceAfter(data.n_price) }
                { PriceBefore(data.s_price) }
            </style.FlexRowContainer>
        )
    } else {
        return (
            <style.FlexRowContainer>
                { PriceAfter(data.s_price) }
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
        <style.LargeInfoContents>
            {text}
        </style.LargeInfoContents>
    )
}
const MiddleImg = (url) => {
    return (
        <style.MiddleImg url={url}/>
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
