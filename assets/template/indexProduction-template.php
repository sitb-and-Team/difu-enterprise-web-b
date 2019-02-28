<?php
/**
 * Created by IntelliJ IDEA.
 * User: 黄金芳
 * Date: 2019/2/21
 * Time: 9:44
 */

/**
 * Template Name: production模板
 */
?>
<?php
$homeUri = get_site_url();
$args = array(

    array(
        'href' => $homeUri.'/production/detailed',
        'src' => '/assets/img/production/about-icon-1.png',
        'label' => '聚合支付',
        'value' => '实现全渠道支付接入，也可以在已有支付方式上叠加其他支付通道，延伸原有机具业务场景，快速实现全渠道支付.'
    ),
    array(
        'href' => $homeUri.'/production/detailed',
        'src' => '/assets/img/production/about-icon-2.png',
        'label' => '聚合支付',
        'value' => '基于PC平台的网上系统对接和部署，使商户能够通过银行卡和数字钱包在互联网上完成支付交易.'
    ),
    array(
        'href' => $homeUri.'/production/detailed',
        'src' => '/assets/img/production/about-icon-3.png',
        'label' => '数据查询',
        'value' => '提供商户入网、商户管理、交易数据查询、对账报表下载等功能.'
    ),
    array(
        'href' => $homeUri.'/production/detailed',
        'src' => '/assets/img/production/about-icon-1.png',
        'label' => '会员账户系统',
        'value' => '基于账户提供充值、提现、担保交易、订单分账等服务，为企业解决业务合规性、用户管理、账户管理、安全保障等问题.'
    ),
    array(
        'href' => $homeUri.'/production/detailed',
        'src' => '/assets/img/production/about-icon-3.png',
        'label' => '预付费卡系统',
        'value' => '多用途便民预付消费卡，持卡人可在签约商户进行刷卡消费，是企事业单位商务往来、福利发放、礼品馈赠的上乘佳品.'
    ),
    array(
        'href' => $homeUri.'production/detailed',
        'src' => '/assets/img/production/about-icon-2.png',
        'label' => '代收代付系统',
        'value' => '向已授权的账户发起实时或批量的收付费指令，能够安全、准确地完成收付费单位发起的委托收款、付款指令.'
    ));
$titles = array(
    'title' => '核心产品',
    'subTitle' => 'Core production',
);
productionTemplate($args, $titles);
?>