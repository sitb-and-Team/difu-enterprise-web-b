/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/12
 * 产品快速接入通道
 */

/**
 * 核心产品展示 快速接入通道字符串模版
 * @param dataSource
 * @returns {string}
 */
function productionInnerHtml(dataSource) {
    var Default_Html = '';
    for (var i = 0; i < dataSource.length; i++) {
        Default_Html += '<div class="col-lg-4">\n' +
            '                <a href="' + dataSource[i].href + '" class="single-about">\n' +
            '                    <div class="single-about-img">\n' +
            '                        <img src="' + dataSource[i].src + '" alt="">\n' +
            '                    </div>\n' +
            '                    <div class="single-about-text">\n' +
            '                        <h4>' + dataSource[i].label + '</h4>\n' +
            '                        <p>' + dataSource[i].value + '</p>\n' +
            '                    </div>\n' +
            '                </a>\n' +
            '            </div>';
    }
    return '<div class="single-about-area wow fadeInUp">\n' +
        '    <div class="container">\n' +
        '        <div class="row">' + Default_Html + '</div>' +
        '    </div>' +
        '  </div>';
}

/**
 * 导出核心产品 模版
 * @param dataSource 数据格式为 [{href: string, src: string, label: string, value: string}]
 * @returns {*}
 * @constructor
 */
function ProductionTemplate(dataSource) {
    return generateTemplate(productionInnerHtml(dataSource));
}