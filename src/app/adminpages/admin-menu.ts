import { NbMenuItem } from '@nebular/theme';

export const admin_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'الطلاب ',
    icon: 'browser-outline',
    link: '/admin/students',

  },
  {
    title: 'الإعلانات',
    icon: 'keypad-outline',
    link: '/admin/advertisement',
  },
  {
    title: 'الإختبارات  ',
    icon: 'browser-outline',
  
    children: [
      {
        title: 'اضافة  اختبار',
        link: '/admin/exams/add',
      },
      {
        title: 'عرض  الإختبارات',
        link: '/admin/exams',
      },
    ]
  },

  // {
  //   title: 'الوحدات التعليمية ',
  //   icon: 'browser-outline',
  
  //   children: [
  //     {
  //       title: 'اضافة وحدة تعليمية',
  //       link: '/admin/educationalunits/add',
  //     },
  //     {
  //       title: 'عرض الوحدات التعليمية',
  //       link: '/admin/educationalunits',
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
