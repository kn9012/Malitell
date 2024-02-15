import Title from "../../components/article/articleDetail/title";
import Content from "../../components/article/articleDetail/communityContent";
import CommentList from "../../components/article/articleDetail/commentList";
import { Back, Box } from "../../styles/grid";
import { GridDetail } from "../../styles/article/grid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sHGroupDetail } from "../../store/article/gatherSlice";
import { overcomeDetail } from "../../store/article/overcomingSlice";
import { articleDetail } from "../../store/article/communitySlice";
import {
  GatherArticle,
  CommunityArticle,
  OvercomeArticle,
} from "../../components/article/articleDetail/types";
import CreateComment from "../../components/article/articleDetail/createComment";
import GatherContent from "../../components/article/articleDetail/gatherContent";
import CommunityContent from "../../components/article/articleDetail/communityContent";
import OvercomeContent from "../../components/article/articleDetail/overcomeContent";

export default function ArticleDetail() {
  const [gatherArticle, setGatherArticle] = useState<GatherArticle | any>();
  const [communityArticle, setCommunityArticle] = useState<CommunityArticle | any>();
  const [overcomeArticle, setOvercomeArticle] = useState<OvercomeArticle | any>();
  const { boardType, boardSeq } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (boardType === "gather") {
        const data = await sHGroupDetail(Number(boardSeq));
        setGatherArticle(data);
      } else if (boardType === "overcome") {
        const data = await overcomeDetail(Number(boardSeq));
        setOvercomeArticle(data);
      } else {
        const data = await articleDetail(Number(boardSeq));
        setCommunityArticle(data);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Back />
      <GridDetail>
        <Box $col="4/13" $row="1/2" $position="sticky" $top="80px" />
        <Box $col="1/13" $row="2/3" $position="sticky" $top="100px">
          {/* <Title article={
            gatherArticle && gatherArticle? gatherArticle : (communityArticle && communityArticle ? communityArticle : overcomeArticle)
          } /> */}
          {/* 보내야할 프롭스 게시판타입, 게시글태그, 작성자, 작성자 이미지, 제목 */}
          {/* notagTitle */}
          {/* <Title article={{gatherArticle, communityArticle, overcomeArticle}}/> */}
        </Box>
        <Box $col="1/13" $row="3/4">
          <>
            {gatherArticle ? (
              <GatherContent gatherArticle={gatherArticle} />
            ) : communityArticle ? (
              <CommunityContent communityArticle={communityArticle} />
            ) : overcomeArticle ? ( 
              <OvercomeContent overcomeArticle={overcomeArticle} />
            ) : null}
          </>
        </Box>
        <Box $col="1/13" $row="6/7">
          <CreateComment />
          <>
            {gatherArticle ? (
              <CommentList comments={gatherArticle.gatheringComments} />
            ) : communityArticle ? (
              <CommentList comments={communityArticle.communityComments} />
            ) : overcomeArticle ? ( 
              <CommentList comments={overcomeArticle.overComingComments} />
            ) : null}
          </>
        </Box>
      </GridDetail>
    </>
  );
}
