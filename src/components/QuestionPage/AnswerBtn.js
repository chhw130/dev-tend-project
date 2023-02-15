import styles from "./AnswerBtn.module.css";

const AnswerBtn = (props) => {
  return (
    <>
      {props.a.answer.includes("imageData") ? (
        <img
          className={styles.answerImg}
          src={props.a.answer}
          value={props.a.type}
          onClick={props.answerHandler}
          alt=""
        />
      ) : (
        <button
          className={styles.answerButton}
          key={Math.random()}
          value={props.a.type}
          onClick={props.answerHandler}
        >
          {props.a.answer}
        </button>
      )}
    </>
  );
};

export default AnswerBtn;
