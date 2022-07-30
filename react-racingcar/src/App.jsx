import React, { useState } from "react";

function App() {
  /* 예시 state */
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  /* API 호출 상수 */
  const Random = global.MissionUtils.Random;
  
  /* API 예시 입니다. 확인하시고 지우시면 됩니다. */
  const randomNumber = Random.pickNumberInRange(1, 10);
  console.log(randomNumber);

  /* 코드 작성 구역 */

  return (
    <div id="app">
      <h1>🏎️ 자동차 경주 게임</h1>
      <p>
        자동차 이름을 <strong>5자 이하로</strong> 콤마로 구분하여 입력해주세요.
        <br />
        올바른 예) east,west,south,north <br />
      </p>
      <form>
        {/* input과 button에 핸들러를 만들어서 넣어주세요. */}
        {/* value에 사용하고자 하는 state를 넣어주세요. */}
        <input id="text-input" type="text" value={text} onChange={() => {}} />
        <button id="text-button" type="submit" onClick={() => {}} >
          입력
        </button>
      </form>
      <h4>시도할 횟수를 입력해주세요.</h4>
      <form>
        {/* input과 button에 핸들러를 만들어서 넣어주세요. */}
        {/* value에 사용하고자 하는 state를 넣어주세요. */}
        <input id="number-input" type="number" value={number} onChange={() => {}} />
        <button id="number-button" type="submit" onClick={() => {}} >
          확인
        </button>
      </form>
      <h4>📄 실행 결과</h4>
    </div>
  );
}

export default App;