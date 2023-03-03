import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactState {
  isSuccess: boolean;
  isLoading: boolean;
  errors: string | null;
}

const initialState: ContactState = {
  isSuccess: false,
  isLoading: false,
  errors: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    mailSendStart(state) {
      state.isLoading = true;
      state.isSuccess = false;
      state.errors = null;
    },
    mailSendSuccess(state) {
      state.isLoading = false;
      state.isSuccess = true;
      state.errors = null;
    },
    mailSendError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isSuccess = false;
      state.errors = action.payload;
    },
    resetSuccess(state) {
      state.isSuccess = false;
    },
  },
});

export const { mailSendStart, mailSendSuccess, mailSendError, resetSuccess } =
  contactSlice.actions;
export default contactSlice.reducer;
