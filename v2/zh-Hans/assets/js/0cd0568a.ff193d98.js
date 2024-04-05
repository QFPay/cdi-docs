"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[1400],{64483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var r=n(74848),a=n(28453),s=n(11470),l=n(19365),i=n(28774);const d={},o="\u6b63\u626b\u652f\u4ed8",c={id:"in-store/MPM",title:"\u6b63\u626b\u652f\u4ed8",description:"MPM process-flow",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/02-in-store/01-MPM.md",sourceDirName:"02-in-store",slug:"/in-store/MPM",permalink:"/docs/v2/zh-Hans/docs/in-store/MPM",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"In-Store",permalink:"/docs/v2/zh-Hans/docs/category/in-store"},next:{title:"\u53cd\u626b\u652f\u4ed8",permalink:"/docs/v2/zh-Hans/docs/in-store/CPM"}},u={},p=[{value:"\u6b63\u626b\u652f\u4ed8API\u8bf7\u6c42",id:"\u6b63\u626b\u652f\u4ed8api\u8bf7\u6c42",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570",level:2}];function h(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u6b63\u626b\u652f\u4ed8",children:"\u6b63\u626b\u652f\u4ed8"}),"\n",(0,r.jsx)(i.A,{href:"/img/mpm_process.jpg",target:"_blank",children:(0,r.jsx)(t.img,{alt:"MPM process-flow",src:n(82555).A+"",width:"1531",height:"590"})}),"\n",(0,r.jsx)(t.h2,{id:"\u6b63\u626b\u652f\u4ed8api\u8bf7\u6c42",children:"\u6b63\u626b\u652f\u4ed8API\u8bf7\u6c42"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"\u8bf7\u6c42\u5934\u90e8:\n\n{\n  Content-Type: application/x-www-form-urlencoded; \n  charset=UTF-8,\n  Content-Length: 218,\n  Chunked: false, \n  X-QF-APPCODE: A6A49A66B4C********94EA95032,\n  X-QF-SIGN: 3b020a6349646684ebeeb0ec2cd3d1fb\n}\n\n\u8bf7\u6c42\u672c\u4f53:\n\n{\n  expired_time=10&goods_name=qfpay&limit_pay=no_credit&mchid=R1zQrTdJnn&out_trade_no=Native20190722145741431794b8d1&pay_type=800201&txamt=20&txcurrcd=HKD&txdtm=2019-07-22 14:57:42&udid=AA\n}\n"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"#coding=utf8\nimport urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib\nimport requests\nfrom hashids import Hashids\nimport datetime\nimport string\nimport random\n\n# Enter Client Credentials\nenvironment = 'https://test-openapi-hk.qfapi.com'\napp_code = 'FADB8A87E0674012979F5443AA81ECF1'\nclient_key = 'F644B1389AD24C25BEFE8BE10C31C878'\n\n\n# Create parameter values for data payload\ncurrent_time = datetime.datetime.now().replace(microsecond=0)                                \nrandom_string = ''.join(random.choices(string.ascii_uppercase + string.digits, k=32))\n\nprint(current_time)\n\n# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    print(unsign_str)\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n# Body payload\ntxamt = '1' #In USD,EUR,etc. Cent\ntxcurrcd = 'HKD'\npay_type = '800101' # Alipay MPM = 800101, WeChat Pay MPM = 800201\n#auth_code = '287255838063025836' # CPM only\nout_trade_no = random_string\ntxdtm = current_time\ngoods_name = 'Food'   \nmchid = 'lkbqahlRYj' #Hashids(\"qfpay\").encode(2546286, 2532824) #(Agent ID, Merchant ID)\nkey = client_key\nnotify_url = 'https://xxx.com/notify/success'\n\n#data = {'txamt': txamt, 'txcurrcd': txcurrcd, 'auth_code': auth_code, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'mchid': mchid}\ndata = {'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm}\n\nr = requests.post(environment+\"/trade/v1/payment\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(r.json())\n"})})}),(0,r.jsx)(l.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n\npublic class TestMain {\n    public static void main(String args[]){\n        String appcode="D5589D2A1F2E42A9A60C37*********";\n        String key="0E32A59A8B454940A2FF39*********";\n        String mchid="ZaMVg*****";\n\n        String pay_type="800101";\n        String out_trade_no= "01234567890123";\n        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        String date=df.format(new Date());\n        String txdtm=date;\n        String txamt="10";\n        String txcurrcd="EUR";\n\n        Map<String, String> unsortMap = new HashMap<>();\n        unsortMap.put("mchid", mchid);\n        unsortMap.put("pay_type", pay_type);\n        unsortMap.put("out_trade_no", out_trade_no);\n        unsortMap.put("txdtm", txdtm);\n        unsortMap.put("txamt", txamt);\n        unsortMap.put("txcurrcd", txcurrcd);\n        //unsortMap.put("product_name", product_name);\n        //unsortMap.put("valid_time", "300");\n\n        String data=QFPayUtils.getDataString(unsortMap);\n        System.out.println("Data:\\n"+data+key);\n        String md5Sum=QFPayUtils.getMd5Value(data+key);\n        System.out.println("Md5 Value:\\n"+md5Sum);\n\n        String url="https://test-openapi-hk.qfpay.com";\n        String resp= Requests.sendPostRequest(url+"/trade/v1/payment", data, appcode,key);\n        System.out.println(resp);\n    }\n}\n'})})}),(0,r.jsx)(l.A,{value:"javascript",label:"Javascript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// Enter Client Credentials\nconst environment = 'https://test-openapi-hk.qfapi.com'\nconst app_code = 'D5589D2A1F2E42A9A60C37*********'\nconst client_key = '0E32A59A8B454940A2FF39*********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\nvar tradenumber = String(Math.round(Math.random() * 1000000000))\nconsole.log(tradenumber)\n\nvar payload = {\n'txamt': '10', // In USD,EUR,etc. Cent\n'txcurrcd': 'HKD',\n'pay_type': '800101', // Alipay MPM = 800101, WeChat Pay MPM = 800201\n'out_trade_no': tradenumber,\n'txdtm': dateTime,\n'mchid': 'ZaMVg*****'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\nordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n\n\n// API Request\nvar request = require(\"request\");\nrequest({\nuri: environment+\"/trade/v1/payment\",\nheaders: {\n    'X-QF-APPCODE': app_code,\n    'X-QF-SIGN': hashed\n},\nmethod: \"POST\",\nform: payload,\n}, \nfunction(error, response, body) {\nconsole.log(body);\n});\n"})})}),(0,r.jsx)(l.A,{value:"php",label:"Php",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"<?php\nob_start();\nfunction GetRandStr($length){\n    $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n    $len=strlen($str)-1;\n    $randstr='';\n    for($i=0;$i<$length;$i++){\n        $num=mt_rand(0,$len);\n        $randstr .= $str[$num];\n    }\nreturn $randstr;\n}\n\n$url = 'https://test-openapi-hk.qfapi.com';\n$api_type = '/trade/v1/payment';\n$pay_type = '800101'; //Alipay MPM = 800101, WeChat Pay MPM = 800201\n//$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay\n$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay\n$now_time = date(\"Y-m-d H:i:s\"); //Get current date-time\n\n$fields_string = '';\n$fields = array(\n    //'mchid' => urlencode($mchid),\n    'pay_type' => urlencode($pay_type),\n    'out_trade_no' => urlencode(GetRandStr(20)),\n    'txcurrcd' => urlencode('HKD'),\n    'txamt' => urlencode(2200),\n    'txdtm' => $now_time\n);\nksort($fields); //Ascending dictionary sorting A-Z \nprint_r($fields);\n\nforeach($fields as $key=>$value) { \n    $fields_string .= $key.'='.$value.'&' ;\n}\n$fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);\n\n$sign = strtoupper(md5($fields_string . $app_key));\n\n//// Header ////\n$header = array();\n$header[] = 'X-QF-APPCODE: ' . $app_code;\n$header[] = 'X-QF-SIGN: ' . $sign;\n\n//Post Data\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, $url . $api_type);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_HTTPHEADER, $header);\ncurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);\ncurl_setopt($ch, CURLOPT_POST, 1);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);\n$output = curl_exec($ch);\ncurl_close($ch);    \n\n$final_data = json_decode($output, true);\nprint_r($final_data);\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "surcharge_fee": 0, \n  "qrcode": "https://qr.alipay.com/bax03190uxd47wbekffy6033", \n  "pay_type": "800101", \n  "surcharge_rate": 0, \n  "resperr": "success", \n  "txdtm": "2020-04-23 11:09:24", \n  "out_trade_no": "364ZK6BAJGYHMU3TUX0X7MGIGQL4O8KI", \n  "syssn": "20200423066200020000976054", \n  "sysdtm": "2020-04-23 11:09:27", \n  "txcurrcd": "EUR", \n  "respmsg": "", \n  "chnlsn2": "", \n  "cardcd": "", \n  "udid": "qiantai2", \n  "txamt": "1", \n  "respcd": "0000", \n  "chnlsn": ""\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"POST ../trade/v1/payment"})}),"\n",(0,r.jsx)(t.p,{children:"\u5546\u6237\u6839\u636e\u652f\u4ed8\u5b9d/\u5fae\u4fe1\u652f\u4ed8\u534f\u8bae\u751f\u6210\u4e00\u4e2a\u52a8\u6001\u4e8c\u7ef4\u7801\u5e76\u5c55\u793a\u7ed9\u987e\u5ba2. \u7528\u6237\u6253\u5f00\u4ed6\u4eec\u81ea\u5df1\u7684\u652f\u4ed8\u5b9d/\u5fae\u4fe1\u652f\u4ed8\u94b1\u5305\u5e76\u626b\u63cf\u5c55\u793a\u51fa\u7684\u52a8\u6001\u4e8c\u7ef4\u7801\u4ee5\u5b8c\u6210\u4ed8\u6b3e. \u8fd9\u4e2a\u573a\u666f\u9002\u7528\u4e8e\u7ebf\u4e0b\u548c\u7ebf\u4e0a\u4ed8\u6b3e, \u4f8b\u5982\u5728\u7f51\u7ad9\u4e0a\u652f\u4ed8."}),"\n",(0,r.jsx)(t.h2,{id:"\u8bf7\u6c42\u53c2\u6570",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u586b"}),(0,r.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5e38\u7528\u652f\u4ed8\u53c2\u6570"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u652f\u4ed8\u6807\u8bb0"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"pay_tag"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,r.jsx)(t.td,{children:"String(16)"}),(0,r.jsxs)(t.td,{children:["\u9ed8\u8ba4\u503c\u662f: ALIPAYHK",(0,r.jsx)("br",{}),"\u652f\u4ed8\u5b9d\u5927\u9646\u7248\u672c: ALIPAYCN"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u8ba2\u5355\u8fc7\u671f\u65f6\u95f4"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"expired_time"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["\u5426",(0,r.jsx)("br",{})," (\u4ec5\u652f\u6301\u6b63\u626b\u652f\u4ed8)"]}),(0,r.jsx)(t.td,{children:"String(3)"}),(0,r.jsxs)(t.td,{children:["\u6309\u5206\u949f\u8ba1\u65f6\u7684\u52a8\u6001\u4e8c\u7ef4\u7801\u7684\u8fc7\u671f\u65f6\u95f4. \u9ed8\u8ba4\u65f6\u957f\u4e3a30\u5206\u949f, \u6700\u5c0f\u503c5\u5206\u949f\uff0c\u6700\u5927\u503c120\u5206\u949f.",(0,r.jsx)("br",{})," \u9002\u7528\u4e8e\u5fae\u4fe1\u548c\u652f\u4ed8\u5b9d"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u6307\u5b9a\u652f\u4ed8\u65b9\u5f0f"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"limit_pay"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["\u8be5\u53c2\u6570\u503c\u6307\u5b9a\u4e3a",(0,r.jsx)(t.code,{children:"no_credit"}),"\uff0c\u7981\u6b62\u4f7f\u7528\u4fe1\u7528\u5361\u652f\u4ed8,\u8be5\u89c4\u5219\u53ea\u5bf9\u4e2d\u56fd\u5927\u9646\u751f\u6548"]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u54cd\u5e94\u53c2\u6570",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u4e8c\u7ea7\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"QR Code"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(512)"}),(0,r.jsx)(t.td,{children:"\u4e8c\u7ef4\u7801\u94fe\u63a5"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Public payment parameter"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"})]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),a=n(34164),s=n(23104),l=n(56347),i=n(205),d=n(57485),o=n(31682),c=n(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[l,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,u]=m({queryString:n,groupId:a}),[x,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=o??x;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&d(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),y(e)}),[u,y,s]),tabValues:s}}var y=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function _(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=i[n].value;a!==r&&(o(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function b(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,f.jsx)(_,{...e,...t}),(0,f.jsx)(j,{...e,...t})]})}function v(e){const t=(0,y.A)();return(0,f.jsx)(b,{...e,children:u(e.children)},String(t))}},82555:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/mpm_process-b677d3fc4c637476e1ec09ef63b0a854.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);