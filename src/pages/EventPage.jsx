import React from "react";
import "../styles/eventpage.css";
import firstImage from "../assets/images/products/firstimage.webp";
import saleProduct1 from "../assets/images/products/saleproducts1.webp";
import saleProduct2 from "../assets/images/products/saleproducts2.webp";
import saleProduct4 from "../assets/images/products/saleproducts4.webp";
import saleProduct5 from "../assets/images/products/saleproducts5.webp";
import saleProduct6 from "../assets/images/products/saleproducts6.webp";
import saleProduct7 from "../assets/images/products/saleproducts7.webp";
import saleProduct8 from "../assets/images/products/saleproducts8.webp";
import saleProduct9 from "../assets/images/products/saleproducts9.webp";
import saleProduct10 from "../assets/images/products/saleproducts10.webp";
import saleProduct11 from "../assets/images/products/saleproducts11.webp";
import saleProduct12 from "../assets/images/products/saleproducts12.webp";
import couponImage from "../assets/images/products/negowang.webp";

const EventPage = () => {
  const saleImages = [
    [saleProduct1, 70],
    [saleProduct2, 51],
    [saleProduct4, 64],
    [saleProduct5, 53],
    [saleProduct6, 68],
    [saleProduct7, 62],
    [saleProduct8, 58],
    [saleProduct9, 50],
    [saleProduct10, 40],
    [saleProduct11, 62],
    [saleProduct12, 62],
  ];

  const coupons = [
    { id: 1, amount: 5000, minPurchase: 50000, expiry: "2024.09.20" },
    { id: 2, amount: 3000, minPurchase: 30000, expiry: "2024.09.20" },
    { id: 3, amount: 2000, minPurchase: 20000, expiry: "2024.09.20" },
    { id: 4, amount: 1000, minPurchase: 10000, expiry: "2024.09.20" },
  ];

  // 쿠키에서 특정 값을 가져오는 함수
  // function getCookieValue(name) {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(';').shift();
  //   return null;
  // }

  // 이메일을 userId로 변환하는 함수
  // function emailToUserId(email) {
  //   let hash = 0;
  //   for (let i = 0; i < email.length; i++) {
  //     const char = email.charCodeAt(i);
  //     hash = (hash << 5) - hash + char;
  //     hash |= 0; // 32bit 정수로 변환
  //   }
  //   // console.log("Hashed email (userId):", hash); // hash 로그 출력
  //   return Math.abs(hash); // 음수 방지를 위해 절댓값 사용
  // }

  // 쿠폰버튼 클릭 시 실행
  async function handleButtonClick(couponId) {
    const API_URL = process.env.REACT_APP_API_COUPON_URL;
    // const token = getCookieValue("token");
    // const email = getCookieValue("email");

    // if (!token || !email) {
    //   alert("로그인 후 이용 가능합니다");
    //   return;
    // }

    const userId = 1; // admin@mail.com userId=1
    // const userId = emailToUserId(decodeURIComponent(email)); // email을 userId로 변환
    console.log("User ID:", userId, "type: ", typeof(userId)); // userId 로그 출력, 형태 확인

    try {
      // 쿠폰 발급 요청
      const response = await fetch(`${API_URL}/v2/issue-async`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,     // 변환된 사용자 ID
          couponId,   // 클릭한 쿠폰 ID
        }),
      });

      console.log(response); // 응답 로그 출력

      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }

      const data = await response.json(); // 응답 데이터를 JSON으로 파싱
      console.log("Response data:", data); // 응답 데이터 로그
      // 성공 여부에 따라 처리
      if (data.isSuccess) {
        alert(`네고왕 X 카카오쇼핑 ${coupons.find(coupon => coupon.id === couponId).amount}원 쿠폰이 발급되었습니다.`);
      } else {
        alert(`쿠폰 발급 실패: ${data.comment}`);
      }
    } catch (error) {
      alert(`쿠폰 발급에 실패했습니다: ${error.message}`);
    }
  }

  return (
      <div className="layout">
        <div className="imagewrapper">
          <img src={firstImage} alt="Event" />
        </div>
        <div className="main-text">네고왕 x 카카오 상품 선착순 할인쿠폰</div>
        <div className="containers-layout">
          <div className="containers">
            {coupons.map((coupon) => (
                <div
                    key={coupon.id}
                    onClick={() => handleButtonClick(coupon.id)}
                    className="items"
                >
                  <div className="items-main">
                    <div className="coupon-image">
                      <img src={couponImage} alt="네고왕" />
                    </div>
                    <div className="sale-text">
                      <div>{coupon.amount}원 쿠폰</div>
                      <div>({coupon.minPurchase}원 이상 구매시)</div>
                      <div>{coupon.expiry}까지</div>
                    </div>
                  </div>
                  <div>선착순 쿠폰이 조기 마감될 수 있으니 서둘러 주세요.</div>
                </div>
            ))}
          </div>
        </div>
        <div className="youtube">
          <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/93mnQmY5FiM?si=SViEW0AB2aYnoOhx"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
          ></iframe>
        </div>
        {saleImages.map((image, index) => (
            <div key={index} className="imagewrapper">
              <img src={image[0]} alt={`Sale product ${index + 1}`} />
              <div className="blue"></div>
            </div>
        ))}
      </div>
  );
};

export default EventPage;
