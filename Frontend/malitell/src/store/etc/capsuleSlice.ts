import { api } from "../axiosInstance"

// 캡슐머신
export const capsule = () => {
  api.get("/capsule/get")
  .then((response) => {
    // 응답 데이터 명언 phrases, 영상 url videoUrl
    return response.data
  })
}