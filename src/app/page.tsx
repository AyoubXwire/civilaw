import { Box, Text, Heading, SimpleGrid, Button, Flex, Divider, Link } from "@chakra-ui/react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Home() {
  return (
    <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={10}>
      <Box>
        <Heading fontSize="48px" as="h1" mb={4}>Your Path to Resolution</Heading>
        <Text mb={4}>
          You’ll start by answering a series of questions, such as the length of your marriage, if you have children together, and if there is property or debt to divide.So that your case gets the appropriate level of attention.
        </Text>
        <Text mb={4}>
          Your answers will not be shared with the opposing party or attorney. This form is not considered to be a public record.
        </Text>
        <Text mb={8}>
          These questions identify support and resources available for your family, such as legal assistance, mediation or judicial supervision.
        </Text>
        <Link bg="#008992" color="#FFFFFF" _hover={{ bg: "#008992DD" }} px={6} py={3} borderRadius="10px" href="/interview">
          Start
        </Link>
      </Box>

      <Box>
        <Box bg="#FFCD0017" border={"3px solid #FFCD00"} p="32px" borderRadius="10px">
          <Flex gap={4} p="12px" alignItems="flex-start">
            <Image src="/images/book-icon.svg" alt="" width={21} height={26} />
            <Box>
              <Heading fontSize="20px" as="h2">Answer questions</Heading>
              <Text fontSize="18px">
                You will complete a short questionnaire to help determine the best path for your case. You will only answer questions relevant for you, so it’s easy and fast.
              </Text>
            </Box>
          </Flex>

          <Divider my={4} borderColor="#2D3648" borderBottomWidth="2px" />

          <Flex gap={4} p="12px" alignItems="flex-start">
            <Image src="/images/book-icon.svg" alt="" width={21} height={26} />
            <Box>
              <Heading fontSize="20px" as="h2">Complete Court Forms</Heading>
              <Text fontSize="18px">
                The portal will use your answers to complete the court forms you need to submit.
              </Text>
            </Box>
          </Flex>

          <Divider my={4} borderColor="#2D3648" borderBottomWidth="2px" />

          <Flex gap={4} p="12px" alignItems="flex-start">
            <Image src="/images/book-icon.svg" alt="" width={21} height={26} />
            <Box>
              <Heading fontSize="20px" as="h2">File Your Documents</Heading>
              <Text fontSize="18px">
                You can then file your forms directly with the court through the portal. Or you can download, print, and submit them in person at the courthouse.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </SimpleGrid>
  )
}
