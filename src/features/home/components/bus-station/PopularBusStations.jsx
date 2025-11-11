import "./PopularBusStations.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PopularBusStations = () => {
  const stations = [
    { name: "Bến xe Miền Đông Mới", image: "/bus2.jpg" },
    { name: "Bến xe Miền Tây", image: "/bus2.jpg" },
    { name: "Bến xe An Sương", image: "/bus2.jpg" },
    { name: "Bến xe Gia Lâm", image: "/bus2.jpg" },
  ];

  return (
    <section className="popular-bus-stations">
      <div className="section-container">
        <h2 className="section-title">Bến Xe Phổ Biến</h2>

        <button className="control-btn left">
          <FaChevronLeft size={18} />
        </button>
        <button className="control-btn right">
          <FaChevronRight size={18} />
        </button>

        <div className="stations-grid">
          {stations.map((station, index) => (
            <div key={index} className="station-card">
              <div className="station-image">
                <img src={station.image} alt="" />
              </div>
              <h3 className="station-name">{station.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBusStations;

