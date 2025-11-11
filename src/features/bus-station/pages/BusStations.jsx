import React, { useState } from "react";
import BusCard from "../components/bus-card/BusCard";
import Pagination from "../../../shared/components/pagination/Pagination";
import TopHeader from "../../../shared/components/header/TopHeader";
import NavigationBar from "../../../shared/components/header/NavigationBar";
import Footer from "../../../shared/components/footer/Footer";
import "./BusStations.css";

const busData = [
  {
    name: "Bến xe Gia Lâm",
    description:
      "Hà Nội có nghĩa là được bao quanh bởi các con sông, tên gọi này phản ánh vị trí địa lý của nơi này. Vì đây là vùng đất được dòng sông Hồng và các nhánh phụ lưu bồi đắp qua mấy ngàn năm tạo nên. ",
    image: "/gialam.png",
  },
  {
    name: "Bến xe khách Quảng Bình",
    description:
      "Đây là tỉnh thuộc vùng Duyên Hải Bắc Trung Bộ, được nhiều người biết đến qua những địa điểm check in đẹp mắt và khám phá khung cảnh thiên nhiên qua từng hang động nổi tiếng như: Động Thiên Đường, Hang Én, Hang Sơn Đoòng, Sông Chày Hang Tối và không nên bỏ qua Động Phong Nha – Kẻ Bàng với vẻ đẹp được tạo nên bởi thiên nhiên, còn là một trong những di sản thiên nhiên Thế giới được UNESCO công nhận vào năm 2015.",
    image: "/gialam.png",
  },
  {
    name: "Bến xe Cần Thơ",
    description:
      "Cần Thơ đang ngày càng phát triển và thay đổi về mọi mặt, theo đó ngành du lịch cũng phát triển nhanh chóng và những khu di tích như: khu nhà cổ Bình Thủy, Chùa Ông hay chợ nổi Cái Răng, làng du lịch Mỹ Khánh, hoặc các khu du lịch sinh thái vườn Cò Bằng Lăng, đảo ngọt Cù Lao,… luôn là những điểm đến thu hút hàng ngàn lượt khách du lịch đến với Cần Thơ – miền đất “gạo trắng nước trong” này.",
    image: "/gialam.png",
  },
  {
    name: "Bến xe Vũng Tàu",
    description:
      "Vũng Tàu là thành phố thuộc tỉnh Bà Rịa – Vũng Tàu, nằm ở vùng Đông Nam Bộ với khí hậu nhiệt đới gió mùa là tỉnh có tốc độ phát triển kinh tế nổi bật trong những năm gần đây, nhất là du lịch.",
    image: "/gialam.png",
  },
  {
    name: "Danh sách bến xe Hà Nội",
    description:
      "Hà Nội là một thành phố thủ đô sầm uất của Việt Nam, nói về Hà Nội khá nhiều du khách sẽ nghĩ đến những nét xưa cũ của các con phố cổ cùng nhiều di tích lịch sử gắn liền với triều đại phong kiến.",
    image: "/gialam.png",
  },
  {
    name: "Bến xe Thanh Hóa",
    description:
      "Thanh Hóa là vùng đất nổi tiếng với nhiều cảnh đẹp hùng vĩ, cũng là quê hương của những vị anh hùng giữ nước như Quang Trung, Bà Triệu,… Du khách đến đây không chỉ thu hút bởi bãi biển trong xanh, cát trắng, núi đồi mà còn bởi các khu du lịch nổi tiếng như: Cầu Hàm Rồng, Làng Cổ Đông Sơn,… cùng khí hậu ôn hòa, đặc biệt vào mùa hè dịu mát.",
    image: "/gialam.png",
  },
  {
    name: "Bến xe tiêu biểu hai miền Nam Bắc",
    description:
      "Từ lâu “bến xe khách” được biết đến là trung tâm kết nối giao thương giữa các vùng, nút giao quan trọng gắn liền với kinh tế, đời sống của người dân không chỉ trong việc đi lại hàng ngày, công tác tỉnh xa mà còn là nơi chuyên vận chuyển hàng hóa đi khắp mọi miền Tổ quốc.",
    image: "/gialam.png",
  },
  {
    name: "Bến xe Quy Nhơn - Bình Định",
    description:
      "Bình Định thuộc vùng Duyên hải Nam Trung bộ có diện tích tự nhiên rộng lớn, tiếp giáp với nhiều tỉnh trọng điểm như Gia Lai, Phú Yên, Quảng Ngãi, Sài Gòn và cách Hà Nội khoảng 1.065km.",
    image: "/gialam.png",
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
          <span>bến xe</span>
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
