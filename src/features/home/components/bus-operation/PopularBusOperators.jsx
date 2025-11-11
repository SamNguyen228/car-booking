import "./PopularBusOperators.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PopularBusOperators = () => {
  const operators = [
    { name: "Nhà xe An Hòa Hiệp", image: "/bus.jpg" },
    { name: "Nhà xe Phương Trang", image: "/bus.jpg" },
    { name: "Nhà xe Hoàng Long", image: "/bus.jpg" },
    { name: "Nhà xe Mai Linh", image: "/bus.jpg" },
  ];

  return (
    <section className="popular-bus-operators">
      <div className="section-container">
        <h2 className="section-title">Nhà Xe Phổ Biến</h2>
        <button className="control-btn left">
          <FaChevronLeft size={18} />
        </button>
        <button className="control-btn right">
          <FaChevronRight size={18} />
        </button>
        <div className="operators-grid">
          {operators.map((operator, index) => (
            <div key={index} className="operator-card">
              <div className="operator-image">
                <img src={operator.image} alt="" />
              </div>
              <h3 className="operator-name">{operator.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBusOperators;

