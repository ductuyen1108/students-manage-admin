// ----------------------------------------------------------------------
function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT_AUTH = '/auth';
export const ROOT_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOT_AUTH,
  login: path(ROOT_AUTH, '/login'),
  register: path(ROOT_AUTH, '/register'),
  loginUnprotected: path(ROOT_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOT_AUTH, '/register-unprotected'),
  verify: path(ROOT_AUTH, '/verify'),
  resetPassword: path(ROOT_AUTH, '/reset-password'),
  newPassword: path(ROOT_AUTH, '/new-password'),
  forgotPassword: path(ROOT_AUTH, '/forgot-password'),
  emailConfirmation: path(ROOT_AUTH, '/email-confirmation'),
  approvedNotification: path(ROOT_AUTH, '/pending-approval'),
};

export const PATH_PAGE = {
  page403: '/403',
  page404: '/404',
  page500: '/500',
};

export const PATH_DASHBOARD = {
  root: '/',
  general: {
    app: path(ROOT_DASHBOARD, '/app'),
  },
  merchant: {
    root: path(ROOT_DASHBOARD, '/merchant'),
    settings: path(ROOT_DASHBOARD, '/merchant/settings'),
    change_password: path(ROOT_DASHBOARD, '/merchant/change-password'),
    // notify: path(ROOT_DASHBOARD, '/merchant/notify'),
  },
  chienNon: {
    root: path(ROOT_DASHBOARD, '/chien-non'),
    list: path(ROOT_DASHBOARD, '/chien-non/list'),
    create: path(ROOT_DASHBOARD, '/chien-non/create'),
    edit: path(ROOT_DASHBOARD, '/chien-non/edit/:id'),
    detail: path(ROOT_DASHBOARD, '/chien-non/detail/:id'),
  },
  auNhi: {
    root: path(ROOT_DASHBOARD, '/au-nhi'),
    list: path(ROOT_DASHBOARD, '/au-nhi/list'),
    create: path(ROOT_DASHBOARD, '/au-nhi/create'),
    edit: path(ROOT_DASHBOARD, '/au-nhi/edit/:id'),
    detail: path(ROOT_DASHBOARD, '/au-nhi/detail/:id'),
  },
  hiepSi: {
    root: path(ROOT_DASHBOARD, '/hiep-si'),
    list: path(ROOT_DASHBOARD, '/hiep-si/list'),
    create: path(ROOT_DASHBOARD, '/hiep-si/create'),
    edit: path(ROOT_DASHBOARD, '/hiep-si/edit/:id'),
    detail: path(ROOT_DASHBOARD, '/hiep-si/detail/:id'),
  },
  nghiaSi: {
    root: path(ROOT_DASHBOARD, '/nghia-si'),
    list: path(ROOT_DASHBOARD, '/nghia-si/list'),
    create: path(ROOT_DASHBOARD, '/nghia-si/create'),
    edit: path(ROOT_DASHBOARD, '/nghia-si/edit/:id'),
    detail: path(ROOT_DASHBOARD, '/nghia-si/detail/:id'),
  },
  thieuNhi: {
    root: path(ROOT_DASHBOARD, '/thieu-nhi'),
    list: path(ROOT_DASHBOARD, '/thieu-nhi/list'),
    create: path(ROOT_DASHBOARD, '/thieu-nhi/create'),
    edit: path(ROOT_DASHBOARD, '/thieu-nhi/edit/:id'),
    detail: path(ROOT_DASHBOARD, '/thieu-nhi/detail/:id'),
  },
  subject: {
    root: path(ROOT_DASHBOARD, '/subject'),
    list: path(ROOT_DASHBOARD, '/subject/list'),
    create: path(ROOT_DASHBOARD, '/subject/create'),
    edit: path(ROOT_DASHBOARD, '/subject/edit/:id'),
  },
  news: {
    root: path(ROOT_DASHBOARD, '/news'),
    list: path(ROOT_DASHBOARD, '/news/list'),
    create: path(ROOT_DASHBOARD, '/news/create'),
    edit: path(ROOT_DASHBOARD, '/news/edit/:id'),
    detail: path(ROOT_DASHBOARD, '/news/detail/:id'),
  },
  class: {
    root: path(ROOT_DASHBOARD, '/class'),
    list: path(ROOT_DASHBOARD, '/class/list'),
    create: path(ROOT_DASHBOARD, '/class/create'),
    edit: path(ROOT_DASHBOARD, '/class/edit/:id'),
    detail: path(ROOT_DASHBOARD, '/class/detail/:id'),
  },
  lesion: {
    root: path(ROOT_DASHBOARD, '/lession'),
    list: path(ROOT_DASHBOARD, '/lession/list'),
    create: path(ROOT_DASHBOARD, '/lession/create'),
    edit: path(ROOT_DASHBOARD, '/lession/edit/:id'),
    detail: path(ROOT_DASHBOARD, '/lession/detail/:id'),
  },
  attendance: {
    root: path(ROOT_DASHBOARD, '/attendance'),
    list: path(ROOT_DASHBOARD, '/attendance/list'),
  },
  score: {
    root: path(ROOT_DASHBOARD, '/score'),
    list: path(ROOT_DASHBOARD, '/score/list'),
  },
  requestExport: {
    root: path(ROOT_DASHBOARD, '/request-export'),
    list: path(ROOT_DASHBOARD, '/request-export/list'),
  },
  requestImport: {
    root: path(ROOT_DASHBOARD, '/request-import'),
    list: path(ROOT_DASHBOARD, '/request-import/list'),
  },
  statistical: {
    root: path(ROOT_DASHBOARD, '/statistical'),
    countStudent: path(ROOT_DASHBOARD, '/statistical/count-student'),
    attendancePercent: path(ROOT_DASHBOARD, '/statistical/attendance-percent'),
    getStudentsWithLowAttendance: path(ROOT_DASHBOARD, '/statistical/students-with-low-attendance'),
    classAndCount: path(ROOT_DASHBOARD, '/statistical/class-and-count'),
  },
  contact: {
    root: path(ROOT_DASHBOARD, '/contact'),
    list: path(ROOT_DASHBOARD, '/contact/list'),
    edit: path(ROOT_DASHBOARD, '/contact/edit/:id'),
  }
};
