"use client"

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import QuestionInfo from "../_components/QuestionInfo"
import useInterview from "@/features/interview"
import Question from "../_components/Question"
import Image from "next/image"

export default function Interview() {
  
  const { data } = useInterview()

  return (
    <Box>
      <Accordion>
        <AccordionItem>
            <AccordionButton>
              <Heading as="h2" fontSize="32px" flex="1" textAlign="left">Eligibility</Heading>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            <Question
              text="Have you or your spouse lived in Nevada for at least the past six weeks?"
              description="One spouse (or both) must live in Nevada for at least 6 weeks before filing for divorce. A friend, family member, or co-worker will have to sign an affidavit under penalty of perjury stating that they know that the spouse is indeed a Nevada resident."  
              value={data.livedInNevadaForAtLeast6Weeks}
              setValue={value => data.setLivedInNevadaForAtLeast6Weeks(value)}
              displayIfNo={
                <QuestionInfo type="error" text="One spouse (or both) must live in Nevada for at least 6 weeks before filing for divorce in Nevada.Divorces are handled in the state where you live. Check with your local family court or an attorney in your area to find out the process to file for divorce where you live." />
              }
            />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <AccordionButton>
              <Heading as="h2" fontSize="32px" flex="1" textAlign="left">Finances</Heading>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            <Question
              text="Do you have any property or assets to divide with the other party?"
              description="You can learn about the Nevada laws on dividing property and debt on the Divorce Overview page if you need to learn more about your options."  
              value={data.propertyOrAssetsToDivide}
              setValue={value => data.setPropertyOrAssetsToDivide(value)}
              displayIfYes={
                <Box border="2px solid #CBD2E0" borderRadius="6px" p={4}>
                  <Question
                    text="Do you and the other party agree on how to divide up property and handle money issues?"
                    description="Nevada is a “community property” state. This means that while you are married, all property and debts you and your spouse acquired are presumed to belong equally to both of you. During a divorce, community property and community debt are equally divided. Note: if you choose yes, a judge will require the other party to sign and notarize an agreement in writing."  
                    value={data.agreeOnHowToDivideProperty}
                    setValue={value => data.setAgreeOnHowToDivideProperty(value)}
                    displayIfAnswered={
                      <>
                        <Heading as="h3" mb={4} fontSize="18px">Do you and the other party have agreement on some areas, such as:</Heading>
                        <Question
                          text="The division of assets?"
                          value={data.agreeOnDivisionOfAssets}
                          setValue={value => data.setAgreeOnDivisionOfAssets(value)}
                          displayIfAnswered={
                            <Question
                              text="The division of debts?"
                              value={data.agreeOnDivisionOfDepts}
                              setValue={value => data.setAgreeOnDivisionOfDepts(value)}
                              displayIfAnswered={
                                <Question
                                  text="Financial support for you?"
                                  value={data.agreeOnFinancialSupport}
                                  setValue={value => data.setAgreeOnFinancialSupport(value)}
                                />
                              }
                            />
                          }
                        />
                      </>
                    }
                  />
                </Box>
              }
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Flex mt={6} gap={2}>
        <Image src="/images/alert-circle.svg" alt="" width={22} height={22} />
        <Text>Need help? Contact the Washoe Resource Center or use the chatbot to the right.</Text>
      </Flex>
    </Box>
  )
}
