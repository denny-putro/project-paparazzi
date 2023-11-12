import React, { useState, useRef, useEffect } from "react";
import {Box} from "@chakra-ui/react";
import {Camera} from "react-camera-pro";
import { useRouter } from "next/router";
import Guideline from "@components/Guideline";
import Button from '@components/Button'

function Transition({data}) {
  const router = useRouter();

  return (
    <Box bgPosition="center" bgSize='cover' h='100vh'>
      <Guideline guideline={(router.query.facingMode == "environment") ? "/tray_KTP.svg" : "/tray_Selfie.svg"}/>
      <Button link="/page_control" overlay={router.query.overlay} facingMode={router.query.facingMode} countdown={router.query.countdown} landscape={router.query.landscape} cta={true} title={"Ambil Foto"}/>
    </Box>
  );
}

export default Transition;