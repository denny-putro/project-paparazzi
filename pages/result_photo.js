import {
    Box,
    Button,
    ButtonGroup,
    Center,
    Flex,
    FormControl,
    Stack,
    Text,
    useToast
  } from "@chakra-ui/react";
  import { useRouter } from "next/router";
  import { useState, useEffect } from "react";
  import Result from "@components/Result";
  
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
  
    function reSelfie(){
      router.push({
          pathname: "/"
      });
    }
    
    //css
    const imageResult = {
      "border-radius": "50%",
      "object-fit": "cover"
    };
  
    return (
      <Center>
          <Box maxW='sm' 
            mt={{ base: '0px', md: '10px', lg: '10px' }} 
            height={{ base: '100%', md: '50%', lg: '25%'}}
            width={{ base: '100%', md: '50%', lg: '25%', }} 
            borderWidth={{base: '0px', md: '1px', lg: '1px'}}
            bg='teal.400'
            justifyContent="center" 
            overflow='hidden'
            >         
            <Flex direction="column" background="white">
              <Box>
                <Box>
                  <Center>
                    <Result landscape={router.query.landscape} src={myFoto.replace("data:image/jpeg;base64,:", "")} srcResult={"/result_Selfie_Good.svg"}/>
                  </Center>
                </Box>
                <FormControl mt={6} >
                  <Center>
                      <Button colorScheme="blue" width="60%" variant="outline" rounded={10} onClick={reSelfie}>
                          Continue
                      </Button>
                  </Center>
                </FormControl>
              </Box>
            </Flex>
          </Box>
        </Center>
    );
  }