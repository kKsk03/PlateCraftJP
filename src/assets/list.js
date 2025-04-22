export const classificationNumber = [
    { title: "0", value: "0" },
    { title: "1", value: "1" },
    { title: "2", value: "2" },
    { title: "3", value: "3" },
    { title: "4", value: "4" },
    { title: "5", value: "5" },
    { title: "6", value: "6" },
    { title: "7", value: "7" },
    { title: "8", value: "8" },
    { title: "9", value: "9" },
    { title: "A", value: "A" },
    { title: "C", value: "C" },
    { title: "F", value: "F" },
    { title: "H", value: "H" },
    { title: "K", value: "K" },
    { title: "L", value: "L" },
    { title: "M", value: "M" },
    { title: "P", value: "P" },
    { title: "X", value: "X" },
    { title: "Y", value: "Y" },
]

export function getClassificationNumberList(position) {
    if (position === 1) {
        return classificationNumber.slice(0, 10);
    } else if (position === 2 || position === 3) {
        return classificationNumber;
    } else {
        return [];
    }
}

export const operationalPurpose = [
    { title: "自家用（自动车）", value: 0 },
    { title: "自家用（轻自动车）", value: 1 },
    { title: "事业用（自动车）", value: 2 },
    { title: "事业用（轻自动车）", value: 3 }
]

export function getHiraganaList(operationalPurpose, vehiclePurpose) {
    // 自动车
    if (operationalPurpose === 0 || operationalPurpose === 2) {
        // 普通车辆
        if (vehiclePurpose === "none") {
            // 事业用车辆
            if (operationalPurpose === 2) {
                return [
                    { title: "あ", value: "あ" },
                    { title: "い", value: "い" },
                    { title: "う", value: "う" },
                    { title: "え", value: "え" },
                    { title: "か", value: "か" },
                    { title: "き", value: "き" },
                    { title: "く", value: "く" },
                    { title: "け", value: "け" },
                    { title: "こ", value: "こ" },
                    { title: "を", value: "を" }
                ]
            }
            // 自家用车辆
            else {
                return [
                    { title: "さ", value: "さ" },
                    { title: "す", value: "す" },
                    { title: "せ", value: "せ" },
                    { title: "そ", value: "そ" },
                    { title: "た", value: "た" },
                    { title: "ち", value: "ち" },
                    { title: "つ", value: "つ" },
                    { title: "て", value: "て" },
                    { title: "と", value: "と" },
                    { title: "な", value: "な" },
                    { title: "に", value: "に" },
                    { title: "ぬ", value: "ぬ" },
                    { title: "ね", value: "ね" },
                    { title: "の", value: "の" },
                    { title: "は", value: "は" },
                    { title: "ひ", value: "ひ" },
                    { title: "ふ", value: "ふ" },
                    { title: "ほ", value: "ほ" },
                    { title: "ま", value: "ま" },
                    { title: "み", value: "み" },
                    { title: "む", value: "む" },
                    { title: "め", value: "め" },
                    { title: "も", value: "も" },
                    { title: "や", value: "や" },
                    { title: "ゆ", value: "ゆ" },
                    { title: "ら", value: "ら" },
                    { title: "り", value: "り" },
                    { title: "る", value: "る" },
                    { title: "ろ", value: "ろ" }
                ];
            }
        }
        // 如果是租赁汽车
        else if (vehiclePurpose === "RentalCar") {
            return [
                { title: "わ", value: "わ" },
                { title: "れ", value: "れ" },
            ]
        }
        // 如果是驻留军人
        else if (vehiclePurpose === "USMilitaryPersonnel") {
            // 其实原本很多的，但是素材只有Y
            return [
                { title: "Y", value: "Y" },
            ]
        } else {
            return [];
        }
    }
    // 轻自动车
    if (operationalPurpose === 1 || operationalPurpose === 3) {
        // 普通车辆
        if (vehiclePurpose === "none") {
            // 事业用车辆
            if (operationalPurpose === 3) {
                return [
                    { title: "り", value: "り" },
                    { title: "れ", value: "れ" }
                ]
            }
            // 自家用车辆
            else {
                return [
                    { title: "あ", value: "あ" },
                    { title: "い", value: "い" },
                    { title: "う", value: "う" },
                    { title: "え", value: "え" },
                    { title: "か", value: "か" },
                    { title: "き", value: "き" },
                    { title: "く", value: "く" },
                    { title: "け", value: "け" },
                    { title: "こ", value: "こ" },
                    { title: "さ", value: "さ" },
                    { title: "す", value: "す" },
                    { title: "せ", value: "せ" },
                    { title: "そ", value: "そ" },
                    { title: "た", value: "た" },
                    { title: "ち", value: "ち" },
                    { title: "つ", value: "つ" },
                    { title: "て", value: "て" },
                    { title: "と", value: "と" },
                    { title: "な", value: "な" },
                    { title: "に", value: "に" },
                    { title: "ぬ", value: "ぬ" },
                    { title: "ね", value: "ね" },
                    { title: "の", value: "の" },
                    { title: "は", value: "は" },
                    { title: "ひ", value: "ひ" },
                    { title: "ふ", value: "ふ" },
                    { title: "ほ", value: "ほ" },
                    { title: "ま", value: "ま" },
                    { title: "み", value: "み" },
                    { title: "む", value: "む" },
                    { title: "め", value: "め" },
                    { title: "も", value: "も" },
                    { title: "や", value: "や" },
                    { title: "ゆ", value: "ゆ" },
                    { title: "ら", value: "ら" },
                    { title: "る", value: "る" },
                    { title: "ろ", value: "ろ" },
                    { title: "を", value: "を" }
                ]
            }
        }
        // 如果是租赁汽车
        else if (vehiclePurpose === "RentalCar") {
            return [
                { title: "わ", value: "わ" }
            ]
        }
        // 如果是驻留军人
        else if (vehiclePurpose === "USMilitaryPersonnel") {
            // 轻自动车的驻留军人，本身有素材，但是问题是不包含Y
            return [];
        } else {
            return [];
        }
    }
}