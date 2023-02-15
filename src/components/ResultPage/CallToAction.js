import styles from "./CallToAction.module.css";

const CallToAction = () => {
  const textData = {
    content:
      "본 심리테스트는 오즈코딩스쿨\n린스타트업 맞춤형 Serverless MVP 개발 전문가 양성 과정 1기\n ooo팀이 1일 만에 구현한 결과물입니다.",
    ozCoding: "오즈코딩스쿨 알아보기 >",
    team: "팀 소개 페이지 >",
  };

  const ozBtnHandler = () => {
    window.open("https://ozcodingschool.com/");
  };
  const teamBtnHandler = () => {
    window.open(
      "https://legend-palm-1f1.notion.site/4-_-3822549709ce49138424b2c2d7cf150a"
    );
  };

  return (
    <div className={styles.callToActionDiv}>
      <div>{textData.content}</div>
      <input type="button" onClick={ozBtnHandler} value={textData.ozCoding} />
      <input type="button" onClick={teamBtnHandler} value={textData.team} />
    </div>
  );
};

export default CallToAction;
