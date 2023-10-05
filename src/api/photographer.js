import client from "./client";

//포토그래퍼 전체 이름 겟
export const getPhotographers = async () => {
  try {
    const res = await client.get(`/photographers/name`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

//포토그래퍼 개별 조회
export const getPhotographer = async (photographerId) => {
  try {
    const res = await client.get(`/photographers/${photographerId}`);
    return res.data;
  } catch (err) {
    console.log("에러 발생", err);
  }
};

// 작가별 리뷰 조회
export const getReview = async (photographerId) => {
  try {
    const res = await client.get(`/reviews/photographer/${photographerId}`);
    return res.data;
  } catch (err) {
    console.log("리뷰 조회 에러", err);
  }
};

// 커스텀 페이지 조회
export const getCustomInfo = async () => {
  try {
    const res = await client.get(`/photographers/me`);
    return res.data;
  } catch (err) {
    console.log("커스텀 조회 에러", err);
  }
};

// 커스텀 페이지 수정
export const putCustomInfo = async ({
  nickname,
  profileImage,
  paymentImage,
  lowestPay,
  bio,
  areaId,
  sns,
  specialList,
  tag,
  unableDates,
  image,
}) => {
  try {
    const res = await client.put(`/photographers/me`, {
      nickname: nickname,
      profileImage: profileImage,
      paymentImage: paymentImage,
      lowestPay: lowestPay,
      bio: bio,
      areaId: areaId,
      sns: sns,
      specialList: specialList,
      tag: tag,
      unableDates: unableDates,
      image: image,
    });
    return res;
  } catch (err) {
    console.log("커스텀 수정 에러", err);
  }
};
