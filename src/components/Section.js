import React from "react";

export default function Section(props) {
  const bgStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${props.bg})`,
  };
  return (
    <section style={bgStyle} id={props.title}>
      <div className="title-group">
        {/* <h1>{props.title}</h1> */}
        <img
          src={`${process.env.PUBLIC_URL}/images/${props.logo}`}
          alt="타이틀이미지"
        />
      </div>
    </section>
  );
}

// process.env.PUBLIC_URL public 폴더 경로
