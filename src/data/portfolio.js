const logotext = "Mien's";
const meta = {
    title: "ham",
    description: "아녕 나 ham 리엑트 웹사이트를 공부하면서 만든 페이지다."
};
const introdata = {
    title: "Hi! I'm ham",
    animated: {
        first: "코딩을 사랑합니다.",
        second: "리엑트도 사랑합니다.",
        third: "여러분 사랑합니다."
    },
    description: "상상한 무궁무진한 아이디어를 제가 배운 기술로 구현해가는 과정이 재밌습니다. 항상 새로운 시도를 두려워하지 않는 개발자가 되겠습니다.'smooth waters run deep' 제가 가장 좋아하는 영어 격언 입니다. 거칠고 빠르게 지나가는 물보다 잔잔하게 오랫동안 깊이 있게 흐르는 물처럼 꾸준히 공부하고, 계속 해서 나아갈 자신이 있습니다. 성실하게 쌓은 지식으로, 회사에 실질적인 도움이 되는 개발자로 일하고 싶습니다..",
    img_url: "/images/me.png"
};
const portfoliodata = {
    title: "mien's portfolio",
    description: "developer, react, nodejs, next, web and app"
}

const imgData = [
    {img: 12, category: 'web'},
    {img: 121, category: 'web'},
    {img: 221, category: 'app'},
    {img: 123, category: 'app'},
    {img: 3, category: 'mobile'},
    {img: 521, category: 'web'},
    {img: 129, category: 'mobile'},
/*     {img: 238, category: 'web'},
    {img: 172, category: 'design'},
    {img: 661, category: 'web'},
    {img: 164, category: 'app'},
    {img: 18, category: 'app'},
    {img: 199, category: 'web'},
    {img: 22, category: 'web'},
    {img: 337, category: 'design'},
    {img: 321, category: 'design'},
    {img: 164, category: 'design'},
    {img: 432, category: 'web'},
    {img: 143, category: 'app'},
    {img: 164, category: 'app'},
    {img: 120, category: 'web'},
    {img: 100, category: 'web'},
    {img: 99, category: 'app'},
    {img: 95, category: 'app'},
    {img: 10, category: 'web'},
    {img: 9, category: 'design'},
    {img: 6, category: 'web'},
    {img: 7, category: 'web'},
    {img: 3, category: 'web'},
    {img: 144, category: 'web'},
    {img: 75, category: 'app'},
    {img: 157, category: 'app'} */
]; 

const databout = {
    title: "Welcome, Mien's Portfoio",
    content: '안녕하세요? 반갑습니다.'
}
const mytimeline = [
    {
        jobtitle: "프로그래머 위크 참가",
        where: "필라델피아",
        date: 2001
    },
    {
        jobtitle: "구글 자문위원 위촉",
        where: "서울",
        date: 2010
    },
    {
        jobtitle: "네이버 웹사이트 db 제작",
        where: "서울",
        date: 2011
    },
    {
        jobtitle: "카카오톡 개발",
        where: "제주",
        date: 2012
    },    
];

/* success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger */
const myskills = [
    {
    name: "JavaScript",
    value: 99,
    variant: "success"
    },
    {
        name: 'React',
        value: 88,
        variant: "warning"
    },
    {
        name: 'React Native',
        value: 90,
        variant: "danger"
    },
    {
        name: 'nodeJS',
        value: 80,
        variant: "info"
    },
    {
        name: 'jQuery',
        value: 99,
        variant: "success"
    }
];
const services = [
    {
        title: "UI & UX Design",
        description: "대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다."
    },
    {
        title: "Mobile Apps",
        description: "대한민국의 국민이 되는 요건은 법률로 정한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다."
    },
    {
        title: "Front & Back END",
        description: "신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다. 대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다."
    }
]


const contact_config = {
    ADMIN_EMAIL: "minsu4867@naver.com",
    ADMIN_PHONE: "010-1234-5678",
    description: "신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다",
    ADMIN_SERVICED_ID: "service_mien",
    ADMIN_TEMPLATE_ID: "mien",
    ADMIN_USER_ID: "NG01dPrbn7DOMmuSt",
};

export {
    logotext,
    meta, 
    introdata,
    portfoliodata,
    imgData,
    databout,
    mytimeline,
    myskills,
    services,
    contact_config
}