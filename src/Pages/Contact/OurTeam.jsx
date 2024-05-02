import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import PageTitle from "../../components/PagesComponents/PageTitleSection/PageTitle";
import { teamList } from "./components/data";

const OurTeam = () => {

  return (
    <>
    <PageTitle pagetitle="OUR TEAM" /> 
    
    <Box w="100vw">
    <Flex  w="80%"  mx="auto" my={10} p={5}>

     <HStack spacing={10} flexWrap="wrap" justifyContent="center" align='center'>
     {teamList.map((team)=>(
        <Flex key="team.name" align="center" w="150px" justify='center' flexDirection="column" gap={2}>
        <Box border="1px solid gray" borderRadius="md" p="2"  height="150px">
        <img src={team.url} alt="" height="150px"  width="150px"/>
        </Box>
        
        <Box align="center">
        <Text fontSize="14px" fontWeight={500}> {team.name} </Text>
        <Text> {team.position} </Text>
        </Box>
      </Flex>
      ))} 
     </HStack>
      
    </Flex>
    </Box>
    </>
  )
}

export default OurTeam