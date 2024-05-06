import DashboardLayout from "../../components/DashboardLayout";
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Switch,
  useBreakpointValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { RiImageEditLine } from "react-icons/ri";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useHistory
import {
  fetchBranches,
  selectBranches,
} from "../../../redux/admin/branchSlice";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { fireDB, storage } from "../../../firebase/FirebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const AllBranch = () => {
  const branches = useSelector(selectBranches);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useHistory hook

  useEffect(() => {
    dispatch(fetchBranches());
  }, [dispatch]);

  const handleStatusChange = (branchId, newStatus) => {
    // Implement your logic to update the status of the branch with ID branchId to newStatus
  };

  const isDesktop = useBreakpointValue({ base: false, md: true });

  const handleEditClick = (franchiseId) => {
    navigate("/update-branch", { state: { franchiseId } }); // Navigate to "/update-branch" with franchiseId
  };

  const handlePhotoSubmit = async (userName, centerId, newPhotoFile) => {
    try {
      // Upload new photo file to Firebase Storage
      const photoRef = ref(storage, `franchise/${userName}/logo`);
      await uploadBytes(photoRef, newPhotoFile);

      // Get download URL of the new photo
      const newPhotoUrl = await getDownloadURL(photoRef);

      // Update the photoUrl field in Firestore
      const studentRef = doc(fireDB, "franchiseData", centerId);
      await updateDoc(studentRef, { photoUrl: newPhotoUrl });
      dispatch(fetchBranches());
      toast.success("Photo updated successfully");
    } catch (error) {
      console.error("Error updating photo: ", error);
      toast.error("Failed to update photo");
    }
  };

  const handlePhotoChange = async (userName, centerId, e) => {
    const newPhotoFile = e.target.files[0];

    // Check if the file size is less than 60kb
    if (newPhotoFile.size > 60 * 1024) {
      toast.error("Please select a photo less than 60kb in size.");
      return;
    }

    // Read the file as a data URL
    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target.result;

      // Create a new image element to get the dimensions
      const img = document.createElement("img");
      img.onload = async () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;

        // Resize the image if necessary
        if (newPhotoFile.size > 60 * 1024) {
          const scaleFactor = (60 * 1024) / newPhotoFile.size;
          canvas.width *= scaleFactor;
          canvas.height *= scaleFactor;
        }

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const resizedDataUrl = canvas.toDataURL("image/jpeg");

        // Convert the data URL back to a Blob
        const byteString = atob(resizedDataUrl.split(",")[1]);
        const mimeString = resizedDataUrl
          .split(",")[0]
          .split(":")[1]
          .split(";")[0];
        let ab = new ArrayBuffer(byteString.length);
        let ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const resizedFile = new Blob([ab], { type: mimeString });

        // Upload the resized file to Firebase Storage
        handlePhotoSubmit(userName, centerId, resizedFile);
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(newPhotoFile);
  };

  return (
    <DashboardLayout title="Center List">
      <Flex direction="column" alignItems="center" mx={2}>
        <Table
          variant="simple"
          colorScheme="blue"
          size={isDesktop ? "md" : "sm"}
        >
          <Thead>
            <Tr bg="orange.400">
              <Th fontSize="lg" fontWeight="bold">
                Sr.
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Date
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Photo
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Branch Code
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Name
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Center Name
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Section
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Status
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Details
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Delete
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {branches.map((branch, index) => (
              <Tr key={branch.id}>
                <Td>{index + 1}</Td>
                <Td>
                  {new Date(branch.createdAt).toLocaleDateString("en-GB")}
                </Td>
                <Td>
                  <Image
                    src={branch.logoUrl}
                    alt={branch.name}
                    w="40px"
                    h="40px"
                  />
                </Td>
                <Td>{branch.centerId}</Td>
                <Td borderLeft="1px solid red">{branch.directorName}</Td>
                <Td>{branch.centerName}</Td>
                <Td>{branch.state}</Td>
                <Td>
                  <Switch
                    isChecked={branch.status === "Active"}
                    onChange={(e) =>
                      handleStatusChange(
                        branch.id,
                        e.target.checked ? "Active" : "Inactive"
                      )
                    }
                    colorScheme={branch.status === "Active" ? "green" : "red"}
                  />
                </Td>
                <Td>
                  <Flex gap={1}>
                    <Button
                      size="sm"
                      colorScheme="blue"
                      onClick={() => handleEditClick(branch.id)} // Pass franchiseId to handleEditClick
                    >
                      <Icon as={FaRegEdit} size="sm" color="white" />{" "}
                      {/* Update color to white */}
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="blue"
                      onClick={(e) => {
                        const fileInput = document.createElement("input");
                        fileInput.type = "file";
                        fileInput.accept = "image/*";
                        fileInput.addEventListener("change", (e) =>
                          handlePhotoChange(branch.userName, branch.id, e)
                        );
                        fileInput.click();
                      }} // Pass franchiseId to handleEditClick
                    >
                      <Icon as={RiImageEditLine} size="sm" color="white" />{" "}
                      {/* Update color to white */}
                    </Button>
                  </Flex>
                </Td>
                <Td>
                  <Button size="sm" colorScheme="red">
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </DashboardLayout>
  );
};

export default AllBranch;
