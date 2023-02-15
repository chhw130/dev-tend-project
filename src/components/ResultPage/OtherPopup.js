import React, { useState } from "react";
import styles from "./OtherPopup.module.css";
import ResultList from "./Result_list";
const OtherPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const popupClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div className={styles.popupBtn}>
        <button onClick={popupClick}>모든결과보기</button>
      </div>
      {showPopup &&
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <div className={styles.content}>
              {/* front */}
              <p>
                {ResultList["front"][0].TypeName}
              </p>
              {ResultList["front"][0].Describtion.split("/").map(des => {
                return (
                  <p>
                    {des}
                  </p>
                );
              })}

              <p>
                {ResultList["front"][1].TypeName}
              </p>

              {ResultList["front"][1].Describtion.split("/").map(des => {
                return (
                  <p>
                    {des}
                  </p>
                );
              })}

              <p>
                {ResultList["front"][2].TypeName}
              </p>

              {ResultList["front"][2].Describtion.split("/").map(des => {
                return (
                  <p>
                    {des}
                  </p>
                );
              })}
              {/* back */}
              <p>
                {ResultList["back"][0].TypeName}
              </p>
              {ResultList["back"][0].Describtion.split("/").map(des => {
                return (
                  <p>
                    {des}
                  </p>
                );
              })}

              <p>
                {ResultList["back"][1].TypeName}
              </p>

              {ResultList["back"][1].Describtion.split("/").map(des => {
                return (
                  <p>
                    {des}
                  </p>
                );
              })}

              <p>
                {ResultList["back"][2].TypeName}
              </p>

              {ResultList["back"][2].Describtion.split("/").map(des => {
                return (
                  <p>
                    {des}
                  </p>
                );
              })}
              {/* full */}
              <p>
                {ResultList["full"][0].TypeName}
              </p>
              {ResultList["full"][0].Describtion.split("/").map(des => {
                return (
                  <p>
                    {des}
                  </p>
                );
              })}

              <p>
                {ResultList["full"][1].TypeName}
              </p>

              {ResultList["full"][1].Describtion.split("/").map(des => {
                return (
                  <p>
                    {des}
                  </p>
                );
              })}

              <p>
                {ResultList["full"][2].TypeName}
              </p>

              {ResultList["full"][2].Describtion.split("/").map(des => {
                return (
                  <p>
                    {des}
                  </p>
                );
              })}
            </div>
            <a className={styles.startBtn}>
              <button
                onClick={() => {
                  setShowPopup(false);
                }}
              >
                닫기
              </button>
            </a>
          </div>
        </div>}
    </div>
  );
};

export default OtherPopup;
