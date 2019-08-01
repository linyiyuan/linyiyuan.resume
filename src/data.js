import eJm from './assets/logo_jm.png';
import eLt from './assets/logo_lt.png';
import bootplus from './assets/appgame.png';
import community_new from './assets/community-new.png';
import hdadmin from './assets/hdadmin.png';
import laravel_admin_template from './assets/laravel_admin_template.png';
import vue_admin_template from './assets/vue_admin_template.png';
import linyiyuan_top from './assets/linyiyuan_top.png';
import blog from './assets/blog.png';
import laravel_amaze_ui from './assets/laravel_amaze_ui.png';

import dHome from './assets/d_home.svg';
import dSkills from './assets/d_skills.svg';
import dExp from './assets/d_exp.svg';
import dWorks from './assets/d_works.svg';
import dContact from './assets/d_contact.svg';
import sGithub from './assets/s_github.svg';
import sWeiBo from './assets/s_wb.svg';
// import sSf from './assets/s_sf.svg';
import sBlog from './assets/s_blog.svg';
import sZh from './assets/s_zh.svg';
// import sJj from './assets/s_Jj.svg';
import SGitee from "./assets/s_gitee.svg"
import SJianshu from "./assets/s_jianshu.svg"
import SCSDN from "./assets/s_csdn.svg"

export default {
  cn: {
    header: {
      langList: ['中', '英'],
      titleList: [{
          svg: dHome,
          title: '首页'
        },
        {
          svg: dSkills,
          title: '能力'
        },
        {
          svg: dExp,
          title: '经历'
        },
        {
          svg: dWorks,
          title: '作品集'
        },
        {
          svg: dContact,
          title: '联系我'
        }
      ]
    },
    footer: ['Released under the MIT License', 'All Rights Reserved ', 'Copyright © 2014-2019 Bryce Lin'],
    overview: {
      infoList: ['22岁', '大专', '广州', '在职'],
      quote: '生活是一种绵延不绝的渴望，渴望不断上升，变得更伟大而高贵。',
      desList: ['我叫林益远，PHP开发工程师', '广州司睿网络有限公司','linyiyuann@163.com'],
    },
    skill: {
      outCircleList: [{
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'Java'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'SpringBoot'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: 'SpringCloud'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: 'RabbitMQ'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'MyBatis'
        },
        {
          bg: {
            backgroundColor: 'rgba(172,223,159,0.8)'
          },
          name: 'Linux'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: '小程序'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'Vue'
        }
      ],
      innerCircleList: [{
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: 'MySQL'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: 'Redis'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: 'GitHub'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: 'Nacos'
        }
      ],
      desList: [
        '一年PHP+Mysql开发经验，半年VueJs开发经验',
        '实际主导开发过多个项目项目（CRM系统, 聚合支付，公众号开发,游戏接口开发)',
        '主要涉及技术：PHP后端开发、Crm系统开发、Laravel、公众号开发、Linux',
        '擅长组件开发及构建优化，前端技术栈均有尝试，能脱离库书写代码',
        '有良好的文档编写和代码书写规范，能独立解决问题、百折不挠、细节控'
      ],
      links: [{
        title: '● GitHub',
        des: 'https://github.com/linyiyuan',
        url: 'https://github.com/linyiyuan'
      }, {
        title: '● 个人博客',
        des: 'https://linyiyuan.github.io',
        url: 'https://linyiyuan.github.io'
      }]
    },
    exp: {
      expList: [
        {
          title: '司睿游戏',
          time: '2019年1月~至今',
          post: 'PHP后端开发工程师',
          img: {
            backgroundImage: `url(${eJm})`
          },
          contentList: ['负责游戏中心服接口开发', '负责游戏后台CRM的前后端开发', '使用Linux命令完成日常系统的部署及维护工作']
        },
        {
          title: '任玩传媒',
          time: '2018年3月-2018年12月',
          post: 'PHP开发工程师',
          img: {
            backgroundImage: `url(${eLt})`
          },
          contentList: ['负责公司主站的日常开发维护', '媒体数据采集', '负责游戏渠道SDK接口接入，游戏平台后端服务搭建', '公司外包项目的接口开发']
        },
      ]
    },
    works: {
      worksList: [{
          title: '任玩传媒主站',
          des: '基于WordPress 开发的一个专题主站',
          url: 'http://www.appgame.com',
          img: {
            src: `${bootplus}`,
            alt: '基于WordPress 开发的一个专题主站'
          },
        },
        {
          title: '最强NBA社区后台管理（community-new）',
          des: '基于Laravel5.5开发的一套社区后台管理',
          url: 'https://github.com/linyiyuan/community-new',
          img: {
            src: `${community_new}`,
            alt: '基于Laravel5.5开发的一套社区后台管理'
          }
        },
        { 
          title: '任玩传媒活动后台',
          des: '任玩传媒活动后台，主要用于数据采集',
          url: 'http://hdadmin.appgame.com',
          img: {
            src: `${hdadmin}`,
            alt: '任玩传媒活动后台，主要用于数据采集方面'
          }
        },
        {
          title: 'laravel-admin-template',
          des: '🚀 基于laravel5.6开发的一套前后端分离项目的后端接口。 目前含有用户管理， 角色管理， 权限控制, 系统日志 的一个接口框架',
          url: 'https://github.com/linyiyuan/laravel-admin-template',
          img: {
            src: `${laravel_admin_template}`,
            alt: '🚀 基于laravel5.6开发的一套前后端分离项目的后端接口。 目前含有用户管理， 角色管理， 权限控制, 系统日志 的一个接口框架'
          }
        },  
        {
          title: 'vue-admin-template',
          des: '基于Vue+Element开发的一套前后端分离项目的前端资源。 目前含有用户管理， 角色管理， 权限控制, 系统日志 的一个后台框架，该项目需要请求后台接口',
          url: 'https://github.com/linyiyuan/vue-admin-template',
          img: {
            src: `${vue_admin_template}`,
            alt: '基于Vue+Element开发的一套前后端分离项目的前端资源。 目前含有用户管理， 角色管理， 权限控制, 系统日志 的一个后台框架，该项目需要请求后台接口'
          }
        },
        {
          title: 'laravel-blog',
          des: '个人博客网站（旧）',
          url: 'http://www.linyiyuan.top',
          img: {
            src: `${linyiyuan_top}`,
            alt: '个人博客网站'
          }
        },
        {
          title: '个人博客网站(新)',
          des: 'Choice→選の博客的技术博客网站',
          url: 'https://linyiyuan.github.io/',
          img: {
            src: `${blog}`,
            alt: 'Choice→選の博客的技术博客网站'
          }
        },
        {
          title: 'Laravel-Amaze-UI',
          des: '使用laravel+amaze ui 搭建的一个后台管理，目前已有，权限控制，登录验证，系统日志模块',
          url: 'https://github.com/linyiyuan/Laravel-Amaze-UI',
          img: {
            src: `${laravel_amaze_ui}`,
            alt: '使用laravel+amaze ui 搭建的一个后台管理，目前已有，权限控制，登录验证，系统日志模块'
          }
        }
      ],
      viewMore: '前往GitHub上查看更多'
    },
    contact: {
      title: '联系我',
      desList1: ['极客', '技术', '梦想', '未来'],
      desList2: ['喜欢尝试，期待新鲜事物', '编程即兴趣，兴趣即未来', '行路有良友，便是捷径', '带上我吧，一起看到更大的世界'],
      download: '下载简历',
      fileList: [{
          title: 'HTML版',
          url: ''
        },
        {
          title: 'PDF版',
          url: ''
        }
      ],
      typeList: [{
          title: 'GitHub',
          icon: sGithub,
          url: 'https://github.com/linyiyuan'
        },
        {
          title: '码云',
          icon: SGitee,
          url: 'https://gitee.com/linyiyuan'
        },
        {
          title: '个人博客',
          icon: sBlog,
          url: 'https://linyiyuan.gitee.io'
        },
        {
          title: '知乎',
          icon: sZh,
          url: 'https://www.zhihu.com/people/lin-yi-yuan-35-45'
        },
        {
          title: '微博',
          icon: sWeiBo,
          url: 'https://weibo.com/u/3118916401'
        }
      ],
      // links: [{
      //   title: '● 开发笔记',
      //   des: 'https://zhousiwei.gitee.io/linyiyuan_top',
      //   url: 'https://zhousiwei.gitee.io/linyiyuan_top'
      // }]
    }
  },
  // en: {
  //   header: {
  //     langList: ['CN', 'EN'],
  //     titleList: [{
  //         svg: dHome,
  //         title: 'home'
  //       },
  //       {
  //         svg: dSkills,
  //         title: 'skills'
  //       },
  //       {
  //         svg: dExp,
  //         title: 'exp'
  //       },
  //       {
  //         svg: dWorks,
  //         title: 'works'
  //       },
  //       {
  //         svg: dContact,
  //         title: 'contact'
  //       }
  //     ]
  //   },
  //   footer: ['Released under the Apache License', 'All Rights Reserved'],
  //   overview: {
  //     infoList: ['23years', 'B.S.', 'Hangzhou', 'On Job'],
  //     quote: 'Not impetuous, not extreme, love programming, love back end, love new technology, love sports, execution and learning ability are awesome!',
  //     desList: ['My name is Zhou siwei, a Java software engineer', 'Hangzhou TEYANG network technology co., LTD', '2434387555@qq.com']
  //   },
  //   skill: {
  //     outCircleList: [{
  //         bg: {
  //           backgroundColor: 'rgba(121,100,102,0.8)'
  //         },
  //         name: 'Java'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(49,65,82,0.8)'
  //         },
  //         name: 'SpringBoot'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(193,131,106,0.8)'
  //         },
  //         name: 'SpringCloud'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(117,148,179,0.8)'
  //         },
  //         name: 'RabbitMQ'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(147,147,189,0.8)'
  //         },
  //         name: 'MyBatis'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(172,223,159,0.8)'
  //         },
  //         name: 'Linux'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(66,66,66,0.8)'
  //         },
  //         name: 'miniP'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(71,83,94,0.8)'
  //         },
  //         name: 'Vue'
  //       }
  //     ],
  //     innerCircleList: [{
  //         bg: {
  //           backgroundColor: 'rgba(179,164,140,0.8)'
  //         },
  //         name: 'MySQL'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(171,209,220,0.8)'
  //         },
  //         name: 'Redis'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(238,215,163,0.8)'
  //         },
  //         name: 'GitHub'
  //       },
  //       {
  //         bg: {
  //           backgroundColor: 'rgba(207,184,178,0.8)'
  //         },
  //         name: 'Nacos'
  //       }
  //     ],
  //     desList: [
  //       'My name is Zhou siwei, 23 years old, located in hangzhou, and I am a Java software engineer with three years of Java EE experience.',
  //       'Familiar with the whole process of software development, with strong logical thinking ability',
  //       'Mainly involved in technology: Java back-end development, aggregation payment, public account development, open source enthusiasts, Linux',
  //       'Good documentation and code writing skills, able to solve problems independently, persistent and detail-oriented'
  //     ],
  //     links: [{
  //       title: '● Github',
  //       des: 'https://github.com/JoeyBling',
  //       url: 'https://github.com/JoeyBling'
  //     }, {
  //       title: '● Technical Notes',
  //       des: 'https://zhousiwei.gitee.io/linyiyuan_top/',
  //       url: 'https://zhousiwei.gitee.io/linyiyuan_top/'
  //     }]
  //   },
  //   exp: {
  //     expList: [{
  //         title: 'Hangzhou TEYANG network technology co., LTD',
  //         time: '2019.04-Now',
  //         post: 'Technical department /Java software engineer',
  //         img: {
  //           backgroundImage: `url(${hzty})`
  //         },
  //         contentList: ['Using high concurrency, Multithreading provides solutions for (Internet + healthcare)', 'Responsible for technical documentation related to product or project', 'Use Linux command to complete daily system deployment and maintenance work']
  //       },
  //       {
  //         title: 'Jiangxi 3xData information technology co. LTD',
  //         time: '2017.12-2019.03',
  //         post: 'Technical department /Java software engineer',
  //         img: {
  //           backgroundImage: `url(${txdata})`
  //         },
  //         contentList: ['Using SSM, SpringCloud, Nacos, VueJS and other cutting-edge development technologies', 'Excellent employee certificate awarded and sealed by the company', 'Interface with front-end developers to solve bugs raised by testers']
  //       },
  //       {
  //         title: 'Jiangxi yiqiang weiying information technology co., LTD',
  //         time: '2016.06-2017.11',
  //         post: 'Technical department /Java software engineer',
  //         img: {},
  //         contentList: ['Participate in the discussion of related project requirements, outline design, and complete the core code writing', 'Development with SpringBoot, SpringMVC and Mybatis', 'Continuous code reconstruction and optimization, analysis of system deficiencies, improve system performance']
  //       }
  //     ]
  //   },
  //   works: {
  //     worksList: [{
  //         title: 'bootplus',
  //         des: 'A privilege management framework based on SpringBoot + Shiro + MyBatisPlus',
  //         url: 'https://gitee.com/zhousiwei/bootplus',
  //         img: {
  //           src: `${bootplus}`,
  //           alt: 'A privilege management framework based on SpringBoot + Shiro + MyBatisPlus'
  //         },
  //       },
  //       {
  //         title: 'SpringBoot integration MyBatisPlus',
  //         des: 'SpringBoot integration with MyBatisPlus integration with Shiro allows rapid development',
  //         url: 'https://gitee.com/zhousiwei/community_new',
  //         img: {
  //           src: `${community_new}`,
  //           alt: 'SpringBoot integration with MyBatisPlus integration with Shiro allows rapid development'
  //         }
  //       },
  //       {
  //         title: 'fastjson-spring-boot-starter',
  //         des: 'Spring boot starter for fastjson',
  //         url: 'https://gitee.com/zhousiwei/fastjson-spring-boot-starter',
  //         img: {
  //           src: `${hdadmin}`,
  //           alt: 'Spring boot starter for fastjson'
  //         }
  //       },
  //       {
  //         title: 'laravel_admin_template',
  //         des: 'Web kettle developed a set of distributed integrated scheduling, management,ETL development user professional B/S architecture tools',
  //         url: 'https://github.com/JoeyBling/laravel_admin_template',
  //         img: {
  //           src: `${laravel_admin_template}`,
  //           alt: 'Web kettle developed a set of distributed integrated scheduling, management,ETL development user professional B/S architecture tools'
  //         }
  //       },
  //       {
  //         title: 'vue_admin_template',
  //         des: 'A dynamic resume',
  //         url: 'https://zhousiwei.gitee.io/vue_admin_template/index.html',
  //         img: {
  //           src: `${vue_admin_template}`,
  //           alt: 'A dynamic resume'
  //         }
  //       },
  //       {
  //         title: 'linyiyuan_top',
  //         des: 'Record technical development notes with VuePress',
  //         url: 'https://zhousiwei.gitee.io/linyiyuan_top',
  //         img: {
  //           src: `${linyiyuan_top}`,
  //           alt: 'Record technical development notes with VuePress'
  //         }
  //       },
  //       {
  //         title: 'Personal blog site',
  //         des: 'My blog site',
  //         url: 'https://zhousiwei.gitee.io/',
  //         img: {
  //           src: `${blog}`,
  //           alt: 'My blog site'
  //         }
  //       },
  //       {
  //         title: 'laravel_amaze_ui',
  //         des: 'Use GitBook to record development notes',
  //         url: 'https://joeybling.github.io/laravel_amaze_ui',
  //         img: {
  //           src: `${laravel_amaze_ui}`,
  //           alt: 'Use GitBook to record development notes'
  //         }
  //       }
  //     ],
  //     viewMore: 'Check out more on My GitHub'
  //   },
  //   contact: {
  //     title: 'Contact Me',
  //     desList1: ['INSPIRATION', 'CODE', 'DREAM', 'FUTURE'],
  //     desList2: [
  //       'Like to try, look forward to something new',
  //       'Programming is interested, interest is the future',
  //       'Line road friends, is a shortcut',
  //       'With me, see the bigger world together'
  //     ],
  //     download: 'Download resume',
  //     fileList: [{
  //         title: 'HTML',
  //         url: ''
  //       },
  //       {
  //         title: 'PDF',
  //         url: ''
  //       }
  //     ],
  //     typeList: [{
  //         title: 'GitHub',
  //         icon: sGithub,
  //         url: 'https://github.com/JoeyBling'
  //       },
  //       {
  //         title: 'Gitee',
  //         icon: SGitee,
  //         url: 'https://gitee.com/zhousiwei'
  //       },
  //       {
  //         title: 'Blog',
  //         icon: sBlog,
  //         url: 'https://zhousiwei.gitee.io'
  //       },
  //       {
  //         title: 'Jianshu',
  //         icon: SJianshu,
  //         url: 'https://www.jianshu.com/u/02cbf31a043a'
  //       },
  //       {
  //         title: 'CSDN',
  //         icon: SCSDN,
  //         url: 'https://blog.csdn.net/qq_30930805'
  //       },
  //       {
  //         title: 'ZhiHu',
  //         icon: sZh,
  //         url: 'https://www.zhihu.com/people/joeybling'
  //       },
  //       {
  //         title: 'WeiBo',
  //         icon: sWeiBo,
  //         url: 'http://weibo.com/jayinfo'
  //       }
  //     ],
  //     links: [{
  //       title: '● Development Notes',
  //       des: 'https://zhousiwei.gitee.io/linyiyuan_top',
  //       url: 'https://zhousiwei.gitee.io/linyiyuan_top'
  //     }]
  //   }
  // }
};