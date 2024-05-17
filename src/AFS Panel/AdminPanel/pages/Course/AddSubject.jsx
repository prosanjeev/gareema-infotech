import  useState  from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../../firebase/FirebaseConfig";

const AddCourseSubjectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const courseId = location.state ? location.state.courseId : null;
  console.log(courseId);
  const [formData, setFormData] = useState({
    examTitle: "",
    fullMarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(
        collection(fireDB, `courses/${courseId}/subjects`),
        formData
      );
      navigate("/all-courses");
      console.log("Document written with ID: ", docRef.id);
      // Reset the form data after submission
      setFormData({ examTitle: "", fullMarks: "" });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <DashboardLayout p={4}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Exam Title</FormLabel>
            <Input
              type="text"
              name="examTitle"
              value={formData.examTitle}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Full Marks</FormLabel>
            <Input
              type="number"
              name="fullMarks"
              value={formData.fullMarks}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit">Add Course Subject</Button>
        </VStack>
      </form>
    </DashboardLayout>
  );
};

export default AddCourseSubjectPage;
