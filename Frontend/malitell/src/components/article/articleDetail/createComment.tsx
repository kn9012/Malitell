import React, { useEffect, useState } from "react";
import * as s from "../../../styles/article/articleDetail/createComment";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { fetchUserInfo } from "../../../store/auth/profileSlice";
import { createComment } from "../../../store/article/communitySlice";
import { useParams } from "react-router-dom";

export default function CreateComment() {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const {boardSeq} = useParams();
  const [username, setUsername] = useState();
  const [content, setContent] = useState("");
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (boardType === "community") { 
      if (username) {
        createComment("community", {username, content, boardSeq: Number(boardSeq)})
      }
    } else if (boardType === "gather") {
      if (username) {
        createComment("gathering", {username, content, boardSeq: Number(boardSeq)})
      }
    } else if (boardType === "overcome") {
      if (username) {
        createComment("overCome", {username, content, boardSeq: Number(boardSeq)})
      }
    } 
  };
  useEffect(() => {
    fetchUserInfo().then((res) => {
      setUsername(res.name)
    })
  }, [])
  return (
    <s.Wrapper onSubmit={handleSubmit}>
      {username && <s.userInfoBox>{username}</s.userInfoBox>}
      <s.Textarea onChange={handleContentChange} value={content}></s.Textarea>
      <input type="submit" />
    </s.Wrapper>
  );
}
