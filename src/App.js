import MyReservePage from "./pages/MyPage/MyReservePage";
import DetailReservePage from "./pages/MyPage/DetailReservePage";
import "./styles/Font.css";
import Header from "./components/common/Header";
import ReservationDetail from "./pages/photographer/ReservationDetail";
import Reservation from "./pages/photographer/Reservation";
import MyPage from "./pages/photographer/MyPage";
import Setting from "./pages/photographer/Setting";
import Custom from "./pages/photographer/Custom";
import Review from "./pages/photographer/Review";
import SearchPage from "./pages/serach/SearchPage";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import SignUpInfoPage from "./pages/SignUpPage/SignUpInfoPage";
import SignUpMemberPage from "./pages/SignUpPage/SignUpMemberPage";
import Photographerlist from "./pages/serach/Photographerlist";
import LoginPage from "./pages/LoginPage/LoginPage";
import KakaoLoginPage from "./pages/LoginPage/KakaoLoginPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/photographer/mypage" element={<MyPage />} />
        <Route path="/photographer/reserve" element={<Reservation />} />
        <Route
          path="/photographer/reserve/:id"
          element={<ReservationDetail />}
        />
        <Route path="/photographer/setting" element={<Setting />} />
        <Route path="/photographer/custom" element={<Custom />} />
        <Route path="/photographer/review" element={<Review />} />
        <Route path="mypage/reservation" element={<MyReservePage />} />
        <Route path="mypage/reservation/:id" element={<DetailReservePage />} />
        {/* 회원가입 */}
        <Route path="/signup/member" element={<SignUpMemberPage />} />
        <Route path="/signup/:memberType/info" element={<SignUpInfoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/kakao-login" element={<KakaoLoginPage />} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/photographer" element={<Photographerlist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
