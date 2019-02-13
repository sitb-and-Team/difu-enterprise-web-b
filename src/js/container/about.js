/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/13
 */
var bannerConfig = {
    src: 'src/img/bg-img/bg_20.jpg',
    title: '企业介绍',
    description: '上海迪付金融信息服务有限公司以诚信、实力和产品质量获得业界的高度认可。欢迎各界朋友莅临参观、指导和业务洽谈。'
};
$('#aboutBanner').html((HeaderBannerTemplate(bannerConfig)));

$(".roadmap-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 30,
    autoplay: true,
    autoplayspeed: 1000,
    navText: ['<i class="fa fa-long-arrow-left nav-left-model">', '<i class="fa fa-long-arrow-right nav-right-model">'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});