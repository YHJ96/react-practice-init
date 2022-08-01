import React from 'react';
// SPA 구성 라이브러리
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Management from './pages/Management';
import Charge from './pages/Charge';
import Product from './pages/Product';

/* API 호출 상수 */
const Random = global.MissionUtils.Random;

function App() {
  /* API 예시 입니다. 확인하시고 지우시면 됩니다. */
  const randomNumber = Random.pickNumberInRange(1, 10);
  console.log(randomNumber);
  /* react-router-dom으로 SPA를 먼저 구성해주세요. */
  return (
    <div>
      <form id='nav'>
        <button id='management-button'>상품 관리</button>
        <button id='charge-button'>잔돈 충전</button>
        <button id='product-button'>상품 구매</button>
      </form>
      <Management />
      <Charge />
      <Product />
    </div>
  );
}

export default App;