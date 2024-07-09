/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // qfpaySidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  qfpaySidebar: [
    {
      type: 'category',
      label: 'Preparation',
      link: {
        type: 'generated-index'
      },
      items: ['preparation/introduction', 'preparation/paycode'],
    },
    {
      type: 'category',
      label: 'In-Store',
      link: {
        type: 'generated-index'
      },
      items: ['in-store/MPM', 'in-store/CPM',
      {
        type: 'category',
        label: 'POS API',
        link: {
          type: 'generated-index'
        },
        items: [
          {
            type: 'doc',
            label: 'ECR Integration',
            id:'in-store/pos-api/ECR'
          },
          {
            type: 'doc',
            label: 'App call App',
            id:'in-store/pos-api/app-call-app'
          },
        ]
      },],
    },
    {
      type: 'category',
      label: 'Online Shop',
      link: {
        type: 'generated-index'
      },
      items: [
        'online-shop/checkout',
        'online-shop/online-pre-authorisation',
        'online-shop/paymentelement',
        'online-shop/qfpay-recurring-payment',
        'online-shop/visa-master-online-payment',
        'online-shop/wap-payment',
        'online-shop/web-payment',
        'online-shop/in-app-payment',
        'online-shop/payment-intent',
        'online-shop/ecr-cloud',
        {
          type: 'category',
          label: 'Wechat',
          link: {
            type: 'generated-index'
          },
          items: [
            'online-shop/wechat/wechat-web-qrc-payments',
            'online-shop/wechat/wechat-pay-jsapi',
            'online-shop/wechat/wechat-pay-h5',
            'online-shop/wechat/wechat-mini-programs',
            'online-shop/wechat/wechat-in-app-payments',
          ]
        },
        {
          type: 'category',
          label: 'Alipay',
          link: {
            type: 'generated-index'
          },
          items: [
            'online-shop/alipay/alipay-online-payments', 
            'online-shop/alipay/alipay-service-window-h5',
            'online-shop/alipay/alipay-in-app-payments'
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Common API',
      link: {
        type: 'generated-index'
      },
      items: [
        'common-api/transaction-enquiry',
        'common-api/reversal-cancel',
        'common-api/refunds',
        'common-api/asynchronous-notification',
        'common-api/transaction-note',
      ]
    },
    'customs declaration',
    'FAQ',
  ],
   
};

export default sidebars;
