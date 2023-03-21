/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 52,
	useLogo				: false,
	logoUrl				: "",
	homeUrl				: "",
	useBooklist			: "false",
	
	pageView : {
		type			: "flip",
		side			: "auto",
		duration		: 300,
		cover			: true,
		pagezoom	 	:  "400",
		
		},
	
	pageshadow:false,
	pagearea:true,
	pagesound:"sound1",
	intro:"false",
	RANDOM:598430,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"17",id:"0",parent:"-1"},
		{index:"4",label:"1. 건과류",url:"",child:"0",id:"1",parent:"0"},
		{index:"6",label:"2. 뮤즐리/시리얼",url:"",child:"0",id:"2",parent:"0"},
		{index:"9",label:"3. 병조림",url:"",child:"0",id:"3",parent:"0"},
		{index:"10",label:"4. 소스류",url:"",child:"0",id:"4",parent:"0"},
		{index:"13",label:"5. 스낵류",url:"",child:"0",id:"5",parent:"0"},
		{index:"19",label:"6. 시럽류",url:"",child:"0",id:"6",parent:"0"},
		{index:"21",label:"7. 식초류",url:"",child:"0",id:"7",parent:"0"},
		{index:"23",label:"8. 오일류",url:"",child:"0",id:"8",parent:"0"},
		{index:"27",label:"9. 음료/티",url:"",child:"0",id:"9",parent:"0"},
		{index:"31",label:"10. 잼류",url:"",child:"0",id:"10",parent:"0"},
		{index:"33",label:"11. 조미/향신료",url:"",child:"0",id:"11",parent:"0"},
		{index:"37",label:"12. 초콜릿류",url:"",child:"0",id:"12",parent:"0"},
		{index:"41",label:"13. 치즈/버터 ",url:"",child:"0",id:"13",parent:"0"},
		{index:"43",label:"14. 쿠킹믹스",url:"",child:"0",id:"14",parent:"0"},
		{index:"44",label:"15. 파스타 면",url:"",child:"0",id:"15",parent:"0"},
		{index:"46",label:"16. 파스타 소스",url:"",child:"0",id:"16",parent:"0"},
		{index:"48",label:"17. 선물세트",url:"",child:"0",id:"17",parent:"0"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[3,{type:"link", id:"Link_0", name:"noname", visible:"true", x:"439", y:"472", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|4"},
{type:"link", id:"Link_1", name:"noname", visible:"true", x:"439", y:"536", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|6"},
{type:"link", id:"Link_2", name:"noname", visible:"true", x:"439", y:"603", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|9"},
{type:"link", id:"Link_3", name:"noname", visible:"true", x:"439", y:"668", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|10"},
{type:"link", id:"Link_4", name:"noname", visible:"true", x:"439", y:"735", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|13"},
{type:"link", id:"Link_5", name:"noname", visible:"true", x:"439", y:"800", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|19"},
{type:"link", id:"Link_6", name:"noname", visible:"true", x:"439", y:"865", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|21"},
{type:"link", id:"Link_7", name:"noname", visible:"true", x:"439", y:"930", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|23"},
{type:"link", id:"Link_8", name:"noname", visible:"true", x:"440", y:"996", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|27"},
{type:"link", id:"Link_9", name:"noname", visible:"true", x:"440", y:"1061", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|31"},
{type:"link", id:"Link_10", name:"noname", visible:"true", x:"440", y:"1126", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|33"},
{type:"link", id:"Link_11", name:"noname", visible:"true", x:"440", y:"1191", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|37"},
{type:"link", id:"Link_12", name:"noname", visible:"true", x:"440", y:"1258", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|41"},
{type:"link", id:"Link_13", name:"noname", visible:"true", x:"440", y:"1325", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|43"},
{type:"link", id:"Link_14", name:"noname", visible:"true", x:"440", y:"1392", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|44"},
{type:"link", id:"Link_15", name:"noname", visible:"true", x:"440", y:"1457", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|46"},
{type:"link", id:"Link_16", name:"noname", visible:"true", x:"440", y:"1524", width:"553", height:"61", backgroundColor:"0xf5fcc1,0", rolloverColor:"0xfce767,20", borderColor:"0x000000,100", borderWidth:"0", link:"page|48"}
],
],
	
	textList : [ /** 본문 검색 */
		/*1*/	"GoldenBell International Co.,Ltd.골든벨통상(주)",
		/*2*/	"ABOUT GOLDENBELL골든벨통상골든벨통상은 2003년 1월 설립하여 현재까지 유기농 식품/친환경GoldenBell International Co. Ltd was established in Jan. 2003식품 수입 유통의 선두 주자로서 고객을 우선으로 생각하며 성장,and has been leading the import and distribution of Organic and발전하고 있습니다. 친환경적이며, 맛있는 식품에 대한 선호도가 높은 소비자들의 욕구를 충족시키고, 소비자들에게 건강한 식품을 공급하는 것을 최우선 목표로 하고 있으며, 지속 가능한 새롭고 건강한 가공식품을 소개함으로써 소비자들의 식생활을 개선하고 안전한먹거리를 공급하고자 하는 것이 저희의 운영 방침입니다.Eco-friendly foods in Korea.We have always been growing and developing our businessrange to satisfy our consumers’ needs who prefer eco-friendlyand nutritious foods 					Our top priority and the ultimate aim are contributing to people’ssafe and healthy lives through continuously supplying organic2023년 3월 현재 20년 동안 서유럽과 미국 등 12여 개국의 유기농, 친환경 제품을 국내에 독점 수입/유통하고 있으며 40여 개 글로벌 브랜드의 250여 개 유기농/친환경 제품을 판매하고 있습니다.제품의 최적 보관과 신속한 배송을 위해 대지 1,200평, 창고면적and healthy foods.					As of March 2023, Golden-Bell has been importing 250SKUsunder 40 global brands' Organic and Eco-friendly foods 14countries in EU and USA, and distributing the products to theKorean Market as a Korean Sole agency for them.		450평 규모의 자가 물류센터를 운영 중에 있습니다. 상온/냉장/냉				동창고를 구비하여 식품 카테고리에 맞게 보관, 관리 중에 있으며For safe and rapid delivery to Customers, we operate our own물류창고 모든 지역에 에어컨을 설비하여 항상 신선하게 식품을 관리하고 있습니다. 골든벨통상은 향후에도 국내 유기농식품,친환경식품의 발전과 국민건강을 위해 끊임없는 새로운 상품개발과 서비스 개선에 최선을 다할 것을 약속 드립니다.logistic center (Land: 4,000 sqm, Building: 1,500 sqm) with 3separate Ambient/ Chilled/ Frozen zones.						We maintain fresh products depending on the product categoryand each storage condition. We, GoldenBell, promise that we willcontinue to do our best in sourcing new eco-friendly & healthyfood products and innovative services for our customers.",
		/*3*/	"CONTENTS1. 건과류042. 뮤즐리/시리얼063. 병조림094. 소스류105. 스낵류136. 시럽류197. 식초류218. 오일류239. 음료/티2710. 잼류3111. 조미/향신료3312. 초콜릿류3713. 치즈/버터4114. 쿠킹믹스4315. 파스타 면4416. 파스타 소스4617. 선물세트48",
		/*4*/	"건과류Dried Fruits썬뷰 유기농 건포도284g250g썬뷰 유기농 건청포도284g점보사이즈의 유기농 건포도로 알이 크고점보사이즈의 유기농 청건포도로 알이 크고과즙이 풍부하여 많이 달지 않아 남녀노소과즙이 풍부하여 많이 달지 않은 천연간식.를 불구하고 누구나 어디서나 즐길 수 있는기존의 포도가 아닌 청포도 만들어 더 달콤천연간식.하고 상콤한 맛을 느낄 수 있는 제품.• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 12썬뷰 유기농 건포도198g(14gx14)스낵팩썬뷰 유기농 건청포도198g(14gx14)스낵팩썬뷰 유기농 건적포도198g(14gx14)스낵팩점보사이즈의 유기농 건포도로 알이 크고점보사이즈의 유기농 청건포도로 알이 크고점보사이즈의 유기농 적포도로 알이 크고과즙이 풍부하여 많이 달지 않아 남녀노소과즙이 풍부하여 많이 달지 않은 천연간식.과즙이 풍부하여 많이 달지 않은 천연간식.를 불구하고 누구나 어디서나 즐길 수 있는기존의 포도가 아닌 청포도 만들어 더 달콤건조 후 적정 1회 소비량에 맞고 14g미니천연간식.하고 상콤한 맛을 느낄 수 있는 제품.박스로 소분하여 휴대가 용이한 상품.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 24• 박스입수 : 24• 박스입수 : 2404",
		/*5*/	"써니후르츠 유기농건무화과 파우치250g(50gx5)써니후르츠 유기농건살구 파우치250g(50gx5)써니후르츠 유기농건포도 파우치250g(50gx5)• 휴대하기 편하고 보관이 용이한 포장형태• 휴대하기 편하고 보관이 용이한 포장형태• 휴대하기 편하고 보관이 용이한 형태• 5개의 개별 포장으로 이루어진 지퍼팩 포장• 5개의 개별 포장으로 이루어진 고급재질• 5개의 개별 포장으로 이루어진 고급재질• 100% 유기농 무화과로 반건조(정제수 함유)지퍼팩 포장지퍼팩 포장• 톡톡 씹히는 씨를 함께 섭취, 부드러운 식감• 100% 유기농 살구로 건조(정제수 함유)• 100% 유기농 과육풍부한 씨없는 포도 사용• 시중 판매 제품 대비 윌등히 촉촉한 식감• 달콤한 과육과 즙이 많고 부드러운 식감• 맛을 위해 설탕에 절이는 다른 건과일과 달리• 시중에서 잘 볼 수 없는 희소한 제품햇볕에 자연 건조시켜 자연적인 단맛• 유통기한(월) : 18• 유통기한(월) : 18• 유통기한(월) : 18• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12써니후르츠 유기농건무화과50g써니후르츠 유기농건살구50g써니후르츠 유기농건포도50g• 휴대하기 편하고 보관이 용이한 포장형태• 휴대하기 편하고 보관이 용이한 포장형태• 휴대하기 편하고 보관이 용이한 형태• 5개의 개별 포장으로 이루어진 지퍼팩 포장• 5개의 개별 포장으로 이루어진 고급재질• 5개의 개별 포장으로 이루어진 고급재질• 100% 유기농 무화과로 반건조(정제수 함유)지퍼팩 포장지퍼팩 포장• 톡톡 씹히는 씨를 함께 섭취, 부드러운 식감• 100% 유기농 살구로 건조(정제수 함유)• 100% 유기농 과육풍부한 씨없는 포도 사용• 시중 판매 제품 대비 윌등히 촉촉한 식감• 달콤한 과육과 즙이 많고 부드러운 식감• 맛을 위해 설탕에 절이는 다른 건과일과 달리• 시중에서 잘 볼 수 없는 희소한 제품햇볕에 자연 건조시켜 자연적인 단맛• 유통기한(월) : 18• 유통기한(월) : 18• 유통기한(월) : 18• 박스입수 : 12• 박스입수 : 12• 박스입수 : 1205",
		/*6*/	"뮤즐리/시리얼muesli/Serial패밀리아크누스퍼크런치무슬리500g250g패밀리아베리크런치무슬리500g패밀리아초코크런치무슬리500g곡물 등이 꿀 등과 함께 버무려진 그래뉼라곡물 등과 함께 건조 라즈베리 (산딸기)1.5%,곡물 등과 함께 초코렛 12% 가 함유되어형태의 아삭 아삭한 크런치 무슬리.딸기 과립 1%, 건조 딸기0.5% 가 함유되어초코렛 본연의 달콤한 맛을 고소한 곡물과(전체 곡물 함량비 56%)꿀과 함께 버무러져 딸기 고유의 새콤 달콤한함께 즐기실수 있는 그래뉼라 형태의 아삭맛을 고소한 곡물과 함께 즐기실 수 있는 그래아삭한 크런치 무슬리.뉼라 형태의 아삭 아삭한 크런치 무슬리.(전체 곡물 함량비 50%)(전체 곡물 함량비 65%)• 유통기한(월) : 15• 유통기한(월) : 18• 유통기한(월) : 15• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12패밀리아오리지날무슬리(일반)500g패밀리아스위스초코비츠375g패밀리아스위스초코테디250g곡물, 과실, 너트 등이 혼합되어 있는 전통고소한 과자 안에 부드럽고 진한 초콜릿이귀엽고 고소한 테디모양의 과자에 부드럽고적 무슬리.들어 있는 제품.화이트 초콜릿이 코팅되어 있는 제품.(전체 곡물 함량비 82%)어린이들이 좋아하는 패키디 디자인의 초코어린이들이 좋아하는 패키지 디자인의 테디렛이 함유되어 있는 과자.모양의 과자.• 유통기한(월) : 15• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 6• 박스입수 : 606",
		/*7*/	"패밀리아정글 크런치250g패밀리아스위스 초코 크록250g패밀리아 크누스퍼크런치 무슬리 (소용량)50g크리스피한 식감에 사자, 코끼리, 악어의크리스피한 식감에 먹기 좋게 동글동글한곡물 등이 꿀 등과 함께 버무려진 그래뉼라재미있는 동물모양으로 각각 초콜릿, 바닐초코볼 모양으로 아이들에게 인기가 높은형태의 아삭 아삭한 크런치 무슬리.라, 꿀 세가지 맛을 한번에 즐길 수 있어 아영양만점 시리얼(전체 곡물 함량비 56%)• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 15• 박스입수 : 6• 박스입수 : 6• 박스입수 : 12이들에게 인기가 높은 영양만점 시리얼패밀리아 베리 크런치무슬리 (소용량)50g패밀리아 초코 크런치무슬리 (소용량)50g패밀리아 스위스초코비츠 (소용량)30g곡물 등과 함께 건조 라즈베리 (산딸기)1.5%,곡물 등과 함께 초코렛 12% 가 함유되어고소한 과자 안에 부드럽고 진한 초콜릿이딸기 과립 1%, 건조 딸기0.5% 가 함유되어초코렛 본연의 달콤한 맛을 고소한 곡물과들어 있는 제품.꿀과 함께 버무러져 딸기 고유의 새콤 달콤한함께 즐기실수 있는 그래뉼라 형태의 아삭어린이들이 좋아하는 패키디 디자인의 초맛을 고소한 곡물과 함께 즐기실 수 있는 그래아삭한 크런치 무슬리.코렛이 함유되어 있는 과자.뉼라 형태의 아삭 아삭한 크런치 무슬리.(전체 곡물 함량비 50%)(전체 곡물 함량비 65%)• 유통기한(월) : 15• 유통기한(월) : 15• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 12• 박스입수 : 5007",
		/*8*/	"훅스 유기농 코코아쉘(프리미엄)300g250g훅스 유기농콘후레이크(프리미엄)275g훅스 유기농초콜렛 크런치 (프리미엄)300g유기농 함량 100%. 초코 코팅이 입혀 있유기농 함량 100%. 유기농 옥수수 85%,유기농 함량이 99% 이상 밀,쌀이 아닌 단어 진한 초코의 맛을 느낄 수 있는 시리얼.유기농 쌀시럽 14%으로 이루어진 고소하백질 함량이 높은 귀리와 칼슘, 식이섬유가고 담백한 시리얼.많은 보리 사용하여 균형잡힌 영양을 제공하는 저칼로리 고영양의 식사 대용 식품.• 유통기한(월) : 13• 유통기한(월) : 13• 유통기한(월) : 12• 박스입수 : 6• 박스입수 : 6• 박스입수 : 6훅스 유기농 레드후르츠크런치 (프리미엄)350g유기농 함량이 99% 이상 밀,쌀이 아닌 단백질 함량이 높은 귀리와 칼슘, 식이섬유가많은 보리 사용하여 균형잡힌 영양을 제공하는 저칼로리 고영양의 식사 대용 식품.• 유통기한(월) : 12• 박스입수 : 608",
		/*9*/	"병조림류bottled프로상 유기농스위트 옥수수콘345g/240g250g마쉬랜드유기농옥수수콘(6)330g/220g유기농붉은양배추350g/335g소금을 제외하고는 첨가물 없는 “프랑스”옥수수 알갱이의 크기가 균일하고 껍질 등상큼, 담백한 맛의 유기농 붉은 양배추.산 순수 유기농 옥수수 100%.이 분리되어 있지 않아 깔끔하게 섭취가능.많이 시지 않고 담백한 맛의 붉은 양배추로설탕 無첨가로 자연적으로 발생하는 당을단맛과 짠맛의 배합이 적절하여 쉽게 물리양식의 사이드디쉬로 드실 수 있는 제품.포함해 더욱 부드럽고 고소한 풍미를 제공.지 않으며 그냥 드시거나 다른 요리의 사이드디쉬로서도 잘 어울리는 제품.• 유통기한(월) : 36• 유통기한(월) : 48• 유통기한(월) : 48• 박스입수 : 6• 박스입수 : 6• 박스입수 : 6유기농싸우어크라우트350g/335g유기농싸우어크라우트680g/650g유기농사우어크라우트9.7kg흰 양배추를 특수 탱크에서 숙성, 발효시켜흰 양배추를 특수 탱크에서 숙성, 발효시켜흰 양배추를 특수 탱크에서 숙성, 발효시켜서 잘게 썬 일명 독일식 김치로 피클과 더서 잘게 썬 일명 독일식 김치로 피클과 더서 잘게 썬 일명 독일식 김치로 피클과 더불어 서양김치의 대표적인 상품.불어 서양김치의 대표적인 상품.불어 서양김치의 대표적인 상품.100% 유기농 함량의 싸우어크라우트.100% 유기농 함량의 싸우어크라우트.100% 유기농 함량의 싸우어크라우트.• 유통기한(월) : 48• 유통기한(월) : 48• 유통기한(월) : 48• 박스입수 : 6• 박스입수 : 6• 박스입수 : 109",
		/*10*/	"소스류sauce멘푸소 유기농 매쉬드토마토 (토마토 퓨레)680g멘푸소 유기농 필드토마토 (홀 토마토)400g멘푸소 유기농 찹드토마토 (다이스드 토마토)400g토마토를 껍질의 제거하여 으깨서 굵은 체껍질을 제거한 토마토를 토마토 주스와 함토마토를 껍질의 제거하여 사각으로 썰어에 걸러낸 것으로 편리하게 여러 소스를 만께 통으로 넣어 과육이 살아 있음.농축된 토마토 주스에 담구어 만듬.들 수 있음. 이탈리아 남부 스타일은 너무다방면으로 이용할 수 있으며 플럼 토마토 특토마토의 풍미와 식감을 살리기에 적합함.곱지 않게 갈아 토마토의 풍미가 더욱 깊음.유의 수분이 적어 진한 풍미를 느낄 수 있음.• 유통기한(월) : 36• 유통기한(월) : 36• 유통기한(월) : 36• 박스입수 : 12• 박스입수 : 12• 박스입수 : 1210",
		/*11*/	"뵤도유기농 케첩500㎖뵤도 유기농토마토케첩 (튜브형)300㎖뵤도 유기농어린이용 케첩300㎖토마토 함량이 75% 함유되어 있어 깊고 진토마토가 함유되어 있어 깊고 진한 토마토토마토 함량이 높아 토마토 고유의 맛을 느한 토마토의 맛을 느낄 수 있는으며, 토마토의 새콤달콤한 맛의 토마토 맛을 느낄 수낄 수 있고 맛이 순해 아이들에게 적합한케첩의 새콤달콤한 맛을 느낄 수 있는 제품.있는 제품.어린이용 케첩.• 유통기한(월) : 18• 유통기한(월) : 12• 유통기한(월) : 12• 박스입수 : 6• 박스입수 : 6• 박스입수 : 6다른 케첩에 비해 단맛이 적고, 토마토의깊고 진한 맛을 느낄 수 있는 것이 특징.뵤도유기농 발사믹 크림150㎖드니그리스유기농 발사믹 글레이즈250ml유기농 포도농축액과 발사믹식초의 깊고100% 유기농 성분. 보관과 사용이 용이한진한맛을 느낄수있는 발사믹크림.스퀴즈 병으로 깔끔하게 원하는 만큼만 사부드러운 크림타입의 소스.용할 수 있는 제품.최고급 유기농 포도를 최고 품질의 목재통에서 자연 숙성한 최고급 품질의 발사믹 글레이즈.• 유통기한(월) : 24• 유통기한(월) : 36• 박스입수 : 6• 박스입수 : 611",
		/*12*/	"수지스유기농 옐로우 머스터드227g수지스유기농 허니 머스터드340g수지스유기농 케첩567g달지않고 약간의 신맛으로 햄버거&샌드위단맛과 신맛의 조화로움으로 남녀노소 무유기농 토마토로 만들어진 제품.치 스프레드, 핫도그 소스, 각종 디핑소스난히 즐길 수 있는 맛.진하고 깊은맛이 특징이며 프렌치프라이로 활용하기 좋은 제품.각종 디핑소스, 샐러드 드레싱으로 활용하디핑소스, 오므라이스 소스로 활용하기 좋기 좋은 제품.은 제품.• 유통기한(월) : 18• 유통기한(월) : 12• 유통기한(월) : 16• 박스입수 : 12• 박스입수 : 6• 박스입수 : 12수지스유기농 리얼 마요355㎖수지스유기농 타르타르 소스237㎖수지스유기농 칵테일 소스237㎖진하고 고소한 맛으로 건어물, 생선까스,새콤하고 고소한 맛으로 생선까스, 연어스새콤하고 매콤한 맛으로 해산물의 맛을 극각종채소 디핑소스로 활용하기 좋은 제품.테이크 소스, 각종 튀김요리 디핑소스로 활대화해주며 각종 해산물 디핑소스로 활용용하기 좋은 제품.하기 좋은 제품.• 유통기한(월) : 12• 유통기한(월) : 12• 유통기한(월) : 12• 박스입수 : 6• 박스입수 : 6• 박스입수 : 612",
		/*13*/	"스낵류snack던칸 버터스코티쉬 쇼트브레드200g250g던칸오렌지 쇼트브레드200g던칸 초콜릿오렌지 쇼트브레드200g시중 쇼트브레드 중 독보적으로 높은 버터시중 쇼트브레드 중 독보적으로 높은 버터시중 쇼트브레드 중 독보적으로 높은 버터함량으로 진하고 고급스러운 버터의 풍미함량으로 진하고 고급스러운 버터의 풍미를함량으로 진하고 고급스러운 버터의 풍미를를 느길수 있는 제품.느길수 있는 제품.느길수 있는 제품.두툼하고 밀도가 높아 풍부한 버터의 맛과두툼하고 밀도가 높아 풍부한 버터의 맛과두툼하고 밀도가 높아 풍부한 버터의 맛과바삭한 식감이 특징.바삭한 식감이 특징.바삭한 식감이 특징.• 유통기한(월) : 12• 유통기한(월) : 12• 유통기한(월) : 12• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12던칸 라즈베리화이트초콜릿 쇼트브레드200g시중 쇼트브레드 중 독보적으로 높은 버터함량으로 진하고 고급스러운 버터의 풍미를 느길수 있는 제품.두툼하고 밀도가 높아 풍부한 버터의 맛과바삭한 식감이 특징.• 유통기한(월) : 12• 박스입수 : 1213",
		/*14*/	"뵤도 유기농쌀뻥튀기 퀴노아100g뵤도 유기농쌀뻥튀기 (가염)100g뵤도 유기농쌀뻥튀기 (무염)100g유기농 함량 100%, 유기농 쌀 88% 및 유유기농 함량 100% (정제염 제외수치), 유유기농 함량 100%, 유기농 쌀 100%의기농 퀴노아 12%의 혼합된 뻥튀기로 퀴노기농 쌀 99.5%에 정제염을 가미하여 약간뻥튀기로 담백한 맛을 즐기실 수 있음.아의 풍부한 맛 과 향을 즐길 수 있음.짭짭한 맛을 내는 쌀뻥튀기.• 유통기한(월) : 12• 유통기한(월) : 12• 유통기한(월) : 12• 박스입수 : 6• 박스입수 : 12• 박스입수 : 12뵤도 유기농그리씨니 클레식125g뵤도 유기농그리씨니 러스틱100g (2X50g)유기농 함량 100% (정제염 제외 수치), 수유기농 함량 100% (정제염 제외 수치),수분함량이 적어 딱딱하지만 짭짤하고 고소분함량이 적어 딱딱하지만 짭짤하고 고소한 맛을 즐기실 수있는 제품.한 맛을 즐기실 수있는 제품. 씹는 느낌이한국의 건빵과 비슷.• 유통기한(월) : 12• 유통기한(월) : 12• 박스입수 : 12• 박스입수 : 1214",
		/*15*/	"데일리크레이브베기칩스28g250g데일리크레이브베기스틱스28g데일리크레이브유기농 베기스트로우28g100% 내츄럴 야채 감자칩으로 기름기가100% 내츄럴 야채 감자칩으로 기름기가인공색소와 인공성분을 일절 첨가하지 않적고 깔끔한 맛의 스낵.적고 깔끔한 맛의 스낵.고 유기농, NON GMO 야채로만 만든 미국인공색소와 인공성분을 전혀 첨가하지 않고인공색소와 인공성분을 전혀 첨가하지 않고USDA 인증 유기농 야채 스낵.글로벌 식품안전 규격인 BRC 인증을 획득.글로벌 식품안전 규격인 BRC 인증을 획득.철분 함량으로 인해 핑크색을 띄는 히말라야고급스럽고 깔끔한 패키지의 NON GMO고급스럽고 깔끔한 패키지의 NON GMO핑크 솔트를 첨가. 자연스럽고 건강한 맛.제품입니다.제품입니다.• 유통기한(월) : 9• 유통기한(월) : 9• 박스입수 : 24• 박스입수 : 24데일리크레이브베기칩스170g데일리크레이브베기스틱스• 유통기한(월) : 10• 박스입수 : 24170g데일리크레이브유기농 베기스트로우128g100% 내츄럴 야채 감자칩으로 기름기가100% 내츄럴 야채 감자칩으로 기름기가인공색소와 인공성분을 일절 첨가하지 않적고 깔끔한 맛의 스낵.적고 깔끔한 맛의 스낵.고 유기농, NON GMO 야채로만 만든 미국인공색소와 인공성분을 전혀 첨가하지 않고인공색소와 인공성분을 전혀 첨가하지 않고USDA 인증 유기농 야채 스낵.글로벌 식품안전 규격인 BRC 인증을 획득.글로벌 식품안전 규격인 BRC 인증을 획득.철분 함량으로 인해 핑크색을 띄는 히말라야고급스럽고 깔끔한 패키지의 NON GMO고급스럽고 깔끔한 패키지의 NON GMO핑크 솔트를 첨가. 자연스럽고 건강한 맛.제품입니다.제품입니다.• 유통기한(월) : 9• 유통기한(월) : 9• 유통기한(월) : 10• 박스입수 : 8• 박스입수 : 8• 박스입수 : 815",
		/*16*/	"데일리크레이브 베기스트로스파이시 스리라차맛156g데일리크레이브베기칩스 바베큐맛156g한입에 먹을 수 있는 크기와 모양으로 만든 칩.원형으로 스틱보다 좀더 두꺼워 바삭한 식감.천연고추향과 강황을 첨가해 건강하고 맛양파와 토마토 분말을 첨가해 자극적이지있는 매콤함을 즐길 수 있음.않은 짭짤한 맛을 느낄 수 있음.• 유통기한(월) : 9• 유통기한(월) : 9• 박스입수 : 8• 박스입수 : 8바이오사우르스 유기농 스낵60g(15gx4)케첩맛 (멀티팩)바이오사우르스 유기농 스낵60g(15gx4)치즈맛 (멀티팩)바이오사우르스 유기농 스낵60g(15gx4)소금맛 (멀티팩)부드럽고 바삭한 식감의 유아용 스낵으로부드럽고 바삭한 식감의 유아용 스낵으로부드럽고 바삭한 식감의 어린이용 스낵으로유기농 케첩이 함유되어 있는 새콤달콤하며치즈맛이 함유되어 있는 고소하면서 부드러정제염이 함유되어 있어 고소하면서 짭짤한고소하면서 부드러운 맛을 느낄 수 있는 유운 맛을 느낄 수 있는 유아용 스낵.맛을 느낄 수 있는 유기농 스낵.• 유통기한(월) : 12• 유통기한(월) : 12• 유통기한(월) : 12• 박스입수 : 10• 박스입수 : 10• 박스입수 : 10아용 스낵.16",
		/*17*/	"이네센스히말라야 솔트 감자칩 (소용량)45g이네센스트러플 감자칩 (소용량)45g이네센스허니 머스타드 감자칩 (소용량)45g수제 핸드 쿡 방식으로 스페인 전통 감자칩수제 핸드 쿡 방식으로 스페인 전통 감자칩수제 핸드 쿡 방식으로 스페인 전통 감자칩제조 방식을 따라 짜지 않고 바삭한 감자칩.제조 방식을 따라 짜지 않고 바삭한 감자칩.제조 방식을 따라 짜지 않고 바삭한 감자칩.섬세하고 고급스러운 히말라야 소금이 만나지중해 분지의 숲에서 자란 송로버섯의 향허니의 달콤함과 머스타드의 새콤매콤함,완벽한 하모니를 선사하는 히말라야 핑크과 맛을 첨가하여 스페인산 아그리아 감자감자칩의 짭짤함까지 조화롭게 어우러진 감솔트 감자칩.와 함께 버무려 깊고 진항 풍미와 고급스러자칩.운 블랙트러플 맛을 느낄 수 있음.• 유통기한(월) : 12• 유통기한(월) : 12• 유통기한(월) : 12• 박스입수 : 24• 박스입수 : 24• 박스입수 : 24이네센스히말라야 솔트 감자칩125g이네센스트러플 감자칩125g이네센스허니 머스타드 감자칩125g수제 핸드 쿡 방식으로 스페인 전통 감자칩수제 핸드 쿡 방식으로 스페인 전통 감자칩수제 핸드 쿡 방식으로 스페인 전통 감자칩제조 방식을 따라 짜지 않고 바삭한 감자칩.제조 방식을 따라 짜지 않고 바삭한 감자칩.제조 방식을 따라 짜지 않고 바삭한 감자칩.섬세하고 고급스러운 히말라야 소금이 만나지중해 분지의 숲에서 자란 송로버섯의 향허니의 달콤함과 머스타드의 새콤매콤함, 감자완벽한 하모니를 선사하는 히말라야 핑크과 맛을 첨가하여 스페인산 아그리아 감자칩의 짭짤함까지 조화롭게 어우러진 감자칩.솔트 감자칩.와 함께 버무려 깊고 진항 풍미와 고급스러운 블랙트러플 맛을 느낄 수 있음.• 유통기한(월) : 12• 유통기한(월) : 12• 유통기한(월) : 12• 박스입수 : 9• 박스입수 : 9• 박스입수 : 917",
		/*18*/	"비오피 유기농감자스낵 소금맛85g250g비오피 유기농감자스낵 사워크림&어니언맛85g릴원스 유기농옥수수 스낵 애플시나몬 맛30g튀기지 않고 낮은 온도에서 천천히 구워 기튀기지 않고 낮은 온도에서 천천히 구워 기글루텐프리, 비건, 넛프리 제품으로 알러지존 감자칩보다 60% 낮은 지방함량.존 감자칩보다 60% 낮은 지방함량.프리제품.비건,글루텐 프리 인증제품.글루텐 프리 인증제품.10개월 이상 아이들을 위한 건강스낵.• 유통기한(월) : 12• 유통기한(월) : 12• 유통기한(월) : 10• 박스입수 : 12• 박스입수 : 12• 박스입수 : 8릴원스 유기농옥수수 스낵 바나나&망고 맛30g베지 유기농야채스낵25g글루텐프리, 비건, 넛프리 제품으로 알러지튀기지 않고 낮은 온도에서 천천히 구워 기프리제품.존 감자칩보다 60% 낮은 지방함량.10개월 이상 아이들을 위한 건강스낵.비건,글루텐 프리 인증제품.• 유통기한(월) : 24• 유통기한(월) : 12• 박스입수 : 24• 박스입수 : 1018",
		/*19*/	"시럽류syrup쿰스유기농 메이플 시럽236㎖쿰스메이플 시럽50㎖캘리포니아 팜즈 유기농초콜릿 소스450g100% 단풍나무 수액을 농축한 유기농시럽.100% 단풍나무 수액을 농축한 유기농시럽.유기농 인증을 받은 시럽으로 사용하기 편커피, 차, 토스트, 빵, 팬 케익, 와플 등에커피, 차, 토스트, 빵, 팬 케익, 와플 등에리한 스퀴즈 타입의 각종 디저트류와 요리다양하게 사용(꿀, 설탕, 감미료 대용으로다양하게 사용(꿀, 설탕, 감미료 대용으로에 사용하기 적합한 제품.사용)사용)• 유통기한(월) : 36• 유통기한(월) : 36• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12캘리포니아 팜즈 유기농민트 초콜릿 소스450g캘리포니아 팜즈 유기농솔티드 카라멜 소스450g캘리포니아 팜즈스위튼드 연유397g유기농 인증을 받은 시럽으로 사용하기 편유기농 인증을 받은 시럽으로 사용하기 편사용하기 편한 스퀴즈 타입의 연유로 아이리한 스퀴즈 타입의 각종 디저트류와 요리리한 스퀴즈 타입의 각종 디저트류와 요리스크림, 팥빙수, 커피, 케이크 등 각종 디저에 사용하기 적합한 제품.에 사용하기 적합한 제품.트류에 사용하기 적합한 제품.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 12• 박스입수 : 1219",
		/*20*/	"블루스카이 유기농아가베시럽 엑스트라 라이트330g블루스카이 유기농아가베시럽 엠버330g선인장의 뿌리에서 착즙 후 가열한 감미료선인장의 뿌리에서 착즙 후 가열한 감미료로 설탕보다 당도가 높고 칼로리는 더 낮음.로 설탕보다 당도가 높고 칼로리는 더 낮음.혈당상승지수(GI)가 설탕이나 옥수수 시럽 등에혈당상승지수(GI)가 설탕이나 옥수수 시럽 등에비해 매우 낮은 편이고 차가운 물에도 잘 녹음.비해 매우 낮은 편이고 차가운 물에도 잘 녹음.설탕의 대체품으로 사용하기 편리하며 향이설탕의 대체품으로 사용하기 편리하며 향이강하지 않아 각종 요리에 활용도가 높음.강하지 않아 각종 요리에 활용도가 높음.• 유통기한(월) : 36• 유통기한(월) : 36• 박스입수 : 12• 박스입수 : 1220",
		/*21*/	"식초류vinegar데니그리스 유기농화이트와인식초250㎖250g데니그리스 유기농발삼와인 식초250㎖데니그리스 유기농레드와인식초250㎖와인을 저장후 발효시켜 만든 포도주식초단맛이 강한 포도액과 발효된 와인을 섞어레드와인 식초는 와인을 저장후 발효시켜로 음식조리시 화이트와인의 향과 맛을 즐나무통에 넣은후 숙성시킨 포도주식초.만든 포도주 식초로 음식조리시 레드와인의기실 수있으며 자체만으로도 드레싱으로식초 가운데 가장 고급으로치며 단맛과 신향과 맛을 즐기실 수있음.쓰일만큼 맛과 향기가 뛰어남.맛을 동시에 내고있어 그 자체만으로도 드레싱으로 쓰일만큼 맛과 향기가 뛰어남.• 유통기한(월) : 48• 유통기한(월) : 48• 유통기한(월) : 48• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12유기농 화이트 모데나 발사믹 콘디먼트(포도액 55%, 발사믹식초 1%) 250㎖유기농 화이트 이탈리안콘디먼트 (포도액 25%) 250㎖데니그리스 유기농 프리미엄250㎖발삼와인식초(55%)유기농 백포도농축액 55% 유기농 화이트와유기농 화이트와인식초 75%, 유기농 백포초모가 함유되어 있는 천연 발사믹 식초.인식초 44%, 유기농 모데나산 발사믹 1%도농축액 25%4년 이상을 숙성시켜 더 깊은 맛을 느낄수화이트 콘디먼트는 가장 활용도가 높음.있는 식초. (필터링 하지 않고, 저온살균하특유의 새콤달콤한 향으로 음식의 맛을 더하지 않은 채로 숙성시킨 제품)고 일부 지방의 사람들이 와인 대신 즐겨 마100%유기농 재료로 생산(유기농 와인식초, 유기농 포도농축액화이트 모데나 발사믹 콘디먼트는 새콤달콤한과일 향의 풍미와 더불어 포도원액(55%)의함량이 높아 보다 진한 포도향과 새콤 달콤한맛이 진하게 느껴지는 제품.• 유통기한(월) : 48• 박스입수 : 6시기도 했을 만큼 음용 하기에도 좋은 제품• 유통기한(월) : 48• 유통기한(월) : 48• 박스입수 : 12• 박스입수 : 621",
		/*22*/	"데니그리스유기농 사과식초500㎖데니그리스유기농 사과식초1000㎖데니그리스 유기농사과 식초 위드 허니500㎖유기농 사과만을 엄선하여 만든 천연 유기유기농 사과만을 엄선하여 만든 천연 유기몸에 좋은 꿀을 함유하고 있으며, 간편하게농 사과식초. (초모 함유)농 사과식초. (초모 함유) 대용량희석해서 바로 마실 수 있는 사과식초.단맛이 강한 이태리산 사과과즙을 특별 제작 된단맛이 강한 이태리산 사과과즙을 특별 제작 된오크통에 넣어 숙성시킨 발효 식초 제품 중 고오크통에 넣어 숙성시킨 발효 식초 제품 중 고급으로 인정 받고 있으며 맛과 향이가 좋아 각급으로 인정 받고 있으며 맛과 향이가 좋아 각종 음식의 드레싱 또는 희석 음료로 사용 가능.종 음식의 드레싱 또는 희석 음료로 사용 가능.• 유통기한(월) : 48• 유통기한(월) : 48• 유통기한(월) : 36• 박스입수 : 6• 박스입수 : 6• 박스입수 : 6데니그리스 유기농 사과 식초위드 허니 & 크랜베리 500㎖데니그리스유기농 석류 식초500㎖몸에 좋은 꿀과 크랜베리를 함유하고 있으유기농 석류만을 원료로 정제수를 첨가하며, 간편하게 희석해서 바로 마실 수 있는지 않고 자연발효시킨 석류식초.사과식초.산도가 2%정도 낮기 때문에 식초입문자들에게 적당한 제품.• 유통기한(월) : 60• 박스입수 : 622• 유통기한(월) : 48• 박스입수 : 6",
		/*23*/	"오일류oil리오 유기농엑스트라버진 올리브유1.0L250g리오 유기농엑스트라버진 올리브유0.5L리오 유기농엑스트라버진 올리브유0.25L100% 유기농제품(유기농 올리브100%), 정통100% 유기농제품(유기농 올리브100%), 정통100% 유기농제품(유기농 올리브100%), 정통적 생산 방식인 냉연 압착식 올리브유.적 생산 방식인 냉연 압착식 올리브유.적 생산 방식인 냉연 압착식 올리브유.손으로 채취한 올리브 열매를 당일 즉시 공장으로손으로 채취한 올리브 열매를 당일 즉시 공장으로손으로 채취한 올리브 열매를 당일 즉시 공장으로이송해서 올리브유 생산하여 신선도를 최대 유지.이송해서 올리브유 생산하여 신선도를 최대 유지.이송해서 올리브유 생산하여 신선도를 최대 유지.이태리 Lcea유기농 인증 및 국내 식품의약이태리 Lcea유기농 인증 및 국내 식품의약이태리 Lcea유기농 인증 및 국내 식품의약품 안전청의 유기농 인정 제품.품 안전청의 유기농 인정 제품.품 안전청의 유기농 인정 제품.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12리오엑스트라버진 올리브유1.0L리오엑스트라버진 올리브유0.5L리오엑스트라버진 올리브유0.25L전통적 생산 방식인 Stone ground (냉연전통적 생산 방식인 Stone ground (냉연전통적 생산 방식인 Stone ground (냉연압착)식 올리브유.압착)식 올리브유.압착)식 올리브유.직접 손으로 채취한 올리브 열매를 당일 즉직접 손으로 채취한 올리브 열매를 당일 즉직접 손으로 채취한 올리브 열매를 당일 즉시 공장으로 이송하여 올리브유 생산하여시 공장으로 이송하여 올리브유 생산하여시 공장으로 이송하여 올리브유 생산하여신선도를 최대 유지.신선도를 최대 유지.신선도를 최대 유지.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 12• 박스입수 : 1223",
		/*24*/	"라파엘살가도포도씨유1.0L250g라파엘살가도포도씨유0.5L라파엘살가도포도씨유100㎖가볍고 산뜻한 맛이 장점인 담백한 오일.가볍고 산뜻한 맛이 장점인 담백한 오일.가볍고 산뜻한 맛이 장점인 담백한 오일.기름 특유의 향과 냄새가 없으며, 조리후에기름 특유의 향과 냄새가 없으며, 조리후에기름 특유의 향과 냄새가 없으며, 조리후에도 음식 고유의 맛을 살릴 수 있음.도 음식 고유의 맛을 살릴 수 있음.도 음식 고유의 맛을 살릴 수 있음.발연점이 다른 식용유보다 높아 짧은 시간에발연점이 다른 식용유보다 높아 짧은 시간에발연점이 다른 식용유보다 높아 짧은 시간에튀겨져 부침, 튀김, 구이등 고온 요리에 적합.튀겨져 부침, 튀김, 구이등 고온 요리에 적합.튀겨져 부침, 튀김, 구이등 고온 요리에 적합.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12라파엘살가도엑스트라버진 올리브유1.0L라파엘살가도엑스트라버진 올리브유500㎖라파엘살가도엑스트라버진 올리브유250㎖첫 번째 압착에 의해 얻어진 가장 순수한첫 번째 압착에 의해 얻어진 가장 순수한첫 번째 압착에 의해 얻어진 가장 순수한기름인 엑스트라 버진(EXTRA VIRGIN)기름인 엑스트라 버진(EXTRA VIRGIN)기름인 엑스트라 버진(EXTRA VIRGIN)올리브유로서 압착 저온 냉각한 제품올리브유로서 압착 저온 냉각한 제품올리브유로서 압착 저온 냉각한 제품(COLD PRESSED 제품)(COLD PRESSED 제품)(COLD PRESSED 제품)• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 24• 박스입수 : 1224",
		/*25*/	"라파엘살가도엑스트라버진 올리브유90㎖250g라파엘살가도엑스트라버진 올리브유40㎖첫 번째 압착에 의해 얻어진 가장 순수한첫 번째 압착에 의해 얻어진 가장 순수한기름인 엑스트라 버진(EXTRA VIRGIN)기름인 엑스트라 버진(EXTRA VIRGIN)올리브유로서 압착 저온 냉각한 제품올리브유로서 압착 저온 냉각한 제품(COLD PRESSED 제품)(COLD PRESSED 제품)• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 36• 박스입수 : 96v코코야미 유기농 엑스트라버진420㎖코코넛오일코코야미 유기농 엑스트라버진200㎖코코넛오일화학적 방법이 아닌 자연적 추출/정제한화학적 방법이 아닌 자연적 추출/정제한유기농 코코넛오일로, 영양소 파괴가 적고,유기농 코코넛오일로, 영양소 파괴가 적고,유해물질이 발행하지 않아 품질이 뛰어남.유해물질이 발행하지 않아 품질이 뛰어남.부드러운 풍미와 깊은 향이 특징.부드러운 풍미와 깊은 향이 특징.• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 1225",
		/*26*/	"음료류beverage엘릭시아 유기농 레몬에이드 탄산음료750㎖250g엘릭시아 유기농 레몬에이드 탄산음료330㎖엘릭시아 유기농 레몬에이드750㎖탄산음료(로즈)오리지널 레몬의 맛을 느낄 수 있는 레몬오리지널 레몬의 맛을 느낄 수 있는 레몬유기농 로즈추출물이 함유되어 있어 은은탄산음료. 레몬의 새콤함과 탄산의 톡 쏘는탄산음료. 레몬의 새콤함과 탄산의 톡 쏘는한 장미향을 느낄 수 있음. 레몬의 새콤함,맛을 느낄 수 있음.맛을 느낄 수 있음.은은한 장미향, 탄산의 톡 쏘는 맛을 느낄수 있음.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 6• 박스입수 : 12• 박스입수 : 6엘릭시아 유기농 레몬에이드330㎖탄산음료(로즈)엘릭시아 유기농 레몬에이드탄산음료(오렌지 블로섬) 750㎖엘릭시아 유기농 레몬에이드탄산음료(오렌지 블로섬) 330㎖유기농 로즈추출물이 함유되어 있어 은은유기농 오렌지추출물이 함유되어 있어 은유기농 오렌지추출물이 함유되어 있어 은한 장미향을 느낄 수 있음. 레몬의 새콤함,은하고 새콤한 오렌지의 맛을 느낄 수 있은하고 새콤한 오렌지의 맛을 느낄 수 있은은한 장미향, 탄산의 톡 쏘는 맛을 느낄음. 레몬&오렌지의 새콤함과 탄산의 톡 쏘음. 레몬&오렌지의 새콤함과 탄산의 톡 쏘수 있음.는 맛을 느낄 수 있음.는 맛을 느낄 수 있음.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 6• 박스입수 : 12• 박스입수 : 1226",
		/*27*/	"엘릭시아체리맛 탄산음료750㎖250g엘릭시아체리맛 탄산음료330㎖엘릭시아자두맛 탄산음료750㎖천연체리향이 들어있어 체리의 새콤함과천연체리향이 들어있어 체리의 새콤함과천연자두향이 함유되어 있어 자두의 새콤탄산의 톡쏘는 맛을 느낄 수 있는 제품. 고탄산의 톡쏘는 맛을 느낄 수 있는 제품. 고달콤함과 탄산의 톡쏘는 맛을 느낄 수 있는급스러운 느낌의 패키지급스러운 느낌의 패키지제품.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 6• 박스입수 : 12• 박스입수 : 6엘릭시아자두맛 탄산음료330㎖엘릭시아블랙커런트맛 탄산음료750㎖엘릭시아블랙커런트맛 탄산음료330㎖천연자두향이 함유되어 있어 자두의 새콤천연 블랙커런트 향이 들어있어,천연 블랙커런트 향이 들어있어,달콤함과 탄산의 톡쏘는 맛을 느낄 수 있는블랙커런트의 새콤함과 탄산의 톡 쏘는 맛블랙커런트의 새콤함과 탄산의 톡 쏘는 맛제품.을 느낄 수 있는 제품.을 느낄 수 있는 제품.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 6• 박스입수 : 12• 박스입수 : 1227",
		/*28*/	"벨노르망디 논알콜스파클링 로즈애플750㎖250g벨노르망디 논알콜스파클링 백포도750㎖벨노르망디 논알콜 스파클링750㎖적포도&라즈베리속이 빨간 레드애플을 사용하여 분홍빛의정통 샴페인과 같이 백포도를 사용한적포도와 라즈베리를 사용하여 상큼한 베로즈색 논알콜 로즈애플 스파클링 샴페인.논알콜 백포도 스파클링 샴페인.리의 맛이 느껴지는 논알콜 적포도 & 라즈과일 주스 함량: 99%과일 주스 함량: 99%베리 스파클링 샴페인.과일주스 함량: 69%• 유통기한(월) : 18• 유통기한(월) : 18• 유통기한(월) : 18• 박스입수 : 6• 박스입수 : 12• 박스입수 : 12벨노르망디 논알콜 스파클링사과 망고& 패션후르츠 750㎖벨노르망디 논알콜스파클링 적포도750㎖트랜디한 느낌의 논알콜 사과, 망고 & 패스파클링 와인 느낌의 논알콜 적포도 스파션후르츠 스파클링 샴페인.클링 샴페인.과일 주스 함량: 99%과일 주스 함량: 99%• 유통기한(월) : 18• 유통기한(월) : 24• 박스입수 : 1228• 박스입수 : 12",
		/*29*/	"바이오아이스 유기농아이스팝스400㎖250g바이오아이스 유기농멀티후르티400㎖유기농 체리맛,딸기맛,레몬맛,오렌지의 4유기농 사과&레몬맛, 유기농 복숭아&망고가지 맛으로 구성된 유기농 아이스바.맛, 유기농 멜론&망고맛, 유기농 체리&석류유기농 포도쥬스 농축액과 유기농 원료에의 4가지 맛으로 구성된 유기농 아이스바.서 추출한 유기농(천연)향으로 새콤달콤한설탕이 함유되어 있지 않으며 유기농 과일맛을낸 유기농 아이스바.농축액을 사용하여 단맛을 내었기 때문에어린이,유아용간식으로 매우 적합한 제품.• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 20• 박스입수 : 2029",
		/*30*/	"셀레스티얼캐모마일 허브티25g셀레스티얼 허니 바닐라캐모마일 허브티47g셀레스티얼 시나몬애플 스파이스 허브티48g카페인 프리로 부드럽고 상쾌한 캐모마일카페인 프리로 달콤한 꿀과 바닐라, 부드럽카페인 프리로 사과와 시나몬의 환상적인꽃의 향과 은은하게 풍기는 프루티 향이 조고 향긋한 캐모마일을 블랜딩.조화로 한국의 수정과와 비슷하여 친숙한화로운 100% 캐모마일 티. 인공색소, 방인공색소, 방부제 무첨가맛과 향이 매력적인 티.인공색소, 방부제 무첨가부제 무첨가• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 6셀레스티얼라즈베리 허브티• 박스입수 : 645g카페인 프리로 라즈베리와 히비스커스, 로즈힙의 섬세한 조화에 오렌지, 블랙베리를더하여 달콤한 상큼한 향이 매력적인 티.인공색소, 방부제 무첨가• 유통기한(월) : 24• 박스입수 : 630• 유통기한(월) : 24• 박스입수 : 6",
		/*31*/	"잼류jam피넛버터앤코 땅콩버터스무스 오퍼레이터454g250g피넛버터앤코 땅콩버터크런치타임454g땅콩 고유의 고소한 맛을 즐기실 수 있는땅콩 고유의 고소한 맛과 잘게 부순 땅콩부드러운 크리미(CREAMY) 형태의 땅콩알갱이 본래의 맛을 즐기실 수 있는 크런버터.치 타입의 땅콩버터로, 부드러운 크림의 맛과 CRUNCHY한 땅콩의 맛을 동시에 느낄수 있는 제품.• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 120851087산타로사딸기잼000014 >350g• 박스입수 : 12산타로사와일드 블루베리잼350g산타로사오렌지 마말레이드350g딸기 52% 함유되어 딸기 본래의 새콤 달블루베리 52% 함유되어 블루베리 본래의오렌지 33% 함유되어 오렌지 및 오렌지콤한 맛을 즐기실 수 있는 제품새콤 달콤한 맛을 즐기실 수 있는 제품껍질 본래의 새콤 달콤한 맛을 즐기실 수있는 제품• 유통기한(월) : 36• 박스입수 : 12• 유통기한(월) : 36• 유통기한(월) : 36• 박스입수 : 12• 박스입수 : 1231",
		/*32*/	"산타로사복숭아잼350g250g산타로사살구잼350g산타로사무화과잼350g복숭아 55% 함유되어 복숭아 본래의 새콤살구가 55% 함유되어 무화과 본래의 새콤무화과 57% 함유되어 무화과 본래의 새콤달콤한 맛을 즐기실 수 있는 제품달콤한 맛을 즐기실 수 있는 제품달콤한 맛을 즐기실 수 있는 제품• 유통기한(월) : 36• 유통기한(월) : 36• 유통기한(월) : 36• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12산타로사믹스베리잼350g딸기 13%, 라즈베리 13%,레드커런트 13%, 블루베리 13%함유 등 4가지의 베리가 들어 있는 제품. 베리 본래의 새콤 달콤한 맛을 즐기실 수 있는 제품• 유통기한(월) : 36• 박스입수 : 1232",
		/*33*/	"조미/향신료Seasoning/Spice레벤스바움유기농 월계수잎5g250g레벤스바움유기농 타임20g레벤스바움유기농 바질15g향신료의 어머니라고 불리는 유기농 월계독특한 향과 약간 쓰고 매운 맛이 있는 유오레가노와 비슷한 향과 상쾌한 매운맛이수잎.기농 타임 향신료있어 토마토 요리와 잘 어울리는 유기농 바서양요리의 대부분에 사용가능하며, 육수질및 소스에 이용되는 향신료• 유통기한(월) : 36• 유통기한(월) : 36• 유통기한(월) : 36• 박스입수 : 6• 박스입수 : 6• 박스입수 : 6레벤스바움유기농 오레가노15g레벤스바움유기농 파슬리15g레벤스바움유기농 로즈마리30g쾌한 매운 맛이 있어 토마토요리와 잘 어울상쾌한 방향과 독특한 풋내가 나는 유기농지중해 지역에서 자라는 민트계열의 허브리는 유기농 오레가노파슬리 향신료로 각종 요리 및 레몬쥬스, 홍차에 어울리는 유기농 로즈마리• 유통기한(월) : 36• 박스입수 : 6• 유통기한(월) : 36• 유통기한(월) : 36• 박스입수 : 6• 박스입수 : 633",
		/*34*/	"레벤스바움유기농 프로방스허브30g250g레벤스바움유기농 바비큐 시즈닝 앤 그릴링125g레벤스바움유기농 로스트 치킨 시즈닝110g오레가노, 파슬리, 바질, 타임 등 여러가지파프리카, 파슬리, 캐러웨이, 바질 등 여러파프리카, 오레가노,고수, 로즈마리 등 여허브가 혼합된 유기농 혼합 향신료가지 허브가 혼합된 유기농 혼합 향신료.러가지 허브가 혼합된 유기농 혼합 향신료.돼지고기, 소고기 육류 요리의 밑간이나 각닭, 오리 등 육류 요리의 밑간이나 구이 요종 바비큐 요리의 양념으로 사용 가능.리의 양념으로 사용.• 유통기한(월) : 36• 유통기한(월) : 36• 유통기한(월) : 30• 박스입수 : 6• 박스입수 : 6• 박스입수 : 6레벤스바움유기농 허벌소금200g레벤스바움 유기농흑후추(그라인더)45g레벤스바움 유기농흑후추(리필)50g유기농 바질, 파슬리, 오레가노, 마늘 등과수분을 풍부하게 함유한 작은 이삭 모양의수분을 풍부하게 함유한 작은 이삭 모양의소금이 혼합된유기농 함량 100%의 허브열매로 열매가 채 여물지 않을때 따서 건열매로 열매가 채 여물지 않을때 따서 건솔트조. 겉껍질이 붙은 채로 가공한 검은 후추조. 겉껍질이 붙은 채로 가공한 검은 후추로 더 맵고 향미가 강한 유기농 블랙 페퍼로 더 맵고 향미가 강한 유기농 블랙 페퍼제품.제품.• 유통기한(월) : 36• 박스입수 : 634• 유통기한(월) : 36• 유통기한(월) : 36• 박스입수 : 64012346125503 >• 박스입수 : 6",
		/*35*/	"레벤스바움 유기농믹스페퍼(그라인더)45g250g레벤스바움 유기농믹스페퍼(리필)50g적후추,백후추,녹후추의 3가지 후추를 흑적후추,백후추,녹후추의 3가지 후추를 흑후추와 혼합한 향미가 강한 유기농 향신료.후추와 혼합한 향미가 강한 유기농 향신료.• 유통기한(월) : 36• 유통기한(월) : 36• 박스입수 : 6• 박스입수 : 635",
		/*36*/	"르 게랑드 토판천일염 가는 소금250g250g르 게랑드 플뢰르 드 셀토판 천일염140g르 게랑드 토판 천일염굵은 소금(그라인더)75g게랑드 고품질의 토판 천일염을 가늘게 빻게랑드 고품질의 천일염인 플뢰르 드 셀 소게랑드 고품질의 토판 천일염을 그라인더아 놓은 제품으로 모든 국 , 무침 , 조림 ,금의 꽃 을 가공없이 담은 제품.에 담은 제품.구이등의 요리에 간편하게 사용할 수 있음.감칠맛이 뛰어난 짠맛.편리하게 감칠맛과 미네랄이 풍부한 게랑쓴맛이 없고 감칠맛이 뛰어난 제품. 사용이테이블 소금 (Table Salt)드 솔트를 직접 갈아 요리에 바로 사용 할편리한 뚜껑 용기포장으로 보관이 용이.수 있음.• 유통기한(월) : 60• 유통기한(월) : 60• 유통기한(월) : 60• 박스입수 : 12• 박스입수 : 12• 박스입수 : 6르 게랑드허브 솔트250g르 게랑드 에스쁠레뜨페퍼 솔트250g르 게랑드레귐 허브 솔트250g게랑드 소금 95% 유기농 로즈마리 , 타임게랑드 소금 96%.게랑드 소금 95%., 파슬리 , 월계수 , 바질 , 타라곤이 블랜딩프랑스 특산물인 유기농 에스쁠레뜨 고추허브와 유기농 야채가 블랜딩되어 향긋하된 제품.가 함유되어 다양한 요리에 매콤한 맛.며 풍부한 맛.샐러드 , 구운 야채요리 , 바베큐 요리에도아보카도, 계란요리 , 감자요리 , 닭 요리 ,유기농 야채와 허브로 샐러드 , 수프 , 토마사용 가능. 토마토요리 , 스프 , 쌀요리에도그릴 요리에 적합.토소스 , 파스타 소스를 만드는데 추천.• 유통기한(월) : 60• 유통기한(월) : 60• 박스입수 : 12• 박스입수 : 6활용 가능.• 유통기한(월) : 60• 박스입수 : 1236",
		/*37*/	"초콜렛류Chocolate카발리에헤즐넛 밀크 초콜릿40g250g카발리에다크 코코아 원두 85%40g카발리에프랄린 밀크초콜릿40g천연감미료인 스테비아를 사용하여 만든천연감미료인 스테비아를 사용하여 만든천연 감미료인 스테비아를 사용하여 만든벨기에 전통 초콜릿벨기에 전통 초콜릿벨기에 전통 초콜릿고소한 헤이즐넛이 함유되어 있는 밀크 초진한 맛의 다크 초콜릿 85%부드럽고 진한 맛의 밀크 초콜릿• 유통기한(월) : 18• 유통기한(월) : 18• 유통기한(월) : 14• 박스입수 : 16• 박스입수 : 16• 박스입수 : 16콜릿카발리에다크 모카40g천연 감미료인 스테비아를 사용하여 만든벨기에 전통 초콜릿깊은 풍미의 모카가 함유되어 있는 다크 초콜릿 모카• 유통기한(월) : 14• 박스입수 : 1637",
		/*38*/	"게파 유기농 다크초콜릿 85%100g(카카오 함량: 85%)게파 유기농 카카오 닙스 70%다크초콜릿 (카카오닙스 5%) 100g고급 카카오 원료를 사용한 유기농 카카오고급 카카오 원료를 사용한 유기농 카카오고급 카카오 원료를 사용한 유기농 카카오순도 85% 함량 제품.순도 70% 함량 제품.순도 38% 함량 제품.비정제 유기농 원당, 유기농 천연코코아버유기농 카카오 닙스 5% 함유, 보다 크런치유기농 카카오의 고급스럽고 부드러운 쓴맛터 사용한 식감.과 아몬드의 고소하고 달콤한 맛과 향 가미.비정제 유기농 원당, 유기농 천연코코아버비정제 유기농 원당, 유기농 천연코코아버터,터 사용유기농 바닐라 추출물, 유기농 아몬드 사용• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 12• 박스입수 : 10• 박스입수 : 10• 박스입수 : 10게파 유기농헤이즐넛 밀크초콜릿100g고급 카카오 원료를 사용한 유기농 카카오순도 38% 함량 제품.유기농 카카오의 고급스럽고 부드러운 쓴맛과 헤이즐넛의 고소하고 달콤한 맛과 향가미.• 유통기한(월) : 12• 박스입수 : 1038게파 유기농아몬드 밀크초콜릿100g250g",
		/*39*/	"돌핀밀크 초콜릿 88%70g돌핀 플뢰르 드 셀다크 초콜릿 70%70g돌핀밀크 초콜릿 38%70g다양한 초콜릿 맛을 즐길 수 있는 밀크 초초콜릿 본연의 맛을 즐길 수 있는 다크 초다양한 초콜릿 맛을 즐길 수 있는 밀크 초콜릿 대표 4종 품목.콜릿 대표 3종 품목.콜릿 대표 4종 품목.• 유통기한(월) : 18• 유통기한(월) : 18• 유통기한(월) : 18• 박스입수 : 15• 박스입수 : 15• 박스입수 : 15돌핀다크초콜릿 70%70g돌핀 카라멜마카다미아 밀크 초콜릿70g250g돌핀 솔티드버터 카라멜 밀크 초콜릿70g초콜릿 본연의 맛을 즐길 수 있는 다크 초다양한 초콜릿 맛을 즐길 수 있는 밀크 초다양한 초콜릿 맛을 즐길 수 있는 밀크 초콜릿 대표 3종 품목.콜릿 대표 4종 품목.콜릿 대표 4종 품목.• 유통기한(월) : 18• 유통기한(월) : 18• 유통기한(월) : 18• 박스입수 : 15• 박스입수 : 15• 박스입수 : 1539",
		/*40*/	"돌핀 크리스피브라우니 밀크 초콜릿70g다양한 초콜릿 맛을 즐길 수 있는 밀크 초콜릿 대표 4종 품목.• 유통기한(월) : 18• 박스입수 : 1540",
		/*41*/	"치즈/버터류cheese/butter오가닉밸리 유기농크림 치즈 스프레드 (터브)227g250g오가닉밸리 스트링글스유기농 스트링 치즈226g오가닉밸리 유기농모짜렐라치즈226g순한 맛과 뛰어난 부드러움.수분이 적고, 저지방 모짜렐라 치즈, 칼슘신선하고 가벼운 단맛과 신맛이 나며 숙성맛의 밸런스가 아주 좋고 밀크 풍미가 퍼짐.과 단백질이 풍부하여 아이들 성장에도 좋치즈의 특유의냄새가 없는 치즈.유기농 젖당을 사용하여 발라먹기 쉽게 연은 제품.수분함량이 높아 조직이 부드럽고 탄력있화 되어 있는 먹기 쉬운 크림치즈.는 치즈.• 유통기한(월) : 5• 유통기한(월) : 5• 유통기한(월) : 5• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12오가닉밸리 유기농모짜렐라 치즈 씩 컷(두꺼운 컷)170g오가닉밸리 유기농 마일드체다 치즈 씩 컷(두꺼운 컷) 170g오가닉밸리 유기농가염 버터454g신선하고 가벼운 단맛과 신맛이 나며 숙성피자, 스파게티 위에 뿌려 드시면 부드러우트랜스 지방에 제로이며 영양분이 풍부하치즈의 특유의냄새가 없는 치즈.면서도 담백한 치즈의 맛을 느끼실 수 있음.고 맛있는 유기농 버터.수분함량이 높아 조직이 부드럽고 탄력있칼슘과 단백질이 풍부하여 아이들 성장에농약잔류물,환경적 독소가 없는 안전한 친는 치즈이며, 일반 치즈의 강한 향이 없어도 좋음.환경적인 식품.• 유통기한(월) : 6• 유통기한(월) : 6• 유통기한(월) : 12• 박스입수 : 12• 박스입수 : 12• 박스입수 : 15부담없이 즐기실 수 있음.41",
		/*42*/	"오가닉밸리 유기농컬처드 무염 버터454g250g오가닉밸리 유기농리코타 치즈425g오가닉밸리 유기농파마산 치즈113g트랜스 지방 제로이며 영양분이 풍부하고치즈에서 남은 유청을 사용하지 않고, 오로미국 USDA 유기농 인증 제품으로 저온살맛있는 유기농 버터. 농약잔류물,환경적 독지 유기농 살균 무지방우유를 주 원료로 하균 유기농 저지방 우유를 사용.(유기농 함소가 없는 안전한 친환경적인 식품.여 크리미한 질감과 건강한 유기농 우유의량 95.2%)(미생물 배양균을 보호하기위해 무염처리)맛을 더한 유기농 리코타 치즈.식감이 매우 촉촉하고 진한 우유 풍미가 느100% 유기농(NO 첨가물, NON-GMO,껴지며, 보관이 용이한 용기를 사용.NO 성장호르몬, 무설탕 제품)• 유통기한(월) : 36• 유통기한(월) : 4• 유통기한(월) : 5• 박스입수 : 6• 박스입수 : 6• 박스입수 : 12퓨러티팜스 유기농기 버터212gNO 경화유, NO 콜레스테롤, NO 트렌스지방, NO 고과당 콘시럽, 글루텐프리,VEGAN, KOSHER 인증을 받은 제품.유리용기에 담겨있어 냉장고 안 다른 음식물의 냄새가 혼입될 염려가 없는 제품.• 유통기한(월) : 12• 박스입수 : 1242",
		/*43*/	"쿠킹믹스Cooking Mix파링업패뷸러스 팬케이크360g250g파링업벨지안 와플360g파링업프렌치 크레페360g우유,버터로 단 몇분 만에우유,버터로 단 몇분 만에우유,버터로 단 몇분 만에고품질 베이커리 완성.고품질 베이커리 완성.고품질 베이커리 완성.엄선된 원재료만으로 놀라운 풍미.엄선된 원재료만으로 놀라운 풍미.엄선된 원재료만으로 놀라운 풍미.먹을만큼만 사용 후 유통기한까지 간편보관.먹을만큼만 사용 후 유통기한까지 간편보관.먹을만큼만 사용 후 유통기한까지 간편보관.100% 재활용재질로 환경에도 착한 제품.100% 재활용재질로 환경에도 착한 제품.100% 재활용재질로 환경에도 착한 제품.• 유통기한(월) : 18• 유통기한(월) : 18• 유통기한(월) : 18• 박스입수 : 8• 박스입수 : 8• 박스입수 : 843",
		/*44*/	"파스타면pasta noodles뵤도유기농 스파게티500g250g뵤도유기농 스파게티니500g뵤도유기농 펜네500g유기농함량 100%, 가장 일반적인 스파게유기농함량 100%, 면의 굵기를 일반적유기농함량 100%, 면이 짧고 속이 비어티면.인 스파게티면보다 가늘게 한 제품(면 직경있으며 면 표면에 홈줄이 있는 제품.2mm)소스가 면에 잘 흡수되는 파스타면.가벼운 소스와 잘어울림.• 유통기한(월) : 36• 유통기한(월) : 36• 유통기한(월) : 36• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12뵤도유기농 스파이럴 트리컬러500g뵤도유기농 탈리아텔레250g뵤도유기농 탈리아텔레 그린250g유기농함량 100%, 유기농 시금치 및 토마유기농함량 100%, 면이 길고 편평한 모양유기농함량 100%, 면이 길고 편평한 모양토 분말로 색을 낸 용수철 모양의 파스타.의 파스타.의 파스타.고기 소스 및 토마토 소스 등과 잘 어울림유기농 시금치 분말을 첨가하여 시금치의풍부한 향이 특징인 제품.• 유통기한(월) : 36• 유통기한(월) : 36• 유통기한(월) : 36• 박스입수 : 12• 박스입수 : 12• 박스입수 : 1244",
		/*45*/	"디바리유기농 파케리500g250g넓은 구멍이 나있는 튜브모양의 파스타.디바리유기농 펜네떼500g디바리유기농 푸실리짧고 굵은 숏파스타의 일종.짧고 굵은 숏파스타의 일종.가장 유명한 이탈리아파스타.나선형모양의 파스타.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12디바리유기농 탈리올리나350g디바리유기농 리챠350g디바리유기농 스파게티롱파스타의 일종.가장자리가 프릴모양으로 되어있으며 가운면의 두께는 얇지만 넓은모양의 파스타.데는 평평한 모양의 파스타.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12500g350g롱파스타의 일종. 가장 많이 쓰이는 파스타45",
		/*46*/	"파스타소스pasta sauce카디아 유기농토마토바질 파스타소스680g250g카디아 유기농로스티드갈릭 파스타소스680g카디아 유기농마리나라 파스타소스680g입맛을 돋우는 향긋한 바질향이 풍부한 가바질과 갈락의 풍미가 더해져 한국인 입맛생선이나 고기를 마리네이드 할 때 주로 사장 대표적 파스타소스.에 맞춤인 깊은 맛의 로스티드 갈릭소스.용했던 소스.최상 품질의 완숙 유기농 토마토, 달콤한최상 품질의 완숙 유기농 토마토에 허브,최고 품질의 완숙 유기농 토마토, 달콤한바바질, 고소한 양파, 올리브 오일로 향긋한볶은 유기농마늘과 진한 올리브오일, 오레질, 고소한 양파, 올리브오일, 허브와 천천풍미의, 이탈리아 전통 레시피로 천천히 끓가노와 바질의 조화로운 풍미가 입맛을 돋히 끓여 만든 이탈리아 스타일 소스.여낸 소스.우는 전통방식 소스.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 12• 박스입수 : 1246",
		/*47*/	"오 오가닉 유기농토마토바질 파스타소스709g250g오 오가닉 유기농로스티드 갈릭 파스타소스709g오 오가닉 유기농아라비아타 파스타소스709g토마토와 최고급 엑스트라 버진 올리브유,토마토 소스에 구운마늘, 최고급 향신료를토마토소스에 유기농 고추분말 플레이크를향신료의 만남으로 가장 대중적인 맛의 유사용하여 보다 담백하게 파스타요리 가능함유하여 보다 매콤한 맛의 유기농 파스타기농 파스타 소스.한 유기농 파스타 소스.소스.• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 12• 박스입수 : 12• 박스입수 : 12오 오가닉 유기농포치즈 파스타소스709g최고급 유기농 치즈 4가지를 사용하여풍미가 가득한 파스타소스를 즐길 수 있는유기농 파스타 소스.• 유통기한(월) : 24• 박스입수 : 1247",
		/*48*/	"선물세트gift set유기농 올리브유 세트 1호250g(올리브유 1000ml x 2병) 2000ml유기농 올리브유 세트 2호(올리브유 500ml x 2병) 1000ml포도씨유 세트 2호(포도씨유 500ml x 2병)• 유통기한(월) : 24• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 6• 박스입수 : 8• 박스입수 : 8라파엘살가도미니 올리브유 5입세트90ml x 5[코코야미 유기농 코코넛오일 선물세트 2호]코코야미 유기농코코넛오일 420mlx2 840ml• 유통기한(월) : 24• 유통기한(월) : 24• 박스입수 : 8• 박스입수 : 12481000ml",
		/*49*/	"르 게랑드토판 천일염 선물세트 1호575g• 유통기한(월) : 60• 박스입수 : 12유기농 사과 식초 선물세트 1호500ml x 3(개별3종)르 게랑드토판 천일염 선물세트 2호780g250g• 유통기한(월) : 60• 박스입수 : 7유기농 사과 식초 선물세트 2호500ml x 3(사과 3종)• 유통기한(월) : 36• 유통기한(월) : 48• 박스입수 : 16• 박스입수 : 649",
		/*50*/	"STRENGTHS OF GOLDENBELL골든벨통상, 유기농 식품, 친환경 식품의 발전과 고객 건강을 위해 끊임없는 새로운상품 개발과 서비스 개선에 노력하고 있습니다.제품의 다양성물류의 효율성유기농/친환경 제품들을서울과 가까운 거리의수입하여 다양한 마케팅을 통해경기도 광주시에 상온/냉장/냉동이브랜드 빌딩 및 매출 증진가능한 자가 물류센터 운영전문적인 수입/유통전 세계 12여 개 국의 유기농, 친화경 제품을국내에 독점 수입/유통하고 있으며250여 개 유기농, 친황경 제품을 유통50",
		/*51*/	"02) 401-1295 / 서울시 송파구 가랑동 137-13, GB 타워 6층51",
		/*52*/	"GoldenBell International Co.,Ltd.골든벨통상(주)"],
	
	indexTabList : [ /** 인덱스탭 목록 */
		]
	};