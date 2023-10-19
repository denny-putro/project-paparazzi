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
            <Text align={"center"} fontSize='2xl' color={"#black"} as='b'>Project Paparazzi</Text>
          </Stack>
        </FormControl>
        <FormControl mt={6}>
          <Button link="/page_control" overlay="overlay0" title="control"/>
          <Button link="/page_control" overlay="overlay1" title="option 1"/>
          <Button link="/page_control" overlay="overlay2" title="option 2"/>
          <Button link="/page_control" overlay="overlay3" title="option 3"/>
        </FormControl>
        <FormControl mt={6}>
          <Stack>
            <Text align={"center"} fontSize='s' color={"#black"} as='b'>By FS Design Team</Text>
          </Stack>
        </FormControl>
        
      </main>
    </div>
  )
}
