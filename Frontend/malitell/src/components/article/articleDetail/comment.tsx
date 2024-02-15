import * as s from "../../../styles/article/articleDetail/comment";
import { CommentType } from "./types";


export default function Comment({comment}: {comment: CommentType}) {
  return (
    <>
      <s.Wrapper>
        <s.NameBox>

        </s.NameBox>
        
        {comment.content}
      </s.Wrapper>
    </>
  );
}
