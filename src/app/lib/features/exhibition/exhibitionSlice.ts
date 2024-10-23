import { createSlice } from "@reduxjs/toolkit";

export type ExhibitionBoothBillingInfo = {
  form_booth: string,
  form_companyName: string,
  form_contactName: string,
  form_jobTitle: string,
  form_phoneNumber: string,
  form_country: string,
  form_email: string,
  form_industry: string,
  form_briefDescription: string,
  form_howDidYouHearAboutEvent: string,
};

const initialFormValue = {
  form_booth: '',
  form_companyName: '',
  form_contactName: '',
  form_jobTitle: '',
  form_phoneNumber: '',
  form_country: '',
  form_email: '',
  form_industry: '',
  form_briefDescription: '',
  form_howDidYouHearAboutEvent: '',
};

type initialStateType = {
  formValues: {booth: string, data: ExhibitionBoothBillingInfo},
  total: number;
}

const initialState:initialStateType = {
  formValues: { booth: '', data: initialFormValue},
  total: 0,
};

export const exhibitionSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {

    setFormValues: (state, action) => {
      state.formValues = ({
        [action.payload.booth]: action.payload.data,
      });
    },

    setTotal: (state, action) => {
      state.total = action.payload;
    },
  }
})

export const { setFormValues, setTotal } = exhibitionSlice.actions;
export default exhibitionSlice.reducer