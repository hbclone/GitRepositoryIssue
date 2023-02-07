import styled from "@emotion/styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Colors } from "../style/theme";
import { Body_md2, Body_md3, Body_md4, H2 } from "./Mui/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import { typography } from "@mui/system";
interface HeaderProps {
  pageTitle: string;
}

const PageHeader = ({ pageTitle }: HeaderProps) => {
  const navigate = useNavigate();
  const loaction = useLocation();

  const MoveNavi = (link: string) => () => {
    navigate(link);
  };

  return (
    <Header>
      <Menu>
        <GitHubIcon
          style={{ width: "3rem", height: "3rem", color: Colors.gray[400] }}
        />

        <Body_md3
          onClick={MoveNavi("/home")}
          style={{ color: Colors.gray[400], cursor: "pointer" }}
        >
          {pageTitle === "Repository" ? (
            <Menulink>Repository</Menulink>
          ) : (
            "Repository"
          )}
        </Body_md3>

        <Body_md3
          onClick={MoveNavi("/mypage")}
          style={{ color: Colors.gray[400], cursor: "pointer" }}
        >
          {pageTitle === "MyPage" ? <Menulink>MyPage</Menulink> : "MyPage"}
        </Body_md3>

        <Body_md3
          onClick={MoveNavi("/issue")}
          style={{ color: Colors.gray[400], cursor: "pointer" }}
        >
          {pageTitle === "Issues" ? <Menulink>Issues</Menulink> : "Issues"}
        </Body_md3>
      </Menu>
    </Header>
  );
};

export default PageHeader;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 0.3px solid ${Colors.gray[200]};
`;

const Menulink = styled.span`
  text-decoration: underline;
  text-decoration-color: ${Colors.gray[400]};
  text-underline-offset: 1.1rem;
  text-decoration-thickness: 0.1rem;
  cursor: pointer;
  color: ${Colors.gray[400]};
`;

const Menu = styled.div`
  display: flex;
  column-gap: 2rem;
  align-items: center;
`;
