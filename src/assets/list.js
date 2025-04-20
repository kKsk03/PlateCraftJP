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

export const vehicleNumberListDefault = [
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
    { title: "·", value: "·" },
]

export function checkVehicleNumber(n1, n2, n3, n4) {
    const chars = [n1, n2, n3, n4];
    // 拼接字符串
    const str = chars.join('');

    // 1. 检查每个字符是否都是数字或 '·'
    for (let i = 0; i < 4; i++) {
        if (!/[0-9·]/.test(chars[i])) {
            return { valid: false, errorIndex: i + 1, message: '只能输入数字或点' };
        }
    }

    // 2. 统计前导 '·' 的数量
    let dotCount = 0;
    while (dotCount < 4 && str[dotCount] === '·') {
        dotCount++;
    }

    // 3. 检查剩余部分（从 dotCount 到 3）是否全部为数字
    const digitPart = str.slice(dotCount);
    if (digitPart.length === 0) {
        // 全部都是 '·' 的情况，视为不合法（因为至少要有一个数字）
        return { valid: false, errorIndex: 4, message: '至少要有一个数字' };
    }
    for (let i = 0; i < digitPart.length; i++) {
        if (!/^[0-9]$/.test(digitPart[i])) {
            // 如果找到了在数字区间之外的 '·'，定位它在原串的位置并返回
            const errorPos = dotCount + i;
            return { valid: false, errorIndex: errorPos + 1, message: '只能输入数字' };
        }
    }

    // 4. 首位数字不能是 '0'
    if (digitPart[0] === '0') {
        // 找到该 '0' 在原串中的位置
        const errorPos = dotCount;
        return { valid: false, errorIndex: errorPos + 1, message: '首位数字不能为 0' };
    }

    // 全部检查通过
    return { valid: true, message: '规则通过' };
}