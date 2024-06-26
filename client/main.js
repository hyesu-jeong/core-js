import { xhrPromise } from './lib/index.js';

const getData = async () => {
  const data = await xhrPromise.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  console.log(data);
};

// getData();
