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
    "青森縣": [
        { pngId: 10, placeName: "青森" },
        { pngId: 11, placeName: "弘前" },
        { pngId: 12, placeName: "八戸" }
    ],
    "岩手縣": [
        { pngId: 13, placeName: "岩手" },
        { pngId: 14, placeName: "盛岡" },
        { pngId: 15, placeName: "平泉" }
    ],
    "宫城縣": [
        { pngId: 16, placeName: "宮城" },
        { pngId: 17, placeName: "仙台" }
    ],
    "秋田縣": [
        { pngId: 18, placeName: "秋田" }
    ],
    "山形縣": [
        { pngId: 19, placeName: "山形" },
        { pngId: 20, placeName: "庄内" }
    ],
    "福岛縣": [
        { pngId: 21, placeName: "福島" },
        { pngId: 22, placeName: "会津" },
        { pngId: 23, placeName: "郡山" },
        { pngId: 24, placeName: "白河" },
        { pngId: 25, placeName: "いわき" }
    ],
    "茨城縣": [
        { pngId: 26, placeName: "水戸" },
        { pngId: 27, placeName: "土浦" },
        { pngId: 28, placeName: "つくば" }
    ],
    "栃木縣": [
        { pngId: 29, placeName: "宇都宮" },
        { pngId: 30, placeName: "那須" },
        { pngId: 31, placeName: "とちぎ" }
    ],
    "群马縣": [
        { pngId: 32, placeName: "群馬" },
        { pngId: 33, placeName: "前橋" },
        { pngId: 34, placeName: "高崎" }
    ],
    "埼玉縣": [
        { pngId: 35, placeName: "大宮" },
        { pngId: 36, placeName: "川口" },
        { pngId: 37, placeName: "所沢" },
        { pngId: 38, placeName: "川越" },
        { pngId: 39, placeName: "熊谷" },
        { pngId: 40, placeName: "春日部" },
        { pngId: 41, placeName: "越谷" }
    ],
    "千叶縣": [
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
    "神奈川縣": [
        { pngId: 62, placeName: "横浜" },
        { pngId: 63, placeName: "川崎" },
        { pngId: 64, placeName: "湘南" },
        { pngId: 65, placeName: "相模" }
    ],
    "山梨縣": [
        { pngId: 66, placeName: "山梨" },
        { pngId: 67, placeName: "富士山" }
    ],
    "新潟縣": [
        { pngId: 68, placeName: "新潟" },
        { pngId: 69, placeName: "長岡" },
        { pngId: 70, placeName: "上越" }
    ],
    "长野縣": [
        { pngId: 71, placeName: "長野" },
        { pngId: 72, placeName: "松本" },
        { pngId: 73, placeName: "諏訪" }
    ],
    "富山縣": [
        { pngId: 74, placeName: "富山" }
    ],
    "石川縣": [
        { pngId: 75, placeName: "石川" },
        { pngId: 76, placeName: "金沢" }
    ],
    "静冈縣": [
        { pngId: 77, placeName: "福井" },
        { pngId: 78, placeName: "岐阜" },
        { pngId: 79, placeName: "飛騨" },
        { pngId: 80, placeName: "静岡" },
        { pngId: 81, placeName: "浜松" },
        { pngId: 82, placeName: "沼津" },
        { pngId: 83, placeName: "伊豆" }
    ],
    "爱知縣": [
        { pngId: 84, placeName: "名古屋" },
        { pngId: 85, placeName: "豊橋" },
        { pngId: 86, placeName: "三河" },
        { pngId: 87, placeName: "岡崎" },
        { pngId: 88, placeName: "豊田" },
        { pngId: 89, placeName: "尾張小牧" },
        { pngId: 90, placeName: "一宮" },
        { pngId: 91, placeName: "春日井" }
    ],
    "三重縣": [
        { pngId: 92, placeName: "三重" },
        { pngId: 93, placeName: "鈴鹿" },
        { pngId: 94, placeName: "四日市" },
        { pngId: 95, placeName: "伊勢志摩" }
    ],
    "滋贺縣": [
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
    "奈良縣": [
        { pngId: 102, placeName: "奈良" },
        { pngId: 103, placeName: "飛鳥" }
    ],
    "和歌山縣": [
        { pngId: 104, placeName: "和歌山" }
    ],
    "兵库縣": [
        { pngId: 105, placeName: "神戸" },
        { pngId: 106, placeName: "姫路" }
    ],
    "鸟取縣": [
        { pngId: 107, placeName: "鳥取" }
    ],
    "岛根縣": [
        { pngId: 108, placeName: "島根" },
        { pngId: 109, placeName: "出雲" }
    ],
    "冈山縣": [
        { pngId: 110, placeName: "岡山" },
        { pngId: 111, placeName: "倉敷" }
    ],
    "广岛縣": [
        { pngId: 112, placeName: "広島" },
        { pngId: 113, placeName: "福山" }
    ],
    "山口縣": [
        { pngId: 114, placeName: "山口" },
        { pngId: 115, placeName: "下関" }
    ],
    "德岛縣": [
        { pngId: 116, placeName: "徳島" }
    ],
    "香川縣": [
        { pngId: 117, placeName: "香川" },
        { pngId: 118, placeName: "高松" }
    ],
    "爱媛縣": [
        { pngId: 119, placeName: "愛媛" }
    ],
    "高知縣": [
        { pngId: 120, placeName: "高知" }
    ],
    "福冈縣": [
        { pngId: 121, placeName: "福岡" },
        { pngId: 122, placeName: "北九州" },
        { pngId: 123, placeName: "久留米" },
        { pngId: 124, placeName: "筑豊" }
    ],
    "佐贺縣": [
        { pngId: 125, placeName: "佐賀" }
    ],
    "长崎縣": [
        { pngId: 126, placeName: "長崎" },
        { pngId: 127, placeName: "佐世保" }
    ],
    "熊本縣": [
        { pngId: 128, placeName: "熊本" }
    ],
    "大分縣": [
        { pngId: 129, placeName: "大分" }
    ],
    "宫崎縣": [
        { pngId: 130, placeName: "宮崎" }
    ],
    "鹿儿岛縣": [
        { pngId: 131, placeName: "鹿児島" },
        { pngId: 132, placeName: "奄美" }
    ],
    "冲绳縣": [
        { pngId: 133, placeName: "沖縄" }
    ]
}];

export const prefectureList = [
    { title: "北海道", value: "北海道" },
    { title: "青森縣", value: "青森縣" },
    { title: "岩手縣", value: "岩手縣" },
    { title: "宫城縣", value: "宫城縣" },
    { title: "秋田縣", value: "秋田縣" },
    { title: "山形縣", value: "山形縣" },
    { title: "福岛縣", value: "福岛縣" },
    { title: "茨城縣", value: "茨城縣" },
    { title: "栃木縣", value: "栃木縣" },
    { title: "群马縣", value: "群马縣" },
    { title: "埼玉縣", value: "埼玉縣" },
    { title: "千叶縣", value: "千叶縣" },
    { title: "东京都", value: "东京都" },
    { title: "神奈川縣", value: "神奈川縣" },
    { title: "山梨縣", value: "山梨縣" },
    { title: "新潟縣", value: "新潟縣" },
    { title: "长野縣", value: "长野縣" },
    { title: "富山縣", value: "富山縣" },
    { title: "石川縣", value: "石川縣" },
    { title: "静冈縣", value: "静冈縣" },
    { title: "爱知縣", value: "爱知縣" },
    { title: "三重縣", value: "三重縣" },
    { title: "滋贺縣", value: "滋贺縣" },
    { title: "京都府", value: "京都府" },
    { title: "大阪府", value: "大阪府" },
    { title: "奈良縣", value: "奈良縣" },
    { title: "和歌山縣", value: "和歌山縣" },
    { title: "兵库縣", value: "兵库縣" },
    { title: "鸟取縣", value: "鸟取縣" },
    { title: "岛根縣", value: "岛根縣" },
    { title: "冈山縣", value: "冈山縣" },
    { title: "广岛縣", value: "广岛縣" },
    { title: "山口縣", value: "山口縣" },
    { title: "德岛縣", value: "德岛縣" },
    { title: "香川縣", value: "香川縣" },
    { title: "爱媛縣", value: "爱媛縣" },
    { title: "高知縣", value: "高知縣" },
    { title: "福冈縣", value: "福冈縣" },
    { title: "佐贺縣", value: "佐贺縣" },
    { title: "长崎縣", value: "长崎縣" },
    { title: "熊本縣", value: "熊本縣" },
    { title: "大分縣", value: "大分縣" },
    { title: "宫崎縣", value: "宫崎縣" },
    { title: "鹿儿岛縣", value: "鹿儿岛縣" },
    { title: "冲绳縣", value: "冲绳縣" }
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