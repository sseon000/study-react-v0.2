import "./App.css";

// 0. React엔진 - 데이터변경감지 후 UI그려주는엔진
// 1. 실행과정(index.html) - SPA
/*
 index.js를 제일 먼저 실행 >> render함수에 첫번째 파라미터 앱컴포넌트, id루트dom
 public/html/index.html에 있는 id가 root자리에 앱컴포넌트를 그림
 필요한 라이브러리는 index.html에 추가하면 된다~ 그러나 여기에 라이브러리를 직접 추가할 일은 없을거
*/
// 2. JSX 문법
/*
 javascript에 html작업 = jsx 
 ex). html에 java로 작업 = jsp
*/
// 3. 바벨(javascript ES5) ES6로 개발했는데 IE에서 안돌아가더라~ >> 그래서 ES6 문법을 ES5로 컴파일하는 컴파일러를 만듬 그게 바벨

// (1) return시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수선언은 let(변수) 혹은 const(상수) 사용한다.
// (3) if사용 불가능 -> 삼항연산자 가능
// (4) 조건부 렌더링
function App() {
  let a = 10; // 변수
  const b = 20; // 상수

  return (
    <>
      <div>안녕 {a === 10 ? "10입니다." : "10이 아닙니다"}</div>
      <h1>헤더태그 {b === 20 && "20입니다."}</h1>
    </>
  );
}

export default App;
