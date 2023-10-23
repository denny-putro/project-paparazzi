import Head from 'next/head'
import Header from '@components/Header'
import Button from '@components/Button'
import {
  Box,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  Image,
  Stack,
  Text,
  useToast
} from "@chakra-ui/react";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CFP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FormControl mt={6}>
          <Stack>
            <Text align={"center"} fontSize='2xl' color={"#black"}>Project Paparazzi</Text>
          </Stack>
        </FormControl>
        <FormControl  mt={4} mb={2}>
          <Stack>
            <Text align={"center"} fontSize='s' color={"#black"}>Selfie</Text>
          </Stack>
        </FormControl>
        <Flex align="center" justifyContent="space-between" gap="8px">
          <Button link="/page_control" overlay="overlay0" facingMode="user" title="control"/>
          <Button link="/page_control" overlay="overlay1" facingMode="user"  title="option 1"/>
          <Button link="/page_control" overlay="overlay2" facingMode="user"  title="option 2"/>
          <Button link="/page_control" overlay="overlay3" facingMode="user"  title="option 3"/>
        </Flex>
        <FormControl  mt={4} mb={2}>
          <Stack>
            <Text align={"center"} fontSize='s' color={"#black"}>Card</Text>
          </Stack>
        </FormControl>
        <Flex align="center" justifyContent="space-between" gap="8px">
          <Button link="/page_control" overlay="overlay_KTP0" facingMode="environment" title="control"/>
          <Button link="/page_control" overlay="overlay_KTP1" facingMode="environment"  title="option 1"/>
          <Button link="/page_control" overlay="overlay_KTP2" facingMode="environment"  title="option 2"/>
        </Flex>
        <FormControl mt={6}>
          <Stack>
            <Text align={"center"} fontSize='s' color={"#black"} as='b'>By FS Design Team</Text>
          </Stack>
        </FormControl>
        
      </main>
    </div>
  )
}
