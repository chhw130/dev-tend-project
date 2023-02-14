import styles from "./Question.module.css";
import styled from "styled-components";
// import a from "../../contents/images/heart.png";

const Question = ({ d }) => {
  return (
    <>
      {d.question[0].includes("png") ? (
        <>
          <img
            src={process.env.PUBLIC_URL + d.question[0]}
            alt=""
            className={styles.questionImg}
          />
          <div>{d.question[1]}</div>
        </>
      ) : (
        <div className={styles.question}>{d.question}</div>
      )}
    </>
  );
};

export default Question;

// const ImgDiv = styled.img`
//   background-image: url(${(props) => props.imgData});
//   width: 100vw;
//   height: 120vh;
//   background-color: #c4f4fe;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: 100% 90%;
// `;
