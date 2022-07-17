import React, { useState } from 'react';

function App() {
  const Random = global.MissionUtils.Random;
  // API 예시 입니다. 확인하시고 지우시면 됩니다. README.md파일에 API 사용법을 확인해주세요.
  console.log(Random.pickNumberInRange(1, 10));

  // input태그의 value 속성에 player 상태를 넣어주세요.
  const [player, setPlayer] = useState('');
  
  /* 코드 작성 구역 */

  return (
    <div id="app">
    <h1>⚾ 숫자 야구 게임</h1>
    <p>
      <strong>1~9까지의 수</strong>를 중복없이
      <strong>3개</strong> 입력해주세요. <br />
      올바른 예) 139 <br />
      틀린 예) 122
    </p>
    {/* input과 button에 핸들러를 만들어서 넣어주세요. */}
    <form>
      <input type="text" id="user-input" value={player} onChange={() => {}}/>
      <button id="submit" onClick={() => {}}>확인</button>
    </form>
    <h3>📄 결과</h3>
    <div id="result">1볼 1스트라이크</div>
    <button id="game-restart-button">재시작</button>
  </div>
  );
}

export default App;