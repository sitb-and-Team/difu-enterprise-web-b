/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/12
 */

/**
 * 生成footer list item字符串模版
 * @param dataSource
 * @returns {string}
 */
function listItemInnerHtml(dataSource) {
    var Default_InnerHtml = '';
    for (var i = 0; i < dataSource.length; i++) {
        Default_InnerHtml += '<li><a href="' + dataSource[i].href || '#' + '">' + dataSource[i].title + '</a></li>';
    }
    return Default_InnerHtml;
}

/**
 * 导出字符串模版
 * @param dataSource
 * @returns {*}
 * @constructor
 */
function ListItemTemplate(dataSource) {
    return generateTemplate(listItemInnerHtml(dataSource));
}