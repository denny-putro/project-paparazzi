import Head from 'next/head'
import Button from '@components/Button'
import {
  Flex,
  FormControl,
  Stack,
  Text,
} from "@chakra-ui/react";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Project Paparazzi</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
      </Head>

      <main>
        <FormControl>
          <Stack>
            <Text align={"center"} fontSize='2xl' color={"#black"}>Project Paparazzi</Text>
          </Stack>
        </FormControl>
        <Flex align="center" justifyContent="inherit" gap="8px" rowGap="16px"  padding="24px" flexWrap="wrap">
          <Button link="/transition" overlay="overlay_KTP1" facingMode="environment" title="A" flow="A" countdown={true} landscape={true} success={true}/>
          <Button link="/transition" overlay="overlay_KTP1" facingMode="environment" title="B" flow="B" countdown={false} landscape={true} success={true}/>
          <Button link="/transition" overlay="overlay_KTP2" facingMode="environment" title="C" flow="C" countdown={true} landscape={false} success={true}/>
          <Button link="/transition" overlay="overlay_KTP2" facingMode="environment" title="D" flow="D" countdown={false} landscape={false} success={true}/>
          <Button link="/transition" overlay="overlay_KTP1" facingMode="environment" title="E" flow="E" countdown={false} landscape={true} success={false}/>
          <Button link="/transition" overlay="overlay1" facingMode="user" title="F" flow="F" landscape={false} success={true}/>
          <Button link="/transition" overlay="overlay2" facingMode="user" title="G" flow="G" landscape={false} success={true}/>
          <Button link="/transition" overlay="overlay1" facingMode="user" title="H" flow="H" landscape={false} success={false}/>
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
