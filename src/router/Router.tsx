import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListPage from "../pages/ListPage";

import DetailPage from "../pages/DetailPage";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 
            DetailPage : 글 상세페이지
            HomePage : 메인 페이지
            ListPage :  글 리스트 페이지
            SubmitFormPage : 글 제출 폼 페이지  
        */}
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
