import React, { useState, useRef, useEffect } from "react";
import {Box, Button, Center, Flex, useMediaQuery} from "@chakra-ui/react";
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

  console.log("/"+router.query.overlay+".svg");
  console.log(router.query.facingMode);

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
    rotateImage(imageSrc, 90, (image) => {
      setImage(image);
      localStorage.setItem('myPhoto', image);
      router.push("/result_photo");
    });
  };

  const switchCam = () => {
    camera.current.switchCamera();
  };

  const rotateImage = (imageBase64, rotation, cb) => {
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
      }
      else {
        ctx.scale(1, 1);
      }
      ctx.drawImage(img, 0, 0);
      cb(canvas.toDataURL("image/jpeg"));
    };
  };

  //css
  const imageCamera = {
    position: "absolute",
    bottom: "10%",
  };

  const imageSwitch = {
    position: "absolute",
    bottom: "10%",
    left: "10%",
  };

  const cameraMarking = {
    position: "absolute",
    "width": "100%",
    "height": "100%",
    // "background-position": "center",
    "top": "0",
  }

  return (
    <Box bgPosition="center" bgSize='cover' h='100vh'>
      <Center>
        <Box maxW='sm'
          mt={{ base: '0px', md: '10px', lg: '10px' }} 
          height={{ base: '100%', md: '50%', lg: '25%'}}
          width={{ base: '600px', md: '50%', lg: '25%', }} 
          borderWidth={{base: '0px', md: '1px', lg: '1px'}}
          bg='teal.400'
          justifyContent="center" 
          overflow='hidden' 
          position={{base: '', md: '', lg: 'relative'}}
          borderRadius='lg' 
          rounded={{base: 'none', md: '24', lg: '24'}}>         
          <Flex direction="column" background="white">
            <Center>
              <Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} facingMode={router.query.facingMode} aspectRatio={ratio} />
              <Overlay overlay={"/"+router.query.overlay+".svg"}/>
              <img src="/camera.svg" width="70px" height="70px" alt="Logo" style={imageCamera} onClick={capture}/> 
              <img src="/switch.svg" width="70px" height="70px" alt="Logo" style={imageSwitch} onClick={switchCam}/> 
            </Center>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
}

export default Home;