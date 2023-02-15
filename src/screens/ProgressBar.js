import styled from "styled-components";
import horse from "../contents/images/horse.png";

const ProgressContainer = styled.div`
  margin-top: 35px;
  position: absolute;
  width: 70vw;
  height: 3vh;
  border-radius: 10px;
  background-color: #80cbc4;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  left: 14.6%;
  z-index: 99;
`;

const Progress = styled.span`
  background: url(${horse});
  background-size: 100% 100%;
  height: 50px;
  width: 40px;
  border-radius: 5px;
  left: ${(props) => props.width};
  top: -1rem;
  position: absolute;
  transition: all 0.6s ease-in-out 0s;

  // background: purple;
  // width: ${(props) => props.width};
`;

const ProgressImg = styled.p`
  margin-top: 12px;
  text-align: center;
  font-size: 24px;
  font-weight: bolder;
  color: white;
  font-family: "Ansungtangmyun";
  text-shadow: 1px 1px 4px rgb(40, 40, 40);
`;

const ProgressBar = ({ result, data }) => {
  /** 상단 프로그레스바 */
  const barWidth = result;

  return (
    <ProgressContainer>
      <Progress width={(barWidth / data.length) * 100 + "%"}>
        <ProgressImg>{barWidth}</ProgressImg>
      </Progress>
    </ProgressContainer>
  );
};

export default ProgressBar;
