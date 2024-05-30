/* ------------------ */
/* Variables          */
/* ------------------ */

/* admin과 name이라는 변수를 선언하세요.
name에 값으로 "John"을 할당해 보세요.
name의 값을 admin에 복사해 보세요.
admin의 값을 alert 창에 띄워보세요. "John"이 출력되어야 합니다.
 */
let admin, name; // 변수 두 개를 동시에 선언하기

name = 'John';

admin = name;

console.log(admin); // John

/* 현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
웹사이트를 개발 중이라고 가정하고, 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
 */

const ourPlanet = 'Earth';
const currentOnlineUserName = 'John';

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let calcProductPriceQuantity;
/* 축약어 : Calculater - calc */

// - 구매 제품 가격의 총 합
let totalProductPrice;

// - 1년 기준 일(day)자 수
const DAY_PER_YEAR = 365;
/* 변할 수 없는 값이라서 대문자 상수 */

// - 구매 결제 여부
let isPayment = true;
let hasCartList = false;
/* boolean data(자료형 불(bool):true or false)가 들어갈 땐
관례적으로 is-, has- 이런식으로 앞에 is, has가 붙는다. */

// - 구매 결제 내역
let paymentList;

// - 브랜드 접두사
const BRAND_PREFIX = 'Apple';

// - 오늘의 운세
let fortuneToday = 'Good';

// - 상품 정보
let productInfo;

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */
