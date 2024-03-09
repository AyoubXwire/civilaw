import { Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useMemo } from "react"

type Props = {
  type: "alert" | "error"
  text: string
}

export default function QuestionInfo(props: Props) {
  
  const { type, text } = props

  const color = useMemo(() => {
    return type === "alert" ? "#FFCD00" : "#FF3D00"
  }, [type])

  return (
    <Flex bg={`${color}17`} border={`2px solid ${color}`} p="16px" borderRadius="8px" gap={4} alignItems="center">
      <Image src={`/images/${type}-circle.svg`} alt="" width={14} height={14} />
      <Text>{text}</Text>
    </Flex>
  )
}
