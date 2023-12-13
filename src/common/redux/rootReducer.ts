import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import authLoginReducer from 'src/auth/login/auth.slice';
import loginReducer from 'src/auth/login/login.slice';
import registerReducer from 'src/auth/register/register.slice';
import merchantProfileReducer from 'src/profile/common/reducers/merchant-profile.slice';
import verifyEmailReducer from 'src/auth/verify/verify.slice';
import listNewsSubjectReducer from 'src/subject/list-subject/slice';
import listNewsReducer from 'src/news/list-news/slice';
import listContactReducer from 'src/contact-manage/list-contact/slice';
import listChienNonReducer from 'src/chien-non/list-chien-non/slice';

// slices

// ----------------------------------------------------------------------
const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['authLogin', 'login', 'merchantProfile'],
};

const rootReducer = combineReducers({
  authLogin: authLoginReducer,
  login: loginReducer,
  register: registerReducer,
  merchantProfile: merchantProfileReducer,
  verifyEmail: verifyEmailReducer,
  listNewsSubject: listNewsSubjectReducer,
  listNews: listNewsReducer,
  listContact: listContactReducer,
  listChienNon: listChienNonReducer,
});

export { rootPersistConfig, rootReducer };
