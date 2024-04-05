"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[9215],{54033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var l=n(74848),s=n(28453),r=(n(11470),n(19365),n(28774));const i={},d="\u5fae\u4fe1in-APP\u652f\u4ed8",c={id:"online-shop/wechat/wechat-in-app-payments",title:"\u5fae\u4fe1in-APP\u652f\u4ed8",description:"WeChat APP Payment process-flow",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-online-shop/06-wechat/05-wechat-in-app-payments.md",sourceDirName:"03-online-shop/06-wechat",slug:"/online-shop/wechat/wechat-in-app-payments",permalink:"/docs/v2/zh-Hans/docs/online-shop/wechat/wechat-in-app-payments",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u652f\u4ed8",permalink:"/docs/v2/zh-Hans/docs/online-shop/wechat/wechat-mini-programs"},next:{title:"Alipay",permalink:"/docs/v2/zh-Hans/docs/category/alipay"}},a={},h=[{value:"HTTP \u8bf7\u6c42",id:"http-\u8bf7\u6c42",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:3},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570",level:3}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"\u5fae\u4fe1in-app\u652f\u4ed8",children:"\u5fae\u4fe1in-APP\u652f\u4ed8"}),"\n",(0,l.jsx)(r.A,{href:"/img/wechat-in-app.png",target:"_blank",children:(0,l.jsx)(t.img,{alt:"WeChat APP Payment process-flow",src:n(32225).A+"",width:"739",height:"796"})}),"\n",(0,l.jsx)(t.h3,{id:"http-\u8bf7\u6c42",children:"HTTP \u8bf7\u6c42"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"POST ../trade/v1/payment"}),"\n",(0,l.jsx)(t.code,{children:"PayType: 800210"})]}),"\n",(0,l.jsxs)(t.p,{children:["\u5fae\u4fe1\u5e94\u7528\u5185\u652f\u4ed8\u9700\u8981\u5728\u5fae\u4fe1\u5f00\u653e\u5e73\u53f0\u6b63\u5f0f\u7533\u8bf7\u3002 \u5546\u6237\u5fc5\u987b\u6ce8\u518c\u8d26\u6237\u548cAPP\uff0c\u7136\u540e\u6536\u5230\u201cappid\u201d\u624d\u80fd\u8fdb\u884c\u652f\u4ed8\u3002 \u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003\u5b98\u65b9\n",(0,l.jsx)(t.a,{href:"https://pay.weixin.qq.com/wiki/doc/api/wxpay/en/pay/In-AppPay/chapter6_2.shtml#menu1",children:"Wechat documentation"}),"."]}),"\n",(0,l.jsx)(t.p,{children:"\u5546\u6237\u53ef\u9009\u62e9\u5f00\u901a\u5fae\u4fe1\u5b9e\u540d\u8ba4\u8bc1\u3002 \u76ee\u524d\u5b9e\u540d\u8ba4\u8bc1\u4ec5\u9002\u7528\u4e8e\u4e2d\u56fd\u5927\u9646\u516c\u6c11\uff0c\u5305\u62ec\u771f\u5b9e\u59d3\u540d\u548c\u8eab\u4efd\u8bc1\u53f7\u7801\u3002 \u5982\u679c\u63d0\u4f9b\u8eab\u4efd\u8bc1\u660e\uff0c\u4ed8\u6b3e\u4eba\u7684\u94b1\u5305\u4fe1\u606f\uff08\u4f8b\u5982\u8fde\u63a5\u7684\u94f6\u884c\u5361\uff09\u5fc5\u987b\u4e0e\u5546\u5bb6\u63d0\u4f9b\u7684\u6570\u636e\u76f8\u540c\u3002 \u5982\u679c\u5ba2\u6237\u5c1a\u672a\u5c06\u5fae\u4fe1\u8d26\u6237\u7ed1\u5b9a\u94f6\u884c\u5361\uff0c\u4ecd\u53ef\u8fdb\u884c\u4ed8\u6b3e\u3002"}),"\n",(0,l.jsxs)(t.p,{children:["\u4e0b\u8f7d\u5fae\u4fe1SDK\u8bf7\u53c2\u8003\u8fd9\u91cc ",(0,l.jsx)(t.a,{href:"https://developers.weixin.qq.com/doc/oplatform/Downloads/iOS_Resource.html",children:"\u94fe\u63a5"}),"."]}),"\n",(0,l.jsx)(t.h3,{id:"\u8bf7\u6c42\u53c2\u6570",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-plaintext",children:"\n\u8bf7\u6c42\u6b63\u6587\uff1a\n\n{\n  goods_info=test_app&goods_name=qfpay&out_trade_no=O5DNgEgL1XpvbvQSfPhN&pay_type=800210&txamt=10&txcurrcd=HKD&txdtm=2019-09-13 04:53:03&udid=AA\n}\n\n"})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"\u4e0a\u9762\u7684\u547d\u4ee4\u8fd4\u56de JSON \u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{\n  "sysdtm": "2019-09-13 12:53:04",\n  "paydtm": "2019-09-13 12:53:04",\n  "txcurrcd": "HKD",\n  "respmsg": "",    \n  "pay_params": \n        {\n        "package": "Sign=WXPay",\n        "timestamp": 1568350384,\n        "sign": "XwFjohEKWdkhhT4ueg7BxeDn8tT9LcqoZYdXzifTMYyDGe3/tRchpii6vWgOn21tPSaAtqo766gvifXgDEOwR+ILKN8t97r624IJlrH0EkvSUSLh9E/cga9scXGVy0jPWHM/oVvVzJIvXew79CwZFCNTSJok2KmpSm9X9oPg7PGXbqvNMHltf+YlIOsuiz391qVmFtTE5A/cpA50+06T7iW8GYsOJQTTJed75VY+aSzNo5C6ju6WSgJKpAJJ0ocl+ONtmOp6GLVBSQXaMC4PitQcebcoP2J6fFgQ+YcPwHXasCYEnn4LaFN7zT/AjGg3E3gdCx3ksGNBOazYBRVz+g==",\n        "partnerid": "316525492",\n        "appid": "wx3c6896fa9b351f2a",\n        "prepayid": "wx131253044253463a81dc336e1254149882",\n        "noncestr": "7786db42d9a245c2b1cfc717ac59376e"\n        },\n  "pay_type": "800210",\n  "cardcd": "",    \n  "udid": "AA",\n  "txdtm": "2019-09-13 04:53:03",\n  "txamt": "10",\n  "resperr": "\u4ea4\u6613\u6210\u529f",\n  "out_trade_no": "O5DNgEgL1XpvbvQSfPhN",\n  "syssn": "20190913152100020001567741",   \n  "respcd": "0000",\n  "chnlsn": ""\n}\n'})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u540d\u79f0"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u586b"}),(0,l.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,l.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5546\u6237ID"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"mchid"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"\u552f\u4e00\u7684\u5546\u6237ID\u662f\u7531QFPay\u5728\u5546\u6237\u5165\u7f51\u8fc7\u7a0b\u4e2d\u521b\u5efa\u7684\u3002"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5916\u90e8\u8ba2\u5355\u7f16\u53f7"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"out_trade_no"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"\u5f00\u53d1\u8005\u5e73\u53f0\u4ea4\u6613\u8ba2\u5355\u7f16\u53f7"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u4ea4\u6613\u91d1\u989d"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txamt"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"\u5b9e\u9645\u6d88\u8d39\u91d1\u989d\uff0c\u6700\u9ad8\u62b5\u6263\u91d1\u989d\u4e0d\u80fd\u8d85\u8fc7\u51bb\u7ed3\u8d44\u91d1"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u8d27\u5e01"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txcurrcd"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,l.jsx)(t.td,{children:"String(3)"}),(0,l.jsx)(t.td,{children:"\u4ea4\u6613\u8d27\u5e01\u3002 \u67e5\u770b\u8d27\u5e01\u8868\u4ee5\u83b7\u53d6\u53ef\u7528\u8d27\u5e01\u7684\u5b8c\u6574\u5217\u8868"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"RMB \u6807\u7b7e"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"rmb_tag"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,l.jsx)(t.td,{children:"String(1)"}),(0,l.jsx)(t.td,{children:"\u9999\u6e2f\u5fae\u4fe1\u652f\u4ed8\u4f7f\u7528\u201crmb_tag\u201d=Y \u548c\u201ctxcurrcd\u201d=CNY \u6765\u8868\u793a\u4ea4\u6613\u5e01\u79cd\u4e3a\u4eba\u6c11\u5e01\u3002"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u4ea4\u6613\u8bf7\u6c42\u65f6\u95f4"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txdtm"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsxs)(t.td,{children:["\u683c\u5f0f: YYYY-MM-DD hh:mm",":ss"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u8bbe\u5907ID"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"udid"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"\u5fc5\u987b\u662f\u552f\u4e00\u7684"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u65f6\u533a"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txzone"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"\u7528\u4e8e\u8bb0\u5f55\u672c\u5730\u8ba2\u5355\u65f6\u95f4\u3002 \u9ed8\u8ba4\u4e3a\u5317\u4eac\u65f6\u95f4GMT+8\uff08+0800\uff09"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u91cd\u5b9a\u5411\u7f51\u5740"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"return_url"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsxs)(t.td,{children:["\u4ed8\u6b3e\u6210\u529f\u540e\u91cd\u5b9a\u5411\u81f3\u5730\u5740\u3002 \u4e3a GrabPay Online \u63d0\u4ea4\u7684\u5f3a\u5236\u53c2\u6570\u3002 \u652f\u4ed8\u5b9d WAP \u5c06 ",(0,l.jsx)(t.code,{children:"return_url"})," \u9650\u5236\u4e3a\u6700\u591a 200 \u4e2a\u5b57\u7b26\u3002"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6269\u5c55\u5ba2\u6237\u4fe1\u606f"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"extend_info"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,l.jsx)(t.td,{children:"Object"}),(0,l.jsxs)(t.td,{children:["\u5b9e\u540d\u5ba2\u6237\u8eab\u4efd\u8bc6\u522b\u3002 \u8be5\u53c2\u6570\u76ee\u524d\u4ec5\u9002\u7528\u4e8e\u4e2d\u56fd\u5927\u9646\u516c\u6c11\uff0c\u5e76\u4e14\u9700\u8981\u9488\u5bf9\u6240\u9009\u7684",(0,l.jsx)(t.a,{href:"../../preparation/paycode#%E6%94%AF%E4%BB%98%E7%B1%BB%E5%9E%8B",children:"PayType"}),"\u4f7f\u7528\u5fae\u4fe1\u663e\u5f0f\u6fc0\u6d3b\u3002 \u53c2\u6570\u201cuser_creid\u201d\u4e2d\u5305\u542b\u6d88\u8d39\u8005\u7684",(0,l.jsx)(t.strong,{children:"\u8eab\u4efd\u8bc1\u53f7\u7801"}),"\uff0c\u201cuser_truename\u201d\u4e2d\u5fc5\u987b\u63d0\u4f9b\u7f16\u7801\u5f62\u5f0f\u6216\u6c49\u5b57\u4e66\u5199\u7684\u4ed8\u6b3e\u4eba",(0,l.jsx)(t.strong,{children:"\u771f\u5b9e\u59d3\u540d"}),'\u3002 \u4e00\u4e2a\u4f8b\u5b50\u5982\u4e0b\u6240\u793a\uff1b extend_info = \'{"user_creid":"430067798868676871","user_truename":"\\\\u5c0f\\\\u6797"}\'']})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"\u54cd\u5e94\u53c2\u6570",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7c7b\u578b"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u540d\u5b57"}),(0,l.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"syssn"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(40)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"QFPay \u4ea4\u6613\u7f16\u53f7"}),(0,l.jsx)(t.td,{children:"QFPay \u4ea4\u6613\u7f16\u53f7, \u652f\u4ed8\u5b8c\u6210\u540e\u7cfb\u7edf\u8fd4\u56de"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"orig_syssn"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(40)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5916\u90e8\u4ea4\u6613\u7f16\u53f7"}),(0,l.jsx)(t.td,{children:"\u5f00\u53d1\u8005\u5e73\u53f0\u4ea4\u6613\u7f16\u53f7"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txdtm"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(20)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u4ea4\u6613\u8bf7\u6c42\u65f6\u95f4"}),(0,l.jsxs)(t.td,{children:["\u683c\u5f0f: YYYY-MM-DD hh:mm",":ss"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txamt"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Int(11)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u4ea4\u6613\u91d1\u989d"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"sysdtm"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(20)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u7cfb\u7edf\u4ea4\u6613\u65f6\u95f4"}),(0,l.jsxs)(t.td,{children:["\u683c\u5f0f: YYYY-MM-DD hh:mm",":ss"," ",(0,l.jsx)("br",{})," \u8be5\u53c2\u6570\u503c\u7528\u4f5c\u6e05\u7b97\u622a\u6b62\u65f6\u95f4\u3002"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"respcd"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(4)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u8fd4\u56de\u7801"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"respmsg"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(128)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u4fe1\u606f\u8bf4\u660e"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"resperr"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(128)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u63cf\u8ff0\u9519\u8bef"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"cardcd"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5361\u53f7"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txcurrcd"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u8d27\u5e01"}),(0,l.jsxs)(t.td,{children:["\u4ea4\u6613\u8d27\u5e01\u3002 \u67e5\u770b",(0,l.jsx)(t.a,{href:"../../preparation/paycode#%E6%94%AF%E4%BB%98%E5%B8%81%E7%A7%8D",children:"\u8d27\u5e01"})," \u8868\u4ee5\u83b7\u53d6\u53ef\u7528\u8d27\u5e01\u7684\u5b8c\u6574\u5217\u8868"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"pay_params"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u652f\u4ed8\u6570\u636e"}),(0,l.jsx)(t.td,{children:"\u8c03\u7528\u5fae\u4fe1SDK\u7684\u652f\u4ed8\u6570\u636e"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var l=n(34164);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var l=n(96540),s=n(34164),r=n(23104),i=n(56347),d=n(205),c=n(57485),a=n(31682),h=n(89466);function o(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return o(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:s}}=e;return{value:t,label:n,attributes:l,default:s}}))}(n);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=x(e),[i,c]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[a,o]=j({queryString:n,groupId:s}),[f,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,h.Dv)(n);return[s,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),g=(()=>{const e=a??f;return u({value:e,tabValues:r})?e:null})();(0,d.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),p(e)}),[o,p,r]),tabValues:r}}var p=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function m(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,r.a_)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),s=d[n].value;s!==l&&(a(t),i(s))},o=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:d.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>c.push(e),onKeyDown:o,onClick:h,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function A(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function b(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,y.jsx)(m,{...e,...t}),(0,y.jsx)(A,{...e,...t})]})}function v(e){const t=(0,p.A)();return(0,y.jsx)(b,{...e,children:o(e.children)},String(t))}},32225:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/wechat-in-app-5fd3c2ed5f49ed3407cf9fba2d1267a5.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var l=n(96540);const s={},r=l.createContext(s);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);