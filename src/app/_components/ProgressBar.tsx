"use client"

import useInterview from "@/features/interview"
import { Box, Step, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper } from "@chakra-ui/react"

export default function ProgressBar() {

  const {
    progress: {
      steps,
      visibleStep,
      setVisibleStep,
    },
  } = useInterview()

  return (
    <Stepper index={visibleStep}>
      {steps.map((stepName, index) => (
        <Step key={index}>
          <StepIndicator onClick={() => setVisibleStep(index)} cursor="pointer">
            <StepStatus
              complete={<Box borderRadius="full" border={"2px solid blue.500"} w="100%" h="100%"></Box>}
              incomplete={<Box borderRadius="full" border={"2px solid blue.500"} w="100%" h="100%"></Box>}
              active={<Box bg="blue.500" borderRadius="full" w="100%" h="100%"></Box>}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{stepName}</StepTitle>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  )
}