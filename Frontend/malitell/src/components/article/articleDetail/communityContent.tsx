import { useSelector } from "react-redux";
import {
  Wrapper,
  ContentBox,
} from "../../../styles/article/articleDetail/content";
import { RootState } from "../../../store/store";
import { CommunityArticle } from "./types";

interface ArticleProps {
  communityArticle: CommunityArticle;

}

export default function CommunityContent({communityArticle} : ArticleProps) {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  return (
    <Wrapper>
      <ContentBox>
        <div>{communityArticle.content}</div>
        <div>{communityArticle.worryTag}</div>
      </ContentBox>
    </Wrapper>
  );
}
