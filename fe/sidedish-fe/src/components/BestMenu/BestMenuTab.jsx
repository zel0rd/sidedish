const BestMenuTab = ( props ) => {
    const Items = Object.values(props)[0]
    const renderItems = () => Items.map(({cateId}) => {
        return (
            <div key={cateId}></div>
        )
    })
    return (
        renderItems()
    )
}
export default BestMenuTab;