import React, { useState } from "react";
import BusCard from "../components/BusCard";
import Pagination from "../../../shared/components/pagination/Pagination";
import TopHeader from "../../../shared/components/header/TopHeader";
import NavigationBar from "../../../shared/components/header/NavigationBar";
import Footer from "../../../shared/components/footer/Footer";
import "./GaragePage.css";

const busData = [
  {
    name: "Nhà xe Thanh Nhung",
    description:
      "Trụ sở chính: 446 XươngGiang, P. Ngô Quyền, Tp. Bắc Giang, tỉnh Bắc Giang",
    image: "/bus-garage.png",
  },
  {
    name: "Nhà xe Xuân Quỳnh",
    description:
      "Trụ sở chính: 38 Bùi Thị Xuân, P. Lê Thanh Nghị, Hải Phòng",
    image: "/bus-garage.png",
  },
  {
    name: "Nhà xe Quang Giang (Quang Tuyến)",
    description:
      "Trụ sở chính: 101 Nguyễn Trãi, P. Nguyễn Trãi, TP. Hà Giang, Hà Giang",
    image: "/bus-garage.png",
  },
  {
    name: "Nhà xe Văn Năm",
    description:
      "Trụ sở chính: X. Phượng Vĩ, H. Cẩm Khê, Phú Thọ",
    image: "/bus-garage.png",
  },
  {
    name: "Nhà xe Chí Tâm",
    description:
      "Trụ sở chính: Thôn Tân Lập 4, X. Pơng Đrang, H. Krông Búk, Đắk Lắk",
    image: "/bus-garage.png",
  },
  {
    name: "Nhà xe Hồng Thịnh",
    description:
      "Trụ sở chính: 62 Phạm Văn Đồng, Tổ 1, P. Hưng Thành, Tuyên Quang",
    image: "/bus-garage.png",
  },
  {
    name: "Nhà xe Bính Hà",
    description:
      "Trụ sở chính: 62 Phạm Văn Đồng, Tổ 1, P. Hưng Thành, Tuyên Quang",
    image: "/bus-garage.png",
  },
  {
    name: "Nhà xe Khang Phát",
    description:
      "Trụ sở chính: 62 Phạm Văn Đồng, Tổ 1, P. Hưng Thành, Tuyên Quang",
    image: "/bus-garage.png",
  },
];

export default function BusStations() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;
  const totalPages = Math.ceil(busData.length / perPage);
  const currentData = busData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <>
      <TopHeader />
      <NavigationBar />
      <div className="bus-stations-container">
        <h2 className="bus-stations-title">
          <span>nhà xe</span>
        </h2>
        <div className="bus-stations-grid">
          {currentData.map((bus, index) => (
            <BusCard key={index} bus={bus} />
          ))}
        </div>
        <Pagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <Footer />
    </>
  );
}
