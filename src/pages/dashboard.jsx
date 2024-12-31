import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/expense"); // Arahkan ke halaman predictions
  };
  const newsItems = [
    {
      id: 1,
      image: "/images/news1.png", // Ganti dengan path gambar pertama
      title: "PEMKOT SEMARANG BENTUK TIM UNTUK AWASI PENGAMBILAN AIR TANAH",
      link: "https://www.pdamkotasmg.co.id/post/132/pemkot_semarang_bentuk_tim_untuk_awasi_pengambilan_air_tanah", // Ganti dengan link yang sesuai
    },
    {
      id: 2,
      image: "/images/news2.jpg", // Ganti dengan path gambar kedua
      title: "FUNGSI GROUND TANK",
      link: "https://www.pdamkotasmg.co.id/post/131/fungsi_ground_tank", // Ganti dengan link yang sesuai
    },
    {
      id: 3,
      image: "/images/news3.jpeg", // Ganti dengan path gambar ketiga
      title: "PROMO BUKA KEMBALI",
      link: "https://www.pdamkotasmg.co.id/post/130/promo_buka_kembali_", // Ganti dengan link yang sesuai
    },
    {
      id: 4,
      image: "/images/news4.jpeg", // Ganti dengan path gambar keempat
      title: "PROMO AWAL TAHUN 2022 PERUMDA AIR MINUM TIRTA MODAL KOTA SEMARANG",
      link: "https://www.pdamkotasmg.co.id/post/129/promo_awal_tahun_2022_perumda_air_minum_tirta_moedal_kota_semarang", // Ganti dengan link yang sesuai
    },
  ];

  const handleOtherClick = () => {
    window.open("https://www.kompas.com/tag/kualitas-air", "_blank");
  };

  return (
    <MainLayout type="dashboard">
      {/* Bagian Dashboard */}
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>
            <span style={styles.tealText}>Water</span> Potability Predictor
          </h1>
          <p style={styles.description}>
            AquaSense is a water potability prediction app that uses the KNN
            algorithm to assess drinking water safety. By analyzing key water
            quality parameters, AquaSense provides fast and reliable insights
            to determine if water is safe for consumption. With its intuitive
            interface, AquaSense is an essential tool for monitoring water
            quality in various environments.
          </p>
          <button style={styles.tealButton} onClick={handleStartClick}>
            START
          </button>
        </div>
        <div style={styles.imageContainer}>
          <img
            src={"/images/water.png"} // Ganti path ini sesuai lokasi gambar Anda
            alt="Water drop with Earth"
            style={styles.image}
          />
        </div>
      </div>

      <div style={styles.backgroundImage2}></div>
      
        <div style={styles.newsSection}>
          <h2 style={styles.newsTitle}>News</h2>
          <div style={styles.newsContainer}>
            {newsItems.map((item) => (
              <div
                key={item.id}
                style={styles.newsItem}
                onClick={() => window.open(item.link, "_blank")}
              >
                <img src={item.image} alt={item.title} style={styles.newsImage} />
                <p style={styles.newsText}>{item.title}</p>
              </div>
            ))}
          </div>
          <button style={styles.otherButton} onClick={handleOtherClick}>
            OTHER
          </button>
        </div>

      <div style={styles.backgroundImage}></div>

      {/* Footer Section */}
        <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerColumn}>
            <div style={styles.footerImageContainer}>
              <img
                src="/images/dermatology.png"
                alt="Dermatologically Tested"
                style={styles.footerImage}
              />
              <p style={styles.footerDescription}>
                Our paper is sourced from FSC-certified mills. We plant enough trees
                to more than double our paper usage.
              </p>
            </div>
          </div>
        <div style={styles.footerContainer}>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>COMPANY</h3>
              <ul style={styles.footerList}>
              <li style={styles.footerItem}>About us</li>
              <li style={styles.footerItem}>Partner program</li>
              <li style={styles.footerItem}>Career</li>
              <li style={styles.footerItem}>Contact us</li>
              <li style={styles.footerItem}>Privacy Policy</li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h3 style={styles.footerHeading}>MORE INFO</h3>
              <ul style={styles.footerList}>
              <li style={styles.footerItem}>Pricing</li>
              <li style={styles.footerItem}>Reviews</li>
              <li style={styles.footerItem}>Direct Mail Academy</li>
              <li style={styles.footerItem}>Success stories</li>
              <li style={styles.footerItem}>Terms & Conditions</li>
            </ul>
          </div>
        </div>
          <div style={styles.contactColumn}> {/* Kolom untuk CONTACT */}
            <h3 style={styles.footerHeading}>CONTACT</h3>
            <div className="flex items-center gap-2">
          <IoIosMail />
            <span>aquasense@gmail.com</span>
          </div>
          <p className="mt-2">Printed with <span className="text-red-500">❤</span> at our facility in West Semarang.</p>
          </div>
        </div>
      </footer>

        
    </MainLayout>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    padding: "0 10%",
    backgroundColor: "#e6f7f4", // Warna latar belakang yang sama
  },
  textContainer: {
    maxWidth: "50%",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  tealText: {
    color: "#008080",
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "2rem",
  },
  tealButton: {
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#008080",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  newsSection: {
    padding: "2rem 10%",
    backgroundColor: "#FFFFFF", // Sesuaikan dengan latar belakang yang sama
  },
  newsTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
  },
  newsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "2rem",
  },
  newsItem: {
    width: "22%",
    cursor: "pointer",
    textAlign: "center",
  },
  newsImage: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  newsText: {
    marginTop: "1rem",
    fontSize: "1rem",
    color: "#333",
  },
  otherButton: {
    display: "block",
    margin: "2rem auto 0",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#008080",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    padding: "2rem",
    backgroundColor: "#e6f7f4",
    color: "#333",
    textAlign: "center",
    marginTop: "0rem", // Tambahkan jarak di atas footer
  },  
  footerContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // Dua kolom dengan lebar sama
    gap: "2rem",
    alignItems: "start",
    textAlign: "left",
  },
  footerColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem", // Jarak antar item dalam kolom
  },
  footerImageContainer: {
    display: "flex",
    flexDirection: "column", // Ubah menjadi column untuk menyusun secara vertikal
    alignItems: "left", // Pusatkan elemen secara horizontal
    gap: "1rem", 
  },
  footerImage: {
    width: "100px",
    height: "100px",
  },
  footerDescription: {
    fontSize: "1rem",
    margin: 0,
    textAlign: "left", // Pusatkan teks deskripsi
  },
  footerHeading: {
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  footerList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  footerItem: {
    margin: 0,
  },
  contactColumn: { 
    gridColumn: 4, // Tempatkan di kolom kedua
    justifySelf: "end", // Ratakan ke kanan dalam kolom
  },
  backgroundImage: {
    width: "100%", // Penuhi seluruh lebar layar
    height: "290px", // Sesuaikan tinggi area background
    backgroundImage: "url('/images/back.png')", // Ganti dengan path gambar
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  backgroundImage2: {
    width: "100%", // Penuhi seluruh lebar layar
    height: "135px", // Sesuaikan tinggi area background
    backgroundImage: "url('/images/back3.png')", // Ganti dengan path gambar
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },  
};

export default DashboardPage;
