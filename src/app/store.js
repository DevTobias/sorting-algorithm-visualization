import {configureStore} from '@reduxjs/toolkit';
import settingsReducer from '../components/settings/settingsSlice';

export default configureStore({
  reducer: {
    settings: settingsReducer,
  },
});
