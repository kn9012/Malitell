package com.ssafy.malitell.dto.request.reserve;

import lombok.Getter;

@Getter
public class CounselingReviewRequestDto {

    private String content; // 상담후기 내용
    private int grade; // 평점

}