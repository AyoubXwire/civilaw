"use client"

import useInterview from "@/features/interview"
import { Box, Step, StepIndicator, StepSeparator, StepStatus, StepTitle, Stepper } from "@chakra-ui/react"
import { useEffect } from "react"

export default function ProgressBar() {

  const {
    steps,
    visibleStep,
    currentStep,
    setVisibleStep,
    setCurrentStep,
  } = useInterview(state => state.progress)

  const data = useInterview(state => state.data)

  // Update current step depending on the data
  useEffect(() => {
    if (visibleStep === 0) {
      if (data.livedInNevadaForAtLeast6Weeks === true) return setCurrentStep(1)
      if (data.livedInNevadaForAtLeast6Weeks === false) return setCurrentStep(0)
    }
    else if (visibleStep === 1) {
      if (data.propertyOrAssetsToDivide === false) return setCurrentStep(2)
      if (
        data.propertyOrAssetsToDivide === true
        && data.agreeOnHowToDivideProperty !== undefined
        && data.agreeOnDivisionOfAssets !== undefined
        && data.agreeOnDivisionOfDepts !== undefined
        && data.agreeOnFinancialSupport !== undefined
      ) return setCurrentStep(2)
    }
  }, [data, setCurrentStep])

  const stepColor = (index: number) => {
    if (currentStep === index) return "blue.500"
    if (visibleStep === index) return "white"
    return "gray.200"
  }

  return (
    <Stepper index={visibleStep}>
      {steps.map((stepName, index) => (
        <Step key={index}>
          <StepIndicator onClick={() => setVisibleStep(index)} cursor="pointer">
            <Box
              w="100%"
              h="100%"
              borderRadius="full"
              bg={stepColor(index)}
            ></Box>
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