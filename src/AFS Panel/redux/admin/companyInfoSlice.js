// src/redux/companyInfoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';

const initialState = {
  companyInfo: {
    c_name: '',
    c_phone: '',
    c_whatsapp: '',
    c_email: '',
    c_address: '',
    c_shortName: '',
    c_webUrl: ''
  },
  status: 'idle',
  error: null
};

export const fetchCompanyInfo = createAsyncThunk(
  'companyInfo/fetchCompanyInfo',
  async (_, { rejectWithValue }) => {
    try {
      const docPath = 'companyInfo/companyInfo';
      const docRef = doc(fireDB, docPath);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return rejectWithValue('No such document!');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCompanyInfo = createAsyncThunk(
  'companyInfo/updateCompanyInfo',
  async (companyInfo, { rejectWithValue }) => {
    try {
      const docPath = 'companyInfo/companyInfo';
      await setDoc(doc(fireDB, docPath), companyInfo);
      return companyInfo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const companyInfoSlice = createSlice({
  name: 'companyInfo',
  initialState,
  reducers: {
    setCompanyInfo(state, action) {
      state.companyInfo = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCompanyInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.companyInfo = action.payload;
      })
      .addCase(fetchCompanyInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateCompanyInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCompanyInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.companyInfo = action.payload;
      })
      .addCase(updateCompanyInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { setCompanyInfo } = companyInfoSlice.actions;
export default companyInfoSlice.reducer;
