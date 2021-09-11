import { configureStore } from '@reduxjs/toolkit'
import ParamedicalSlice from './Slices/ParaMedicalSlice'
import ParapharmacySlice from './Slices/ParaPharmacySlice'
import PharmacySlice from './Slices/PharmAcySlice'
import HospitalSlice from './Slices/HosPitalSlice'
import DoctorSlice from './Slices/DocTorSlice'
import OpticianSlice from './Slices/OpTicianSlice'


export const store = configureStore({
  reducer: {
    pmd: ParamedicalSlice,
    ppy: ParapharmacySlice,
    py: PharmacySlice,
    hpl:HospitalSlice,
    dt: DoctorSlice,
    ot: OpticianSlice,
  },
})
