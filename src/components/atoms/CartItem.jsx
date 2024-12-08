import { useState } from "react";
import Box from "./Box";
import Counter from "./Counter";
import { useCallback } from "react";
import { comma } from "../../utils/convert";
import { Link } from "react-router-dom";
import Button from "./Button";
import Photo from "./Photo";

const staticServerUri = process.env.REACT_APP_PATH || "";

// 각 상품별 장바구니 항목
// 여러 옵션이 저장될 수 있음
const CartItem = ({ item, onChange }) => {
  const [amounts, setAmounts] = useState(
    item.carts.map((cart) => ({
      id: cart.id,
      amount: cart.price,
    }))
  );
  const [totalAmount, setTotalAmount] = useState(
    item.carts.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0)
  );
  const getOptionAmountById = useCallback(
    (id) => {
      const foundElement = amounts.find((element) => element.id === id);
      return foundElement ? foundElement.amount : 0;
    },
    [amounts]
  );
  const setOptionAmountById = useCallback((id, addNum) => {
    setAmounts((prev) => {
      return prev.map((element) => {
        if (element.id === id) {
          return { ...element, amount: element.amount + addNum };
        }
        return element;
      });
    });
    setTotalAmount((prev) => prev + addNum);
  }, []);

  return (
    <Box className="border rounded bg-white px-10 py-6 my-2">
      <div className="flex items-center  mb-3">
        <Photo
          className="w-20 h-20 rounded border border-neutral-200"
          src={`${process.env.REACT_APP_SHOP_API_URL}/images/${item.id}.jpg`}
          // 아래는 크램폴린 배포 환경에서 이용한 src
          // 크램폴린 배포 서버에서 api로 이미지를 제공해 주지않아 public 이미지를 이용하도록 수정
          // src={`/images/${item.id}.jpg`}
          alt={`${item.productName} image`}
        />
        <Link to={staticServerUri + `/product/${item.id}`}>
          <h5 className="pl-3 font-semibold text-base tracking-tighter">
            {item.productName}
          </h5>
        </Link>
      </div>

      {item.carts.map((cart) => {
        return (
          // 개수가 0개인 옵션은 표시하지 않도록 한다.
          cart.quantity !== 0 && (
            <div
              //옵션 아이디
              key={cart.id}
              className="border rounded bg-[#FDFDFD] p-6 my-2"
            >
              <div className="mb-4">
                <span>{cart.option.optionName}</span>
              </div>
              <div className="flex items-center">
                {/* 삭제 버튼 구현 */}
                <Button
                  className="w-fit h-8 mr-3 bg-white border rounded border-neutral-200 "
                  onClick={() => {
                    onChange(cart.id, 0, -cart.quantity * cart.option.price);
                    setOptionAmountById(
                      cart.id,
                      -cart.quantity * cart.option.price
                    );
                  }}
                >
                  <span className="text-sm px-3">삭제</span>
                </Button>
                <Counter
                  value={cart.quantity}
                  onIncrease={(count) => {
                    // onChange(아이디, 변경된 수량, 해당 옵션 상품의 가격)
                    onChange(cart.id, count, cart.option.price);
                    setOptionAmountById(cart.id, cart.option.price);
                  }}
                  onDecrease={(count) => {
                    onChange(cart.id, count, -cart.option.price);
                    setOptionAmountById(cart.id, -cart.option.price);
                  }}
                />
                <span className="ml-auto">
                  {comma(getOptionAmountById(cart.id))}원
                </span>
              </div>
            </div>
          )
        );
      })}
      <div className="border rounded bg-[#FAFAFA] px-6 py-4 mt-6">
        <span className="font-semibold">주문금액</span>
        <span className="float-right font-semibold">
          {comma(totalAmount)}원
        </span>
      </div>
    </Box>
  );
};
export default CartItem;
