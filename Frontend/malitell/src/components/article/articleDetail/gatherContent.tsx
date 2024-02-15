import { useSelector } from "react-redux";
import {
  Wrapper,
  ContentBox,
} from "../../../styles/article/articleDetail/content";
import { RootState } from "../../../store/store";
import { CommunityArticle, GatherArticle, OvercomeArticle } from "./types";

interface ArticleProps {
  gatherArticle: GatherArticle;
}

export default function GatherContent({gatherArticle} : ArticleProps) {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  return (
    <Wrapper>
      <ContentBox>
        <div></div>
        <div></div>
        <div></div>
      </ContentBox>
    </Wrapper>
  );
}
