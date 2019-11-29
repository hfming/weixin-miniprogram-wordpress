/*
 * 
 * WordPres版微信小程序
 * author: jianbo
 * organization: 守望轩  www.watch-life.net
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * 开源协议：MIT
 * Copyright (c) 2017 https://www.watch-life.net All rights reserved.
 */


//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.watch-life.net/blog"
var DOMAIN = "www.hfming.com";
var MINAPPTYPE = "1";//小程序的类型，如果是企业小程序请填：0 ，如果是个人小程序请填：1
var WEBSITENAME = "青泉博客"; //网站名称
//var ABOUTID = 1136; //小程序“关于”页面的id,此id是wordpress网站"页面"的id,注意这个"页面"是wordpress的"页面"，不是"文章"
var PAGECOUNT = '20'; //每页文章数目
//CATEGORIESID 指定为all或者指定具体的分类id，请选择其一。
var CATEGORIESID = 'all';  //专题页显示全部的分类
//var CATEGORIESID = '1,1059,98,416,189,374,6,463';//指定专题页显示的分类的id
//INDEXLISTTYPE 指定为all或者指定具体的分类id，请选择其一。
var INDEXLISTTYPE = "all"; //首页显示所有分类
//var INDEXLISTTYPE ="11" //指定首页显示分类的id
var PAYTEMPPLATEID = 'hzKpxuPF2rw7O-qTElkeoE0lMwr0O4t9PJkLyt6v8rk';//鼓励消息模版id
var REPLAYTEMPPLATEID = 'IiAVoBWP34u1uwt801rI_Crgen7Xl2lvAGP67ofJLo8';//回复评论消息模版id
var ZANIMAGEURL = 'https://hfm-wp.oss-cn-hangzhou.aliyuncs.com/wp-content/uploads/2019/11/%E5%BE%AE%E4%BF%A1.jpg';//微信鼓励的图片链接，用于个人小程序的赞赏
var LOGO = 'https://hfm-wp.oss-cn-hangzhou.aliyuncs.com/%E5%85%B6%E4%BB%96/%E5%9B%BE%E6%A0%872.jpg'; // 网站的logo图片
//设置downloadFile合法域名,不带https ,在中括号([])里增加域名，格式：{id=**,domain:'www.**.com'}，用英文逗号分隔。
//此处设置的域名和小程序与小程序后台设置的downloadFile合法域名要一致。
var DOWNLOADFILEDOMAIN = [
 { id: 1, domain: 'www.hfming.com' }

];

export default {
 getDomain: DOMAIN,
 getWebsiteName: WEBSITENAME,
 getPayTemplateId: PAYTEMPPLATEID,
 getPageCount: PAGECOUNT,
 getCategoriesID :CATEGORIESID,
 getReplayTemplateId: REPLAYTEMPPLATEID,
 getMinAppType: MINAPPTYPE,
 getZanImageUrl: ZANIMAGEURL,
 getIndexListType: INDEXLISTTYPE,
 getLogo: LOGO,
 getDownloadFileDomain: DOWNLOADFILEDOMAIN
}