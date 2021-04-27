import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import useFetchData from "../../util/hooks/useFetchData.js";
import Slider from "../common/Slider.js";
import LeftBtn from "../common/button/LeftBtn.js";
import RightBtn from "../common/button/RightBtn.js";
import { MiddleCard } from "../MenuCard/MiddleCard.jsx";
import MenuDetailModal from '../MenuDetailModal/MenuDetailModal.js';

const StyledMenuSlider = styled.div`
  width: 100%;
  margin-top: 32px;
  position: relative;

  > .title {
    margin: 32px 0;
    float: left;
    font-weight: 800;
    font-size: 24px;
    line-height: 35px;
    color: #333333;
  }
`;

const _LeftBtnStyle = {
  position: "absolute", 
  top: "60%",
  left: "-3%"
};

const _RightBtnStyle = {
  position: "absolute",
  top: "60%",
  right: "-3%"
}

function MenuSlider({ url, title }) {
  // const { response } = useFetchData(url, {});
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState();
  const [disableLeftBtn, setDisableLeftBtn] = useState();
  const [disableRightBtn, setDisableRightBtn] = useState();
  const sliderRef = useRef();

  const handleSlide = () => {
    setDisableLeftBtn(!sliderRef.current.slidableToLeft());
    setDisableRightBtn(!sliderRef.current.slidableToRight());
  };

  const handleClickLeftBtn = () => {
    sliderRef.current.slideToLeft();
  };

  const handleClickRightBtn = () => {
    sliderRef.current.slideToRight();
  };

  const handleClickMenuCard = (modalProps) => {
    setShowModal(true);
    setModalProps({ ...modalProps, onClickCloseBtn: handleClickCloseBtn });
  }

  const handleClickCloseBtn = () => {
    setShowModal(false);
  }

  const renderItems = () => {
    return response.map((data, idx) =>
      <MiddleCard
        key={idx}
        className="slider-item"
        data={data}
        onClick={() => handleClickMenuCard({ hash: data.detail_hash, titla: data.title })}
      />
    );
  };

  return (
    <StyledMenuSlider>
      {showModal && <MenuDetailModal {...modalProps}/>}
      <div className="title">{title}</div>
      <LeftBtn
        style={_LeftBtnStyle}
        disabled={disableLeftBtn}
        onClick={handleClickLeftBtn}
      />
      <RightBtn
        style={_RightBtnStyle}
        disabled={disableRightBtn}
        onClick={handleClickRightBtn}
      />
      {response && (
        <Slider
          ref={sliderRef}
          itemCntOnView={4}
          items={renderItems()}
          onSlide={handleSlide}
          defaultBtn={false}
        />
      )}
    </StyledMenuSlider>
  );
}

export default MenuSlider;

var response = [
  {
    detail_hash: "HBDEF",
    image:
      "https://cdn.bmf.kr/_data/product/HF56E/2d3f99a9a35601f4e98837bc4d39b2c8.jpg",
    alt: "[윤식당] 불고기 with Rice (재료)",
    delivery_type: ["새벽배송", "전국택배"],
    title: "[윤식당] 불고기 with Rice (재료)",
    description:
      "윤식당 불고기메뉴의 가장 기본인 불고기라이스! (마더소스 포함)",
    n_price: "",
    s_price: "7,000원",
    badge: null,
  },
  {
    detail_hash: "HDF73",
    image:
      "https://cdn.bmf.kr/_data/product/HDF73/7674311a02ba7c88675f3186ddaeef9e.jpg",
    alt: "[빅마마의밥친구] 아삭 고소한 연근고기조림 250g",
    delivery_type: ["새벽배송", "전국택배"],
    title: "[빅마마의밥친구] 아삭 고소한 연근고기조림 250g",
    description: "편식하는 아이도 좋아하는 건강한 연근조림",
    n_price: "",
    s_price: "5,500원",
    badge: null,
  },
  {
    detail_hash: "HF778",
    image:
      "https://cdn.bmf.kr/_data/product/HF778/cad8eee316cf7151e07638aa57b32a9d.jpg",
    alt: "[소중한식사] 골뱅이무침 195g",
    delivery_type: ["새벽배송", "전국택배"],
    title: "[소중한식사] 골뱅이무침 195g",
    description: "매콤새콤달콤, 반찬으로도 안주로도 좋은",
    n_price: "7,000원",
    s_price: "6,300원",
    badge: ["이벤트특가"],
  },
  {
    detail_hash: "HFB53",
    image:
      "https://cdn.bmf.kr/_data/product/HFB53/b6beada6b89af950289003d929936d9c.jpg",
    alt: "[옹가솜씨] 꽁치간장조림 240g",
    delivery_type: ["새벽배송", "전국택배"],
    title: "[옹가솜씨] 꽁치간장조림 240g",
    description: "생강 향이 산뜻한",
    n_price: "",
    s_price: "5,800원",
    badge: null,
  },
  {
    detail_hash: "H077F",
    image:
      "https://cdn.bmf.kr/_data/product/H077F/0221110ead70dfd455e40703bbdd6252.jpg",
    alt: "[마더앤찬] 코다리구이 320g",
    delivery_type: ["새벽배송", "전국택배"],
    title: "[마더앤찬] 코다리구이 320g",
    description: "큼지막하고 살집 많은 동태 한 마리로 만든 코다리구이입니다.",
    n_price: "7,500원",
    s_price: "6,750원",
    badge: ["론칭특가"],
  },
  {
    detail_hash: "H4665",
    image:
      "https://cdn.bmf.kr/_data/product/H4665/385f4106ac26f6e4fe7c640714f405a5.jpg",
    alt: "[남도애꽃] 반건조 문어조림 120g",
    delivery_type: ["새벽배송", "전국택배"],
    title: "[남도애꽃] 반건조 문어조림 120g",
    description: "씹을수록 감칠맛나는 문어살의 쫄깃함",
    n_price: "",
    s_price: "4,600원",
    badge: null,
  },
  {
    detail_hash: "H1AA9",
    image:
      "https://cdn.bmf.kr/_data/product/H1AA9/2455226945d52f5aefd51f35d663bb16.jpg",
    alt: "[마샐미디쉬] 매콤마늘쫑 해산물볶음 180g",
    delivery_type: ["새벽배송", "전국택배"],
    title: "[마샐미디쉬] 매콤마늘쫑 해산물볶음 180g",
    description:
      "탱글탱글한 새우와 오징어를 마늘쫑과 함께 매콤하게 볶아냈어요.",
    n_price: "6,900원",
    s_price: "6,210원",
    badge: ["론칭특가"],
  },
  {
    detail_hash: "HEDFB",
    image:
      "https://cdn.bmf.kr/_data/product/HEDFB/bc3b777115e8377a48c7bd762fe5fdc9.jpg",
    alt: "[빅마마의밥친구] 비빔오징어 150g",
    delivery_type: ["새벽배송", "전국택배"],
    title: "[빅마마의밥친구] 비빔오징어 150g",
    description: "달콤한 신야초발효액이 포인트!",
    n_price: "",
    s_price: "5,000원",
    badge: null,
  },
];
