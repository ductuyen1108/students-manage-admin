// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Iconify from 'src/common/components/Iconify';
import i18n from 'src/common/locales/i18n';
import SvgIconStyle from '../../../components/SvgIconStyle';
import { Action, ActionAbility, Resource } from '../../../constants/common.interfaces';
import vn from '../../../locales/vn';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  subject: getIcon('ic_news_subject'),
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  menuItem: getIcon('ic_menu_item'),
  setting: getIcon('ic_menu_item'),
  policy: getIcon('ic_policy'),
  term_policy: getIcon('ic_term'),
  help_policy: getIcon('ic_help'),
  document: getIcon('ic_policy'),
  storeInMap: getIcon('ic_store_in_map'),
  product: <Iconify icon="fluent-mdl2:product-variant" />,
  order: <Iconify icon="icon-park-outline:transaction-order" />,
  attribute: <Iconify icon="carbon:carbon-for-ibm-product" />,
  term: <Iconify icon="fluent:task-list-square-add-20-regular" />,
  variant: <Iconify icon="fluent-mdl2:product-release" />,
  config: <Iconify icon="eos-icons:configuration-file-outlined" />,
  point: <Iconify icon="teenyicons:ms-powerpoint-solid" />,
  survey: <Iconify icon="wpf:survey" />,
  popup: <Iconify icon="entypo:popup" />,
  manageAgent: <Iconify icon="wpf:administrator" />,
  userManage: <Iconify icon="mdi:user-box" />,
  category: <Iconify icon="bxs:category-alt" />,
  tag: <Iconify icon="mingcute:tag-line" />,
  homeScreen: <Iconify icon="gg:home-screen" />,
  tierRank: <Iconify icon="fa6-solid:ranking-star" />,
  notification: <Iconify icon="mdi:notification-settings" />,
  wheel: <Iconify icon="mdi:dharma-wheel" />,
  homeSetting: <Iconify icon="ep:setting" />,
  history: <Iconify icon="material-symbols:history-rounded" />,
  store: <Iconify icon="ic:sharp-store-mall-directory" />,
  giftOrder: <Iconify icon="ph:gift-bold" />,
  historyScan: <Iconify icon="mdi:magnify-scan" />,
  configFeature: getIcon('ic_config_event'),
  game: <Iconify icon="ion:game-controller" />,
  feedback: <Iconify icon="fluent:person-feedback-28-regular" />,
  loyalty_code: <Iconify icon="vaadin:qrcode" />,
  news: <Iconify icon="fluent:news-28-regular" />,
  voucher: <Iconify icon="mdi:voucher" />,
  advisory: <Iconify icon="mdi:heat-advisory" />,
  class: <Iconify icon="healthicons:i-training-class" />,
  lesion: <Iconify icon="streamline:class-lesson" />,
  attendance: <Iconify icon="entypo:add-user" />,
  score: <Iconify icon="grommet-icons:scorecard" />,
  requestExport: <Iconify icon="ph:export-bold" />,
  requestImport: <Iconify icon="bx:import" />,
  statistical: <Iconify icon="solar:chart-bold-duotone" />,
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'Analytics',
  //   items: [],
  // },
  // {
  //   subheader: 'Thống kê',
  //   items: [],
  // },
  {
    subheader: 'app',
    items: [
      {
        title: 'Quản lý chủ đề',
        path: PATH_DASHBOARD.subject.root,
        icon: ICONS.subject,
        children: [
          {
            title: 'Danh sách chủ đề',
            path: PATH_DASHBOARD.subject.list,
          },
          {
            title: 'Tạo mới chủ đề',
            path: PATH_DASHBOARD.subject.create,
          },
        ],
      },
      {
        title: 'Quản lý ĐS chiên non',
        path: PATH_DASHBOARD.chienNon.root,
        icon: ICONS.userManage,
        children: [
          {
            title: 'Danh sách ĐS chiên non',
            path: PATH_DASHBOARD.chienNon.list,
          },{
            title: 'Tạo mới ĐS chiên non',
            path: PATH_DASHBOARD.chienNon.create,
          },
        ],
      },
      {
        title: 'Quản lý ĐS âu nhi',
        path: PATH_DASHBOARD.auNhi.root,
        icon: ICONS.userManage,
        children: [
          {
            title: 'Danh sách ĐS âu nhi',
            path: PATH_DASHBOARD.auNhi.list,
          },{
            title: 'Tạo mới ĐS âu nhi',
            path: PATH_DASHBOARD.auNhi.create,
          },
        ],
      },
      {
        title: 'Quản lý ĐS thiếu nhi',
        path: PATH_DASHBOARD.thieuNhi.root,
        icon: ICONS.userManage,
        children: [
          {
            title: 'Danh sách ĐS thiếu nhi',
            path: PATH_DASHBOARD.thieuNhi.list,
          },{
            title: 'Tạo mới ĐS thiếu nhi',
            path: PATH_DASHBOARD.thieuNhi.create,
          },
        ],
      },
      {
        title: 'Quản lý ĐS nghĩa sí',
        path: PATH_DASHBOARD.nghiaSi.root,
        icon: ICONS.userManage,
        children: [
          {
            title: 'Danh sách ĐS nghĩa sí',
            path: PATH_DASHBOARD.nghiaSi.list,
          },{
            title: 'Tạo mới ĐS nghĩa sí',
            path: PATH_DASHBOARD.nghiaSi.create,
          },
        ],
      },
      {
        title: 'Quản lý ĐS hiệp sĩ',
        path: PATH_DASHBOARD.hiepSi.root,
        icon: ICONS.userManage,
        children: [
          {
            title: 'Danh sách ĐS hiệp sĩ',
            path: PATH_DASHBOARD.hiepSi.list,
          },{
            title: 'Tạo mới ĐS hiệp sĩ',
            path: PATH_DASHBOARD.hiepSi.create,
          },
        ],
      },
      {
        title: 'Quản lý Tin tức',
        path: PATH_DASHBOARD.news.root,
        icon: ICONS.news,
        children: [
          {
            title: 'Danh sách Tin tức',
            path: PATH_DASHBOARD.news.list,
          },
          {
            title: 'Tạo mới tin tức',
            path: PATH_DASHBOARD.news.create,
          },
        ],
      },
      {
        title: 'Quản lý lớp học',
        path: PATH_DASHBOARD.class.root,
        icon: ICONS.class,
        children: [
          {
            title: 'Danh sách lớp học',
            path: PATH_DASHBOARD.class.list,
          },
          {
            title: 'Tạo mới lớp học',
            path: PATH_DASHBOARD.class.create,
          },
        ],
      },
      {
        title: 'Quản lý tiết học',
        path: PATH_DASHBOARD.lesion.root,
        icon: ICONS.lesion,
        children: [
          {
            title: 'Danh sách tiết học',
            path: PATH_DASHBOARD.lesion.list,
          },
          {
            title: 'Tạo mới tiết học',
            path: PATH_DASHBOARD.lesion.create,
          },
        ],
      },
      {
        title: 'Quản lý điểm danh',
        path: PATH_DASHBOARD.attendance.root,
        icon: ICONS.attendance,
        children: [
          {
            title: 'Danh sách điểm danh',
            path: PATH_DASHBOARD.attendance.list,
          },
        ],
      },
      {
        title: 'Quản lý điểm',
        path: PATH_DASHBOARD.score.root,
        icon: ICONS.score,
        children: [
          {
            title: 'Danh sách điểm',
            path: PATH_DASHBOARD.score.list,
          },
        ],
      },
      {
        title: 'Quản lý file export',
        path: PATH_DASHBOARD.requestExport.root,
        icon: ICONS.requestExport,
        children: [
          {
            title: 'Danh sách file export',
            path: PATH_DASHBOARD.requestExport.list,
          },
        ],
      },
      {
        title: 'Quản lý file import',
        path: PATH_DASHBOARD.requestImport.root,
        icon: ICONS.requestImport,
        children: [
          {
            title: 'Danh sách file import',
            path: PATH_DASHBOARD.requestImport.list,
          },
        ],
      },
      {
        title: 'Quản lý thống kê',
        path: PATH_DASHBOARD.statistical.root,
        icon: ICONS.statistical,
        children: [
          {
            title: 'Thống kê số lượng đoàn sinh',
            path: PATH_DASHBOARD.statistical.countStudent,
          },
          {
            title: 'Thống kê số lượng đoàn sinh theo lớp',
            path: PATH_DASHBOARD.statistical.classAndCount,
          },
          {
            title: 'Thống kê tỉ lệ đoàn sinh đi học',
            path: PATH_DASHBOARD.statistical.attendancePercent,
          },
          {
            title: 'Thống kê tỉ lệ đoàn sinh đi học muộn',
            path: PATH_DASHBOARD.statistical.getStudentsWithLowAttendance,
          },
        ],
      },
      {
        title: 'Quản lý liên hệ',
        path: PATH_DASHBOARD.contact.root,
        icon: ICONS.help_policy,
        children: [
          {
            title: 'Danh sách liên hệ',
            path: PATH_DASHBOARD.contact.list,
          }
        ],
      }
    ],
  },
];

export default navConfig;
