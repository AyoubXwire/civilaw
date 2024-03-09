import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import QuestionInfo from "./QuestionInfo"
import { ReactNode } from "react"

type Props = {
  text: string
  description?: string
  value: boolean | undefined
  setValue: (value: boolean) => void
  displayIfYes?: ReactNode
  displayIfNo?: ReactNode
  displayIfAnswered?: ReactNode
}

export default function Question(props: Props) {

  const { text, description, value, setValue, displayIfYes, displayIfNo, displayIfAnswered } = props

  return (
    <Box>
      <Heading as="h3" mb={4} fontSize="18px">{text}</Heading>
      
      {description && <QuestionInfo type="alert" text={description} />}

      <Flex gap={2} my={4}>
        <Button onClick={() => setValue(true)} colorScheme={value === true ? "blue" : "gray"} px={4}>Yes</Button>
        <Button onClick={() => setValue(false)} colorScheme={value === false ? "blue" : "gray"} px={4}>No</Button>
      </Flex>

      {value === true && displayIfYes}
      {value === false && displayIfNo}
      {value !== undefined && displayIfAnswered}
    </Box>
  )
}