//Nav 컴포넌트
import { memo } from "react";
/* memo : 이전 props와 현재 props를 비교해서  변경이 없으면 렌더링을 건너뛴다. */

const Nav = memo(function Nav({ data, onChangeMode }) {
  console.log("Nav render");
  const lists = data.map(d => (
    <li key={d.id}>
      <a
        href={`/${d.id}`}
        data-id={d.id}
        onClick={e => {
          // console.log(e.target.dataset.id);
          e.preventDefault();
          onChangeMode(e.target.dataset.id);
        }}
      >
        {d.title}
      </a>
    </li>
  ));
  //list에 출력할 코드 생성

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
});

export default Nav;
