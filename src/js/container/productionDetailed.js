/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/13
 */

// banner
var bannerConfig = {
    src: 'src/img/bg-img/bg_21.jpg',
    title: '产品介绍 / 聚合支付',
    description: '上海迪付金融信息服务有限公司拥有业界一流的优质服务和产品。'
};

$('#productionDetailedBanner').html((HeaderBannerTemplate(bannerConfig)));

new fullpage('#fullpage', {
    licenseKey: '263DXXXX-B839XXXX-AE67XXXX-F398XXXX',
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    navigation: true,
    verticalCentered: false,
    navigationTooltips: ['', '核心', '实例', '']
});