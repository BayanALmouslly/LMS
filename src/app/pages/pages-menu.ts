import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'الصفحة الرئيسية',
    icon: 'shopping-cart-outline',
    link: '/pages/homepage',
    home: true,
  },
  {
    title: 'ابدأ هنا',
    icon: 'home-outline',
    link: '/pages/homepage/start',
  },
  {
    title: 'قوائم',
    group: true,
  },
  {
    title: 'توصيفات المقرر',
    icon: 'layout-outline',
    link: '/pages/courses'
    // children: [
    //   {
    //     title: 'Stepper',
    //     link: '/pages/layout/stepper',
    //   },
    //   {
    //     title: 'List',
    //     link: '/pages/layout/list',
    //   },
    //   {
    //     title: 'Infinite List',
    //     link: '/pages/layout/infinite-list',
    //   },
    //   {
    //     title: 'Accordion',
    //     link: '/pages/layout/accordion',
    //   },
    //   {
    //     title: 'Tabs',
    //     pathMatch: 'prefix',
    //     link: '/pages/layout/tabs',
    //   },
    // ],
  },
  {
    title: 'سياسة المقرر',
    icon: 'edit-2-outline',
    link: '/pages/coursePolicy'
    // children: [
    //   {
    //     title: 'Form Inputs',
    //     link: '/pages/forms/inputs',
    //   },
    //   {
    //     title: 'Form Layouts',
    //     link: '/pages/forms/layouts',
    //   },
    //   {
    //     title: 'Buttons',
    //     link: '/pages/forms/buttons',
    //   },
    //   {
    //     title: 'Datepicker',
    //     link: '/pages/forms/datepicker',
    //   },
    // ],
  },
  {
    title: 'الإعلانات',
    icon: 'keypad-outline',
    link: '/pages/advertising',
    // children: [
    //   {
    //     title: 'إضافة إعلان',
    //     link: '/pages/advertising/add',
    //   },
    //   {
    //     title: 'عرض الإعلانات',
    //     link: '/pages/advertising',
    //   },
    //   // {
    //   //   title: 'Grid',
    //   //   link: '/pages/ui-features/grid',
    //   // },
    //   // {
    //   //   title: 'Icons',
    //   //   link: '/pages/ui-features/icons',
    //   // },
    //   // {
    //   //   title: 'Typography',
    //   //   link: '/pages/ui-features/typography',
    //   // },
    //   // {
    //   //   title: 'Animated Searches',
    //   //   link: '/pages/ui-features/search-fields',
    //   // },
    // ],
  },
  {
    title: 'الوحدات التعليمية ',
    icon: 'browser-outline',
    link: '/pages/educationalunit',
  },

  {
    title: 'المناقشات',
    icon: 'message-circle-outline',
    link: '/pages/discussions',
    // children: [
    //   {
    //     title: 'Calendar',
    //     link: '/pages/extra-components/calendar',
    //   },
    //   {
    //     title: 'Progress Bar',
    //     link: '/pages/extra-components/progress-bar',
    //   },
    //   {
    //     title: 'Spinner',
    //     link: '/pages/extra-components/spinner',
    //   },
    //   {
    //     title: 'Alert',
    //     link: '/pages/extra-components/alert',
    //   },
    //   {
    //     title: 'Calendar Kit',
    //     link: '/pages/extra-components/calendar-kit',
    //   },
    //   {
    //     title: 'Chat',
    //     link: '/pages/extra-components/chat',
    //   },
    // ],
  },
  {
    title: 'تقييمات المقرر',
    icon: 'map-outline',
    link: '/pages/CourseEvaluation',

    // children: [
    //   {
    //     title: 'Google Maps',
    //     link: '/pages/maps/gmaps',
    //   },
    //   {
    //     title: 'Leaflet Maps',
    //     link: '/pages/maps/leaflet',
    //   },
    //   {
    //     title: 'Bubble Maps',
    //     link: '/pages/maps/bubble',
    //   },
    //   {
    //     title: 'Search Maps',
    //     link: '/pages/maps/searchmap',
    //   },
    // ],
  },
  // {
  //   title: 'درجاتي',
  //   icon: 'pie-chart-outline',
  //   link: '/pages/marks',

  //   // children: [
  //   //   {
  //   //     title: 'Echarts',
  //   //     link: '/pages/charts/echarts',
  //   //   },
  //   //   {
  //   //     title: 'Charts.js',
  //   //     link: '/pages/charts/chartjs',
  //   //   },
  //   //   {
  //   //     title: 'D3',
  //   //     link: '/pages/charts/d3',
  //   //   },
  //   // ],
  // },
  {
    title: 'رسائل المقرر',
    icon: 'text-outline',
    link: '/pages/CourseMessage',

    // children: [
    //   {
    //     title: 'TinyMCE',
    //     link: '/pages/editors/tinymce',
    //   },
    //   {
    //     title: 'CKEditor',
    //     link: '/pages/editors/ckeditor',
    //   },
    // ],
  },
  {
    title: 'الأدوات',
    icon: 'grid-outline',
    link: '/pages/tools',

    // children: [
    //   {
    //     title: 'Smart Table',
    //     link: '/pages/tables/smart-table',
    //   },
    //   {
    //     title: 'Tree Grid',
    //     link: '/pages/tables/tree-grid',
    //   },
    // ],
  },
  {
    title: 'الدعم والمساعدة',
    icon: 'shuffle-2-outline',
    link: '/pages/help',

    // children: [
    //   {
    //     title: '404',
    //     link: '/pages/miscellaneous/404',
    //   },
    // ],
  },
  // {
  //   title: 'الوحدات التعليمية ',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: 'الطلاب ',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'عرض الطلاب',
  //       link: '/pages/students',
  //     },
  //     {
  //       title: 'اضافة طالب',
  //       link: '/pages/students/add',
  //     },
  //   ]

  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
