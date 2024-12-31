import { useContext, useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { ThemeContext } from "../../../context/themeContext";

const Stepper = (props) => {
    const { desc } = props;

    const theme = useTheme();

    const {theme: themeMode} =useContext(ThemeContext);

    const [activeStep, setActiveStep] = useState(0);

    // Fungsi untuk ke step berikutnya
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // Fungsi untuk ke step sebelumnya
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // Jumlah data step
    const dataNum = desc?.length || 0;

    return (
        <>
            {/* Konten Step Aktif */}
            <div>{desc[activeStep] || "No content available"}</div>

            {/* Stepper */}
            <MobileStepper
                variant="dots"
                steps={dataNum}
                position="static"
                activeStep={activeStep}
                sx={{
                    maxWidth: "100%",
                    flexGrow: 1,
                    "& .MuiMobileStepper-dot": {
                        backgroundColor: "darkgray",
                    },
                    "& .MuiMobileStepper-dotActive": {
                        backgroundColor: themeMode.color,
                    },
                }}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        sx={{ color: "black", fontWeight: "bold" }}
                        disabled={activeStep === dataNum - 1}
                    >
                        Next
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        sx={{ color: "black", fontWeight: "bold" }}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Previous
                    </Button>
                }
            />
        </>
    );
};

export default Stepper;
