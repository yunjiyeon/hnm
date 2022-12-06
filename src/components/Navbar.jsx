// 방응형, 사이드바 추가

import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { BsCart4, BsHeart } from "react-icons/bs";
import { VscMenu, VscChromeClose} from "react-icons/vsc";
import "./Navbar.scss"; 
import { useState } from "react";

function Navbar({authenticate, setAuthenticate}) {
  const [sideState, setSideState] = useState('-100%');
  // 사이드바에 left 상태를 설정
  const navigate = useNavigate();
	const menuList = [
		"여성",
		"Divided",
		"남성",
		"신생아/유아",
		"아동",
		"H&M HOME",
		"스포츠",
		"Sale",
		"지속가능성",
	];


  const search = (event) => {
		if (event.key === "Enter") {
			//엔터키만을 눌렀을때 반응
			let keyword = event.target.value; //js와 다름 event안에 value가 들어있음
			console.log("keyword는?", keyword);
			navigate(`/?q=${keyword}`); //추가조건은 쿼리로 붙임, 키워드를 읽어와서 url에 넣어줌
		}
	};

  const gotoLogin = () => {
    navigate('/login') // 로그인 페이지로 이동
  }

  return (
    <div>
      <div className="side_menu" style={{left:sideState}}>
        <div className="closeBtnWrap">
          <VscChromeClose className="closeBtn"
            onClick={()=> {
              setSideState("-100%")
            }}
          />
        </div>
        <ul className="side_menu_list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
      <div className="burger_menu hide">
        <VscMenu 
          onClick={()=> {
            setSideState("0")
          }}
        />
      </div>


      <div className="login_btnWrap">

        {authenticate ? ( <div className="login_btn" onClick={() => setAuthenticate(false)}>
          <BiLogOutCircle /> <span>로그아웃</span></div>) : 
          (<div className="login_btn" onClick={gotoLogin}>
          <BiLogInCircle /> <span>로그인</span></div>)}

          
        {console.log('로그인상태는?',authenticate)}
      </div>

      <h1>
          <Link to="/">
            <div className="img_Wrap">
              <img width={90} src="img/hmlogo.png" alt="H&M" />
            </div>
          </ Link>
      </h1>

      <nav>
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search">
          <FaSearch />
          <input type="text" placeholder="제품 검색" onKeyPress={(event)=>search(event)}/>
        </div>
      </nav>


    </div>
  );
}

export default Navbar;
