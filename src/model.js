const model = {
	bio: {
        name : 'ZhengWei Guan',
        role: 'Web Developer',
        contacts: {
            mobile: '18518761211',
            email: 'guanzhengwei520@gmail.com',
			github: 'guanzhengwei',
			githubUrl: 'https://github.com/guanzhengwei',
			weibo: 'Perception-G',
			weiboUrl: 'https://weibo.com/5269412958/profile?rightmod=1&wvr=6&mod=personinfo',
            location: 'Beijing'
        },
        welcomeMessage: "Thank you for viewing my resume",
        skills: ["HTML  CSS  JavaScript ES6", "React jQuery Ajax","webpack npm Git"],
        biopic: "avatar.jpg"
	},

	work: {
		jobs: [
			{
				employer: "人工智能学家",
				title: "内容运营",
				location: "北京",
				date: "2016.10.01 - 2018.02.28",
				description: "负责新媒体内容和市场运营工作",
				url: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIwOTA1MDAyNA==&scene=124&#wechat_redirect"
			},
			{
				employer: "太平洋电脑网",
				title: "大客户销售",
				location: "广州",
				date: "2014.10.01 - 2016.09.30",
				description: "负责太平洋电脑网的大客户开发与维护",
				url: "http://www.pconline.com.cn/"
			}
		]
	},
	
	projects: {
		project: [
			{
				title: "街区地图项目",
				date: "2018.02",
				description: "开发一个具有你所在区域或想访问的区域的地图的单页应用程序。然后，为此地图添加其他功能，包括突出显示的地点、有关这些地点的第三方数据以及浏览内容的不同方式。",
				url: 'https://guanzhengwei.github.io/street-map/',
				description_url: 'https://github.com/guanzhengwei/guanzhengwei.github.io/tree/master/street-map'
			},
			{
				title: "网站性能优化项目",
				date: "2018.01",
				description: "将优化提供的具有各种优化及性能相关问题的网站，使其达到目标的 PageSpeed 分数，并以 60 帧/秒的速度运行。",
				url: 'https://guanzhengwei.github.io/website-optimization/',
				description_url: 'https://github.com/guanzhengwei/guanzhengwei.github.io/tree/master/website-optimization'
			},
			{
				title: '经典街机游戏"青蛙过河"项目',
				date: "2017.12",
				description: "将获得可视化资源和游戏循环引擎；使用这些工具时，你必须向游戏添加一系列实体（包括玩家角色和敌人），以重新创建经典街机游戏'青蛙过河'",
				url: 'https://guanzhengwei.github.io/frogger-game/',
				description_url: 'https://github.com/guanzhengwei/guanzhengwei.github.io/tree/master/frogger-game'
			}
		]
	},	
	
	education: {
		schools: [
			{
				name: "湖北汽车工业学院",
				location: "湖北十堰市",
				degree: "本科",
				major: "工业工程",
				date: "2010.9-2014.9",
				url: "http://www.huat.edu.cn/"
			}
		],
		onlineCourses: [
			{
				title: "前端开发(进阶)",
				school: "Udacity",
				date: "2018.03.27",
				url: 'https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-advanced',
				certificateUrl: "https://graduation.udacity.com/confirm/GLHFDZUV"
			},
			{
				title: "前端开发(入门)",
				school: "Udacity",
				date: "2017.11.23",
				url: 'https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic',
				certificateUrl: "https://graduation.udacity.com/confirm/URKJNDYZ"
			},
			{
				title: "编程入门(纳米学位)",
				school: "Udacity",
				date: "2017.03.22",
				url: 'https://cn.udacity.com/course/intro-to-programming-nanodegree--nd000-cn-basic',
				certificateUrl: "https://confirm.udacity.com/JTARPGLY"
			}
		]
	}
}

export default model;