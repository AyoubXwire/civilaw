"use client"

import useInterview from "@/features/interview"
import { Box, Step, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper } from "@chakra-ui/react"

export default function ProgressBar() {

  const {
    progress: {
      steps,
      activeStep,
    }
  } = useInterview()

  return (
    <Stepper index={activeStep}>
      {steps.map((stepName, index) => (
        <Step key={index}>
          <StepIndicator _active={{ bg: "#008992" }}>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
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