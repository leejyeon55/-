//html 요소를 선택할때 : querySelector = $('');
//querySelector : 1개만  / querySelectorAll : 같은 선택자 모두
let fors = document.querySelectorAll('.for li');
console.log(document.querySelectorAll('.for li'));

//for(시작값;조건문(반환값의 식을써야함);증가식){ 실행할 내용 };

// 번호는 0 , 번호가 2보다 작을때 / 번호가 1씩 증가
for(let 번호= 0; 번호 < 4 ; 번호++){
    //fors = document.querySelectorAll('.for li');
    fors[번호].innerHTML=번호;
};


//for of : for보다 간략하게 개선된것
// 조건문을 쓰지않아도 배열에있는 개수만큼 한번씩 순환하고 그다음에 종료됨
// 1씩 증가도 안써도됨 다만 배열 자료형이여야만함

const forsof = document.querySelectorAll('.forof li');

//for는 값을 반환함
//for(변수 of 배열){ 실행할 내용 }
for( 에라이 of forsof ){
    console.log(에라이);
    에라이.innerHTML="과제";
};



//forEach : 대상은 꼭 배열 자료형이여야만 함 / 제일 많이 사용함
const foreachs = document.querySelectorAll('.foreach li');

//배열.forEach(function(값,번호){ 실행할 내용 });
foreachs.forEach(function(에라이,번호){
    에라이.innerHTML=번호;
});