


// function earth(){
  
//   let water = true;
//   let gravity = 10;

//   return function(value) {
//     gravity = value;
//   }

// }

// const ufo = earth();

function earth() {
  let water = true;
  let gravity = 10;

  return (value) => {
    gravity = value;

    return [water, gravity];
  };
}

const ufo = earth();

ufo(-10);