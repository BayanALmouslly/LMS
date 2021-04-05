import { NbMenuItem } from '@nebular/theme';

export const admin_MENU_ITEMS: NbMenuItem[] = [

  
  {
    title: 'الإعلانات',
    icon: 'keypad-outline',
    link: '/admin/advertising',
    children: [
      {
        title: 'إضافة إعلان',
        link: '/admin/advertising/add',
      },
      {
        title: 'عرض الإعلانات',
        link: '/admin/advertising',
      },
      // {
      //   title: 'Grid',
      //   link: '/pages/ui-features/grid',
      // },
      // {
      //   title: 'Icons',
      //   link: '/pages/ui-features/icons',
      // },
      // {
      //   title: 'Typography',
      //   link: '/pages/ui-features/typography',
      // },
      // {
      //   title: 'Animated Searches',
      //   link: '/pages/ui-features/search-fields',
      // },
    ],
  },
  {
    title: 'الوحدات التعليمية ',
    icon: 'browser-outline',
    link: '/admin/educationalunit',
  },

 
  {
    title: 'الطلاب ',
    icon: 'browser-outline',
    link: '/admin/students',
    // children: [
    //   {
    //     title: 'عرض الطلاب',
    //     link: '/admin/students',
    //   },
    //   {
    //     title: 'اضافة طالب',
    //     link: '/admin/students/add',
    //   },
    // ]

  },
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
