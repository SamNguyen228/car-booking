import React, { useState } from "react";
import BusCard from "../components/BusCard";
import Pagination from "../../../shared/components/pagination/Pagination";
import TopHeader from "../../../shared/components/header/TopHeader";
import NavigationBar from "../../../shared/components/header/NavigationBar";
import Footer from "../../../shared/components/footer/Footer";
import "./RoutesPage.css";

const busData = [
  {
    name: "Vé xe từ bến xe phía nam Buôn Ma Thuột đi Sài Gòn",
    description:
      "Bạn đang tìm kiếm phương tiện di chuyển thuận tiện và nhanh chóng giữa Sài Gòn và Kiên Giang",
    image: "/tuyen.png",
  },
  {
    name: "Vé xe từ bến xe phía nam Buôn Ma Thuột đi Sài Gòn",
    description:
      "Bạn đang tìm kiếm phương tiện di chuyển thuận tiện và nhanh chóng giữa Sài Gòn và Kiên Giang",
    image: "/tuyen.png",
  },
  {
    name: "Vé xe từ bến xe phía nam Buôn Ma Thuột đi Sài Gòn",
    description:
      "Bạn đang tìm kiếm phương tiện di chuyển thuận tiện và nhanh chóng giữa Sài Gòn và Kiên Giang",
    image: "/tuyen.png",
  },
  {
    name: "Vé xe từ bến xe phía nam Buôn Ma Thuột đi Sài Gòn",
    description:
      "Bạn đang tìm kiếm phương tiện di chuyển thuận tiện và nhanh chóng giữa Sài Gòn và Kiên Giang",
    image: "/tuyen.png",
  },
  {
    name: "Vé xe từ bến xe phía nam Buôn Ma Thuột đi Sài Gòn",
    description:
      "Bạn đang tìm kiếm phương tiện di chuyển thuận tiện và nhanh chóng giữa Sài Gòn và Kiên Giang",
    image: "/tuyen.png",
  },
  {
    name: "Vé xe từ bến xe phía nam Buôn Ma Thuột đi Sài Gòn",
    description:
      "Bạn đang tìm kiếm phương tiện di chuyển thuận tiện và nhanh chóng giữa Sài Gòn và Kiên Giang",
    image: "/tuyen.png",
  },
  {
    name: "Vé xe từ bến xe phía nam Buôn Ma Thuột đi Sài Gòn",
    description:
      "Bạn đang tìm kiếm phương tiện di chuyển thuận tiện và nhanh chóng giữa Sài Gòn và Kiên Giang",
    image: "/tuyen.png",
  },
  {
    name: "Vé xe từ bến xe phía nam Buôn Ma Thuột đi Sài Gòn",
    description:
      "Bạn đang tìm kiếm phương tiện di chuyển thuận tiện và nhanh chóng giữa Sài Gòn và Kiên Giang",
    image: "/tuyen.png",
  },
];

export default function RoutesPage() {
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
          <span>tuyến đường</span>
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
