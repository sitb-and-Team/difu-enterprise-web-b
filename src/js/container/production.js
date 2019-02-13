/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/12
 */
// 产品核心优势配置
var coreConfig = {
    title: '我们的优势',
    subtitle: 'Our advantage',
    config: [{
        label: '多通道支持',
        value: '对接银联和网联，支持借记卡和信用卡，支付成功率高，服务稳定',
        icon: 'icon-profits'
    }, {
        label: '定制化服务',
        value: '根据客户情况量身打造定制化解决方案，专业技术团队7x24小时服务',
        icon: 'icon-money-1'
    }, {
        label: '全平台接入',
        value: '支持APP、HTML5、WAP、PC、SDK等方式的快速接入，专人高效对接',
        icon: 'icon-coin'
    }, {
        label: '多维度风控',
        value: '完备的内外部风控系统共同发力，7x24小时全天候保障商户交易安全',
        icon: 'icon-smartphone-1'
    }, {
        label: '实时清结算',
        value: '专人后台对账，对客户交易进行清结算操作，资金到账快人一步',
        icon: 'icon-diamond'
    }, {
        label: '大客户服务',
        value: '成立大客户项目组，紧密配合开发接口、后台运维，保证VIP用户体验',
        icon: 'icon-piggy-bank'
    }]
};

$('#core').html((CoreTemplate(coreConfig)));

// banner
var bannerConfig = {
    src: 'src/img/bg-img/bg_21.jpg',
    title: '产品介绍',
    description: '上海迪付金融信息服务有限公司拥有业界一流的优质服务和产品。'
};

$('#productionBanner').html((HeaderBannerTemplate(bannerConfig)));