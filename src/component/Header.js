/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/11
 */

function headerInnerHtml() {
    var address = '浦东新区，芳华路139号';
    var email = 'shangfudata@com';
    var phone = '4000591990';
    return '    <header class="header-area">\n' +
        '        <!-- Top Header Area -->\n' +
        '        <div class="top-header-area">\n' +
        '            <div class="container h-100">\n' +
        '                <div class="row h-100 align-items-center">\n' +
        '                    <div class="col-12 d-flex justify-content-between">\n' +
        '                        <!-- Logo Area -->\n' +
        '                        <div class="logo">\n' +
        '                            <a href="index.html"><img src="src/img/core-img/logo.png" alt=""></a>\n' +
        '                        </div>\n' +
        '                        <!-- Top Contact Info -->\n' +
        '                        <div class="top-contact-info d-flex align-items-center">\n' +
        '                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="' + address + '"><img src="src/img/core-img/placeholder.png" alt=""> <span>' + address + '</span></a>\n' +
        '                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="' + email + '"><img src="src/img/core-img/message.png" alt=""> <span>' + email + '</span></a>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <!-- Navbar Area -->\n' +
        '        <div class="credit-main-menu" id="sticker">\n' +
        '            <div class="classy-nav-container breakpoint-off">\n' +
        '                <div class="container" style="padding:0">\n' +
        '                    <!-- Menu -->\n' +
        '                    <nav class="classy-navbar justify-content-between" id="creditNav">\n' +
        '                        <!-- Navbar Toggler -->\n' +
        '                        <div class="classy-navbar-toggler">\n' +
        '                            <span class="navbarToggler"><span></span><span></span><span></span></span>\n' +
        '                        </div>\n' +
        '                        <!-- Menu -->\n' +
        '                        <div class="classy-menu">\n' +
        '                            <!-- Close Button -->\n' +
        '                            <div class="classycloseIcon">\n' +
        '                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>\n' +
        '                            </div>\n' +
        '                            <!-- Nav Start -->\n' +
        '                            <div class="classynav">\n' +
        '                                <ul>\n' +
        '                                    <li class="nav-item"><a class="nav-link index active" href="index.html">首页</a></li>\n' +
        '                                    <li class="nav-item"><a class="nav-link" href="about.html">企业介绍</a></li>\n' +
        '                                    <li class="nav-item"><a class="nav-link" href="production.html">产品介绍</a></li>\n' +
        '                                    <li class="nav-item"><a class="nav-link" href="industrySolution.html">行业解决方案</a></li>\n' +
        '                                    <li class="nav-item"><a class="nav-link" href="pricing.html">产品定价</a></li>\n' +
        '                                    <li class="nav-item"><a class="nav-link" href="#">开发者中心</a>\n' +
        '                                        <div class="megamenu">\n' +
        '                                            <ul class="single-mega cn-col-4">\n' +
        '                                                <li><a href="#">概述和基础</a></li>\n' +
        '                                            </ul>\n' +
        '                                            <ul class="single-mega cn-col-4">\n' +
        '                                                <li><a href="#">接入</a></li>\n' +
        '                                            </ul>\n' +
        '                                            <ul class="single-mega cn-col-4">\n' +
        '                                                <li><a href="#">调试</a></li>\n' +
        '                                            </ul>\n' +
        '                                            <ul class="single-mega cn-col-4">\n' +
        '                                                <li><a href="#">论坛</a></li>\n' +
        '                                            </ul>\n' +
        '                                        </div>\n' +
        '                                    </li>\n' +
        '                                    <li class="nav-item helpCenter"><a class="nav-link" href="#">帮助中心</a>\n' +
        '                                        <div class="megamenu">\n' +
        '                                            <ul class="single-mega cn-col-4">\n' +
        '                                                <li><a href="#">了解并开始使用</a></li>\n' +
        '                                                <li><a href="#">产品介绍</a></li>\n' +
        '                                                <li><a href="#">商务接入流程</a></li>\n' +
        '                                                <li><a href="#">接入的产品能够解决怎样的问题</a></li>\n' +
        '                                                <li><a href="#">初步接入过程中需要注意的关键点</a></li>\n' +
        '                                            </ul>\n' +
        '                                            <ul class="single-mega cn-col-4">\n' +
        '                                                <li><a href="#">账户管理/管理平台</a></li>\n' +
        '                                                <li><a href="#">注册信息修改</a></li>\n' +
        '                                                <li><a href="#">账户查询</a></li>\n' +
        '                                                <li><a href="#">数据服务</a></li>\n' +
        '                                                <li><a href="#">订单查询</a></li>\n' +
        '                                            </ul>\n' +
        '                                            <ul class="single-mega cn-col-4">\n' +
        '                                                <li><a href="#">接入开发</a></li>\n' +
        '                                                <li><a href="#">参数的配置</a></li>\n' +
        '                                                <li><a href="#">报错数据查询</a></li>\n' +
        '                                                <li><a href="#">返回码汇总</a></li>\n' +
        '                                                <li><a href="#">接入流程问题</a></li>\n' +
        '                                                <li><a href="#">其他常见问题</a></li>\n' +
        '                                            </ul>\n' +
        '                                            <ul class="single-mega cn-col-4">\n' +
        '                                                <li><a href="#">费用</a></li>\n' +
        '                                                <li><a href="#">支付通道标准费用</a></li>\n' +
        '                                                <li><a href="#">我司收费</a></li>\n' +
        '                                                <li><a href="#">关于发票</a></li>\n' +
        '                                                <li><a href="#">其他</a></li>\n' +
        '                                            </ul>\n' +
        '                                        </div>\n' +
        '                                    </li>\n' +
        '                                    <li class="nav-item"><a class="nav-link" href="post.html">论坛</a></li>\n' +
        '                                    <li class="nav-item"><a class="nav-link" href="joinUs.html">加入我们</a></li>\n' +
        '                                    <li class="nav-item"><a class="nav-link" href="login.html">登录</a></li>\n' +
        '                                    <li class="nav-item"><a class="nav-link" href="#">Pages</a>\n' +
        '                                        <ul class="dropdown">\n' +
        '                                            <li><a href="index.html">Home</a></li>\n' +
        '                                            <li><a href="about.html">About Us</a></li>\n' +
        '                                            <li><a href="production.html">Services</a></li>\n' +
        '                                            <li><a href="post.html">Post</a></li>\n' +
        '                                            <li><a href="single-post.html">Single Post</a></li>\n' +
        '                                            <li><a href="contact.html">Contact</a></li>\n' +
        '                                            <li><a href="elements.html">Elements</a></li>\n' +
        '                                        </ul>\n' +
        '                                    </li>\n' +
        '                                </ul>\n' +
        '                            </div>\n' +
        '                            <!-- Nav End -->\n' +
        '                        </div>\n' +
        '                        <!-- Contact -->\n' +
        '                        <div class="contact">\n' +
        '                            <a href="#"><img src="src/img/core-img/call2.png" alt=""> ' + phone + '</a>\n' +
        '                        </div>\n' +
        '                    </nav>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </header>';
}

$(function () {
    var $nowHref = window.location.href.split('/').pop();
    var $nowHrefLink = $nowHref.split('?')[0];
    $('.nav-link').each(function () {
        var $this = $(this);
        var $thisHref = $this.attr('href');
        if ($thisHref === $nowHref || $thisHref === $nowHrefLink) {
            $this.addClass('active');
            $this.siblings('a').removeClass('active');
            if ($thisHref !== 'index.html') {
                $('.nav-item .index').removeClass('active');
            }
        }
    });
});

function HeaderTemplate() {
    return generateTemplate(headerInnerHtml());
}