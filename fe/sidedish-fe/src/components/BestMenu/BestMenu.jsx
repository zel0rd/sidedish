import React, {useEffect, useState} from "react"
import { BestMenuStatic } from "../../rsc/static/components.js"
import * as style from "./BestMenu.style"
import BestMenuTab from "./BestMenuTab"
import useFetchData from "../../util/hooks/useFetchData.js"
import { FlexRowContainer } from "../common/FlexContainer.jsx";
import { LargeCard } from "../MenuCard/LargeCard";
import MenuDetailModal from "../MenuDetailModal/MenuDetailModal.js"

const BestMenu = () => {
  const [index, setIndex] = useState(0)
  const [modalProps, setModalProps] = useState();
  const [showModal, setShowModal] = useState(false);

  const url = "https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/baminchan/best"
  const { response } = useFetchData(url, {});

  const renderTabTitles = () => { 
    return response.body.map((v, idx) => {
      return <style.BestMenuTabTitle className={ (index===idx ? 'select' : '')} key={idx}  data={v} data-idx={idx} onClick={handleCategoryClicked}>{v.name}</style.BestMenuTabTitle>
    }); 
  }

  const handleCategoryClicked = ({target}) => {
    setIndex(target.dataset.idx *= 1)
  }
  
  const renderLargeCard = () => {
    return response.body[index].items.map(v => <LargeCard data={v} onClick={() => handleClickCard( { hash:v.detail_hash, title: v.title } ) } />);
  }

  const handleClickCard = (modalProps) => {
    setShowModal(true);
    setModalProps({ ...modalProps, onClickCloseBtn: handleClickCloseBtn });
  }

  const handleClickCloseBtn = () => {
    setShowModal(false);
  }


  return (
    <div>
      {showModal && <MenuDetailModal {...modalProps}/>}
      <style.BestMenuTitle>{BestMenuStatic.Title}</style.BestMenuTitle>
      <FlexRowContainer>
        { response && renderTabTitles() }
      </FlexRowContainer>
      <style.BestMenuTabInfo>
        <FlexRowContainer>  
          <div style={{ margin:"40px", display:"flex", justifyContent:"space-between", width:"100%"}}>
          { response && renderLargeCard() }
          </div>
        </FlexRowContainer>
      </style.BestMenuTabInfo>
      <div className="BestMenuContents"></div>
    </div>
  )
}

export { BestMenu }