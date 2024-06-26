import { Route, BrowserRouter as Router, Routes, } from "react-router-dom"
import React from 'react';
import MainLayout from './components/layout/MainLayout'
import AboutCompany from './Pages/About/AboutCompany'
import Home from './Pages/Home/Home'
import ChairmanMessage from './Pages/About/ChairmanMessage';
import OurVisionAndMission from './Pages/About/OurVisionAndMission';
import OurGoal from './Pages/About/OurGoal';
import StudentRegistration from './Pages/Student Zone/StudentRegistration';
import StudentVerification from './Pages/Student Zone/StudentVerification';
// import StudentLogin from './Pages/Student Zone/StudentLogin';
import AdmitCard from './Pages/Student Zone/AdmitCard';
import CertificateVerification from './Pages/Student Zone/CertificateVerification';
import ApplyOnline from './Pages/Franchise/ApplyOnline';
import CenterVerification from './Pages/Franchise/CenterVerification';
import Photos from './Pages/Gallary/Photos';
import Videos from './Pages/Gallary/Videos';
import ContactUs from './Pages/Contact/ContactUs';
import FindBranch from './Pages/Contact/FindBranch';
import OurTeam from './Pages/Contact/OurTeam';
import FranchiseDashboard from "./AFS Panel/FranchisePanel/pages/Dashboard/FranchiseDashboard";
import AllBranch from "./AFS Panel/AdminPanel/pages/Branch/AllBranch";
import Dashboard from "./AFS Panel/AdminPanel/pages/Dashboard/Dashboard";
import AllStudent from "./AFS Panel/AdminPanel/pages/Student/AllStudent";
import StudentDashboard from "./AFS Panel/StudentPanel/pages/Dashboard/StudentDashboard";
import PracticeTest from "./AFS Panel/StudentPanel/pages/PracticeTest/PracticeTest";
import StudentLogin from "./AFS Panel/StudentPanel/Auth/Login/Login";
import WalletRechargeRequestForm from "./AFS Panel/FranchisePanel/pages/Wallate/WalletRechargeRequestForm ";
import FranchiseProfilePage from "./AFS Panel/FranchisePanel/pages/Profile/FranchiseProfilePage";
import CourseCategoryPage from "./AFS Panel/AdminPanel/pages/Course/CourseCategory";
// import Signup from "./AFS Panel/components/auth/Signup";
import AdminPrivateRoute from "./AFS Panel/components/privateRoute/AdminPrivateRoute";
import FranchisePrivateRoute from "./AFS Panel/components/privateRoute/FranchisePrivateRoute";
import FranchiseLogin from "./AFS Panel/FranchisePanel/Auth/Login/FranchiseLogin";
import AdminLogin from "./AFS Panel/AdminPanel/Auth/Login/AdminLogin";
import AddBranch from "./AFS Panel/AdminPanel/pages/Branch/addBranch/AddBranch";
import ForgotPassword from "./AFS Panel/components/adminAndCenterAuth/ForgotPassword/ForgotPassword";
import UpdateBranch from "./AFS Panel/AdminPanel/pages/Branch/UpdateBranch";
import BranchPage from "./AFS Panel/AdminPanel/pages/Branch/Branch";
import ContactUsQuery from "./AFS Panel/AdminPanel/pages/Query/ContactUsQuery";
import AddStudentPage from "./AFS Panel/FranchisePanel/pages/Student/AddStudentPage";
import StudentListPage from "./AFS Panel/FranchisePanel/pages/Student/StudentListPage";
import AdminPanel from "./AFS Panel/AdminPanel/pages/AdminPanel";
import BranchWallet from "./AFS Panel/AdminPanel/pages/Wallet/BranchWallet";
import AddCourse from "./AFS Panel/AdminPanel/pages/Course/AddCourse";
import AllCourses from "./AFS Panel/AdminPanel/pages/Course/AllCourses";
import CourseSelectionPage from "./AFS Panel/FranchisePanel/pages/Course/CourseSelectionPage";
import StudentIDCard from "./AFS Panel/StudentPanel/pages/IDCard/StudentIDCard";
import UpdateStudentPage from "./AFS Panel/FranchisePanel/pages/Student/UpdateStudentPage";
import PrintCenterCertificate from "./AFS Panel/FranchisePanel/pages/FranchiseCertificate/PrintCenterCertificate";
import PrintMarksheet from "./AFS Panel/FranchisePanel/studentCertificates/markseet/PrintMarksheet";
import UpdateCourse from "./AFS Panel/AdminPanel/pages/Course/UpdateCourse";
import PrintStudentCertificate from "./AFS Panel/FranchisePanel/studentCertificates/certificate/PrintStudentCertificate";
import QrVerification from "./Pages/verification/QrVerification";
import NotificationForUser from "./AFS Panel/AdminPanel/pages/notification/NotificationForUser";
import PrintIdCard from "./AFS Panel/FranchisePanel/studentCertificates/idCard/PrintIdCard";
import SerivicesGrid from "./Pages/services/SerivicesGrid";
// import BasicCourses from "./Pages/courses/BasicCourses";
import DiplomaCourses from "./Pages/Courses/DiplomaCourses";
// import LanguageCourses from "./Pages/courses/LanguageCourses";
import ProfessionalCourses from "./Pages/Courses/ProfessionalCourses";
import AddCourseSubjectPage from "./AFS Panel/AdminPanel/pages/Course/AddSubject";
import ViewSubjectPage from "./AFS Panel/AdminPanel/pages/Course/ViewSubject";
import CompanyInfoUpdate from "./AFS Panel/AdminPanel/pages/profile/CompanyInfoUpdate";
// import StudentListPage from "./AFS Panel/FranchisePanel/pages/Student/AllStudents";

const App = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route path='' element={<Home />} />
                        <Route path='about-company' element={<AboutCompany />} />
                        <Route path='chairman-message' element={<ChairmanMessage />} />
                        <Route path='our-vision-and-mission' element={<OurVisionAndMission />} />
                        <Route path='our-goal' element={<OurGoal />} />

                        {/* <Route path='basic-courses' element={<BasicCourses />} /> */}
                        <Route path='diploma-courses' element={<DiplomaCourses />} />
                        {/* <Route path='language-courses' element={<LanguageCourses />} /> */}
                        <Route path='professional-courses' element={<ProfessionalCourses />} />

                        <Route path='student-registration' element={<StudentRegistration />} />
                        <Route path='student-verification' element={<StudentVerification />} />
                        <Route path='student-login' element={<StudentLogin />} />
                        <Route path='admit-card' element={<AdmitCard />} />
                        <Route path='certificate-verification' element={<CertificateVerification />} />

                        <Route path='franchise-enquiry' element={<ApplyOnline />} />
                        <Route path='center-verification' element={<CenterVerification />} />

                        <Route path='photos' element={<Photos />} />
                        <Route path='videos' element={<Videos />} />

                        <Route path="services" element={<SerivicesGrid />} />

                        <Route path='contact-us' element={<ContactUs />} />
                        <Route path='find-branch' element={<FindBranch />} />
                        <Route path='our-team' element={<OurTeam />} />
                    </Route>


                    <Route path='admin-login' element={<AdminLogin />} />
                    <Route element={<AdminPrivateRoute />}>
                        <Route path='dashboard' element={<Dashboard />} />
                        <Route path='admin-profile' element={<CompanyInfoUpdate/>} />
                        {/* <Route path='support' element={<Support />} /> */}
                        <Route path='student' element={<AllStudent />} />
                        <Route path="add-branch" element={<AddBranch />} />
                        <Route path="update-branch" element={<UpdateBranch />} />
                        <Route path='branch' element={<AllBranch />} />
                        <Route path='branch-wallet' element={<BranchWallet />} />
                        <Route path='course-category' element={<CourseCategoryPage />} />
                        <Route path='contact-us-query' element={<ContactUsQuery />} />
                        <Route path="branchpage" element={<BranchPage />} />
                        <Route path="add-course" element={<AddCourse />} />
                        <Route path="all-courses" element={<AllCourses />} />
                        <Route path="update-course" element={<UpdateCourse />} />
                        <Route path="add-subject" element={<AddCourseSubjectPage />} />
                        <Route path="view-subject" element={<ViewSubjectPage />} />
                    </Route>

                    <Route path='franchise-login' element={<FranchiseLogin />} />
                    <Route element={<FranchisePrivateRoute />}>
                        <Route path='franchise-dashboard' element={<FranchiseDashboard />} />
                        <Route path='wallet-recharge' element={<WalletRechargeRequestForm />} />
                        <Route path='franchise-profile' element={<FranchiseProfilePage />} />
                        {/* <Route path="authorisation-certificate" element={<FranchiseCertificate />} /> */}
                        <Route path="authorisation-certificate" element={<PrintCenterCertificate />} />
                        <Route path="add-student" element={<AddStudentPage />} />
                        <Route path="update-student" element={<UpdateStudentPage />} />
                        <Route path="students-list" element={<StudentListPage />} />
                        <Route path="course-selection" element={<CourseSelectionPage />} />
                        <Route path="student-certificate" element={<PrintStudentCertificate />} />
                        <Route path="student-marksheet" element={<PrintMarksheet />} />
                    </Route>

                    <Route path='student-dashboard' element={<StudentDashboard />} />
                    {/* <Route path='student-dashboard' element={<StudentDashboard />} /> */}
                    <Route path='practice-test' element={<PracticeTest />} />

                    {/* <Route path="/signup*" element={<Signup />} /> */}
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="*" element={<> not found</>} />

                    {/* <Route path="succ" element={<PasswordResetDone/>} /> */}
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="all-students" element={<AdminPanel />} />

                    <Route path="id-card" element={<StudentIDCard />} />
                    <Route path="idcard" element={<PrintIdCard />} />
                    <Route path="qr-verification/:regNumber" element={<QrVerification />} />
                    <Route path="user-notice" element={<NotificationForUser />} />
                    {/* <Route path="chakra-certificate" element={<ChakraCertificate/>} /> */}

                </Routes>
            </Router>

        </>
    )
}

export default App