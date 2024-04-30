"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[2537],{42776:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var r=t(74848),a=t(28453),s=t(11470),i=t(19365),d=t(28774);const l={},c="\u7b80\u4ecb",o={id:"preparation/introduction",title:"\u7b80\u4ecb",description:"\u6b22\u8fce\u67e5\u9605 QFPay \u5f00\u653eAPI\u6587\u6863\u5e73\u53f0. \u9996\u5148, \u8bf7\u9605\u8bfb\u4ee5\u4e0b\u5f00\u53d1\u4eba\u5458\u63a5\u5165\u89c4\u8303.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/01-preparation/01-introduction.md",sourceDirName:"01-preparation",slug:"/preparation/introduction",permalink:"/docs/v2/zh-Hans/docs/preparation/introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"Preparation",permalink:"/docs/v2/zh-Hans/docs/category/preparation"},next:{title:"\u652f\u4ed8\u65b9\u5f0f\u4ee3\u7801",permalink:"/docs/v2/zh-Hans/docs/preparation/paycode"}},u={},h=[{value:"\u5f00\u53d1\u4eba\u5458\u63a5\u5165\u89c4\u8303",id:"\u5f00\u53d1\u4eba\u5458\u63a5\u5165\u89c4\u8303",level:2},{value:"\u7f16\u7801\u673a\u5236",id:"\u7f16\u7801\u673a\u5236",level:3},{value:"\u5f00\u53d1\u73af\u5883",id:"\u5f00\u53d1\u73af\u5883",level:2},{value:"API\u73af\u5883",id:"api\u73af\u5883",level:3},{value:"\u7b7e\u540d\u673a\u5236",id:"\u7b7e\u540d\u673a\u5236",level:2},{value:"\u8bf7\u6c42\u63cf\u8ff0",id:"\u8bf7\u6c42\u63cf\u8ff0",level:3},{value:"\u5728\u8bf7\u6c42API\u65f6HTTP\u5934\u90e8\u6240\u9700\u7684\u53c2\u6570\u914d\u7f6e",id:"\u5728\u8bf7\u6c42api\u65f6http\u5934\u90e8\u6240\u9700\u7684\u53c2\u6570\u914d\u7f6e",level:3}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,r.jsxs)(n.p,{children:["\u6b22\u8fce\u67e5\u9605 ",(0,r.jsx)(n.strong,{children:"QFPay \u5f00\u653eAPI\u6587\u6863\u5e73\u53f0"}),". \u9996\u5148, \u8bf7\u9605\u8bfb\u4ee5\u4e0b",(0,r.jsx)(n.a,{href:"#%E5%BC%80%E5%8F%91%E4%BA%BA%E5%91%98%E6%8E%A5%E5%85%A5%E8%A7%84%E8%8C%83",children:"\u5f00\u53d1\u4eba\u5458\u63a5\u5165\u89c4\u8303"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u60f3\u8981\u5728",(0,r.jsx)(d.A,{href:"https://www.postman.com/",children:"Postman"}),"\u5feb\u901f\u6d4b\u8bd5\u652f\u4ed8\u529f\u80fd, \u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957\u751f\u6210\u7b7e\u540d\u7684\u9884\u8bf7\u6c42\u811a\u672c, \u60a8\u53ef\u4ee5\u4ece",(0,r.jsx)(n.a,{href:"/docs/preparation/paycode#%E6%94%AF%E4%BB%98API%E7%AB%AF%E7%82%B9",children:"\u8fd9\u91cc"}),"\u4e0b\u8f7d\u8be5\u6587\u4ef6."]}),"\n",(0,r.jsx)(n.h2,{id:"\u5f00\u53d1\u4eba\u5458\u63a5\u5165\u89c4\u8303",children:"\u5f00\u53d1\u4eba\u5458\u63a5\u5165\u89c4\u8303"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5df2\u7ecf\u88ab\u63d0\u4f9b ",(0,r.jsx)(n.code,{children:"mchid"})," , \u9664\u7279\u6b8a\u60c5\u51b5\u4e0b\u5728\u547c\u53ebAPI\u65f6\u5fc5\u987b\u63d0\u4ea4 ",(0,r.jsx)(n.code,{children:"mchid"}),". \u6362\u800c\u8a00\u4e4b, \u5982\u679c\u5e76\u672a\u88ab\u63d0\u4f9b ",(0,r.jsx)(n.code,{children:"mchid"}),", \u5546\u6237\u65e0\u9700\u5728API\u8bf7\u6c42\u4e2d\u4f20\u9012\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"mchid"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u4f7f\u7528QFPay \u5e38\u7528API, \u60a8\u5fc5\u987b\u62e5\u6709\u5df2\u6fc0\u6d3b\u7684API\u8bc1\u4e66, \u5305\u62ec\u4e00\u4e2a",(0,r.jsx)(n.strong,{children:"app_code"}),"\u4ee5\u53ca",(0,r.jsx)(n.strong,{children:"client_key"}),".\n\u5982\u9047\u5230\u6280\u672f\u95ee\u9898,\u8bf7\u8054\u7cfb",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"mailto:technical.support@qfpay.com",children:"technical.support@qfpay.com"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u6d4b\u8bd5\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u6d4b\u8bd5, \u5f00\u53d1\u4ee5\u53ca\u751f\u4ea7\u8fd0\u884c\u73af\u5883."}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff1a\u5728\u6c99\u76d2\u73af\u5883\u8fdb\u884c\u7684\u6d4b\u8bd5\u4ea4\u6613",(0,r.jsx)(n.strong,{children:"\u4e0d\u4f1a\u88ab\u7ed3\u7b97"}),". \u56e0\u6b64\u8bf7\u52a1\u5fc5\u4f7f\u7528\u5c0f\u7b14\u91d1\u989d\u6d4b\u8bd5\u5e76\u5728\u539f\u59cb\u4ea4\u6613\u65e5\u5f53\u5929\u4f7f\u7528\u9000\u6b3e\u7ec8\u7aef\u6216\u662f\u5546\u6237APP\u8fdb\u884c\u9000\u6b3e."]}),"\n",(0,r.jsxs)(n.p,{children:["\u6bcf\u4e2a\u5546\u6237\u5c06\u4f1a\u88ab\u63d0\u4f9b\u4e00\u7cfb\u5217\u6709\u6216\u6ca1\u6709 ",(0,r.jsx)(n.code,{children:"mchid"})," \u7684 ",(0,r.jsx)(n.code,{children:"app_code"})," \u548c ",(0,r.jsx)(n.code,{children:"client_key"})," , \u62e5\u6709\u591a\u4e2a\u5206\u652f\u7684\u5546\u5bb6\u901a\u5e38\u4f1a\u540c\u65f6\u62e5\u6709 ",(0,r.jsx)(n.code,{children:"app_code"})," , ",(0,r.jsx)(n.code,{children:"client_key"})," \u548c ",(0,r.jsx)(n.code,{children:"mchid"}),".\u7ecf\u8fc7\u54c8\u5e0c\u7f16\u7801 (Hash encoded) \u7684 ",(0,r.jsx)(n.code,{children:"mchid"})," \u88ab\u7528\u4f5c\u8fa8\u522b\u5546\u5e97\u548c\u7f51\u5e97.\u9664\u6b64\u4e4b\u5916\u53ea\u6709 ",(0,r.jsx)(n.code,{children:"app_code"})," \u548c ",(0,r.jsx)(n.code,{children:"client_key"})," \u4f1a\u88ab\u63d0\u4f9b."]}),"\n",(0,r.jsx)(n.h3,{id:"\u7f16\u7801\u673a\u5236",children:"\u7f16\u7801\u673a\u5236"}),"\n",(0,r.jsxs)(n.p,{children:["\u6240\u6709\u4eceAPI\u8fd4\u56de\u7684\u53c2\u6570\u5982\u65e0\u7279\u522b\u8bf4\u660e\u5c06\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"UTF-8"})," \u7f16\u7801."]}),"\n",(0,r.jsx)(n.h2,{id:"\u5f00\u53d1\u73af\u5883",children:"\u5f00\u53d1\u73af\u5883"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"\u8bf7\u8c28\u8bb0\u7acb\u5373\u5c06\u5728\u6d4b\u8bd5\u73af\u5883\u8fdb\u884c\u7684\u4ea4\u6613\u9000\u6b3e"})}),"\n",(0,r.jsx)(n.h3,{id:"api\u73af\u5883",children:"API\u73af\u5883"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0b\u8868\u63cf\u8ff0\u4e86\u5bf9\u63a5\u6bcf\u4e2a\u73af\u5883\u7684",(0,r.jsx)(n.strong,{children:"\u57fa\u672cURL"}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u73af\u5883\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u73af\u5883\u5bf9\u5e94URL"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6c99\u76d2\u73af\u5883 (\u53ea\u7528\u4e8e\u6a21\u62df\u4fe1\u7528\u5361)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://openapi-int.qfapi.com",children:"https://openapi-int.qfapi.com"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u7ebf\u4e0a\u6d4b\u8bd5\u73af\u5883"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://test-openapi-hk.qfapi.com",children:"https://test-openapi-hk.qfapi.com"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u751f\u4ea7\u73af\u5883"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://openapi-hk.qfapi.com",children:"https://openapi-hk.qfapi.com"})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u7b7e\u540d\u673a\u5236",children:"\u7b7e\u540d\u673a\u5236"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u5982\u65e0\u7279\u522b\u8981\u6c42,\u5728HTTP\u5934\u90e8\u4e00\u5b9a\u8981\u5728 ",(0,r.jsx)(n.code,{children:"X-QF-SIGN"})," \u4e2d\u63d0\u4ea4\u7b7e\u540d"]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6b65\u9aa41:"})," \u6839\u636e\u53c2\u6570\u540d\u79f0\u5347\u5e8f\u6392\u5e8f\u6240\u6709\u53c2\u6570"]}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\u5217\u8868: abc=value1 bcd=value2 bad=value3\n\u6392\u5e8f\u7ed3\u679c: abc=value1 bad=value3 bcd=value2"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6b65\u9aa42:"})," \u4ee5&\u4f5c\u4e3a\u5206\u9694\u7b26\u62fc\u63a5\u6240\u6709\u53c2\u6570,\u83b7\u5f97\u7528\u4e8e\u7b7e\u540d\u7684\u5b57\u7b26\u4e32"]}),"\n",(0,r.jsx)(n.p,{children:"abc=value1&bad=value3&bcd=value2"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6b65\u9aa43:"})," \u5728\u5b57\u7b26\u4e32\u7684\u672b\u5c3e\u62fc\u63a5QFPay \u7684",(0,r.jsx)(n.code,{children:"client_key"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"abc=value1&bad=value3&bcd=value2Key"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6b65\u9aa44:"})," \u4f7f\u7528 MD5 \u6216 SHA256 \u52a0\u5bc6\u7b2c\u4e09\u6b65\u5f97\u5230\u7684\u5b57\u7b26\u4e32, \u63a8\u8350\u4f7f\u7528 SHA256."]}),"\n",(0,r.jsx)(n.p,{children:"MD5(abc=value1&bad=value3&bcd=value2Key)\nHASH(\u201cSHA256\u201d, abc=value1&bad=value3&bcd=value2Key)"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6b65\u9aa45:"})," \u4f7f\u7528\u7b7e\u540d\u8bf7\u6c42API"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u7b7e\u540d\u7ed3\u679c\uff08\u5bc6\u6587\uff09\u4fdd\u5b58\u5230http\u8bf7\u6c42\u5934\u90e8\u7684",(0,r.jsx)(n.code,{children:"X-QF-SIGN"}),"\u5b57\u6bb5\u4e2d\uff1b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"For code instructions select Python, Java, Node.js or PHP with the tabs below.\n"})}),"\n",(0,r.jsxs)(s.A,{groupId:"signature-generation",children:[(0,r.jsx)(i.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n# Body payload\ntxamt = '10' # In USD,EUR,etc. Cent\ntxcurrcd = 'HKD'\npay_type = '800101' # Alipay CPM = 800108 , MPM = 800101\nauth_code='283854702356157409' #CPM only\nout_trade_no = random_string\ntxdtm = current_time\ngoods_name = 'test1'   \nauth_code = '280438849930815813'\nkey = client_key\nmchid = 'ZaMVg*****' # ID is provided during merchant onboarding\n\n\n#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'auth_code': auth_code, 'mchid': mchid}\ndata ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'mchid': mchid}\n\n\nr = requests.post(environment+\"/trade/v1/payment\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(make_req_sign(data, key))\n\n"})})}),(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'/* \nThis class is the utility for QFPay Payment API. \nNote:This is just an example.\ngetMd5Value:\nAfter do the string manipulation, like:abc=value&bad=value&bcd=valueKey\nThis method generates MD5 signature using hexadecimal format.\ngetDataString:\nThis method pass in with the map, and generate the string like:abc=value&bad=value&bcd=value.\n*/\npublic class QFPayUtils {\n    \n    public static String getMd5Value(String input) {\n        try {\n            java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");\n            byte[] array = md.digest(input.getBytes( "UTF-8" ));\n            StringBuffer sb = new StringBuffer();\n            for (int i = 0; i < array.length; i++) {\n                sb.append( String.format( "%02x", array[i]));\n            }\n            return sb.toString().toUpperCase();\n        } catch ( NoSuchAlgorithmException | UnsupportedEncodingException e) {\n            return null;\n        }\n    }\n   \n    public static <T> String getDataString(Map resultMap) {\n        Map<String, String> map = new TreeMap<String, String>(\n                new Comparator<String>() {\n                    public int compare(String obj1, String obj2) {\n                        return obj1.compareTo(obj2);\n                    }\n                });\n\n        Iterator<Map.Entry<String, String>> it = resultMap.entrySet().iterator();\n        while (it.hasNext()) {\n            Map.Entry<String, String> entry = it.next();\n            map.put(entry.getKey(), entry.getValue());\n        }\n\n        StringBuilder sb = new StringBuilder();\n        it = map.entrySet().iterator();\n        while (it.hasNext()) {\n            Map.Entry<String, String> entry = it.next();\n            sb.append(entry.getKey()+"="+entry.getValue()+"&");\n        }\n        return sb.deleteCharAt(sb.length() - 1).toString();\n    }\n\n\n}\n'})})}),(0,r.jsx)(i.A,{value:"javascript",label:"Javascript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Enter Client Credentials\nconst environment = 'https://test-openapi-hk.qfapi.com'\nconst app_code = 'D5589D2A1F2E42A9A60C37**********'\nconst client_key = '0E32A59A8B454940A2FF39*********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\nvar tradenumber = String(Math.round(Math.random() * 1000000000))\nconsole.log(tradenumber)\n\nvar payload = {\n'txamt': '10', // In USD,EUR,etc. Cent\n'txcurrcd': 'HKD',\n'pay_type': '800101', // Alipay CPM = 800108 , MPM = 800101\n'out_trade_no': tradenumber,\n'txdtm': dateTime,\n'mchid': 'ZaMVg*****'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\n  ordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n"})})}),(0,r.jsx)(i.A,{value:"php",label:"Php",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\nob_start();\nfunction GetRandStr($length){\n    $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n    $len=strlen($str)-1;\n    $randstr='';\n    for($i=0;$i<$length;$i++){\n        $num=mt_rand(0,$len);\n        $randstr .= $str[$num];\n    }\n    return $randstr;\n}\n$url = 'https://test-openapi-hk.qfapi.com';\n$api_type = '/trade/v1/payment';\n$pay_type = '800101';\n//$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay\n$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay\n$now_time = date(\"Y-m-d H:i:s\"); //Get the current date-time  \n\n$fields_string = '';\n$fields = array(\n    //'mchid' => urlencode($mchid),\n    'pay_type' => urlencode($pay_type),\n    'out_trade_no' => urlencode(GetRandStr(20)),\n    'txcurrcd' => urlencode('HKD'),\n    'txamt' => urlencode(2200),\n    'txdtm' => $now_time\n);\nksort($fields); //Sort parameters in ascending order from A to Z\nprint_r($fields);\n\nforeach($fields as $key=>$value) { \n    $fields_string .= $key.'='.$value.'&' ;\n}\n$fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);\n\n$sign = strtoupper(md5($fields_string . $app_key));\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e0a\u8ff0\u6307\u4ee4\u4f1a\u8fd4\u56de\u7ed3\u6784\u5982\u4e0b\u7684JSON\u4ee3\u7801:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"B3B251B202801388BE4AC8E5537B81B1"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u8bf7\u6c42\u63cf\u8ff0",children:"\u8bf7\u6c42\u63cf\u8ff0"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"API\u5c06\u4f1a\u8fd4\u56deJSON\u683c\u5f0f\u7684\u54cd\u5e94\u5185\u5bb9.\u6211\u4eec\u63a8\u8350\u5f00\u53d1\u8005\u9a8c\u8bc1\u54cd\u5e94\u5934\u90e8\u7684\u7b7e\u540d\u4ee5\u786e\u4fdd\u6d88\u606f\u7684\u5b8c\u6574\u6027"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Character"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"UTF-8"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Method"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"POST/ GET"})," (\u89c6\u5b9e\u9645API\u529f\u80fd\u800c\u5b9a)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Content-type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"application/x-www-form-urlencoded"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u5728\u8bf7\u6c42api\u65f6http\u5934\u90e8\u6240\u9700\u7684\u53c2\u6570\u914d\u7f6e",children:"\u5728\u8bf7\u6c42API\u65f6HTTP\u5934\u90e8\u6240\u9700\u7684\u53c2\u6570\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X-QF-APPCODE"})}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsxs)(n.td,{children:["\u5206\u914d\u7ed9\u5f00\u53d1\u8005\u7684",(0,r.jsx)(n.code,{children:"app_code"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X-QF-SIGN"})}),(0,r.jsx)(n.td,{children:"\u662f"}),(0,r.jsx)(n.td,{children:"\u6309\u7167\u7b7e\u540d\u7b97\u6cd5\u751f\u6210\u7684\u7b7e\u540d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X-QF-SIGNTYPE"})}),(0,r.jsx)(n.td,{children:"\u5426"}),(0,r.jsxs)(n.td,{children:["\u751f\u6210\u7b7e\u540d\u7684\u7b97\u6cd5. \u5982\u679c\u4f7f\u7528\u4e86 SHA256 , \u5f00\u53d1\u8005\u5fc5\u987b\u4f20",(0,r.jsx)(n.code,{children:"SHA256"}),",\u4e3a\u7a7a\u9ed8\u8ba4",(0,r.jsx)(n.code,{children:"MD5"}),"."]})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>_});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),d=t(205),l=t(57485),c=t(31682),o=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=x({queryString:t,groupId:a}),[j,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,o.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=c??j;return p({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),o=e=>{const n=e.currentTarget,t=l.indexOf(n),a=d[t].value;a!==r&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:d.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:o,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=j(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,y.jsx)(b,{...e,...n}),(0,y.jsx)(f,{...e,...n})]})}function _(e){const n=(0,m.A)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);