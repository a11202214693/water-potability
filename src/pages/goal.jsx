import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import { IoIosMail } from "react-icons/io";
import PredictionPage from "./expense";
import { useEffect, useState } from 'react';
import axios from 'axios';

const VisualisationPage = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchVisualisation = async () => {
      try {
        const response = await fetch('http://localhost:5000/visualisation');
        const blob = await response.blob();
        setImageSrc(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Error fetching visualisation:", error);
      }
    };
    fetchVisualisation();
  }, []);

  return (
    <MainLayout type="visualisation">
      {/* Judul utama dengan garis di bawahnya */}
      <div style={headerContainerStyles}>
        <h2 style={headerTitleStyles}>Pair Plot</h2>
        <hr style={headerLineStyles} />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1></h1>
        {imageSrc && <img src={imageSrc} alt="Pairplot" style={{ width: '80%' }} />}
      </div>

      <div style={styles.newsSection}></div>

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

// Inline styles
const headerContainerStyles = {
  textAlign: "center",
  marginBottom: "20px",
};

const headerTitleStyles = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const headerLineStyles = {
  border: "none",
  height: "4px",
  width: "250px",
  margin: "0 auto",
  backgroundColor: "#299D91", // Warna garis primary
};

const gridContainerStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
  padding: "20px",
  backgroundColor: "#e6f7f4", // Warna latar belakang
};

const cardTitleStyles = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "5px",
};

const dividerStyles = {
  border: "none",
  height: "2px",
  backgroundColor: "#ccc",
  margin: "10px 0",
};

const cardDescriptionStyles = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#555",
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
    backgroundColor: "#e6f7f4", // Sesuaikan dengan latar belakang yang sama
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
    backgroundColor: "#FFFFFF",
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
    height: "200px", // Sesuaikan tinggi area background
    backgroundImage: "url('/images/back2.png')", // Ganti dengan path gambar
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },  
};
export default VisualisationPage;
