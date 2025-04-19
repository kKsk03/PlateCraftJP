const placeList = [{
    "北海道": [
        { pngId: 1, placeName: "札幌" },
        { pngId: 2, placeName: "函館" },
        { pngId: 3, placeName: "旭川" },
        { pngId: 4, placeName: "室蘭" },
        { pngId: 5, placeName: "苫小牧" },
        { pngId: 6, placeName: "釧路" },
        { pngId: 7, placeName: "知床" },
        { pngId: 8, placeName: "帯広" },
        { pngId: 9, placeName: "北見" }
    ],
    "青森县": [
        { pngId: 10, placeName: "青森" },
        { pngId: 11, placeName: "弘前" },
        { pngId: 12, placeName: "八戸" }
    ],
    "岩手县": [
        { pngId: 13, placeName: "岩手" },
        { pngId: 14, placeName: "盛岡" },
        { pngId: 15, placeName: "平泉" }
    ],
    "宫城县": [
        { pngId: 16, placeName: "宮城" },
        { pngId: 17, placeName: "仙台" }
    ],
    "秋田县": [
        { pngId: 18, placeName: "秋田" }
    ],
    "山形县": [
        { pngId: 19, placeName: "山形" },
        { pngId: 20, placeName: "庄内" }
    ],
    "福岛县": [
        { pngId: 21, placeName: "福島" },
        { pngId: 22, placeName: "会津" },
        { pngId: 23, placeName: "郡山" },
        { pngId: 24, placeName: "白河" },
        { pngId: 25, placeName: "いわき" }
    ],
    "茨城县": [
        { pngId: 26, placeName: "水戸" },
        { pngId: 27, placeName: "土浦" },
        { pngId: 28, placeName: "つくば" }
    ],
    "栃木县": [
        { pngId: 29, placeName: "宇都宮" },
        { pngId: 30, placeName: "那須" },
        { pngId: 31, placeName: "とちぎ" }
    ],
    "群马县": [
        { pngId: 32, placeName: "群馬" },
        { pngId: 33, placeName: "前橋" },
        { pngId: 34, placeName: "高崎" }
    ],
    "埼玉县": [
        { pngId: 35, placeName: "大宮" },
        { pngId: 36, placeName: "川口" },
        { pngId: 37, placeName: "所沢" },
        { pngId: 38, placeName: "川越" },
        { pngId: 39, placeName: "熊谷" },
        { pngId: 40, placeName: "春日部" },
        { pngId: 41, placeName: "越谷" }
    ],
    "千叶县": [
        { pngId: 42, placeName: "千葉" },
        { pngId: 43, placeName: "成田" },
        { pngId: 44, placeName: "習志野" },
        { pngId: 45, placeName: "市川" },
        { pngId: 46, placeName: "船橋" },
        { pngId: 47, placeName: "袖ヶ浦" },
        { pngId: 48, placeName: "市原" },
        { pngId: 49, placeName: "野田" },
        { pngId: 50, placeName: "柏" },
        { pngId: 51, placeName: "松戸" }
    ],
    "东京都": [
        { pngId: 52, placeName: "品川" },
        { pngId: 53, placeName: "世田谷" },
        { pngId: 54, placeName: "練馬" },
        { pngId: 55, placeName: "杉並" },
        { pngId: 56, placeName: "板橋" },
        { pngId: 57, placeName: "足立" },
        { pngId: 58, placeName: "江東" },
        { pngId: 59, placeName: "葛飾" },
        { pngId: 60, placeName: "八王子" },
        { pngId: 61, placeName: "多摩" }
    ],
    "神奈川县": [
        { pngId: 62, placeName: "横浜" },
        { pngId: 63, placeName: "川崎" },
        { pngId: 64, placeName: "湘南" },
        { pngId: 65, placeName: "相模" }
    ],
    "山梨县": [
        { pngId: 66, placeName: "山梨" },
        { pngId: 67, placeName: "富士山" }
    ],
    "新潟县": [
        { pngId: 68, placeName: "新潟" },
        { pngId: 69, placeName: "長岡" },
        { pngId: 70, placeName: "上越" }
    ],
    "长野县": [
        { pngId: 71, placeName: "長野" },
        { pngId: 72, placeName: "松本" },
        { pngId: 73, placeName: "諏訪" }
    ],
    "富山县": [
        { pngId: 74, placeName: "富山" }
    ],
    "石川县": [
        { pngId: 75, placeName: "石川" },
        { pngId: 76, placeName: "金沢" }
    ],
    "静冈县": [
        { pngId: 77, placeName: "福井" },
        { pngId: 78, placeName: "岐阜" },
        { pngId: 79, placeName: "飛騨" },
        { pngId: 80, placeName: "静岡" },
        { pngId: 81, placeName: "浜松" },
        { pngId: 82, placeName: "沼津" },
        { pngId: 83, placeName: "伊豆" }
    ],
    "爱知县": [
        { pngId: 84, placeName: "名古屋" },
        { pngId: 85, placeName: "豊橋" },
        { pngId: 86, placeName: "三河" },
        { pngId: 87, placeName: "岡崎" },
        { pngId: 88, placeName: "豊田" },
        { pngId: 89, placeName: "尾張小牧" },
        { pngId: 90, placeName: "一宮" },
        { pngId: 91, placeName: "春日井" }
    ],
    "三重县": [
        { pngId: 92, placeName: "三重" },
        { pngId: 93, placeName: "鈴鹿" },
        { pngId: 94, placeName: "四日市" },
        { pngId: 95, placeName: "伊勢志摩" }
    ],
    "滋贺县": [
        { pngId: 96, placeName: "滋賀" }
    ],
    "京都府": [
        { pngId: 97, placeName: "京都" }
    ],
    "大阪府": [
        { pngId: 98, placeName: "なにわ" },
        { pngId: 99, placeName: "大阪" },
        { pngId: 100, placeName: "和泉" },
        { pngId: 101, placeName: "堺" }
    ],
    "奈良县": [
        { pngId: 102, placeName: "奈良" },
        { pngId: 103, placeName: "飛鳥" }
    ],
    "和歌山县": [
        { pngId: 104, placeName: "和歌山" }
    ],
    "兵库县": [
        { pngId: 105, placeName: "神戸" },
        { pngId: 106, placeName: "姫路" }
    ],
    "鸟取县": [
        { pngId: 107, placeName: "鳥取" }
    ],
    "岛根县": [
        { pngId: 108, placeName: "島根" },
        { pngId: 109, placeName: "出雲" }
    ],
    "冈山县": [
        { pngId: 110, placeName: "岡山" },
        { pngId: 111, placeName: "倉敷" }
    ],
    "广岛县": [
        { pngId: 112, placeName: "広島" },
        { pngId: 113, placeName: "福山" }
    ],
    "山口县": [
        { pngId: 114, placeName: "山口" },
        { pngId: 115, placeName: "下関" }
    ],
    "德岛县": [
        { pngId: 116, placeName: "徳島" }
    ],
    "香川县": [
        { pngId: 117, placeName: "香川" },
        { pngId: 118, placeName: "高松" }
    ],
    "爱媛县": [
        { pngId: 119, placeName: "愛媛" }
    ],
    "高知县": [
        { pngId: 120, placeName: "高知" }
    ],
    "福冈县": [
        { pngId: 121, placeName: "福岡" },
        { pngId: 122, placeName: "北九州" },
        { pngId: 123, placeName: "久留米" },
        { pngId: 124, placeName: "筑豊" }
    ],
    "佐贺县": [
        { pngId: 125, placeName: "佐賀" }
    ],
    "长崎县": [
        { pngId: 126, placeName: "長崎" },
        { pngId: 127, placeName: "佐世保" }
    ],
    "熊本县": [
        { pngId: 128, placeName: "熊本" }
    ],
    "大分县": [
        { pngId: 129, placeName: "大分" }
    ],
    "宫崎县": [
        { pngId: 130, placeName: "宮崎" }
    ],
    "鹿儿岛县": [
        { pngId: 131, placeName: "鹿児島" },
        { pngId: 132, placeName: "奄美" }
    ],
    "冲绳县": [
        { pngId: 133, placeName: "沖縄" }
    ]
}];

export const prefectureList = [
    { title: "北海道", value: "北海道" },
    { title: "青森县", value: "青森县" },
    { title: "岩手县", value: "岩手县" },
    { title: "宫城县", value: "宫城县" },
    { title: "秋田县", value: "秋田县" },
    { title: "山形县", value: "山形县" },
    { title: "福岛县", value: "福岛县" },
    { title: "茨城县", value: "茨城县" },
    { title: "栃木县", value: "栃木县" },
    { title: "群马县", value: "群马县" },
    { title: "埼玉县", value: "埼玉县" },
    { title: "千叶县", value: "千叶县" },
    { title: "东京都", value: "东京都" },
    { title: "神奈川县", value: "神奈川县" },
    { title: "山梨县", value: "山梨县" },
    { title: "新潟县", value: "新潟县" },
    { title: "长野县", value: "长野县" },
    { title: "富山县", value: "富山县" },
    { title: "石川县", value: "石川县" },
    { title: "静冈县", value: "静冈县" },
    { title: "爱知县", value: "爱知县" },
    { title: "三重县", value: "三重县" },
    { title: "滋贺县", value: "滋贺县" },
    { title: "京都府", value: "京都府" },
    { title: "大阪府", value: "大阪府" },
    { title: "奈良县", value: "奈良县" },
    { title: "和歌山县", value: "和歌山县" },
    { title: "兵库县", value: "兵库县" },
    { title: "鸟取县", value: "鸟取县" },
    { title: "岛根县", value: "岛根县" },
    { title: "冈山县", value: "冈山县" },
    { title: "广岛县", value: "广岛县" },
    { title: "山口县", value: "山口县" },
    { title: "德岛县", value: "德岛县" },
    { title: "香川县", value: "香川县" },
    { title: "爱媛县", value: "爱媛县" },
    { title: "高知县", value: "高知县" },
    { title: "福冈县", value: "福冈县" },
    { title: "佐贺县", value: "佐贺县" },
    { title: "长崎县", value: "长崎县" },
    { title: "熊本县", value: "熊本县" },
    { title: "大分县", value: "大分县" },
    { title: "宫崎县", value: "宫崎县" },
    { title: "鹿儿岛县", value: "鹿儿岛县" },
    { title: "冲绳县", value: "冲绳县" }
]

export function getPlaceList(prefectureName) {
    for (let prefecture of placeList) {
        let prefectureKeys = Object.keys(prefecture);
        if (prefectureKeys.includes(prefectureName)) {
            return prefecture[prefectureName];
        }
    }
    return null;
}