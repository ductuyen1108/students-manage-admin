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
import listAuNhiReducer from 'src/au-nhi/list-au-nhi/slice';
import listThieuNhiReducer from 'src/thieu-nhi/list-thieu-nhi/slice';
import listHiepSiReducer from 'src/hiep-si/list-hiep-si/slice';
import listNghiaSiReducer from 'src/nghia-si/list-nghia-si/slice';
import listStudentLowAttendanceReducer from 'src/statistical/students-with-low-attendance/slice';
import listStatisticalReducer from 'src/statistical/count-student/common/slice';


import listClassReducer from 'src/class/list-class/slice';
import listLesionReducer from 'src/lesson/list-lesson/slice';
import listAttendanceReducer from 'src/attendance/list-attendance/slice';
import litScoreReducer from 'src/score/list-score/slice';
import listAttendancePercentReducer from 'src/statistical/attendance-percent/slice';

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
  listHiepSi: listHiepSiReducer,
  listNghiaSi: listNghiaSiReducer,
  listAuNhi: listAuNhiReducer,
  listThieuNhi: listThieuNhiReducer,
  listClass: listClassReducer,
  listLesion: listLesionReducer,
  listAttendance: listAttendanceReducer,
  listScore: litScoreReducer,
  listAttendancePercent: listAttendancePercentReducer,
  listStudentLowAttendance: listStudentLowAttendanceReducer,
  listStatistical: listStatisticalReducer
});

export { rootPersistConfig, rootReducer };
