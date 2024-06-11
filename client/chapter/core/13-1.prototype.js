/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) { // setter function 
    this.stomach.push(food);
  },
  get eat() { // getter function
    return this.stomach;
  }
}

// animal.eat() // 'animal.eat is not a function' (함수처럼 생겼지만 함수가 아님)
animal.eat = '고기'



const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;

  },

  __proto__: animal  // __proto__ : 프로토타입
  
}



const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger,  // __proto__ : 프로토타입
};








/* function Tiger { }

Tiger() // undefined
new Tiger // {} */




// 생성자 함수 

/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.stomach.push(food);
  };
}


function Tiger(name) {
  Animal.call(this); // Animal의 this를 Tiger의 this로 설정해준다.
  this.name = name;
  this.pattern = '호랑이 무늬';
  this.hunt = function (target) {
    return `${target}에게 조용히 접근한다.`;
  };
}



const 금강산호랑이 = new Tiger('금순이');  // 금강산호랑이.__proto__ === Tiger.prototype // Tiger의 this를 금강산호랑이로 전달해준다.


// 금강산호랑이는 모든 부모의 능력을 빌려쓸 수 있고, this를 Tiger한테 전달 -> Animal한테 전달 -> 했기 때문에 Animal this는 금강산호랑이 이다.
// 금강산호랑이.hunt('사슴') -> 인스턴스 메서드 : 생성자 함수를 통해 생성된 객체만 사용할 수 있는 능력. 





/* ------------ 인스턴스 메서드 / 스태틱 메서드 ------------ */

// 금강산호랑이.hunt('사슴')   // 인스턴스 메서드 (Instance Method) : 어떤 생성자함수로 만든 인스턴스가 사용하는 함수
Tiger.bark = function (sound) {    
  return sound
}
// Tiger.bark('어흥~~!')       // 스태틱 메서드 (Static Method) : 어떤 생성자함수랑 관련된 기능을 그 생성자함수에 묶어놓은 부가기능?같은 함수






/* 함수의 메서드 (함수의 능력) */
// call 
// apply
// bind


/* ------------------- call ------------------- */

function sum(a, b, c) {
  
  console.log(this);
  return a + b + c;

}

// sum(1, 1, 1) // sum 실행

sum.call('hello', 1, 1, 1)
// String {'hello'} -> this를 바꿔줌.
// call의 제일 첫번째는 인수가 아니라 this 로 전달한다. 그 뒤에 부터 인수로 적용.
// call은 함수 호출할때 this 값을 명시적으로 설정하고 싶을 때 쓴다.

const user = {
  sayHi() {
    
    function sayBye() {
      console.log(this);  // this -> user
    }

    sayBye.call(this); // this -> user로 설정해줌. 안해주면 this는 window
  }
}



/* ------------------- apply ------------------- */

sum.apply('hello',[1,2,3])

// call과 동일하지만 인수 데이터가 배열일 때 'apply'로 적용
// call , , ,
// apply [ , , , ]



/* ------------------- bind ------------------- */

// call, apply, bind의 차이점
// call, apply : 바로 실행
// bind : this도 바꾸고 인수도 적용됐지만, 바로 실행하지 않음. (사용예시: click 이벤트같이 바로 실행되면 안될 때) 

const b = sum.bind('yaho', 3, 4, 5);

// first.addEventListener('click',b)


/* -------------------- 요약 -------------------- */
/* 
sum.call('hello',1,2,3) // this를 전달함 인수를 개별로 받음 => 함수 실행 함.
sum.apply('hello',1,2,3) // this를 전달함 인수를 배열로 받음 => 함수 실행 함.
const b = sum.bind('hello',1,2,3); // this를 전달함 인수를 개별로 받음 => 함수 실행 안함. 
*/