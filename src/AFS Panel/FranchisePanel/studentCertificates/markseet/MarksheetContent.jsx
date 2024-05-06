import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Badge,
  Grid,
  GridItem,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import { BASE_URL } from "../../../../info/Info";

const MarksheetContent = ({ studentData }) => {

  const [qdata, setQdata] = useState("");

  useEffect(() => {
    setQRData();
  }, [studentData]);

  function setQRData() {
    // var url = Object.values(studentData && studentData.userName);
    const url = studentData ? studentData.userName : "";
    const value = `${BASE_URL}/marksheet-verification/`
    setQdata(`${value}${url}`);
    // setQdata(`https://www.youtube.com`);  //https://computer-institute.netlify.app/
  }
  // Check if studentData exists before accessing its properties
  // const centerName = studentData && studentData.centerName ? studentData.centerName : "";

  const pseudoElementStyles = {
    content: '""',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    // backgroundImage: `url(${formData.logo})`,
    backgroundImage: `url("/marksheet.png")`, // Replace "your-image.jpg" with your image file name
    backgroundSize: "100%",
    // opacity: 0.08,
  };

  return (
    <Flex justify="center">
      <Box
        style={{
          width: "794px",
          height: "1097px",
          position: "relative",
          padding: "30px",
          // border: "1px solid gray",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            border: "1px solid gray",
            padding: "50px",
            marginTop:'10px'
          }}
        >
          <Box style={pseudoElementStyles}></Box>
          <Box style={{ position: "relative", zIndex: 1 }}>
            
            <Flex justify="center"  position='absolute' top='78px' left='-7'>
              <Image
                src={studentData &&  studentData.centerPhotoUrl}
                alt="Company Logo"
                height="100px"
                width="100px"
                mb={-4}
              />
            </Flex>
           
            <Box
              bg="gray.50"
              textAlign="end"
              position="absolute"
              right={-4}
              top="205px"
              px={2}
            >
              <Text fontSize="20px" fontWeight="bold">
                {studentData && studentData.centerName}
              </Text>
            </Box>
            <Box
              textAlign="end"
              position="absolute"
              right={0}
              top="286px"
              px={2}  left='35%' transform='translateX(-65%)'
            >
              <Text fontSize="14px" fontWeight="bold">
                {studentData && studentData.studentId}
              </Text>
            </Box>
            <Stack>
              <Box>
                <Image
                  src={studentData && studentData.photoUrl}
                  position="absolute"
                  left="23px"
                  top="290px"
                  height="100px"
                  width="100px"
                  loading="lazy"
                />
              </Box>

              <Flex position="absolute" left="15px" top="415px" gap={1}>
                <Text>DOB:</Text>{" "}
                <Text fontWeight="bold">
                  {new Date(
                    studentData && studentData.dateOfBirth
                  ).toLocaleDateString("en-GB")}{" "}
                </Text>
              </Flex>
            {/* Qr Code */}
              <Box
                as="div"
                left="22px"
                top="459px"
                position="absolute"
                h="100px"
                w="100px"
              >
                <QRCode value={qdata} size={100} position="absolute" />
              </Box>
            </Stack>

          <Stack position='absolute' top='330px' left='50%' transform='translateX(-50%)'>
          <Text fontSize="lg" textAlign="center">
              Certificate of Achievement Awarded to
            </Text>
            <Text fontSize="lg"  textAlign="center">
              Ms/ Mr.   {studentData && studentData.studentName}
            </Text>
            <Text fontSize="lg"  textAlign="center">
              S/o D/o W/o  {studentData && studentData.fatherName}
            </Text>

            <Text fontSize="lg"  textAlign="center">
              has successfully completed the
            </Text>
            <Text fontSize="lg"  textAlign="center">
            {studentData && studentData.courses.join('')}....
            </Text>
            <Text fontSize="lg"  textAlign="center">
             at- {studentData && studentData.centerName}
            </Text>
           
          </Stack>

            <Flex
              position="absolute"  top='565px'
              w="100%"
              maxH="220px"
              h="220px"   
              // border="2px solid"
              align="center"
            >
              <Table
                my={2}
                variant="unstyled"
                colorScheme="black"
                size="sm"
                border="2px solid"
                padding="0"
              >
                <Thead border="2px solid">
                  <Tr>
                    <Th textAlign="center">Exam Title</Th>
                    <Th textAlign="center" border="2px solid">
                      Max Marks
                    </Th>
                    <Th textAlign="center" border="2px solid">
                      Marks Secured
                    </Th>
                    <Th textAlign="center">%</Th>
                  </Tr>
                </Thead>
                <Tbody border="2px solid">
                  <Tr>
                    <Td maxW="250px" textAlign="center" border="2px solid">
                      Computer Hardware, CSS, HTML, Internet, MS Office, My SQL,
                      PHP, Hindi and English Typing, Computer Basic, Photoshop &
                      Corel Draw
                    </Td>
                    <Td textAlign="center" border="2px solid">
                      100
                    </Td>
                    <Td textAlign="center" border="2px solid">
                      80
                    </Td>
                    <Td textAlign="center" border="2px solid">
                      80.00
                    </Td>
                  </Tr>

                  <Tr>
                    <Td maxW="250px" textAlign="center" border="2px solid">
                      Computer Hardware, CSS, HTML, Internet, MS Office, My SQL,
                    </Td>
                    <Td textAlign="center" border="2px solid">
                      100
                    </Td>
                    <Td textAlign="center" border="2px solid">
                      80
                    </Td>
                    <Td textAlign="center" border="2px solid">
                      80.00
                    </Td>
                  </Tr>

                  {/* Add more rows for other subjects */}
                  <Tr border="2px solid">
                    <Td textAlign="end" fontWeight="bold">
                      Total
                    </Td>
                    <Td border="2px solid" textAlign="center">
                      100
                    </Td>
                    <Td border="2px solid" textAlign="center">
                      80
                    </Td>
                    <Td textAlign="center">80.00</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Flex>
            {/* <Flex justify="center">
              <Badge colorScheme="red" p={2} mx={2}>
                GRADE A++
              </Badge>
              <Badge colorScheme="blue" p={2} mx={2}>
                GRADE A
              </Badge>
              <Badge colorScheme="yellow" p={2} mx={2}>
                GRADE B
              </Badge>
              <Badge colorScheme="green" p={2} mx={2}>
                GRADE C
              </Badge>
              <Badge colorScheme="red" p={2} mx={2}>
                GRADE D
              </Badge>
            </Flex> */}

          </Box>
            <Flex justify="center" position='absolute' right='90px' bottom='90px'>
              <Image
                src='/signature.png'
                alt="Company Logo"
                height="60px"
                width="140px"
                mb={-4}
              />
            </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default MarksheetContent;
