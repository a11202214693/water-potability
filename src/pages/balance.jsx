import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import { IoIosMail } from "react-icons/io";

const features = [
  {
    title: "ph",
    description:
      "PH is the indicator of acidic or alkaline condition of water status. WHO has recommended a maximum permissible limit of pH from 6.5 to 8.5.",
  },
  {
    title: "Hardness",
    description:
      "Hardness in water is caused by dissolved calcium and magnesium salts from geological deposits. The longer water contacts these materials, the harder it becomes.",
  },
  {
    title: "Solids",
    description:
      "Water can dissolve various minerals like potassium, calcium, sodium, and magnesium, which can affect its taste and color. High Total Dissolved Solids (TDS) indicate high mineral content. For drinking, the desired TDS limit is 500 mg/l, with a maximum of 1000 mg/l.",
  },
  {
    title: "Chloramines",
    description:
      "Chlorine and chloramine are common disinfectants in public water systems. Chloramines form when ammonia is added to chlorine. Chlorine levels up to 4 mg/L (or 4 ppm) are considered safe for drinking water.",
  },
  {
    title: "Sulfates",
    description:
      "Sulfates are natural substances found in minerals, soil, and water. They are widely used in the chemical industry. Sulfate levels are around 2,700 mg/L in seawater and typically 3–30 mg/L in freshwater, but can reach 1,000 mg/L in some areas.",
  },
  {
    title: "Conductivity",
    description:
      "Pure water is a good insulator, but increased ion concentration enhances its electrical conductivity (EC). EC measures a solution's ability to transmit current, which depends on dissolved solids. WHO recommends an EC limit of 400 μS/cm.",
  },
  {
    title: "Organic Carbon",
    description:
      "Total Organic Carbon (TOC) in water comes from decomposing natural organic matter and synthetic sources. The US EPA recommends TOC levels below 2 mg/L in treated drinking water and below 4 mg/L in source water.",
  },
  {
    title: "Trihalomethanes",
    description:
      "THMs are chemicals that can form in chlorinated water. Their concentration depends on organic material levels, chlorine amounts, and water temperature. THM levels up to 80 ppm are considered safe for drinking water.",
  },
  {
    title: "Turbidity",
    description:
      "Water turbidity depends on the amount of suspended solids and measures the water's light-emitting properties, indicating colloidal content in waste discharge. The average turbidity is below the WHO limit of 5.00 NTU.",
  },
  {
    title: "Potability (Target)",
    description:
      "Indicates if water is safe for human consumption where 1 means Potable and 0 means Not potable. (0) Water is not safe to drink and (1) Water is safe to drink.",
  },
];

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* Judul utama dengan garis di bawahnya */}
      <div style={headerContainerStyles}>
        <h2 style={headerTitleStyles}>Dataset Features</h2>
        <hr style={headerLineStyles} />
      </div>

      {/* Grid container untuk kartu */}
      <div style={gridContainerStyles}>
        {features.map((feature, index) => (
          <Card key={index}>
            <h3 style={cardTitleStyles}>{feature.title}</h3>
            <hr style={dividerStyles} /> {/* Garis di bawah judul kartu */}
            <p style={cardDescriptionStyles}>{feature.description}</p>
          </Card>
        ))}
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
export default BalancePage;
