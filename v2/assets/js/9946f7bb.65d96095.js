"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[1202],{10555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),a=t(11470),d=t(19365);t(28774);const i={},o="PayMe Offline Payment",c={id:"in-store/disabled-payme-offline-payment",title:"PayMe Offline Payment",description:"The above command returns JSON structured like this:",source:"@site/docs/02-in-store/disabled-payme-offline-payment.md",sourceDirName:"02-in-store",slug:"/in-store/disabled-payme-offline-payment",permalink:"/docs/v2/docs/in-store/disabled-payme-offline-payment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},u=[{value:"Offline Payment",id:"offline-payment",level:3},{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"payme-offline-payment",children:"PayMe Offline Payment"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"For code instructions select Python, Java, Node.js or PHP with the tabs below.\n"})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(d.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"#coding=utf8\nimport urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib\nimport requests\nimport datetime\nimport string\n\n# Enter Client Credentials\nenvironment = 'https://test-openapi-hk.qfapi.com'\napp_code = 'D5589D2A1F2E42A9A60C37*********'\nclient_key = '0E32A59A8B454940A2FF39**********'\n\n\n# Create parameter values for data payload\ncurrent_time = datetime.datetime.now().replace(microsecond=0)                                \n\nprint(current_time)\n\n# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n# Body payload\ntxamt = '200' # In cents\ntxcurrcd = 'HKD'\npay_type = '805801' # PayMe Offline Payment = 805801\nout_trade_no = '16565588217444950016'\ntxdtm = current_time\ngoods_name = 'qfpay_payme'\nreturn_url = 'http://www.qfpay.com'\ntxzone = '+0800'\nudid = 'my_udid'\n\nkey = client_key\n\ndata ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'udid': udid, 'return_url': return_url, 'txzone': txzone}\n\nr = requests.post(environment+\"/trade/v1/payment\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(r.json())\n"})})}),(0,r.jsx)(d.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n\npublic class TestMain {\n    public static void main(String args[]){\n        String appcode="D5589D2A1F2E42A9A60C37*********";\n        String key="0E32A59A8B454940A2FF39*********";\n\n\n        String pay_type="805801";\n        String out_trade_no= "165655882174";\n        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        String date=df.format(new Date());\n        String txdtm=date;\n        String txzone="+0800";\n        String txamt="200";\n        String txcurrcd="HKD";\n        String usid="myudid";\n        String return_url="http://www.qfpay.com";\n        String goods_name="qfpay_payme";\n\n        Map<String, String> unsortMap = new HashMap<>();\n        unsortMap.put("udid", udid);\n        unsortMap.put("pay_type", pay_type);\n        unsortMap.put("out_trade_no", out_trade_no);\n        unsortMap.put("txdtm", txdtm);\n        unsortMap.put("txzone", txzone);\n        unsortMap.put("txamt", txamt);\n        unsortMap.put("txcurrcd", txcurrcd);\n        unsortMap.put("return_url", return_url);\n        unsortMap.put("goods_name", goods_name);\n\n        String data=QFPayUtils.getDataString(unsortMap);\n        System.out.println("Data:\\n"+data+key);\n        String md5Sum=QFPayUtils.getMd5Value(data+key);\n        System.out.println("Md5 Value:\\n"+md5Sum);\n\n        String url="https://test-openapi-hk.qfapi.com";\n        String resp= Requests.sendPostRequest(url+"/trade/v1/payment", data, appcode,key);\n        System.out.println(resp);\n    }\n}\n'})})}),(0,r.jsx)(d.A,{value:"javascript",label:"JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Enter Client Credentials\nconst environment = 'https://test-openapi-hk.qfapi.com'\nconst app_code = 'D5589D2A1F2E42A9A60C37*********'\nconst client_key = '0E32A59A8B454940A2FF39*********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\n\nvar payload = {\n'txamt' : '200' # In cents\n'txcurrcd' : 'HKD'\n'pay_type' : '805801' # PayMe Offline Payment = 805801\n'out_trade_no' : '16565588217444950016'\n'txdtm' = dateTime\n'goods_name' : 'qfpay_payme'   \n'return_url' : 'http://www.qfpay.com'\n'txzone' : '+0800'\n'udid' : 'my_udid'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\n  ordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n\n\n// API Request\nvar request = require(\"request\");\nrequest({\n  uri: environment+\"/trade/v1/payment\",\n  headers: {\n    'X-QF-APPCODE': app_code,\n    'X-QF-SIGN': hashed\n  },\n  method: \"POST\",\n  form: payload,\n  }, \n  function(error, response, body) {\n  console.log(body);\n});\n"})})}),(0,r.jsx)(d.A,{value:"php",label:"Php",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\nob_start();\nfunction GetRandStr($length){\n    $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n    $len=strlen($str)-1;\n    $randstr='';\n    for($i=0;$i<$length;$i++){\n        $num=mt_rand(0,$len);\n        $randstr .= $str[$num];\n    }\n    return $randstr;\n}\n\n$url = 'https://test-openapi-hk.qfapi.com';\n$api_type = '/trade/v1/payment';\n$pay_type = '805801'; //PayMe Offline Payment = 805801\n$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay\n$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay\n$now_time = date(\"Y-m-d H:i:s\"); //Get current date-time\n\n$fields_string = '';\n$fields = array(\n    'pay_type' => urlencode($pay_type),\n    'out_trade_no' => urlencode(16565588217444950016),\n    'txcurrcd' => urlencode('HKD'),\n    'txamt' => urlencode(200),\n    'txzone' => urlencode('+0800'),\n    'txdtm' => $now_time,\n    'goods_name' => urlencode('qfpay_payme'),\n    'return_url' => urlencode('http://www.qfpay.com'),\n    'udid' => urlencode($myudid),\n);\nksort($fields); //\u5b57\u5178\u6392\u5e8fA-Z\u5347\u5e8f\u65b9\u5f0f\nprint_r($fields);\n\nforeach($fields as $key=>$value) { \n    $fields_string .= $key.'='.$value.'&' ;\n}\n$fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);\n\n$sign = strtoupper(md5($fields_string . $app_key));\n\n//// Header ////\n$header = array();\n$header[] = 'X-QF-APPCODE: ' . $app_code;\n$header[] = 'X-QF-SIGN: ' . $sign;\n\n//Post Data\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, $url . $api_type);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_HTTPHEADER, $header);\ncurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);\ncurl_setopt($ch, CURLOPT_POST, 1);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);\n$output = curl_exec($ch);\ncurl_close($ch);    \n\n$final_data = json_decode($output, true);\nprint_r($final_data);\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "pay_type" : "805801",\n  "sysdtm" : "2022-06-30 11:14:29",\n  "paydtm" : "2022-06-30 11:14:29",\n  "resperr" : "\u4ea4\u6613\u6210\u529f",\n  "txcurrcd" : "HKD",\n  "txdtm" : "2022-06-30 11:13:41",\n  "txamt" : "200",\n  "payme_logo" : "https://shopfront.paymebiz.hsbc.com.hk/onboarding/dfbd33ed8dd4282ccb0f0db0e9301a9a04ab29db0b7e2b7597bff9fd7382776d/businessLogo_300x300.png",\n  "respmsg" : "PR001:Request for Payment Initiated",\n  "out_trade_no" : "16565588217444950016",\n  "syssn" : "20220630154100020012764799",\n  "respcd" : "0000",\n  "qrcode" : "https://qr.payme.hsbc.com.hk/2/CmJBJZAXRgCh8GmBXJKuXG",\n  "udid" : "my_udid",\n  "pay_url" : "",\n  "chnlsn" : "5f43d654-d309-4560-8585-fb78f8dc694b",\n  "cardcd" : ""\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"offline-payment",children:"Offline Payment"}),"\n",(0,r.jsx)(n.p,{children:"For MPM Mode, The merchant generates a dynamic QR code based on the Payme protocol and presents it to the customer. The user opens their PayMe wallet and scans the displayed QR Code in order to complete payment. For CPM Mode, the customer generates a dynamic QR code in their QR code wallet and presents it to the cashier for scanning. If the response codes 1143/1145 are returned, the transaction is being processed or the customer is required to input the wallet password. Merchants have to query the transaction result for a final assessment of the transaction status."}),"\n",(0,r.jsx)(n.h3,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"POST ../trade/v1/payment"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.code,{children:"PayType: 805801"})," ",(0,r.jsx)(n.code,{children:"PayMe Merchant Presented QR Code Payment in store (MPM) (HK Merchants)"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.code,{children:"PayType: 805808"})," ",(0,r.jsx)(n.code,{children:"PayMe Consumer Presented QR Code Payment (CPM) (HK Merchants)"})," ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter name"}),(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment amount"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsx)(n.td,{children:"Amount of the transaction. Unit in cents (i.e. 100 = $1)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Currency"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txcurrcd"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(3)"}),(0,r.jsxs)(n.td,{children:["Transaction currency. View the ",(0,r.jsx)(n.a,{href:"/docs/preparation/paycode#currencies",children:"Currencies"})," table for a complete list of available currencies"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_type"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(6)"}),(0,r.jsx)(n.td,{children:"PayMe Web Payment = 805801"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"API Order Number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"External transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Request transaction time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["Transaction time format\uff1a",(0,r.jsx)("br",{})," YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Order expiration time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"expired_time"})}),(0,r.jsxs)(n.td,{children:["No",(0,r.jsx)("br",{})," (MPM only)"]}),(0,r.jsx)(n.td,{children:"String(3)"}),(0,r.jsx)(n.td,{children:"QRC expiration time in unit minutes. The default expiration time is 30 minutes. The parameter can manually be adjusted to a minimum of 5 minutes, and up to a maximum of 120 minutes."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product name identification"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"goods_name"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(64)"}),(0,r.jsxs)(n.td,{children:["Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be ",(0,r.jsx)(n.strong,{children:"UTF-8"})," encoded if it is written in Chinese characters."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QFPay merchant number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mchid"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(16)"}),(0,r.jsx)(n.td,{children:"May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID .On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Time zone"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txzone"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(5)"}),(0,r.jsx)(n.td,{children:"Transaction Time zone: Record of the transaction in local time, default time zone is Beijing time UTC+8 (+0800)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Device ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"udid"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{children:"Unique transaction device ID. Is displayed on the merchant portal."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Redirect URL"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"return_url"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(512)"}),(0,r.jsx)(n.td,{children:"URL that the user will be redirected to when the payment finishes."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter name"}),(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_type"})}),(0,r.jsx)(n.td,{children:"String(6)"}),(0,r.jsx)(n.td,{children:"PayMe Web/Wap Payment"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"System transaction time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sysdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["Format\uff1aYYYY-MM-DD hh:mm",":ss"," ",(0,r.jsx)("br",{})," This parameter value is used as the cut-off time for settlements."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Request transaction time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["Format\uff1aYYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Response message"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"resperr"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment amount"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Other message information"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respmsg"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"External transaction number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"External transaction number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QFPay transaction number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"syssn"})}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Return code"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respcd"})}),(0,r.jsx)(n.td,{children:"String(4)"}),(0,r.jsxs)(n.td,{children:["0000 = Request successful. ",(0,r.jsx)("br",{})," 1143/1145 = merchants are required to continue to query the transaction result. ",(0,r.jsx)("br",{})," All other return codes indicate transaction failure. Please refer to the page ",(0,r.jsx)(n.a,{href:"/docs/preparation/paycode#transaction-status-codes",children:"Transaction Status Codes"})," for a complete list of response codes."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment URL"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_url"})}),(0,r.jsx)(n.td,{children:"String(512)"}),(0,r.jsx)(n.td,{children:"generate QR code in Desktop web; redirect URL in WAP"})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>d});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function d(e){let{children:n,hidden:t,className:d}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,d),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),s=t(34164),a=t(23104),d=t(56347),i=t(205),o=t(57485),c=t(31682),l=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,d.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[d,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=m({queryString:t,groupId:s}),[x,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,l.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:d,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,a]),tabValues:a}}var y=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:d,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),l=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==r&&(c(n),d(s))},u=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:l,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function _(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(g,{...e,...n})]})}function v(e){const n=(0,y.A)();return(0,f.jsx)(_,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var r=t(96540);const s={},a=r.createContext(s);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);