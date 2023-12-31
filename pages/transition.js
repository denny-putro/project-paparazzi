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
      <Guideline guideline={(router.query.facingMode == "environment") ? "/tray_KTP.png" : "/tray_Selfie.png"}/>
      <Button link="/page_control" overlay={router.query.overlay} flow={router.query.flow} facingMode={router.query.facingMode} countdown={router.query.countdown} landscape={router.query.landscape} success={router.query.success} cta={true} title={"Ambil Foto"}/>
    </Box>
  );
}

export default Transition;