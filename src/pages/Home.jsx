import { useEffect, useRef, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import { Helmet } from "react-helmet-async";
// import { star, amongUs, links } from "../constants/particles";

import bg from "../assets/images/background.jpg";

const Home = ({ helmetTitle }) => {
  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  const [index, setIndex] = useState(0);

  const nameEl = useRef();

  const strings = [
    "دانشجو کارشناسی نرم افزار هستم",
    "توسعه دهنده فرانت اند هستم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["امیرحسین محمدزاده"],
      typeSpeed: 100,
      showCursor: false,
    });

    const textInterval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => {
      typedName.destroy();
      clearInterval(textInterval);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={star}
      /> */}
      <Typography ref={nameEl} variant="h3" color="whitesmoke" sx={{ mb: 5 }} />
      <Box component="div" sx={{ display: "flex" }}>
        <TextTransition springConfig={presets.wobbly}>
          <Typography variant="h5" color="whitesmoke">
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
        <Typography variant="h5" color="whitesmoke" sx={{ mr: 1 }}>
          من
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
