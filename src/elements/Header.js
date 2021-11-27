import styled from "styled-components"; // css를 편하게 할수 있게 도와주는 패키지
import { NavLink } from "react-router-dom";

const Sheader = styled.header`
  color: white;
`; // styled로 header태그를 만들겠다
const Ul = styled.ul`
  display: flex;
  background-color: #030913;
  width: 100%;
  height: 40px;
`;
const Li = styled.li`
  padding: 10px;
  border-bottom: 1px solid;
`;
const Alink = styled(NavLink)``; // a 태그 대신에 쓴다는점 알아주셨으면해요

const Header = () => (
  <Sheader>
    <Ul>
      <Alink to="/">
        <Li>Movies</Li>
      </Alink>
      <Alink to="/tv">
        <Li>TV</Li>
      </Alink>
      <Alink to="/search">
        <Li>Search</Li>
      </Alink>
    </Ul>
  </Sheader>
);

export default Header;
