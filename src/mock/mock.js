import Mock from "mockjs";

Mock.mock("/oftenGoods", [
  {
    goodsId: 1,
    goodsName: "香辣鸡腿堡",
    price: 18
  },
  {
    goodsId: 2,
    goodsName: "田园鸡腿堡",
    price: 15
  },
  {
    goodsId: 3,
    goodsName: "和风汉堡",
    price: 15
  },
  {
    goodsId: 4,
    goodsName: "快乐全家桶",
    price: 80
  },
  {
    goodsId: 5,
    goodsName: "脆皮炸鸡腿",
    price: 10
  },
  {
    goodsId: 6,
    goodsName: "魔法鸡块",
    price: 20
  },
  {
    goodsId: 7,
    goodsName: "可乐大杯",
    price: 10
  },
  {
    goodsId: 8,
    goodsName: "雪顶咖啡",
    price: 18
  },
  {
    goodsId: 9,
    goodsName: "大块鸡米花",
    price: 15
  },
  {
    goodsId: 10,
    goodsName: "香脆鸡柳",
    price: 17
  }
]);
Mock.mock("/typeGoods", [
  [
    {
      goodsId: 1,
      goodsImg: "../assets/img1.jpg",
      goodsName: "香辣鸡腿堡",
      price: 18
    },
    {
      goodsId: 2,
      goodsImg: "../assets/img1.jpg",
      goodsName: "田园鸡腿堡",
      price: 15
    },
    {
      goodsId: 3,
      goodsImg: "../assets/img1.jpg",
      goodsName: "和风汉堡",
      price: 15
    }
  ],
  [
    {
      goodsId: 5,
      goodsImg: "../assets/img1.jpg",
      goodsName: "脆皮炸鸡腿",
      price: 10
    },
    {
      goodsId: 6,
      goodsImg: "../assets/img1.jpg",
      goodsName: "魔法鸡块",
      price: 20
    },
    {
      goodsId: 9,
      goodsImg: "../assets/img1.jpg",
      goodsName: "大块鸡米花",
      price: 15
    },
    {
      goodsId: 10,
      goodsImg: "../assets/img1.jpg",
      goodsName: "香脆鸡柳",
      price: 17
    }
  ],
  [
    {
      goodsId: 7,
      goodsImg: "../assets/img1.jpg",
      goodsName: "可乐大杯",
      price: 10
    },
    {
      goodsId: 8,
      goodsImg: "../assets/img1.jpg",
      goodsName: "雪顶咖啡",
      price: 18
    }
  ],
  [
    {
      goodsId: 4,
      goodsImg: "../assets/img1.jpg",
      goodsName: "快乐全家桶",
      price: 80
    }
  ]
]);
