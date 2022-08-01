import { render, fireEvent, queryByAttribute } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Management from '../pages/Management';

const getById = queryByAttribute.bind(null, 'id');

describe("✅ input 테스트 케이스", () => {
  const alertSpy = jest.spyOn(window, "alert");
  test("상품명이 입력되지 않았으면 경고창을 나타내야 합니다.", () => {
    const { container } = render(<Management/>);
    const $managementProductInput = getById(container, "management-product-input");
    const $managementSubmit = getById(container, "management-submit");
    fireEvent.change($managementProductInput, { target: { value: "" } });
    userEvent.click($managementSubmit, { target: { 
      [$managementProductInput.name] : { value: "" }
    }});
    expect(alertSpy).toBeCalledTimes(1);
  });
  test("가격이 입력되지 않았으면 경고창을 나타내야 합니다.", () => {});
  test("수량이 입력되지 않았으면 경고창을 나타내야 합니다.", () => {});
  test("수량은 0보다 작거나 같으면 경고창을 나타내야 합니다.", () => {});
  test("상품 가격은 100원 부터 시작해야 하며 10원으로 나누어 떨어지지 않으면 경고창을 나타내야 합니다.", () => {});
});

describe("🥤 상품 관리 탭 테스트 케이스", () => {
  test.skip("최초 상품 목록은 비워진 상태여야 합니다.", () => {
    const { container } = render(<Management/>);
    const $table = getById(container, "management-table");
    const [$thead, $tbody] = $table.childNodes;
    const tableText = [];
    $tbody.childNodes.forEach((node) => {
      if (node.textContent.trim()) tableText.push(node.textContent);
    });
    expect(tableText).toHaveLength(0);
  });

  test("사용자가 추가한 상품이 화면에 나타나야 합니다.", () => {
    const { container } = render(<Management/>);
    const $managementProductInput = getById(container, "management-product-input");
    const $managementPriceInput = getById(container, "management-price-input");
    const $managementCountInput = getById(container, "management-count-input");
    const $managementSubmit = getById(container, "management-submit");
    const $table = getById(container, "management-table");
    const [$thead, $tbody] = $table.childNodes;
    const tableText = [];
    fireEvent.change($managementProductInput, { target: { value: "환타" } });
    fireEvent.change($managementPriceInput, { target: { value: 3000 } });
    fireEvent.change($managementCountInput, { target: { value: 10 } });
    userEvent.click($managementSubmit, { target: { 
      [$managementProductInput.name] : { value: "환타" },
      [$managementPriceInput.name]: { value: 3000 },
      [$managementCountInput.name]: { value: 10 }
     } });
    $tbody.childNodes.forEach((node) => {
      if (node.textContent.trim()) tableText.push(node.textContent);
    });
    expect(tableText).toContain("환타300010");
  });
});