import { Box } from "@chakra-ui/react";

const TitleBox = ({ title }) => {
  return (
    <Box as="div" py={3} px={4} textStyle="h4" color="white" bgColor="#62035F">
      {title}
    </Box>
  );
};

export default TitleBox;
