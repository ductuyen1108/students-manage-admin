import { ElementType, lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
// hooks
import useAuth from '../hooks/useAuth';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import AuthGuard from '../guards/AuthGuard';
import GuestGuard from '../guards/GuestGuard';
import { RequestExportListContainer } from '../../request-export/request-export-list';
// config
// components
import LoadingScreen from '../components/LoadingScreen';
import { PATH_AUTH, PATH_DASHBOARD } from './paths';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  const { pathname } = useLocation();

  const { isAuthenticated } = useAuth();

  const isDashboard = pathname.includes('/dashboard') && isAuthenticated;

  return (
    <Suspense fallback={<LoadingScreen isDashboard={isDashboard} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        // {
        //   path: 'forgot-password',
        //   element: <ForgotPassword />,
        // },
        // {
        //   path: 'register',
        //   element: <Register />,
        // },
        // {
        //   path: PATH_AUTH.emailConfirmation,
        //   element: <EmailConfirmation />,
        // },
        // {
        //   path: PATH_AUTH.approvedNotification,
        //   element: <ApprovedNotification />,
        // },
      ],
    },
    {
      path: 'verify-email',
      element: <VerifyEmail />,
    },
    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'merchant',
          children: [
            {
              element: <Navigate to={PATH_DASHBOARD.merchant.root} replace />,
              index: true,
            },
            { path: 'settings', element: <AccountGeneral /> },
            { path: 'change-password', element: <AccountChangePassword /> },
          ],
        },
        {
          path: PATH_DASHBOARD.subject.root,
          children: [
            { path: PATH_DASHBOARD.subject.create, element: <CreateSubject /> },
            { path: PATH_DASHBOARD.subject.list, element: <ListSubject /> },
            { path: PATH_DASHBOARD.subject.edit, element: <EditSubject /> },
          ],
        },
        {
          path: PATH_DASHBOARD.news.root,
          children: [
            { path: PATH_DASHBOARD.news.create, element: <CreateNews /> },
            { path: PATH_DASHBOARD.news.list, element: <ListNews /> },
            { path: PATH_DASHBOARD.news.edit, element: <EditNews /> },
            { path: PATH_DASHBOARD.news.detail, element: <DetailNews /> },
          ],
        },
        {
          path: PATH_DASHBOARD.contact.root,
          children: [
            { path: PATH_DASHBOARD.contact.list, element: <ListContact /> },
            { path: PATH_DASHBOARD.contact.edit, element: <EditContact /> }
          ]
        },
        {
          path: PATH_DASHBOARD.chienNon.root,
          children: [
            { path: PATH_DASHBOARD.chienNon.list, element: <ListChienNon /> },
            { path: PATH_DASHBOARD.chienNon.create, element: <CreateChienNon /> },
            { path: PATH_DASHBOARD.chienNon.detail, element: <DetailChienNon /> },
          ]
        },
        {
          path: PATH_DASHBOARD.auNhi.root,
          children: [
            { path: PATH_DASHBOARD.auNhi.list, element: <ListAuNhi /> },
            { path: PATH_DASHBOARD.auNhi.create, element: <CreateAuNhi /> },
            { path: PATH_DASHBOARD.auNhi.detail, element: <DetailAuNhi /> },
          ]
        },
        {
          path: PATH_DASHBOARD.hiepSi.root,
          children: [
            { path: PATH_DASHBOARD.hiepSi.list, element: <ListHiepSi /> },
            { path: PATH_DASHBOARD.hiepSi.create, element: <CreateHiepSi /> },
            { path: PATH_DASHBOARD.hiepSi.detail, element: <DetailHiepSi /> },
          ]
        },
        {
          path: PATH_DASHBOARD.nghiaSi.root,
          children: [
            { path: PATH_DASHBOARD.nghiaSi.list, element: <ListNghiaSi /> },
            { path: PATH_DASHBOARD.nghiaSi.create, element: <CreateNghiaSi /> },
            { path: PATH_DASHBOARD.nghiaSi.detail, element: <DetailNghiaSi /> },
          ]
        },
        {
          path: PATH_DASHBOARD.thieuNhi.root,
          children: [
            { path: PATH_DASHBOARD.thieuNhi.list, element: <ListThieuNhi /> },
            { path: PATH_DASHBOARD.thieuNhi.create, element: <CreateThieuNhi /> },
            { path: PATH_DASHBOARD.thieuNhi.detail, element: <DetailThieuNhi /> },
          ]
        },
        {
          path: PATH_DASHBOARD.class.root,
          children: [
            { path: PATH_DASHBOARD.class.list, element: <ListClass /> },
            { path: PATH_DASHBOARD.class.create, element: <CreateClass /> },
            { path: PATH_DASHBOARD.class.edit, element: <EditClass /> },
          ]
        },
        {
          path: PATH_DASHBOARD.lesion.root,
          children: [
            { path: PATH_DASHBOARD.lesion.list, element: <ListLession /> },
            { path: PATH_DASHBOARD.lesion.create, element: <CreateLession /> },
            { path: PATH_DASHBOARD.lesion.edit, element: <EditLession /> },
          ]
        },
        {
          path: PATH_DASHBOARD.attendance.root,
          children: [
            { path: PATH_DASHBOARD.attendance.list, element: <ListAttendance /> },
          ]
        },
        {
          path: PATH_DASHBOARD.score.root,
          children: [
            { path: PATH_DASHBOARD.score.list, element: <ListScore /> },
          ]
        },
        {
          path: PATH_DASHBOARD.requestExport.root,
          children: [
            { path: PATH_DASHBOARD.requestExport.list, element: <RequestExportListContainer /> },
          ]
        },
        {
          path: PATH_DASHBOARD.requestImport.root,
          children: [
            { path: PATH_DASHBOARD.requestImport.list, element: <ImportFileList /> },
          ]
        },
        {
          path: PATH_DASHBOARD.statistical.root,
          children: [
            { path: PATH_DASHBOARD.statistical.countStudent, element: <CountStudentStatistical /> },
            { path: PATH_DASHBOARD.statistical.attendancePercent, element: <AttendancePercentStatistical /> },
          ]
        },
      ],
    },
    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
// login
const Login = Loadable(lazy(() => import('../../auth/login/Login')));
const ForgotPassword = Loadable(
  lazy(() => import('../../auth/forgot-password/ResetPassword'))
);
const Register = Loadable(lazy(() => import('../../auth/register/Register')));

// merchant
const AccountGeneral = Loadable(
  lazy(() => import('../../profile/account-general/AccountGeneral'))
);
const AccountChangePassword = Loadable(
  lazy(() => import('../../profile/account-change-password/AccountChangePassword'))
);

const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const Page403 = Loadable(lazy(() => import('../pages/Page403')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));

const EmailConfirmation = Loadable(
  lazy(() => import('src/email-confirmation/components/index'))
);
const ApprovedNotification = Loadable(
  lazy(() => import('src/approved-notification/components/index'))
);
const VerifyEmail = Loadable(
  lazy(() => import('src/auth/verify/components/VerifyEmail'))
);

// subject
const CreateSubject = Loadable(lazy(() => import('src/subject/create-subject/index')));
const ListSubject = Loadable(lazy(() => import('src/subject/list-subject/index')));
const EditSubject = Loadable(lazy(() => import('src/subject/edit-subject/index')));

// news
const EditNews = Loadable(lazy(() => import('src/news/edit-news/index')));
const CreateNews = Loadable(lazy(() => import('src/news/create-news/index')));
const DetailNews = Loadable(lazy(() => import('src/news/detail-news/index')));
const ListNews = Loadable(lazy(() => import('src/news/list-news/index')));

// contact
const ListContact = Loadable(lazy(() => import('src/contact-manage/list-contact/index')));
const EditContact = Loadable(lazy(() => import('src/contact-manage/edit-contact/index')));

// Chien Non
const ListChienNon = Loadable(lazy(() => import('src/chien-non/list-chien-non/index')));
const CreateChienNon = Loadable(lazy(() => import('src/chien-non/create-chien-non/index')));
const DetailChienNon = Loadable(lazy(() => import('src/chien-non/details/index')));

// Au Nhi
const ListAuNhi = Loadable(lazy(() => import('src/au-nhi/list-au-nhi/index')));
const CreateAuNhi = Loadable(lazy(() => import('src/au-nhi/create-au-nhi/index')));
const DetailAuNhi = Loadable(lazy(() => import('src/au-nhi/details/index')));

// Hiep Si
const ListHiepSi = Loadable(lazy(() => import('src/hiep-si/list-hiep-si/index')));
const CreateHiepSi = Loadable(lazy(() => import('src/hiep-si/create-hiep-si/index')));
const DetailHiepSi = Loadable(lazy(() => import('src/hiep-si/details/index')));

// Nghia Si
const ListNghiaSi = Loadable(lazy(() => import('src/nghia-si/list-nghia-si/index')));
const CreateNghiaSi = Loadable(lazy(() => import('src/nghia-si/create-nghia-si/index')));
const DetailNghiaSi = Loadable(lazy(() => import('src/nghia-si/details/index')));

// Thieu Nhi
const ListThieuNhi = Loadable(lazy(() => import('src/thieu-nhi/list-thieu-nhi/index')));
const CreateThieuNhi = Loadable(lazy(() => import('src/thieu-nhi/create-thieu-nhi/index')));
const DetailThieuNhi = Loadable(lazy(() => import('src/thieu-nhi/details/index')));

// Class
const ListClass = Loadable(lazy(() => import('src/class/list-class/index')));
const CreateClass = Loadable(lazy(() => import('src/class/create-class/index')));
const EditClass = Loadable(lazy(() => import('src/class/edit-class/index')));

// Lession
const ListLession  = Loadable(lazy(() => import('src/lesson/list-lesson/index')));
const CreateLession  = Loadable(lazy(() => import('src/lesson/create-lesson/index')));
const EditLession = Loadable(lazy(() => import('src/lesson/edit-lesson/index')));

// Attendance
const ListAttendance = Loadable(lazy(() => import('src/attendance/list-attendance/index')));

// Score
const ListScore = Loadable(lazy(() => import('src/score/list-score/index')));

// Request Import
const ImportFileList = Loadable(lazy(() => import('src/requestImport/index')));

// Count Student Statistical
const CountStudentStatistical = Loadable(lazy(() => import('src/statistical/count-student/index')));
const AttendancePercentStatistical = Loadable(lazy(() => import('src/statistical/attendance-percent/index')));