// src/pages/CompanyInfoUpdate.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import DashboardLayout from '../../components/DashboardLayout';
import { fetchCompanyInfo, updateCompanyInfo } from '../../../redux/admin/companyInfoSlice';

const CompanyInfoUpdate = () => {
  const dispatch = useDispatch();
  const { companyInfo, status, error } = useSelector((state) => state.companyInfo);
  const [localCompanyInfo, setLocalCompanyInfo] = useState(companyInfo);
console.log("ajs", companyInfo);
  useEffect(() => {
    dispatch(fetchCompanyInfo());
  }, [dispatch]);

  useEffect(() => {
    setLocalCompanyInfo(companyInfo);
  }, [companyInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalCompanyInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateCompanyInfo(localCompanyInfo));
  };

  return (
    <DashboardLayout p={5}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="c_name" isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input name="c_name" value={localCompanyInfo.c_name} onChange={handleChange} />
          </FormControl>
          <FormControl id="c_phone" isRequired>
            <FormLabel>Company Phone</FormLabel>
            <Input name="c_phone" value={localCompanyInfo.c_phone} onChange={handleChange} />
          </FormControl>
          <FormControl id="c_whatsapp">
            <FormLabel>Company WhatsApp</FormLabel>
            <Input name="c_whatsapp" value={localCompanyInfo.c_whatsapp} onChange={handleChange} />
          </FormControl>
          <FormControl id="c_email" isRequired>
            <FormLabel>Company Email</FormLabel>
            <Input name="c_email" type="email" value={localCompanyInfo.c_email} onChange={handleChange} />
          </FormControl>
          <FormControl id="c_address" isRequired>
            <FormLabel>Company Address</FormLabel>
            <Input name="c_address" value={localCompanyInfo.c_address} onChange={handleChange} />
          </FormControl>
          <FormControl id="c_shortName" isRequired>
            <FormLabel>Company Short Name</FormLabel>
            <Input name="c_shortName" value={localCompanyInfo.c_shortName} onChange={handleChange} />
          </FormControl>
          <FormControl id="c_webUrl" isRequired>
            <FormLabel>Company Web URL</FormLabel>
            <Input name="c_webUrl" value={localCompanyInfo.c_webUrl} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue">Update Information</Button>
        </VStack>
      </form>
    </DashboardLayout>
  );
};

export default CompanyInfoUpdate;
