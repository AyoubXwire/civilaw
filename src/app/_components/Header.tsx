import { Box, Container, Flex, Link } from "@chakra-ui/react"
import Image from "next/image"
import ProgressBar from "./ProgressBar"

export default function Header() {
  return (
    <Box as="header" bg="#FFFFFF">
      <Container maxW="1200px" mx="auto" p={4}>
        <Flex justifyContent="space-between">
          <Link href="/">
            <Image src="/images/logo.svg" width={258} height={84} alt="Family Triage logo" />
          </Link>

          <ProgressBar />
        </Flex>
      </Container>
    </Box>
  )
}
