const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

/* --------------------↓↓ 범쌤 코드 ↓↓------------------------ */

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

// fetch  => promise

export const tiger = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

const result = await tiger({ url: ENDPOINT });

// console.log(result);

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

tiger.patch = (url, body, options) => {
  return tiger({
    method: 'PATCH',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

// IIAFE

// (async function(){

// })()

/* --------------------↓↓ 내가한 거 오류남.. ↓↓------------------------ */

// fetch  => promise

// fetch 를 알기 위해선 Promise를 이해해야 한다.
// windoe.fetch 인데 줄여서 fetch로 쓴다.
// fetch() get이 디폴트라 쓰지 않아도 된다.
// fetch 안에 있는 json메서드는 xhr에 있는 JSON.parse 역할을 한다.
// fetch는 result에 바로 담겨오는게 아니라 response를 한번 더 까야한다.
/* 
const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

const tiger = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);
  // fetch를 통해 서버 데이터(Promise 객체)를 가져온다. await을 통해 reponse 객체를 가져온다.

  if (response.ok) {
    // ok: HTTP 상태코드가 200과 299사이일 경우
    response.data = await response.json();
    // json: (웹브라우저 -'문자'-> 서버 -'문자'-> 웹브라우저) 주고 받는 '문자'를 JSON.parse로 해석하는데, response.json이 이 역할을 해준다.
    // response.json(): Promise 객체를 반환하기 때문에 await을 통해 결과값을 가져온다.
  }

  return response;
};

const result = await tiger('DELETE', `${ENDPOINT}/3`); // response 객체

console.log(result.data); // response 객체 안에 있는 data에 접근하기
 */

/* -------------------------------------------- */
// todo 뭔지 찾아볼 것
// axios
// IIAFE
