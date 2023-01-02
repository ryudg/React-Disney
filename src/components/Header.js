import React from "react";
import myStyle from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={myStyle.textPrimary}>
        <a href="/">
          <img src="./images/logo.png" alt="logo" />
        </a>
      </h1>
      <nav>
        <a href="#Disney">Disney</a>
        <a href="#Marvel">Marvel</a>
        <a href="#Starwars">Starwars</a>
        <a href="#NationalGeographic">National Geographic</a>
        <a href="#20C">20th CENTURY STUDIOS</a>
        <a href="#Disney+" className="dp">
          Disney+
        </a>
      </nav>
    </header>
  );
}

// css-module을 이용하면 클래스명이 충돌하는 단점을 극복할 수 있습니다.
// css-module은 간결한 클래스명을 이용해서 컴포넌트 단위로 스타일을 적용할 때 좋습니다.
// CSS Module을 사용하는 이유
// 1클래스 이름이 중첩되는것을 방지해준다.
// 2유지보수하기 편해진다
// 3사용 범위를 제한하여, 스타일링 하고싶은 컴포넌트가 다른 컴포넌트와 중복되는 클래스 이름에 의하여 방해되는것을 막아준다.
// .module.css 확장자로 파일을 저장하면 CSS Module이 적용된다
// import할때는 import 이름 from '저장 경로'
// 불러올때는 className={이름.className}
// .module.css 파일에서 전역으로 주고싶으면 :global 사용
// :global .btn { background: pink; }
