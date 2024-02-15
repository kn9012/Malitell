import * as s from "../../../styles/article/articleDetail/comment";
import { CommentType } from "./types";

export default function Comment({ comment }: { comment: CommentType }) {
  return (
<<<<<<< d0b557656521987e9758f3fbd46544c693043845
    <s.Wrapper>
      <s.Writer>{comment.username}</s.Writer>
      <s.Content>{comment.content}</s.Content>
      <s.Time>{comment.time.slice(0, 11)}</s.Time>
    </s.Wrapper>
=======
    <>
      <s.Wrapper>
        <s.NameBox>

        </s.NameBox>
        
        {comment.content}
      </s.Wrapper>
    </>
>>>>>>> 60a7dc51b09aae10e07d4482e1549c6f4217c2f6
  );
}
