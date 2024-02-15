import { CommentData } from "../../../store/article/communitySlice";
import {
  Wrapper,
  CommentListBox,
} from "../../../styles/article/articleDetail/commentList";
import Comment from "./comment";
import { CommentType } from "./types";

export default function CommentList({ comments }: { comments: CommentType[] }) {
  return (
    <Wrapper>
      <CommentListBox>
        {comments &&
          comments.length > 0 &&
          comments.map((comment: CommentType, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
      </CommentListBox>
    </Wrapper>
  );
}
