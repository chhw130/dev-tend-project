import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/MainPage/Main";
import Routing from "./screens/Routing";
import ResultPage from "./components/ResultPage/ResultPage";
import { GlobalStyles } from "./contents/styles";

function App() {
  const [result, setResult] = useState(0);
  const [frontResult, setFrontResult] = useState(0);
  const [backResult, setBackResult] = useState(0);
  const [scoreResult, setScoreResult] = useState(0);

  /** 질문 답변 임의 데이터 */
  const Data = [
    {
      id: 1,
      question: "수업중 오타투성이인 강사님의 코드!\n당신의 생각은???",
      answerData: [
        {
          answer: "오타가 너무 신경 쓰여 집중이 안된다,,,,",
          type: "front",
        },
        { answer: "그런거 신경 안쓴다,, 일단 진도나 따라가야지", type: "back" },
      ],
    },
    {
      id: 2,

      question: ["/imageData/img1.png", "하트의 위치는 몇번째인가??"],

      answerData: [
        {
          answer: "i=1",
          type: "front",
        },
        { answer: "i=2", type: "back" },
        { answer: "i=3", type: "front" },
        { answer: "i=4", type: "front" },
      ],
    },
    {
      id: 3,
      question:
        "프로젝트를 마치고 친구에게 자랑하는 도중,\n내 프로젝트를 보기위해 주변 사람들에게 둘러쌓이고 말았다. 이 때 당신의 속마음은??",
      answerData: [
        {
          answer: "아아,,, 부끄러운데 이따 보여줄까...?",
          type: "back",
        },
        { answer: "이런 관심??? 나쁘지 않아,,, 오히려 좋아^^", type: "front" },
      ],
    },
    {
      id: 4,

      question: ["/imageData/img2.png", "다음 빈칸에 들어갈 말은?!"],

      answerData: [
        {
          answer: "1. HTML",
          type: "front",
        },
        { answer: "2. Python", type: "back" },
        { answer: "3. JavaScript", type: "front" },
        { answer: "4. TypeScript", type: "front" },
      ],
    },
    {
      id: 5,
      question: "빠른 트렌드 변화에 대한 당신의 생각은???",
      answerData: [
        {
          answer: "너무 빠른 변화는 따라가기 힘들다ㅠㅠ 싫다!!",
          type: "back",
        },
        { answer: "내가 또 트렌드를 잘 따라가지 ㅎㅎ", type: "front" },
      ],
    },
    {
      id: 6,
      question: "프로젝트 수행 하기위한 팀원은 어느정도가 적당한가?!",
      answerData: [
        {
          answer: "될 수 있으면 혼자 or 한명까지,,",
          type: "back",
        },
        {
          answer: "그래도 4명정도는 되어야하지 않을까??",
          type: "front",
        },
      ],
    },
    {
      id: 7,
      question: "영화를 만들기 위해 당신이 더 흥미 있는 것은??",
      answerData: [
        {
          answer: "작품을 빛낼 배우",
          type: "front",
        },
        { answer: "영화를 설계하는 작가나 감독", type: "back" },
      ],
    },
    {
      id: 8,
      question:
        "2022년 10월 데이터 센터 화재로 일어난 카카오 서비스 장애 사건…\n데이터 센터의 위치는?",
      answerData: [
        {
          answer: "1. 구로",
          type: "front",
        },
        { answer: "2. 판교", type: "back" },
        { answer: "3. 부산", type: "front" },
        { answer: "4. 강남", type: "front" },
      ],
    },
    {
      id: 9,
      question: "신입 개발자가 주의해야 할 것이 아닌 것은?",
      answerData: [
        {
          answer: "1. 고민하다가 모르겠어도 사수에게 질문 금지",
          type: "1",
        },
        {
          answer: "2. 별로 놀랄 일도 아닌 일에 '어?!'금지",
          type: "0",
        },
        {
          answer: "3. 한 사람 뒤에 3명 이상 서있기 금지",
          type: "0",
        },
        { answer: "4. 손가락으로 모니터 가리키며 웅성웅성 금지", type: "0" },
      ],
    },
    {
      id: 10,

      question: ["/imageData/img3.jpg", "빈칸에 들어갈 말로 옳은 것은?!"],


      answerData: [
        {
          answer: "1. 쯧쯧쯧,,, 세금 낭비",
          type: "0",
        },
        {
          answer: "2. 이게 웬 갑분육교;;;",
          type: "0",
        },
        {
          answer: "3. 운동하기 좋겠다.",
          type: "0",
        },
        { answer: "4. 그렇다고 없애면 버그가 생길지도..??", type: "1" },
      ],
    },
    {
      id: 11,
      question: "개발자들이 다크모드를 선호하는 이유는?!?!",
      answerData: [
        {
          answer: "눈이 편하니까?!",
          type: "0",
        },
        {
          answer: "있어 보이니까?!",
          type: "0",
        },
        {
          answer: "빛은 벌레를 끌어들이니까?!",
          type: "1",
        },
        {
          answer: "다들 쓰니까!",
          type: "0",
        },
      ],
    },
    {
      id: 12,
      question: "연결 관계가 다른 것은?",
      answerData: [
        {
          answer: "노란색 - Javascript",
          type: "0",
        },
        {
          answer: "파랑/노랑 - Python",
          type: "0",
        },
        {
          answer: "하늘 - React",
          type: "0",
        },
        {
          answer: "빨강 - HTML",
          type: "1",
        },
      ],
    },
    {
      id: 13,
      question: "국내 개발 컨퍼런스 중 틀린 것은?",
      answerData: [
        {
          answer: "우아한 형제들 : 우아콘",
          type: "0",
        },
        {
          answer: "넥슨 : NXC",
          type: "1",
        },
        {
          answer: "네이버 : Deview",
          type: "0",
        },
        {
          answer: "카카오 : if Kakao",
          type: "0",
        },
      ],
    },
    {
      id: 14,
      question: "다음 단어를 보고 생각나는 이미지를 고르세요.\n<코드>",
      answerData: [
        {

          answer: "/imageData/img4.jpeg",


          type: "0",
        },
        {
          answer: "/imageData/img5.png",
          type: "0",
        },
        {
          answer: "/imageData/img6.png",
          type: "1",
        },
        {
          answer: "/imageData/img7.png",
          type: "0",
        },
      ],
    },
    {
      id: 15,
      question:
        "개발자가 다음 영단어를 보고 먼저 떠오르는 것이 바르게 연결된 것은??",
      answerData: [
        {

          answer: "/imageData/img8.jpeg",

          type: "0",
        },
        {
          answer: "/imageData/img9.png",
          type: "0",
        },
        {
          answer: "/imageData/img10.png",

          type: "1",
        },
        {
          answer: "/imageData/img11.png",
          type: "0",
        },
      ],
    },
    {
      id: 16,
      question:
        "문제 상황에 부딪혔을 때, 스트레스를 얼마나 받는지 수치로 선택해주세요",
      answerData: [
        {
          answer: "1",
          type: "1",
        },
        {
          answer: "2",
          type: "1",
        },
        {
          answer: "3",
          type: "1",
        },
        {
          answer: "4",
          type: "1",
        },
      ],
    },
    {
      id: 17,
      question: "chatGPT에 대해 틀린 것은?",
      answerData: [
        {
          answer: "판사가 판결을 내리는데 참고하기도 했다.",
          type: "0",
        },
        {
          answer: "텍스트를 이해하고 답변하는 AI",
          type: "1",
        },
        {
          answer: "미국의 변호사, 의사, MBA 졸업 시험 등을 통과 했다.",
          type: "0",
        },
        {
          answer: "코딩 뿐만 아니라 시, 랩 가사, 이야기도 쓸 줄 안다.",
          type: "0",
        },
      ],
    },
    {
      id: 18,
      question: "나의 모습과 가장 가까운 이미지를 고르세요.",
      answerData: [
        {

          answer: "/imageData/img12.jpeg",


          type: "1",
        },
        {

          answer: "/imageData/img13.jpeg",
          type: "1",
        },
        {
          answer: "/imageData/img14.jpeg",


          type: "1",
        },
        {

          answer: "/imageData/img15.jpeg",


          type: "1",
        },
      ],
    },
  ];

  Data[0].question.replace(/\n/g, `<br/>`);
  // console.log(Data[0].question);

  /**답변한 데이터(data : 현재까지 답변한 답 수, front : 현재까지 답한 프론트 답, back : 현재까지 답한 백엔드 답) */
  const tendencyData = (data) => {
    setResult(data.progress);
    setScoreResult(data.score);
    setFrontResult(data.front);
    setBackResult(data.back);
  };

  console.log(
    `"data" : ${result}, "score" : ${scoreResult} "front" : ${frontResult}, "back" : ${backResult}`
  );

  return (
    /* result(진행도)가 10일때 프로그래스바 & 질문페이지 없애기  */
    <>
      <audio
        src="./샛별프로젝트-AM 5.00 (bpm108).mp3"
        autoPlay
        loop
        id="myAudio"
      >
        오디오 지원되지 않는 브라우저
      </audio>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {result === Data.length ? (
            false
          ) : (
            <Route
              path="/test"
              element={
                <Routing
                  result={result}
                  data={Data}
                  tendencyData={tendencyData}
                />
              }
            />
          )}

          {/* result(진행도)가 10일때 결과페이지 보여주기  */}
          {result === Data.length ? (
            <Route
              path="/test"
              element={
                <ResultPage frontResult={frontResult} backResult={backResult} />
              }
            />
          ) : (
            false
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
