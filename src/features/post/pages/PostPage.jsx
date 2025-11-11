import React from "react";
import TopHeader from "../../../shared/components/header/TopHeader";
import NavigationBar from "../../../shared/components/header/NavigationBar";
import Footer from "../../../shared/components/footer/Footer";
import PostBanner from "../components/post-banner/PostBanner";
import ContactInfo from "../components/contact-info/ContactInfo";
import TextImageBlock from "../components/text-image-block/TextImageBlock";
import "./PostPage.css";

export default function PostPage() {
  return (
    <>
      <TopHeader />
      <NavigationBar />

      <div className="post-container">
        <PostBanner
          image="/gialam.png"
          title="Bến xe"
          subtitle="Bến xe Gia Lâm – thông tin địa điểm, giá vé 16 hãng xe đi từ bến"
        />

        <div className="post-content">
          <ContactInfo
            phone="02438 271 529"
            address="Số 9 Đ. Ngô Gia Khảm, Q. Long Biên, Hà Nội"
          />

          <p style={{ color: "rgba(51, 51, 51, 1)" }}>
            Bến xe Gia Lâm thuộc quận Long Biên, nằm về phía đông bắc và cách
            trung tâm thành phố hà Nội khoảng 1km, đây cũng là bến lâu đời cùng
            trải qua năm tháng với thành phố. Tuy khuôn viên chỉ 1,45ha so với
            các bến khác thì không quá rộng nhưng nơi đây vẫn tập trung rất
            nhiều các hãng xe khách uy tín và chất lượng. Mỗi ngày đều có hàng
            trăm lượt xe ra vào để vận chuyển khách đi các tỉnh, chủ yếu là di
            chuyển về các tỉnh phía Bắc.
          </p>

          <TextImageBlock src="/gialam.png" alt="Bến xe Gia Lâm" />

          <p>
            Hệ thống giao thông xung quanh có đầy đủ cả đường bộ, đường sắt và
            đường thủy, trong đó đường bộ có tuyến quốc lộ 1A, quốc lộ 5 và cao
            tốc đi Hải Phòng, Lạng Sơn cũng khá tiện cho các phương tiện di
            chuyển theo hướng quốc lộ đến các tỉnh thành lân cận. Trong bến xe
            Gia Lâm có nhiều dịch vụ hạ tầng như sảnh chờ rộng, sang trọng với
            các quầy bán vé khang trang có bảng chỉ dẫn màu sắc nổi bật dễ nhận
            biết.
          </p>

          <p>
            Khu vực các hàng quán phục vụ ăn uống, giải khát, được sắp xếp riêng
            biệt tiện lợi và bảo đảm vệ sinh sạch sẽ. Bên cạnh đó là các lối ra
            nơi đỗ xe dành cho hành khách được trang bị mái che và phân luồng
            khoa học tránh được tình trạng lộn xộn. Ngoài ra, với sự kiểm soát
            và công tác chặt chẽ của đội ngũ quản lý và an ninh mà dù lượt xe di
            chuyển tại bến vô cùng đông đúc nhưng vẫn không có việc mất trật tự
            xảy ra.
          </p>

          <img src="/gialam.png" alt="Hải Vân" className="content-img" />

          <h2>*Các tuyến đường và nhà xe hoạt động chính tại bến</h2>

          <section>
            <h3>+ Bến xe Gia Lâm Hà Nội đi Hải Phòng</h3>

            <p>
              <strong>1. Nhà xe Ô Hô</strong>
            </p>
            <p>
              Hoạt động chuyên chở từ Xe Hà Nội đi Hải Phòng bằng xe ghế ngồi 29
              chỗ đời mới được nhiều khách hàng cho đánh giá tốt là hãng xe Ô
              Hô.
            </p>

            <p>
              Tại bến xe Gia Lâm – Hà Nội xe đi liên tục cách 20 phút đến 40
              phút sẽ chạy một chuyến từ 06:00 cho đến 18:30. Từ bến xe Tiên
              Lãng – Hải Phòng chuyến đầu đi lúc 05:25 và cách 30 phút sẽ chạy
              một chuyến cho đến chuyến cuối là 18:15, giá vé tham khảo cho cả
              hai đầu văn phòng là 90.000 đồng/vé.
            </p>

            <p>
              Tiêu chí phục vụ được chú trọng vào sự chuyên nghiệp trong cả
              phương tiện và thái độ của nhân viên cùng sự di chuyển an toàn nên
              luôn được nhiều quý khách lựa chọn đồng hành trong nhiều năm qua.
            </p>

            <p>
              Tiêu chí phục vụ được chú trọng vào sự chuyên nghiệp trong cả
              phương tiện và thái độ của nhân viên cùng sự di chuyển an toàn nên
              luôn được nhiều quý khách lựa chọn đồng hành trong nhiều năm qua.
            </p>

            <TextImageBlock
              src="/gialam.png"
              alt="Nhà xe Ô Hô Hà Nội Hải Phòng"
              caption="Nhà xe Ô Hô Hà Nội Hải Phòng"
            />
          </section>

          <section>
            <h3>+ Bến xe Gia Lâm Hà Nội đi Lào Cai</h3>

            <p>
              <strong>2. Nhà xe Nam Thắng</strong>
            </p>
            <p>
              Hãng xe Nam Thắng Limousine chỉ mới được thành lập vài năm gần đây
              trên tuyến từ Xe Hà Nội đi Lào Cai nhưng khá được khách yêu thích.
            </p>

            <p>
              Đưa vào phục vụ khách bằng xe ghế ngồi Limousine 9 chỗ, hàng ngày
              sẽ có chuyến xuất phát tại bến xe Gia Lâm Hà Nội vào 06:30 –
              07:00, chiều đi từ bến xe Lào Cai về xe khởi hành vào 14:30 –
              15:00. Giá vé cho khách tham khảo với ghế đầu+ghế cuối là 320.000
              đồng/vé, ghế giữa là 370.000 đồng/vé.
            </p>

            <p>
              Trên xe được trang bị nhiều tiện nghi hiện đại như: tivi, wifi,
              cổng sạc USB, khăn lạnh, nước khoáng và đồ ăn nhẹ miễn phí cho
              hành khách.
            </p>

            <p>
              Hiện tại xe có hỗ trợ trung chuyển khách tận nơi miễn phí tại một
              số khu vực trong Hà Nội như quận Long Biên, Phố cổ, Nhà hát Lớn,
              Tòa nhà Lotte,… và các khách sạn trong trung tâm thị trấn Sapa –
              Lào Cai.
            </p>

            <TextImageBlock
              src="/gialam.png"
              alt="Nhà xe Nam Thắng Hà Nội Lào Cai"
              caption="Nhà xe Nam Thắng Hà Nội Lào Cai"
            />
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
