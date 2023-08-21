import React from "react";
import { styled } from "styled-components";
import settings from "../../../assets/mypage/userMypage/settings.png";
const ProfileContainer = () => {
  return (
    <Wrapper>
      <div className="leftContent">
        <Profile>
          <img src="" alt="" />
        </Profile>
        <Infos>
          <div className="nickname">
            닉네임
            <img src={settings} alt="" />
          </div>
          <div className="email">hello@snapspot.com</div>
        </Infos>
      </div>
      <Logout>로그아웃</Logout>
    </Wrapper>
  );
};

export default ProfileContainer;
const Wrapper = styled.div`
  margin: 40px 0px; //수정

  display: flex;
  align-items: center;
  justify-content: space-between;

  .leftContent {
    display: flex;
  }
`;
const Profile = styled.div`
  width: 88px;
  height: 88px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: lightgray;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
const Infos = styled.div`
  margin-left: 40px;
  @media (max-width: 768px) {
    margin-left: 25px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  .nickname {
    font-weight: 700;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  .email {
    margin-top: 8px;

    color: var(--black, #060606);
    font-size: 12px;
    font-weight: 400;
    line-height: 128.5%; /* 15.42px */
    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
  img {
    cursor: pointer;
    margin-left: 80px;
    width: 19px;
    height: 19px;
    flex-shrink: 0;
    @media (max-width: 768px) {
      width: 15px;
      height: 15px;
    }
  }
`;
const Logout = styled.div`
  cursor: pointer;
  display: flex;
  padding: 6px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #d9d9d9;

  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 128.5%; /* 17.99px */

  @media (max-width: 768px) {
    display: none;
  }
`;
