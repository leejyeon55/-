//var

//undefined : 변수를선언했는데 값을 할당하지 않았다는 자료형
console.log(변수var); // 위에 썼는데도 읽힘 (호이스팅)

//var 키워드 작성
//var에 식별자 선언(변수var)
var 변수var;
변수var = "재할당";

console.log(변수var); // 한줄씩 읽고 실행함
//console.log(변수let); // 호이스팅이 발생하지 않아서 안읽힘


//let

//선언 + 할당 = 초기화
let 변수let = "변수let";
console.log(변수let);
변수let = "값의재할당";
console.log(변수let);
var 변수var="중복선언가능";
console.log(변수var);
//let 변수let = "중복선언불가능";

//const
//const a; // 값의 재할당이 불가능해서 선언만 할 수 없음 /undefined

const 변수const = "상수변수"; // 변하지않는 수
console.log(변수const);

//자료형 + 연산자

//Number
// = : 대입연산자, 할당연산자 > 값을 변수에 할당함
let num1 = 10;
let num2 = 20;
let sum = num1 + num2 ;
document.write(sum , typeof sum); // typeof > sum 이라는 식별자를 자료형으로 바꿔서 보여줌

console.log(typeof num1);


//string : 글자는 따옴표 안에 쓴다
num1 = "10";
num2 = "20";
let num3 = 50;
sum = num1 + num2 + num3 ;
document.write("<br>", sum , typeof sum);
 // 따옴표를 안쓰고 쓸수있는건 변수나 함수를 갖고있는 식별자, 숫자
//num1 = 가; 

//***참조형 (배열, 객체, 함수)***

//배열 : 식별자에 값을 넣을 수 있다
//[] = lireral : 소스코드의 고정된 값을 나타내는 표기법 
//배열 : 값을 구별할때 번호로 구별함 / 자료를 인덱스 번호로 관리함 
const 배열 = ["자장면","짬뽕","짬짜면",9];
console.log(배열);
document.write('<hr>' + 배열 + 배열[2]); 

// 배열 자료형은 부를때 별도의 명령어를 사용해야함
배열.forEach((a , b) => { 
    // forEach의 결과물은 (매개변수(a,매변1)에) 넣으면 받을수있음
    document.write('<hr> 👩' + a + b);  // a = 값 , b = 번호
    console.log(a,b);
});

// 배열이라는 애한테 .forEach라는 함수를 적용시킴 
// function 는 => 과 같다



//객체 : 값의 구분을 속성으로 함

const 객체 ={
아저씨:"👨",
나이:50,
//메서드 : 객체에 저장되어있는 함수
동작:function(){
    alert("아빠왔다");
}
};
console.log(객체);
//객체의 속성을 뜨면 값이 나옴
document.write('<hr>' + 객체.아저씨,객체.나이);
객체.동작();