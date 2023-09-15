const function_docs = [
  {
    title: "写在前面",
    content:
      "此小程序采用uts开发。uts全称uni type script，它是一门跨平台、高性能、强类型的现代编程语言。核心技术为vue3 + ts + pinia + scss，工具链采用vite进行打包构建。后端采用express(commonjs)部署在微信云托管构建后台服务。数据库提供由微信云托管提供服务，图片资源托管平台由腾讯云提供对象存储服务。",
  },
  {
    title: "碎片界面",
    content:
      "该页面类似朋友圈的功能，现已有功能仅支持开发者直接修改数据添加动态更新至页面，后续将支持特殊身份的用户发布动态。如条件、时间还会支持所有用户点赞、查看点赞总数、查看浏览量总数、进行评论等功能。",
  },
  {
    title: "足迹界面",
    content:
      "该页面记录一起去过比较有象征性的地方，每处足迹都会在地图上给出标记、支持缩放地图查看细节、支持地名搜索、支持点击某一处地点在地图上缩放至合适比例进行查看、同时每一处地点都支持直接导航去目的地，无需打开手机安装的地图app输入地点后再导航。后续将支持仅特殊身份的用户可以在本小程序里直接添加足迹，其余用户仅支持浏览查看或选择导航去目的地。",
  },
  {
    title: "菜单界面",
    content: "在该页面展示了菜单，暂未实现加入订单功能和下单功能。后续理想状态是可以直接在上面订餐以及支持在订单上进行备注，但不具备支付功能，因为支付功能需要申请主体账号，个人账号无法开通支付功能。",
  },
  {
    title: "木土界面",
    content:
      "该页面显示用户简单的基本信息，还可以查看本小程序的功能文档、更新日志，最后还支持小程序使用过程组进行问题反馈或者分享给微信好友一起使用。后续在此页面将支持更多的功能，如点餐后查看已下订单和历史订单。",
  },
  {
    title: "写在最后",
    content:
      "虽然这个小程序看起来功能十分简单，界面也不多，但是考虑到界面好看、交互动画细腻、用户等待时长短、可维护性强、部署上线架构合理、后续开发规划等，无非都需要开发者一人进行构思、编码、实践，同时开发者也想尽力将更好的产品体验带给“她”，这都需要开发者不断对程序进行打磨、反复衡量思考、甚至推翻或者重来。对于以上对小程序未来功能的构思规划，不管最终有没有实现，或者花很长时间去实现，但是首先饼还是要先画好。但最重要的是，此小程序会得到来自于“她”的程序员男友的终身维护和技术支持。（手动wink）",
  },
];

module.exports = function_docs;
