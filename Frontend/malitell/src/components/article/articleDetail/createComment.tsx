import React, { useEffect, useState } from "react";
import * as s from "../../../styles/article/articleDetail/createComment";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { fetchUserInfo } from "../../../store/auth/profileSlice";
import { createComment } from "../../../store/article/communitySlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { flipLoginModal } from "../../../store/common/loginModalSlice";

export default function CreateComment() {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const dispatch = useDispatch();
  const { boardSeq } = useParams();
  const [username, setUsername] = useState();
  const [content, setContent] = useState("");
  const mySeq = sessionStorage.getItem("mySeq");
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mySeq) { 
      dispatch(flipLoginModal());
    } else if (boardType === "community") {
      if (username) {
        createComment("community", {
          username,
          content,
          boardSeq: Number(boardSeq),
        });
      }
    } else if (boardType === "gather") {
      if (username) {
        createComment("gathering", {
          username,
          content,
          boardSeq: Number(boardSeq),
        });
      }
    } else if (boardType === "overcome") {
      if (username) {
        createComment("overCome", {
          username,
          content,
          boardSeq: Number(boardSeq),
        });
      }
    }
  };
  useEffect(() => {
    if (mySeq) {
      // token이 존재하면 로그인 상태라고 판단
      fetchUserInfo().then((res) => {
        setUsername(res.name);
      });
    }
  }, []);
  return (
    <s.Wrapper onSubmit={handleSubmit}>
      {username ? (
        <s.userInfoBox>{username}</s.userInfoBox>
      ) : (
        <s.userInfoBox>로그인이 필요한 기능입니다.</s.userInfoBox>
      )}
      <s.Textarea onChange={handleContentChange} value={content}></s.Textarea>
      <input type="submit" />
    </s.Wrapper>
  );
}
