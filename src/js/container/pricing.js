/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: HJF(2283785225@qq.com)
 * date: 2019/2/13
 */
var bannerConfig = {
    src: 'src/img/bg-img/bg_18.jpg',
    title: '产品性价比超高',
    description: '上海迪付金融信息服务有限公司的产品定价贴合实际，从实际出发综合评估后给出客户与我们都满意的定价'
};
$('#pricingBanner').html((HeaderBannerTemplate(bannerConfig)));

var pricingContactConfig = {
    linkTo: 'contact.html',
    title: '对我们标注的价格有疑惑？',
    button: '协议定价',
    description: '您可以联系我们，拨打我们的官方服务电话或者发邮件至我们的官方服务邮箱，我们将在收到的第一时间给您答复。'
};
$('#pricingContact').html((welcomeBannerTemplate(pricingContactConfig)));
var contentWayPoint = function() {
    var i = 0;
    $('.element-animate').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function(){

                $('body .element-animate.item-animate').each(function(k){
                    var el = $(this);
                    setTimeout( function () {
                        var effect = el.data('animate-effect');
                        if ( effect === 'fadeIn') {
                            el.addClass('fadeIn element-animated');
                        } else if ( effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft element-animated');
                        } else if ( effect === 'fadeInRight') {
                            el.addClass('fadeInRight element-animated');
                        } else {
                            el.addClass('fadeInUp element-animated');
                        }
                        el.removeClass('item-animate');
                    },  k * 100);
                });

            }, 100);

        }

    } , { offset: '95%' } );
};
contentWayPoint();