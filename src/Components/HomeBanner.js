import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Banner from "../assets/images/banner.png";

const HomeBanner = () => {
    return (
        <Box
            sx={{
                mt: {
                    lg: "212px",
                    xs: "70px",
                },
                ml: {
                    sm: "50px",
                },
                position: "relative",
                p: "20px",
                // border: "3px solid green",  
            }}
            
        >
            <Typography color="#FF2625" fontWeight="500" fontSize="25px">
                Fitness Club
            </Typography>
            <Typography
                fontWeight="700"
                sx={{
                    fontSize: { lg: "44px", sm: "40px" },
                    mb:'23px',
                    mt:'30px'
                }}
            >
                Sweat, Smile <br /> Repeat
            </Typography>

            <Typography
                fontWeight="300"
                lineHeight="35px"
                sx={{
                    fontSize: { lg: "23px", sm: "20px" },
                    mb: "2px",
                }}
            >
                Check out more Exercises
            </Typography>
        <Stack>

        <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            {/* <Button
                href="#exercises"
                variant="contained"
                sx={{
                    background: "#FF2625",
                    px: "20px",
                }}
            >
                Check
            </Button> */}
            </Stack>
            <Typography fontWeight={600} color="#FF2625" sx={{
                opacity:'0.1',
                fontSize:'200px',
                display:{ lg:'block', sm:'none'}
            }}>EXERCISE</Typography>
            <img src={Banner} className="hero-banner-img" />
            {/* <Stack direction="row" alignItems="center" justifyContent="space-between">
      </Stack> */}
        </Box>
    );
};

export default HomeBanner;
