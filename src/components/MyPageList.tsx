import styled from "@emotion/styled";
import React from "react";
import { Repository } from "../api/interface/git";
import { Body_md5, H2_Regular, Subtitle3, Subtitle4 } from "./Mui/Typography";
import AdjustIcon from "@mui/icons-material/Adjust";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import GradeIcon from "@mui/icons-material/Grade";
import { colCenter, Colors, typography } from "../style/theme";
import FilledButton from "./Mui/FilledButton";
import { deleteStarRepository } from "../util/util";

const MyPageList = (
  item: Repository & { onDelete: () => void; onNavigate: () => void }
) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <H2_Regular color={Colors.gray[100]}>{item.name}</H2_Regular>
        <Subtitle4 color={Colors.gray[200]}>{item.owner.login}</Subtitle4>
        <InfoWrapper>
          <Body_md5>language : {item.language} </Body_md5>
        </InfoWrapper>
      </TitleWrapper>
      <Row>
        <WatchWrapper>
          <Column>
            <AdjustIcon />
            <Body_md5>issue</Body_md5>
          </Column>
          <Body_md5>{item.open_issues_count}</Body_md5>
        </WatchWrapper>
        <WatchWrapper>
          <Column>
            <LocalDiningIcon />
            <Body_md5>fork</Body_md5>
          </Column>
          <Body_md5>{item.forks}</Body_md5>
        </WatchWrapper>
        <WatchWrapper>
          <Column>
            <StarBorderIcon />
            <Body_md5>star</Body_md5>
          </Column>
          <Body_md5>{item.stargazers_count}</Body_md5>
        </WatchWrapper>
        <WatchWrapper>
          <FilledButton
            title="이슈"
            textStyle={typography.Body_md5}
            onClick={() => item.onNavigate()}
            sx={{ marginRight: "1rem", height: "2rem" }}
            bg={Colors.dark[200]}
          />
          <FilledButton
            title="삭제"
            textStyle={typography.Body_md5}
            onClick={() => item.onDelete()}
            sx={{ marginRight: "1rem", height: "2rem" }}
            bg={Colors.basic[100]}
          />
        </WatchWrapper>
      </Row>
    </Wrapper>
  );
};

export default React.memo(MyPageList);

const Wrapper = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 1rem 1rem;
  border: 1px solid ${Colors.gray[300]};
  background-color: ${Colors.dark[100]};
  position: relative;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  /* position: absolute; */
  bottom: 0;
  gap: 0.5rem;
  color: ${Colors.gray[200]};
`;

const WatchWrapper = styled.div`
  ${colCenter};
  width: 5rem;
  height: 100%;
  gap: 0.5rem;
  color: ${Colors.gray[200]};
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
`;

const Column = styled.div`
  ${colCenter};
  gap: 0.5rem;
`;
