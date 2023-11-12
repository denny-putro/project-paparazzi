import Head from 'next/head'
import Header from '@components/Header'
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
        <title>CFP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FormControl>
          <Stack>
            <Text align={"center"} fontSize='2xl' color={"#black"}>Project Paparazzi</Text>
          </Stack>
        </FormControl>
        <Flex align="center" justifyContent="space-between" gap="8px" rowGap="16px"  padding="24px" flexWrap="wrap">
          <Button link="/transition" overlay="overlay_KTP1" facingMode="environment" title="A" countdown={true} landscape={true}/>
          <Button link="/transition" overlay="overlay_KTP1" facingMode="environment" title="B" countdown={false} landscape={true}/>
          <Button link="/transition" overlay="overlay_KTP2" facingMode="environment" title="C" countdown={true} landscape={false}/>
          <Button link="/transition" overlay="overlay_KTP2" facingMode="environment" title="D" countdown={false} landscape={false}/>
          <Button link="/transition" overlay="overlay_KTP1" facingMode="environment" title="E" countdown={false} landscape={true}/>
          <Button link="/transition" overlay="overlay1" facingMode="user" title="F" landscape={false}/>
          <Button link="/transition" overlay="overlay2" facingMode="user" title="G" landscape={false}/>
          <Button link="/transition" overlay="overlay1" facingMode="user" title="H" landscape={false}/>
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
