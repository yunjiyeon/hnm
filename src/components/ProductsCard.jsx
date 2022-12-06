// 상품을 눌렀을 때 그 사품에 해당하는 productDetail 페이지로 넘어가게하기
// useNavigate = 특정 사이트로 이동할 수 있음
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsCard.scss";

const ProductsCard = ({ item }) => {
  const aa = useNavigate();
  const showDetail = () => {
    aa(`/product/${item.id}`);
  }
  return (
    <div className="productsCard">
      <div className="img-container" onClick={showDetail}>
        <img src={item?.img} alt="" />
        <div className="item_box">
          
          { item?.choice === true ? (<div className="event">Weekly Best Seller</div>) : null } {/* 삼항연산자 : item*/}
          { item?.new === true ? (<div className="new">NEW</div>) : null }
        </div>
      </div>
      <div className="title">{item?.title}</div>
      <div className="price">₩ {item?.price}</div>
    </div>
  );
};

export default ProductsCard;

// {item?.img} 는 아이템이 있을 때 넣고, 아이템이 없거나 할 경우에는 error 가 뜸
