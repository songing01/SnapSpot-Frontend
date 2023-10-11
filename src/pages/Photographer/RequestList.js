import styled from "styled-components";
import UpcomingSchedule from "../../components/Photographers/Reservation/UpcomingSchedule";
import LayOut from "../../components/common/LayOut";
import { getAllReservation } from "../../api/plan";
import { useState, useEffect } from "react";
import { category } from "../../components/common/category";

const RequestList = () => {
  const [requestData, setRequestData] = useState();

  const getReservation = async () => {
    try {
      const data = await getAllReservation();
      setRequestData(data.filter((el) => el.status === "REQUEST"));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReservation();
  }, []);

  return (
    <LayOut>
      <RequestContainer>
        <Title>스냅 사진 촬영 요청 목록</Title>
        {requestData &&
          requestData.map((item, idx) => (
            <UpcomingSchedule
              key={idx}
              nickname={item.customer.nickname}
              snapType={category.filter((el) => el.key === item.category)}
              headCount={item.people}
              time={item.time || 0}
              place={item.wishPlace}
              requirement={item.request}
              date={item.planDate.slice(0, 10)}
              num={item.planId}
              id={item.planId}
              profile={item.customer.profile}
              btn_text="예약신청"
            />
          ))}
      </RequestContainer>
    </LayOut>
  );
};

const RequestContainer = styled.div`
  width: 75%;
  max-width: 1052px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 2.3rem;
  align-self: flex-start;

  @media (max-width: 768px) {
    margin-bottom: 1.7rem;
    font-size: 18px;
    margin-top: 0rem;
  }
`;

export default RequestList;
