import {
    Center,
    useToast
  } from "@chakra-ui/react";
  import { useRouter } from "next/router";
  import { useState, useEffect } from "react";
  import Result from "@components/Result";
  import Reset from '@components/Reset'
  
  export default function ResultPhoto() {
    const router = useRouter();
    const [myFoto, setMyFoto] = useState("");
    const [fileImage, setFileImage] = useState(null);
    const toast = useToast();
  
    useEffect(() => {
      setMyFoto(localStorage.getItem('myPhoto'));
      urltoFile(localStorage.getItem('myPhoto'),  "myPhotos.jpeg", "image/jpeg").then(
        function (file) {
          setFileImage(file);
        }
      );
    }, [myFoto]);
  
  
    //convert from base64 format to image file
    function urltoFile(url, filename, mimeType) {
      return fetch(url)
        .then(function (res) {
          return res.arrayBuffer();
        })
        .then(function (buf) {
          return new File([buf], filename, { type: mimeType });
        });
    }
  
    return (
      <Center>
          <Result landscape={router.query.landscape} src={myFoto.replace("data:image/jpeg;base64,:", "")} srcResult={"/result_Selfie_Good.svg"}/>
          <Reset link="/" cta={true} title={"Ulang"}/>
        </Center>
    );
  }