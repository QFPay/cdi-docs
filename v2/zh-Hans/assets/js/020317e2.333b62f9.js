"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[6119],{86470:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>h,toc:()=>a});var s=e(74848),d=e(28453),r=e(28774);const i={},c="QFPay \u6536\u94f6\u53f0\u670d\u52a1",h={id:"online-shop/checkout",title:"QFPay \u6536\u94f6\u53f0\u670d\u52a1",description:"\u4ecb\u7d39",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-online-shop/02-checkout.md",sourceDirName:"03-online-shop",slug:"/online-shop/checkout",permalink:"/docs/v2/zh-Hans/docs/online-shop/checkout",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"Online Shop",permalink:"/docs/v2/zh-Hans/docs/category/online-shop"},next:{title:"\u7ebf\u4e0a\u9884\u6388\u6743\u652f\u4ed8API",permalink:"/docs/v2/zh-Hans/docs/online-shop/online-pre-authorisation"}},l={},a=[{value:"\u4ecb\u7d39",id:"\u4ecb\u7d39",level:2},{value:"\u6536\u94f6\u53f0\u9875\u9762\u8bbe\u8ba1",id:"\u6536\u94f6\u53f0\u9875\u9762\u8bbe\u8ba1",level:2},{value:"API\u73af\u5883",id:"api\u73af\u5883",level:2},{value:"\u6d41\u7a0b",id:"\u6d41\u7a0b",level:2},{value:"API\u8acb\u6c42\u53c3\u6578",id:"api\u8acb\u6c42\u53c3\u6578",level:2},{value:"\u521b\u5efa\u65b0\u8ba2\u5355",id:"\u521b\u5efa\u65b0\u8ba2\u5355",level:2}];function x(n){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"qfpay-\u6536\u94f6\u53f0\u670d\u52a1",children:"QFPay \u6536\u94f6\u53f0\u670d\u52a1"}),"\n",(0,s.jsx)(t.h2,{id:"\u4ecb\u7d39",children:"\u4ecb\u7d39"}),"\n",(0,s.jsxs)(t.p,{children:["\u6b22\u8fce\u4f7f\u7528 ",(0,s.jsx)(t.strong,{children:"QFPay \u5b89\u5168\u6536\u94f6\u53f0"})," \u672c\u624b\u518c\u4ecb\u7ecd\u4e86 QFPay \u7684\u6258\u7ba1\u6536\u94f6\u53f0\u9875\u9762\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u8be5\u9875\u9762\u5411\u5176\u5728\u7ebf\u5546\u5e97\u6dfb\u52a0\u591a\u79cd\u652f\u4ed8\u65b9\u5f0f\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u6536\u94f6\u53f0\u9875\u9762\u8bbe\u8ba1",children:"\u6536\u94f6\u53f0\u9875\u9762\u8bbe\u8ba1"}),"\n",(0,s.jsxs)(r.A,{href:"/img/shouyintai.png",target:"_blank",children:[" ",(0,s.jsx)(t.img,{alt:"shouyintai",src:e(20942).A+"",width:"2500",height:"2370"})," "]}),"\n",(0,s.jsxs)(t.p,{children:["\u7ed3\u5e10\u9875\u9762\u5177\u6709\u5b8c\u5168\u54cd\u5e94\u80fd\u529b\uff0c\u80fd\u81ea\u52a8\u8c03\u6574\u4ee5\u9002\u5e94\u6240\u6709\u5c4f\u5e55\u5c3a\u5bf8\u3002 \u4ecb\u9762\u76ee\u524d\u652f\u6301\u82f1\u8bed\uff0c\u7b80\u4f53\u4e2d\u6587\u4ee5\u53ca\u7e41\u4f53\u4e2d\u6587\u3002 \u53e6\u5916\u7ed3\u5e10\u9875\u9762\u53ef\u4ee5\u6839\u636e\u5546\u5bb6\u7684\u9700\u6c42\uff0c\u4f8b\u5982\u53ef\u7528\u7684\u7535\u5b50\u94b1\u5305\u4ee5\u53ca\u8bbe\u8ba1\u548c\u63cf\u8ff0\uff0c\u8fdb\u884c\u914d\u7f6e \u3002 \u5982\u679c\u60a8\u6709\u76f8\u95dc\u660e\u786e\u8981\u6c42\uff0c\u8bf7\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u81f3 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"mailto:technical.support@qfpay.com",children:"technical.support@qfpay.com"})})," \u5bfb\u6c42\u5354\u52a9\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"api\u73af\u5883",children:"API\u73af\u5883"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"\u8bf7\u8bb0\u4f4f\u7acb\u5373\u901a\u8fc7\u5546\u6237\u7ba1\u7406\u7cfb\u7edf\u3001QFPay APP\u6216\u5f00\u653eAPI\u5bf9\u6d4b\u8bd5\u4ea4\u6613\u8fdb\u884c\u9000\u6b3e\u3002"})}),"\n",(0,s.jsx)(t.p,{children:"\u4e0b\u8868\u63cf\u8ff0\u4e86\u6bcf\u4e2a\u533a\u57df\u7684\u57fa\u672c URL\u3002"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u73af\u5883"}),(0,s.jsx)(t.th,{children:"URL"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u7ebf\u4e0a\u6d4b\u8bd5\u73af\u5883"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://test-openapi-hk.qfapi.com/checkstand/#/",children:"https://test-openapi-hk.qfapi.com/checkstand/#/"}),"?"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u751f\u4ea7\u73af\u5883"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://openapi-hk.qfapi.com/checkstand/#/",children:"https://openapi-hk.qfapi.com/checkstand/#/"}),"?"]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u6d41\u7a0b",children:"\u6d41\u7a0b"}),"\n",(0,s.jsxs)(r.A,{href:"/img/flowchart.png",target:"_blank",children:[" ",(0,s.jsx)(t.img,{alt:"shouyintai",src:e(88149).A+"",width:"1593",height:"283"})," "]}),"\n",(0,s.jsx)(t.p,{children:"\u6d88\u8d39\u8005\u6d4f\u89c8\u5546\u6237\u7684\u7f51\u7ad9\u5e76\u7ee7\u7eed\u4ed8\u6b3e\u3002 \u4e00\u65e6\u4ed6\u4eec\u70b9\u51fb\u652f\u4ed8\u6309\u94ae\uff0c\u4ed6\u4eec\u5c06\u88ab\u8f6c\u53d1\u5230 QFPay \u6258\u7ba1\u7684\u6536\u94f6\u53f0\u9875\u9762\u3002 \u5728\u8fd9\u91cc\uff0c\u6d88\u8d39\u8005\u53ef\u4ee5\u627e\u5230\u591a\u79cd\u652f\u4ed8\u65b9\u5f0f\uff0c\u53ef\u5728\u684c\u9762\u6216\u79fb\u52a8\u8bbe\u5907\u4e0a\u7ed3\u8d26\u5e76\u5b8c\u6210\u652f\u4ed8\u3002 \u4ed8\u6b3e\u6210\u529f\u540e\uff0c\u7528\u6237\u5c06\u88ab\u91cd\u5b9a\u5411\u56de\u5546\u5bb6\u7f51\u7ad9\u4ee5\u83b7\u53d6\u201c\u4ed8\u6b3e\u6210\u529f\u901a\u77e5\u201d\u5e76\u7ee7\u7eed\u6d4f\u89c8\u5546\u5e97\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"api\u8acb\u6c42\u53c3\u6578",children:"API\u8acb\u6c42\u53c3\u6578"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"GET https:test-openapi-hk.qfapi.com/checkstand/#/?.."})," ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(t.p,{children:"\u521b\u5efa\u65b0\u7684\u7ed3\u5e10\u8bf7\u6c42\u9700\u8981\u4ee5\u4e0b\u4e3b\u4f53\u53c2\u6570\uff1b"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,s.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,s.jsx)(t.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(t.th,{children:"\u63cf\u8ff0"}),(0,s.jsx)(t.th,{children:"\u8303\u4f8b"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"appcode"}),(0,s.jsx)(t.td,{children:"String(64)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"QFPay \u63d0\u4f9b\u7684API\u51ed\u8bc1"}),(0,s.jsx)(t.td,{children:"A6A49A******************5032"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sign_type"}),(0,s.jsx)(t.td,{children:"String(256)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"SHA256 or MD5, \u5efa\u8baeSHA256"}),(0,s.jsx)(t.td,{children:"sha256"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sign"}),(0,s.jsx)(t.td,{children:"String(128)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u8bf7\u6c42\u7b7e\u540d\u4ee5\u8fdb\u884c\u8ba4\u8bc1"}),(0,s.jsx)(t.td,{children:"3b020a6349646684ebeeb0ec2cd3d1fb"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"paysource"}),(0,s.jsx)(t.td,{children:"String(12)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u7ed3\u5c3e\u5fc5\u987b\u662f _checkout"}),(0,s.jsx)(t.td,{children:"remotepay_checkout"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"txamt"}),(0,s.jsx)(t.td,{children:"Int(11)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u4ed8\u6b3e\u91d1\u989d\uff08\u5355\u4f4d\uff1a\u5206\uff09"}),(0,s.jsx)(t.td,{children:"1099"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"txcurrcd"}),(0,s.jsx)(t.td,{children:"String(3)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u8d27\u5e01\u4ee3\u7801"}),(0,s.jsx)(t.td,{children:"HKD"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"out_trade_no"}),(0,s.jsx)(t.td,{children:"String(128)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u552f\u4e00\u7684\u5916\u90e8\u4ea4\u6613\u53f7"}),(0,s.jsx)(t.td,{children:"202005270001"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"txdtm"}),(0,s.jsx)(t.td,{children:"String(32)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u4e0b\u5355\u65f6\u95f4"}),(0,s.jsxs)(t.td,{children:["2020-06-24 20:04:37, Format: YYYY-MM-DD hh:mm",":ss"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"return_url"}),(0,s.jsx)(t.td,{children:"String(256)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u652f\u4ed8\u6210\u529f\u540e\u7684\u91cd\u5b9a\u5411URL"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://xxx.com/return/success",children:"https://xxx.com/return/success"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"failed_url"}),(0,s.jsx)(t.td,{children:"String(256)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u652f\u4ed8\u5931\u6557\u540e\u7684\u91cd\u5b9a\u5411URL"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://xxx.com/return/failed",children:"https://xxx.com/return/failed"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"notify_url"}),(0,s.jsx)(t.td,{children:"String(256)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u5f02\u6b65\u901a\u77e5URL"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://xxx.com/notify/success",children:"https://xxx.com/notify/success"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mchntid"}),(0,s.jsx)(t.td,{children:"String(16)"}),(0,s.jsx)(t.td,{children:"\u5426"}),(0,s.jsx)(t.td,{children:"QFPay \u4ee3\u7406\u5546\u5546\u6237\u6807\u8bc6\u7b26"}),(0,s.jsx)(t.td,{children:"PAKjVHJmQe"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"goods_name"}),(0,s.jsx)(t.td,{children:"String(64)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u4e0d\u80fd\u6709\u7279\u6b8a\u5b57\u7b26\uff0c\u4e0d\u8d85\u8fc720\u4e2a\u5b57\u6bcd\u6216\u6c49\u5b57\uff08\u9700\u4f20\u5165app\u652f\u4ed8\u53c2\u6570\uff09\u3002 \u5982\u679c\u8981\u5728\u6e05\u7b97\u6587\u4ef6\u4e2d\u663e\u793a\u5546\u6237\u540d\u79f0\uff0c\u5219\u8be5\u53c2\u6570\u5fc5\u987b\u4e3a\u7a7a\u3002"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"txzone"}),(0,s.jsx)(t.td,{children:"String(5)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u65f6\u533a"}),(0,s.jsx)(t.td,{children:"\u8be5\u5b57\u6bb5\u7528\u4e8e\u8bb0\u5f55\u672c\u5730\u4e0b\u5355\u65f6\u95f4, \u9ed8\u8ba4\u4e3a\u5317\u4eac\u65f6\u95f4 +0800."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"udid"}),(0,s.jsx)(t.td,{children:"String(40)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u552f\u4e00\u8a2d\u5099ID"}),(0,s.jsx)(t.td,{children:"0001"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expired_time"}),(0,s.jsx)(t.td,{children:"String(3)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u4e8c\u7ef4\u7801\u8fc7\u671f\u65f6\u95f4"}),(0,s.jsx)(t.td,{children:"\u5355\u4f4d\u4e3a\u5206\u949f\uff0c\u6700\u77ed5\u5206\u949f\uff0c\u6700\u957f120\u5206\u949f\uff0c\u4ec5\u5fae\u4fe1\u652f\u4ed8\u3001\u652f\u4ed8\u5b9d\u3001\u652f\u4ed8\u5b9d\u9999\u6e2f\u652f\u6301\u6b64\u53c2\u6570"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"checkout_expired_time"}),(0,s.jsx)(t.td,{children:"String(3)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u5ba2\u6237\u7aef\u8fc7\u671f\u65f6\u95f4"}),(0,s.jsx)(t.td,{children:"\u5355\u4f4d\u4e3a5\u5206\u949f\uff0c \u65f6\u95f4\u5230\u4e86\u540e\uff0c\u6536\u94f6\u53f0\u9875\u9762\u4f1a\u8df3\u8f6c\u81f3 \u652f\u4ed8\u5931\u8d25\u540e\u7684\u91cd\u5b9a\u5411URL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit_pay"}),(0,s.jsx)(t.td,{children:"String(3)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u7981\u6b62\u4f7f\u7528\u4fe1\u7528\u5361"}),(0,s.jsx)(t.td,{children:"\u53c2\u6570\u503c\u6307\u5b9a\u4e3ano_credit\uff0c\u5373\u7981\u6b62\u4f7f\u7528\u4fe1\u7528\u5361\u652f\u4ed8\uff0c\u4ec5\u5fae\u4fe1\u652f\u4ed8\u652f\u6301\u6b64\u529f\u80fd\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lang"}),(0,s.jsx)(t.td,{children:"String(5)"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"\u754c\u9762\u8bed\u8a00"}),(0,s.jsxs)(t.td,{children:["\u53ef\u80fd\u503c ",(0,s.jsx)("br",{})," zh-hk (\u9999\u6e2f\u7e41\u4f53\u4e2d\u6587) ",(0,s.jsx)("br",{})," zh-cn (\u7b80\u4f53\u4e2d\u6587) ",(0,s.jsx)("br",{})," en (\u82f1\u6587) ",(0,s.jsx)("br",{}),"\u5982\u679c\u7ed3\u5e10\u8bf7\u6c42\u4e2d\u4e0d\u4f20\u9012\u8be5\u53c2\u6570\uff0c\u5219\u7ed3\u5e10\u9875\u9762\u5c06\u4f7f\u7528\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u8bed\u8a00\u3002 \u5982\u679c\u7ed3\u5e10\u8bf7\u6c42\u4e2d\u4f20\u9012\u8be5\u53c2\u6570\uff0c\u5219\u751f\u6210\u7b7e\u540d\u65f6\u4e0d\u5305\u542b\u8be5\u53c2\u6570\u3002"]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u521b\u5efa\u65b0\u8ba2\u5355",children:"\u521b\u5efa\u65b0\u8ba2\u5355"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"\u6bcf\u7b14\u8ba2\u5355\u90fd\u662f\u552f\u4e00\u7684\uff0c\u56e0\u6b64\u5546\u5bb6\u5728\u91cd\u5b9a\u5411\u5230\u6258\u7ba1\u6536\u94f6\u53f0\u9875\u9762\u65f6\u9700\u8981\u521b\u5efa\u552f\u4e00\u7684\u5916\u90e8\u4ea4\u6613\u53f7\u201cout_trade_no\u201d\u3002"})}),"\n",(0,s.jsxs)(t.p,{children:["\u521b\u5efa\u65b0\u7684\u7ed3\u5e10\u8ba2\u5355\uff0c\u5fc5\u987b\u53d1\u9001\u5e26\u6709\u8eab\u4efd\u9a8c\u8bc1\u7b7e\u540d\u7684 GET \u8bf7\u6c42\u3002 \u5bf9\u4e8e\u6b64\u7b7e\u540d\uff0c\u5fc5\u987b\u8fde\u63a5\u4e0a\u8ff0\u53c2\u6570\uff0c\u7136\u540e\u4f7f\u7528 QFPay \u63d0\u4f9b\u7684 app_key \u8fdb\u884c\u54c8\u5e0c\u5904\u7406\u3002 \u5982\u9700 API \u51ed\u8bc1\u6216\u6280\u672f\u652f\u6301\uff0c\u8bf7\u8054\u7cfb ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"mailto:technical.support@qfpay.com",children:"technical.support@qfpay.com"})}),"\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u53f3\u4fa7\u7684\u793a\u4f8b\u8bf4\u660e\u4e86\u7b7e\u540d\u751f\u6210\u7b97\u6cd5\u3002 \u60a8\u8fd8\u53ef\u4ee5\u4e0b\u8f7d ",(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:e(64631).A+"",children:"QFPay Online Checkout Boilerplate"})," \u5e76\u5728\u9ed8\u8ba4\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 HTML\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>checkout</title>\n    <style>\n\na{\n  font-size: 20px;\n}\n    </style>\n</head>\n<body>\n <a id="standard">QFPay Online Checkout</a>\n\n</body>\n<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"><\/script>\n\n<script> \nwindow.onload = function(){\n  let standard = document.getElementById(\'standard\')\n\n  let origin = \'https://test-openapi-hk.qfapi.com/checkstand/#/?\'\n   let obj = {\n    appcode: "CC6FB660837E49F7A675D2**********",\n    goods_name: "remotfpay_checkout_names",\n    out_trade_no: "13322916216626239614",\n    paysource: "remotepay_checkout",\n    return_url: "https://www.baidu.com",\n    failed_url: "https://www.baidu.com",\n    notify_url: "https://www.baidu.com",\n    sign_type: "sha256",\n    txamt: "1",\n    txcurrcd: "HKD",\n    txdtm: "2020-06-28 18:33:20"\n   }\n\n   let api_key = "B3D4CCFD4AB049DCA82C25**********";\n   let params = paramStringify(obj) \n   let sign = sha256(`${params}${api_key}`)\n    standard.setAttribute(\'href\', `${origin}${paramStringify(obj,true)}&sign=${sign}`)\n\n}   \n\nfunction paramStringify(json,flag) {\n      let str = "";\n      let keysArr = Object.keys(json);\n      keysArr.sort().forEach(val => {\n        if (!json[val]) return;\n        str += `${val}=${flag ? encodeURIComponent(json[val]) : json[val]}&`;\n      });\n      return str.slice(0, -1);\n    }\n\n<\/script>\n</html>\n'})})]})}function o(n={}){const{wrapper:t}={...(0,d.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},64631:(n,t,e)=>{e.d(t,{A:()=>s});const s=e.p+"assets/files/qfpay_online_checkout-5b6e4fc6bf853e6f21d542c4396f994f.html"},88149:(n,t,e)=>{e.d(t,{A:()=>s});const s=e.p+"assets/images/flowchart-2bbc686fc848e2f7a0b9cd717ca81f00.png"},20942:(n,t,e)=>{e.d(t,{A:()=>s});const s=e.p+"assets/images/shouyintai-942103bc743d931043d59a643d748744.png"},28453:(n,t,e)=>{e.d(t,{R:()=>i,x:()=>c});var s=e(96540);const d={},r=s.createContext(d);function i(n){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);