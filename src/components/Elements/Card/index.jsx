const Card = ({ children }) => {
  return (
    <div style={cardStyles.cardContainer}>
      {children} {/* Pastikan children dirender di sini */}
    </div>
  );
};

const cardStyles = {
  cardContainer: {
    backgroundColor: "#FFFFFF", // Warna putih
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
    position: "relative", // Untuk mengisolasi card dari layer lain
    zIndex: 1, // Memberikan prioritas rendering
  },
};


export default Card;
