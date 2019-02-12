/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/11
 */

// 产品核心优势配置
var coreConfig = {
    title: '核心实力',
    subtitle: 'Core strength',
    config: [{
        label: '多样化支付解决方案',
        value: '兼容微信、支付宝等市场主流支付工具,为50万中小企业提供一体化的O2O金融服务。',
        icon: 'icon-profits'
    }, {
        label: '8年系统安全运营保障',
        value: '国内领先的金融系统安全保障，历经八年线上线下数千亿元的业务规模考验。',
        icon: 'icon-money-1'
    }, {
        label: '全国渠道掌控',
        value: '积累了17年渠道合作经验，近600个全国一级二级代理商，2万多个全国经销网点。',
        icon: 'icon-coin'
    }, {
        label: '全牌照覆盖',
        value: '拥有全国性线上/线下支付和预付费卡牌照人民币外汇结算牌照，小贷牌照。',
        icon: 'icon-smartphone-1'
    }, {
        label: '实时清结算',
        value: '专人后台对账，对客户交易进行清结算操作，资金到账快人一步',
        icon: 'icon-diamond'
    }, {
        label: '支付服务',
        value: '我们的解决方案能够为客户提供无缝、便捷及安全的支付方式',
        icon: 'icon-piggy-bank'
    }]
};

$('#core').html((CoreTemplate(coreConfig)));