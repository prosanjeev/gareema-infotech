import React, { useState, useEffect } from 'react';
import {
  VStack,
  Text,
  Spinner,
  Box,
  Button,
} from '@chakra-ui/react';
import DashboardLayout from '../../components/DashboardLayout';
import { Link, useLocation } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { fireDB } from '../../../firebase/FirebaseConfig';

const ViewSubjectPage = () => {
  const location = useLocation();
  const courseId = location.state ? location.state.courseId : null;
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const q = query(collection(fireDB, `courses/${courseId}/subjects`));
        const querySnapshot = await getDocs(q);
        const fetchedSubjects = [];
        querySnapshot.forEach((doc) => {
          fetchedSubjects.push({ id: doc.id, ...doc.data() });
        });
        setSubjects(fetchedSubjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching subjects: ', error);
      }
    };

    if (courseId) {
      fetchSubjects();
    }
  }, [courseId]);

  return (
    <DashboardLayout p={4}>
      <VStack spacing={4} alignItems="flex-start">
        <Text fontSize="xl" fontWeight="bold">Subjects for Course ID: {courseId}</Text>
        {loading ? (
          <Spinner size="lg" color="blue.500" />
        ) : (
          subjects.map((subject) => (
            <Box key={subject.id} borderWidth="1px" borderRadius="md" p={3}>
              <Text fontWeight="bold">{subject.examTitle}</Text>
              <Text>Full Marks: {subject.fullMarks}</Text>
            </Box>
          ))
        )}
      </VStack>
    <Box mt={10}>
    <Link to='/all-courses'>
     <Button>Back</Button>
     </Link>
    </Box>
    </DashboardLayout>
  );
};

export default ViewSubjectPage;
