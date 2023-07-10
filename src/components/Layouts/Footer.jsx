import React from 'react'
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';



const Footer = () => {
    return (
        <>
            <Box sx={{textAlign: "center", bgcolor: "#1a1a19", color: "white" , p : 3}}>
            <Box sx={{my: 3,
                    "& svg": { 
                        fontSize:  "60px", 
                        cursur:"pointe" 
                        }, 
                        mr: 2,
                        "& svg: hover": {
                            color: "goldenrod",
                            transform: "translateX(5px)",
                            transition: "All 400ms "
                        }
            }}>
                <InstagramIcon />
                <LinkedInIcon />
                <GitHubIcon />
                <TwitterIcon />


            </Box>
                <Typography variant="h5" sx={{ "& (max-width)": {
                        fontSize: "1rem"
                }
                }}>All Rights Reserved &copy; Akshay Sonawane</Typography>
            </Box>
        </>
    )
}

export default Footer
