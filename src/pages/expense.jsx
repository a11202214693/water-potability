import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PredictionPage = () => {
  const [formData, setFormData] = useState({
    ph: "",
    hardness: "",
    solids: "",
    chloramines: "",
    sulfates: "",
    conductivity: "",
    organicCarbon: "",
    trihalomethanes: "",
    turbidity: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePredict = async () => {
    const isEmptyField = Object.values(formData).some(value => value.trim() === "");
    if (isEmptyField) {
      setShowPopup(true);
    } else {
      try {
        const response = await axios.post('http://localhost:5000/predict', formData);
        const prediction = response.data.prediction;
        alert(`Prediction result: ${prediction}`);
        window.location.href = "/goal"; // Redirect to visualisation
      } catch (error) {
        console.error("Error predicting:", error);
        alert("An error occurred during prediction.");
      }
    }
  };
  

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <MainLayout type="Prediction">
      <div style={showPopup ? { ...styles.container, filter: "blur(5px)" } : styles.container}>
        {/* Bagian visualisation */}
        <div style={styles.textContainer}>
          <h1 style={styles.title}>
            <span style={styles.tealText}>Water</span> Potability Predictor
          </h1>
        </div>
        <div style={styles.imageContainer}>
          <img
            src={"/images/water2.png"}
            alt="Water drop with Earth"
            style={styles.image}
          />
        </div>
      </div>

      <div style={styles.backgroundImage2}></div>

      {/* Form */}
      <div style={showPopup ? { ...styles.formContainer, filter: "blur(5px)" } : styles.formContainer}>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>ph :</label>
            <input
              type="text"
              name="ph"
              placeholder="Enter Here"
              value={formData.ph}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Hardness :</label>
            <input
              type="text"
              name="hardness"
              placeholder="Enter Here"
              value={formData.hardness}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Solids :</label>
            <input
              type="text"
              name="solids"
              placeholder="Enter Here"
              value={formData.solids}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Chloramines :</label>
            <input
              type="text"
              name="chloramines"
              placeholder="Enter Here"
              value={formData.chloramines}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Sulfates :</label>
            <input
              type="text"
              name="sulfates"
              placeholder="Enter Here"
              value={formData.sulfates}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Conductivity :</label>
            <input
              type="text"
              name="conductivity"
              placeholder="Enter Here"
              value={formData.conductivity}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Organic Carbon :</label>
            <input
              type="text"
              name="organicCarbon"
              placeholder="Enter Here"
              value={formData.organicCarbon}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Trihalomethanes :</label>
            <input
              type="text"
              name="trihalomethanes"
              placeholder="Enter Here"
              value={formData.trihalomethanes}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Turbidity :</label>
            <input
              type="text"
              name="turbidity"
              placeholder="Enter Here"
              value={formData.turbidity}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
        </div>
        <button style={styles.predictButton} onClick={handlePredict}>
          PREDICT
        </button>
        <p style={{ fontWeight: "bold", fontSize: "1rem" }}>Hasil Best Score dari prediksi potability menggunakan metode KNN adalah :</p>
      </div>

    

      {/* Popup */}
      {showPopup && (
        <div style={styles.popupOverlay}>
        <div style={styles.popup}>
          <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>Oopss..!!</h1>
          <p>It looks like some required information is missing.</p>
          <p>Please review and complete all fields. </p>
          <button style={styles.popupButton} onClick={closePopup}>
            Close
          </button>
        </div>
      </div>
      )}

      <div style={styles.backgroundImage}></div>

      {/* Footer */}
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
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "50px", // Tambahkan jarak antar baris
    padding: "30px",
    backgroundColor: "#FFFFFF", // Warna latar belakang form
    borderRadius: "0px", // Membuat form secara keseluruhan lebih lembut
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%", // Lebar form, sesuaikan dengan kebutuhan
    maxWidth: "1200px", // Batasi lebar maksimum jika perlu
    margin: "0 auto", // Pusatkan di tengah layar
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "100px", // Tambahkan jarak antar kolom
    width: "100%",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1px", // Jarak antara label dan input
    flex: "1 1 calc(33.333% - 30px)", // Input diatur agar memiliki lebar 1/3
    minWidth: "200px", // Lebar minimum
  },
  label: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
    textAlign: "left", // Tambahkan properti ini
    width: "100%", // Pastikan label memenuhi lebar container
  },  
  input: {
    padding: "15px", // Padding untuk input agar lebih besar
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "25px", // Membuat input berbentuk oval
    outline: "none",
    width: "100%",
    textAlign: "left", // Membuat teks di tengah
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Tambahkan bayangan
    transition: "0.2s ease", // Animasi saat hover
  },
  predictButton: {
    marginTop: "20px",
    padding: "12px 25px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#008080",
    border: "none",
    borderRadius: "10px", // Membuat tombol berbentuk oval
    cursor: "pointer",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
    transition: "0.2s ease",
  },
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    background: "#FFFFFF",
    padding: "40px", // Tambahkan padding agar lebih besar
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "600px", // Atur lebar popup
    maxWidth: "90%", // Pastikan tidak melebihi layar
    minHeight: "200px", // Atur tinggi minimum popup
  },  
  popupButton: {
    marginTop: "100px", // Jarak antara konten popup dan tombol
    padding: "10px 20px",
    backgroundColor: "#008080",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    alignSelf: "center", // Untuk memastikan di tengah jika menggunakan flexbox
  },  
};

export default PredictionPage;
