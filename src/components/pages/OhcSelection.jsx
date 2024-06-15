
import { Stack } from "@mui/material";
import { Box, Container } from "@mui/material";
// import ohcimg from "../../../public/ohc.jpg";
import group from "../../../public/Group.jpg";
// import RoleCard from "./RoleCard";

import { Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/material";
// import ohcimg from "../../../public/ohc.jpg";
import ohcimg from "../../assets/images/ohc.jpg";
// import RoleCard from "./RoleCard";
// import OhcCard from "./OhcCard";

import chiefmedoff from "../../assets/images/ChiefMedicalOfficer.png";
import reception from "../../assets/images/Reception.png";
import applicationadmin from "../../assets/images/Application Admin.png";
import medicalExamination from "../../assets/images/Medical Examination.png";
import employee from "../../assets/images/Employee.jpg";
import pharmacy from "../../assets/images/Pharmacy.png";

import useAxiosPrivate from "../../utils/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSessionStorage } from "../../utils/useSessionStorage";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import logo from '../../../public/Ohctech-logo-white.png'
const RoleSelection = () => {
  const [icons] = useState([
    { image: medicalExamination, name: "OHC dwarka" },
    { image: reception, name: "OHC ..." },
    { image: applicationadmin, name: "OHC ..." },
    { image: chiefmedoff, name: "OHC ..." },
    { image: employee, name: "OHC ..." },
    { image: pharmacy, name: "OHC ..." },
  ]);


  

  // from old starting

  const axiosClientPrivate = useAxiosPrivate();
  const [roles, setRoles] = useState([]);
  // const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
  const { sessionData, updateSessionData } = useSessionStorage("sessionData");
  const user = sessionData?.userId;
  const navigate = useNavigate();


  
  

  useEffect(() => {
    const controller = new AbortController();

    const getRoles = async () => {
      try {
        const response = await axiosClientPrivate.get(
          `/users/roles/${user}`,
          `/menu-access/${user}`,
          {
            signal: controller.signal,
          }
        );
        // console.log(response.data);
        setRoles(response.data);
      } catch (err) {
        console.error(err);
        setRoles([]);
      }
    };

    getRoles();

import { useEffect, useState } from "react";
// import LocalPharmacyRoundedIcon from "@mui/icons-material/LocalPharmacyRounded";
import useAxiosPrivate from "../../utils/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../utils/useSessionStorage";
import { Card, CardActionArea, CardMedia } from "@mui/material";



const  OhcSelection = ()=> {

  // const [icons] = useState([
  //   { image: medicalExamination, name: "Dwarka" },
  //   { image: reception, name: "Dispensary" },
  //   { image: applicationadmin, name: "Plant OHC" },
  //   { image: chiefmedoff, name: "OHC 4" },
  //   { image: employee, name: "OHC 5" },
  //   { image: pharmacy, name: "OHC 6" },
  // ]);

  const OhcImage = {
    AA: applicationadmin,
    ME: medicalExamination,
    REC : reception,
    CMO: chiefmedoff,
    EMP : employee,
    PHY :  pharmacy
};
  const axiosClientPrivate = useAxiosPrivate();
  const [ohc, setOhc] = useState([]);
  // const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card
  const { sessionData,updateSessionData } = useSessionStorage("sessionData");
  const user = sessionData?.userId;
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const getOhc = async () => {
      try {
        const response = await axiosClientPrivate.get(`/users/ohcs/${user}`, {
          signal: controller.signal,
        });
        console.log(response.data);
        setOhc(response.data);
      } catch (err) {
        setOhc([]);
      }
    };

    getOhc();


    return () => {
      controller.abort();
    };
  }, [axiosClientPrivate, user]);


  // console.log(roles);

  const handleRoleClick = (id) => {

  const handleOhcClick = (id) => {

    if (id === null || id === "" || id === undefined) {
      return;
    }


    updateSessionData({ roleId: id });
    navigate("/adminHome");
  };

  //  Ending

  const RoleImage = {
    AA: applicationadmin,
    ME: medicalExamination,
    REC : reception,
    CMO: chiefmedoff,
    EMP : employee,
    PHY :  pharmacy
};

  return (
    <Stack spacing={0} direction="row">
       <Box

    updateSessionData({ ohcId: id });
    navigate("/roleSelection");
  };


  return (
    <Stack spacing={0} direction="row">
      <Box

        sx={{
          width: "50vw",
          height: "100vh",
          display: { xs: "none", sm: "block" },
          position: "relative",
        }}
      >
        <img style={{ height: "100vh", width: "50vw" }} src={group} alt="" />
        {/* <Box
          sx={{
            position: "absolute",
            top: '2rem',
            left: '5rem',
            p: 2, 
          }}
        >
          <img src={logo} alt="Logo" style={{ width: '150px' }} /> 
        
        </Box> */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            p: 3,
            
          }}
        >
          <Typography sx={{ mb: 4, fontWeight:'bold' }} ><img src={logo} alt="Logo" style={{ width: '150px' }}/></Typography> 
          <Typography variant="h6" sx={{mb:2}}>Nice to see you again</Typography>
          <Typography variant="h4" sx={{ mb: 2, fontWeight:'bold' }}>
            WELCOME BACK
          </Typography>
          <div
                  style={{
                    width: "5vw",
                    // margin: "1rem auto",
                    height: "4px",
                    backgroundColor: "white",
                    borderRadius:'6px'
                  }}
                ></div>
          <Typography variant="h8" sx={{ mb: 2 ,mt:2}}>
            OHCTECH is a venture conceptualized by Occupational Health Experts and developed by Techsyneric Technologies professionals who wanted to develop Occupational health solutions
          </Typography>
        </Box> 
        }}
      >
        <Box>
          <img style={{ height: "100vh", width: "50vw" }} src={ohcimg} alt="" />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100vw", sm: "50vw" },
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            height: "100%",
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           alignContent:'center'
          }}
        >

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            //  marginRight:'1rem'
          }}
        >
         { /*<Typography variant="h5" style={{ fontWeight: "bold" }}>
            Ohc Selection
        </Typography>*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center", 
              alignItems: "center",
              textAlign: "center",
              flexWrap: "wrap",
              // marginTop: "1rem",
              height: "80%",
              // marginBottom: "1rem",
              // gap: "1rem", 
            }}
          >
            {icons.map((item,index) => (
             <div style={{ display: "block", justifyContent: "center", alignContent: "center" }} key={index}>
             <Card
               sx={{ width: 145, height: 145, margin: "0.5rem" }} 
               onClick={() => handleRoleClick(item.id)}
             >
               <CardActionArea
                 sx={{
                   display: "flex",
                   flexDirection: "column",
                   alignItems: "center",
                   justifyContent: "center",
                   height: "100%",
                 }}
               >
                 <CardMedia
                   component="img"
                   image={item.image} 
                   alt="image"
                   sx={{
                     width: 60,
                     height: 60,
                     objectFit: "contain",
                     marginBottom: 2,
                   }}
                 />
                 <Typography variant="body2">{item.name}</Typography>
               </CardActionArea>
             </Card>
           </div>
              alignItems: "center",
              textAlign: "center",
              flexWrap: "wrap",
              justifyContent: "center",
              justifyItems: "center",
              //  marginLeft:'2rem',
              marginRight: "1.5rem",
              marginTop: "1rem",
            }}
          >
            {ohc.map((item) => (
              // <OhcCard key={item} icon={item.image} name={item.name} />
              <Card
                key={item.id}
                sx={{
                  width: 120,
                  display: "flex",
                  justifyContent: "center",
                  height: 120,
                  marginLeft: 4,
                  marginBottom: "1rem",
                }}
              
                onClick={() => handleOhcClick(item.id)}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={OhcImage[item.iconText]}
                    alt="image"
                    sx={{
                      width: 60,
                      height: 60,
                      objectFit: "contain",
                      marginBottom: 2,
                    }}
                  />
                  <Typography variant="body2">{item.ohcName}</Typography>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Stack>
  );
};

export default RoleSelection;
}

export default OhcSelection;
