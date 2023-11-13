import React, { useState, useRef, useEffect } from "react";
import {Box, Center, Flex, useMediaQuery} from "@chakra-ui/react";
import {Camera} from "react-camera-pro";
import { useRouter } from "next/router";
import Overlay from "@components/Overlay";

function Home({data}) {
  const router = useRouter();
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);
  const [mobileScreen] = useMediaQuery('(min-width: 600px)');
  const [ratio, setRatio] = useState(9 / 16);

  useEffect(()=>{
    //set ratio camera
    if(mobileScreen){
      setRatio(9 / 16);
    }
    else{
      setRatio("cover");
      // setRatio(9 / 16);
    }

  }, [mobileScreen, ratio])

  const capture = () => {
    const imageSrc = camera.current.takePhoto();
    rotateImage(imageSrc,(image) => {
      setImage(image);
      localStorage.setItem('myPhoto', image);
      //router.push("/result_photo");
      router.push(
        {pathname: "/result_photo", 
        query: {
          landscape: router.query.landscape,
          success: router.query.success,
          facingMode: router.query.facingMode,
          flow: router.query.flow,
          }
        }
      );
    });
  };

  const switchCam = () => {
    camera.current.switchCamera();
  };

  const rotateImage = (imageBase64, cb) => {
    var img = new Image();
    img.src = imageBase64;
    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.translate(canvas.width, 0);
      if(router.query.facingMode=="user"){
        ctx.scale(-1, 1);
        ctx.drawImage(img, 0, 0);
      }
      else {
        ctx.scale(-1, 1);
        ctx.drawImage(img, 0, 0);
      }
      
      cb(canvas.toDataURL("image/jpeg"));
    };
  };

  //css
  const imageCamera = {
    position: "absolute",
    bottom: "10%",
  };

  const imageCameraLandscape = {
    position: "absolute",
    bottom: "10%",
    transform: "rotate(90deg)",
  };

  const countdownTimer = {
    position: "absolute",
    width: "100%",
    height: "100vh",
    margin: "auto",
    top: "0",
    bottom: "0",
    color: "#FFF",
    background: "rgba(0,0,0,0.5)",
    fontSize: "128px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  const countdownTimerLandscape = {
    position: "absolute",
    width: "100vh",
    height: "100vw",
    margin: "auto",
    top: "0",
    bottom: "0",
    color: "#FFF",
    background: "rgba(0,0,0,0.5)",
    fontSize: "128px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotate(90deg)",
  }

  const countdownTimerHidden = {
    opacity: "0"
  }

  const time = 3;
  const [count, setCount] = useState(time);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (isStart) {
      const timer = setTimeout(() => {
        if (count > 0) {
          setCount(count - 1)
        } else {
          setIsStart(false);
          clearInterval(timer);
          capture();
        }
      }, 1000);
    }
  }, [count, isStart]);

  const startCount = () => {
    setIsStart(true);
  };

  return (
    <Box bgPosition="center" bgSize='cover' h='100vh'>
      <Center>
        <Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} facingMode={router.query.facingMode} aspectRatio={ratio} />
        <Overlay overlay={"/"+router.query.overlay+".svg"}/>
        <img 
          src="/camera.svg" width="92px" height="92px" alt="Logo" 
          style={(router.query.landscape=="true") ? imageCameraLandscape : imageCamera} 
          onClick={(router.query.countdown=="true") ? startCount : capture}/> 
        <div style={(isStart) ? (router.query.landscape=="true") ? countdownTimerLandscape : countdownTimer : countdownTimerHidden}>{count}</div>
      </Center>
    </Box>
  );
}

export default Home;