const Storage_Bucket_Url = require("../config/url.cjs");
const trends = [
  {
    id: 1,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年03月18日",
    tags: ["初次见面"],
    content: "打卡乐山大佛、张公桥好吃街、世豪广场音乐露天酒吧。",
    images: [
      Storage_Bucket_Url + "/2023/03-18(1).JPG",
      Storage_Bucket_Url + "/2023/03-18(2).JPG",
      Storage_Bucket_Url + "/2023/03-18(3).JPG",
      Storage_Bucket_Url + "/2023/03-18(4).JPG",
      Storage_Bucket_Url + "/2023/03-18(5).JPG",
    ],
  },
  {
    id: 2,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月05日",
    tags: ["电影"],
    content: "第一次一起看电影《孤注一掷》，吃了烤匠。",
    images: [Storage_Bucket_Url + "/2023/08-05(1).webp", Storage_Bucket_Url + "/2023/08-05(2).webp"],
  },
  {
    id: 3,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月08日",
    tags: ["立秋"],
    content: "收到来自于乖乖的秋天第一杯奶茶",
    images: [Storage_Bucket_Url + "/2023/08-08(1).jpg", Storage_Bucket_Url + "/2023/08-08(2).jpg"],
  },
  {
    id: 4,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月10日",
    tags: ["下班"],
    content: "第一次接她下班，并带去吃了炒菜，趁此送了她一个蓉宝当包包挂件，准备回去的时候竟然下起了多大的雨，一起在公交站台避雨，实在没办法就打车送她回去，但是去到双流地都没湿，武侯区下多大。",
    images: [Storage_Bucket_Url + "/2023/08-10.jpg"],
  },
  {
    id: 5,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月12日",
    tags: ["约会"],
    content: "一看在武侯金楠天街看的电影《热烈》",
    images: [Storage_Bucket_Url + "/2023/08-12(1).jpg", Storage_Bucket_Url + "/2023/08-12(2).jpg"],
  },
  {
    id: 6,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月14日",
    tags: ["街溜子"],
    content: "冒菜一般般，吃完后去大源中央公园当街溜子。",
    images: [Storage_Bucket_Url + "/2023/08-14(1).jpg", Storage_Bucket_Url + "/2023/08-14(2).jpg"],
  },
  {
    id: 7,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月15日",
    tags: ["街溜子"],
    content: "接她下班后吃的绵阳米粉，然后去的南湖公园当街溜子，被她吐槽那家米粉不好吃，我也觉得，哈哈哈。",
    images: [Storage_Bucket_Url + "/2023/08-15(1).jpg", Storage_Bucket_Url + "/2023/08-15(2).jpg", Storage_Bucket_Url + "/2023/08-15(3).jpg", Storage_Bucket_Url + "/2023/08-15(4).jpg"],
  },
  {
    id: 8,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月16日",
    tags: ["街溜子"],
    content: "接她下班后推荐她吃的花溪牛肉粉，但是却没有我在学校里面吃的好吃，后面去了锦城湖公园。",
    images: [
      Storage_Bucket_Url + "/2023/08-16(1).jpg",
      Storage_Bucket_Url + "/2023/08-16(2).jpg",
      Storage_Bucket_Url + "/2023/08-16(3).jpg",
      Storage_Bucket_Url + "/2023/08-16(4).jpg",
      Storage_Bucket_Url + "/2023/08-16(5).jpg",
    ],
  },
  {
    id: 9,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月17日",
    tags: ["街溜子"],
    content: "这次来到我家公司附近的一家面馆吃，带她看了公司的周边，平时吃饭的地方，送回去时候说想吃蛋挞，幸好KFC里面有蛋挞卖。",
    images: [Storage_Bucket_Url + "/2023/08-17(1).jpg", Storage_Bucket_Url + "/2023/08-17(2).jpg", Storage_Bucket_Url + "/2023/08-17(3).jpg"],
  },
  {
    id: 10,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月19日",
    tags: ["周末约会"],
    content: "第一次尝到我的厨艺，我也是第一次专门会为给女生做饭。下午一起在凯德天府看的电影《学爸》，不得不说这是我去过最好的电影院，但凡去过都觉得环境很好也很大。看完在商场内吃的鱿鱼干锅，也很绝。",
    images: [Storage_Bucket_Url + "/2023/08-19(1).jpg", Storage_Bucket_Url + "/2023/08-19(2).jpg"],
  },
  {
    id: 11,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月21日",
    tags: ["庆生"],
    content: "一起庆生，还有她送我的生日礼物——小夜灯。",
    images: [Storage_Bucket_Url + "/2023/08-21(2).jpg", Storage_Bucket_Url + "/2023/08-21(1).jpg", Storage_Bucket_Url + "/2023/08-21(3).jpg"],
  },
  {
    id: 12,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月22日",
    tags: ["七夕"],
    content: "第一次一起过七夕，下班后逛逛小吃街，给我了一张相片装进手机壳里，以及终于让我换掉了使用多久的系统壁纸。",
    images: [
      Storage_Bucket_Url + "/2023/08-22(1).jpg",
      Storage_Bucket_Url + "/2023/08-22(2).jpg",
      Storage_Bucket_Url + "/2023/08-22(3).jpg",
      Storage_Bucket_Url + "/2023/08-22(4).jpg",
      Storage_Bucket_Url + "/2023/08-22(5).jpg",
      Storage_Bucket_Url + "/2023/08-22(6).jpg",
      Storage_Bucket_Url + "/2023/08-22(7).jpg",
      Storage_Bucket_Url + "/2023/08-22(8).jpg",
      Storage_Bucket_Url + "/2023/08-22(9).jpg",
    ],
  },
  {
    id: 13,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月23日",
    tags: ["小憩"],
    content: "在地铁口等她到我这边时候随手拍的天空，晚饭一起吃的一家冒菜，不过味道不太好。",
    images: [Storage_Bucket_Url + "/2023/08-23(1).jpg", Storage_Bucket_Url + "/2023/08-23(2).jpg"],
  },
  {
    id: 14,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月26日",
    tags: ["周末"],
    content: "再一次为她做饭，一起度过一个周末",
    images: [
      Storage_Bucket_Url + "/2023/08-26(1).jpg",
      Storage_Bucket_Url + "/2023/08-26(2).jpg",
      Storage_Bucket_Url + "/2023/08-26(3).jpg",
      Storage_Bucket_Url + "/2023/08-26(4).jpg",
      Storage_Bucket_Url + "/2023/08-26(5).jpg",
    ],
  },
  {
    id: 15,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月28日",
    tags: ["干饭"],
    content: "第一次感受到了下班后在家等饭做好的感觉",
    images: [Storage_Bucket_Url + "/2023/08-28.jpg"],
  },
  {
    id: 16,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月29日",
    tags: ["美照"],
    content: "wink、拽姐、甜妹",
    images: [Storage_Bucket_Url + "/2023/08-29(1).jpg", Storage_Bucket_Url + "/2023/08-29(2).jpg", Storage_Bucket_Url + "/2023/08-29(3).jpg"],
  },
  {
    id: 17,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月30日",
    tags: ["干饭"],
    content: "吃上了我心心念想让她尝尝的冒菜",
    images: [Storage_Bucket_Url + "/2023/08-30(1).jpg"],
  },
  {
    id: 18,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年08月31日",
    tags: ["美式"],
    content: "杨先生和杜女士",
    images: [Storage_Bucket_Url + "/2023/08-31(1).jpg", Storage_Bucket_Url + "/2023/08-31(2).jpg", Storage_Bucket_Url + "/2023/08-31(3).jpg"],
  },
  {
    id: 19,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月02日",
    tags: ["周末"],
    content: "周末在家闭门投喂。",
    images: [Storage_Bucket_Url + "/2023/09-02(1).jpg", Storage_Bucket_Url + "/2023/09-02(2).jpg"],
  },
  {
    id: 20,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月04日",
    tags: ["周一"],
    content: "打卡韩国部队火锅——金富贵，这家服务是真不错的。",
    images: [Storage_Bucket_Url + "/2023/09-04(1).jpg", Storage_Bucket_Url + "/2023/09-04(2).jpg", Storage_Bucket_Url + "/2023/09-04(3).jpg"],
  },
  {
    id: 21,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月08日",
    tags: ["周五"],
    content: "下班在家坐等投喂",
    images: [Storage_Bucket_Url + "/2023/09-08(1).jpg"],
  },
  {
    id: 22,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月09日",
    tags: ["乐山站"],
    content: "九月九号，久久在一起。乐山站：刘四娘翘脚牛肉、鞠婆婆绵绵冰、小豆海棠、樂山糖水、英子油炸、苏稽古镇、尹藤洋华堂、世豪广场；回来的时候下雨、吹风、打雷，高铁延点24分钟，值得记录的一天。",
    images: [Storage_Bucket_Url + "/2023/09-09(1).jpg", Storage_Bucket_Url + "/2023/09-09(2).jpg", Storage_Bucket_Url + "/2023/09-09(3).jpg"],
  },
  {
    id: 23,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月11日",
    tags: ["干饭"],
    content: "曾三线米线嗦粉",
    images: [Storage_Bucket_Url + "/2023/09-11(1).jpg"],
  },
  {
    id: 24,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月12日",
    tags: ["干饭"],
    content: "斗鸡鸡公煲，芜湖~",
    images: [Storage_Bucket_Url + "/2023/09-12(1).jpg"],
  },
  {
    id: 25,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月13日",
    tags: ["干饭"],
    content: "煎饼果子、牛肉烩面、鸡蛋炒拉面、冰糖葫芦",
    images: [
      Storage_Bucket_Url + "/2023/09-13(1).jpg",
      Storage_Bucket_Url + "/2023/09-13(2).jpg",
      Storage_Bucket_Url + "/2023/09-13(3).jpg",
      Storage_Bucket_Url + "/2023/09-13(4).jpg",
      Storage_Bucket_Url + "/2023/09-13(5).jpg",
    ],
  },
  {
    id: 26,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月14日",
    tags: ["干饭"],
    content: "今天依旧是吃吃吃，店名：金富贵。",
    images: [
      Storage_Bucket_Url + "/2023/09-14(1).jpg",
      Storage_Bucket_Url + "/2023/09-14(2).jpg",
      Storage_Bucket_Url + "/2023/09-14(3).jpg",
      Storage_Bucket_Url + "/2023/09-14(4).jpg",
      Storage_Bucket_Url + "/2023/09-14(5).jpg",
      Storage_Bucket_Url + "/2023/09-14(6).jpg",
    ],
  },
  // 以下未添加至数据库
  {
    id: 27,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月15日",
    tags: ["干饭"],
    content: "工作日一天就一起干了两顿饭，史无前例啊~",
    images: [Storage_Bucket_Url + "/2023/09-15(1).jpg", Storage_Bucket_Url + "/2023/09-15(2).jpg", Storage_Bucket_Url + "/2023/09-15(3).jpg"],
  },
  {
    id: 28,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月16日",
    tags: ["干饭"],
    content: "中午做的不是很好 vs 晚上做的晚饭",
    images: [Storage_Bucket_Url + "/2023/09-16(1).jpg", Storage_Bucket_Url + "/2023/09-16(2).jpg"],
  },
  {
    id: 29,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月17日",
    tags: ["干饭"],
    content: "做饭技术还要多提升",
    images: [Storage_Bucket_Url + "/2023/09-17(1).jpg", Storage_Bucket_Url + "/2023/09-17(2).jpg", Storage_Bucket_Url + "/2023/09-17(3).jpg", Storage_Bucket_Url + "/2023/09-17(4).jpg"],
  },
  {
    id: 31,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月17日",
    tags: ["干饭"],
    content: "晚上：小酥肉、花甲米线、火腿肠米线，夜市的满足",
    images: [Storage_Bucket_Url + "/2023/09-17(5).jpg", Storage_Bucket_Url + "/2023/09-17(6).jpg", Storage_Bucket_Url + "/2023/09-17(7).jpg"],
  },
  {
    id: 32,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月19日",
    tags: ["干饭", "花"],
    content: "中午饭，第一次收到女生送的花，承包她的晚饭",
    images: [Storage_Bucket_Url + "/2023/09-19(1).jpg", Storage_Bucket_Url + "/2023/09-19(2).jpg", Storage_Bucket_Url + "/2023/09-19(3).jpg"],
  },
  {
    id: 33,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月20日",
    tags: ["干饭"],
    content: "大米先生",
    images: [Storage_Bucket_Url + "/2023/09-20(1).jpg"],
  },
  {
    id: 34,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月21日",
    tags: ["干饭"],
    content: "宋记鸡公煲",
    images: [Storage_Bucket_Url + "/2023/09-21(1).jpg"],
  },
  {
    id: 35,
    avatar: Storage_Bucket_Url + "/avatar/xinyang.jpg",
    title: "杨不旧",
    time: "2023年09月22日",
    tags: ["干饭"],
    content: "孜然牛肉盖浇饭、牛肉炒饭与我们的臭美照片",
    images: [Storage_Bucket_Url + "/2023/09-22(1).jpg", Storage_Bucket_Url + "/2023/09-22(2).jpg", Storage_Bucket_Url + "/2023/09-22(3).jpg", Storage_Bucket_Url + "/2023/09-22(4).jpg"],
  },
];

module.exports = trends;
