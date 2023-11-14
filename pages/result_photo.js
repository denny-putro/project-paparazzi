import {
    Flex,
    useToast,
    Text,
    FormControl,
    Stack
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
      <Flex flexDirection={"column"} alignItems={"center"}>
          <Result 
            landscape={router.query.landscape}
            facingMode={router.query.facingMode}
            src={myFoto.replace("data:image/jpeg;base64,:", "")} 
            srcResult={
              (router.query.success=="true")?
                (router.query.facingMode=="user")?"/result_Selfie_Good.svg":"/result_KTP_Good.svg"
              :
                (router.query.facingMode=="user")?"/result_Selfie_Bad.svg":"/result_KTP_Bad.svg"
              }/>
            <FormControl mt={6}>
            <Stack>
              <Text align={"center"} fontSize='s' color={"#CDD0D1"} as='b'>Testing Flow {router.query.flow}</Text>
              </Stack>
            </FormControl>
          <Reset link="/" cta={true} title={"Ambil Ulang"}/>
        </Flex>
    );
  }