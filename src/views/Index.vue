<template>
    <v-container max-width="1000px" class="mt-5 mb-5" style="margin-top: 40px; margin-bottom: 40px;">
        <h1>PlateCraftJP
            <v-app-bar-nav-icon @click="toggleTheme()" icon="mdi-theme-light-dark" />
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-app-bar-nav-icon icon="mdi-translate" v-bind="props" />
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in locales" :key="index" :value="item.value"
                        @click="onChangeLang(item.value)">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </h1>
        <!-- 预览框 -->
        <div class="preview" style="margin-top: 20px; margin-bottom: 20px;">
            <canvas ref="canvas" width="1632" height="816" style="width: 100%; height: auto; max-width: 1000px">
            </canvas>
        </div>
        <!-- 操作区域 -->
        <v-row dense>
            <v-col cols="12" xl="9" lg="9" md="9" sm="12" xs="12">
                <v-card class="h-100">
                    <v-tabs v-model="tab" show-arrows center-active grow>
                        <v-tab value="PlaceName">{{ $t('tab.placeName') }}</v-tab>
                        <v-tab value="ClassificationNumber">{{ $t('tab.classificationNumber') }}</v-tab>
                        <v-tab value="Hiragana">{{ $t('tab.hiragana') }}</v-tab>
                        <v-tab value="VehicleNumber">{{ $t('tab.vehicleNumber') }}</v-tab>
                        <v-tab value="Settings">{{ $t('tab.settings') }}</v-tab>
                    </v-tabs>
                    <v-card-text style="padding-left: 0; padding-right: 0; padding-bottom: 0;">
                        <v-tabs-window v-model="tab">
                            <!-- 地名标识 -->
                            <v-tabs-window-item value="PlaceName">
                                <v-card-subtitle>{{ $t('tabItem.placeName.rule') }}<a
                                        href="https://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%BB%8A%E8%BC%9B%E8%99%9F%E7%89%8C#%E5%9C%B0%E5%90%8D"
                                        target="_blank" class="card-link">{{ $t('tabItem.placeName.ruleLinkName')
                                        }}</a></v-card-subtitle>
                                <v-card-item>
                                    <v-row dense style="margin-top: 5px;">
                                        <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="12">
                                            <v-select :label="$t('tabItem.placeName.prefecture')"
                                                :items="prefectureList" v-model="selected_prefecture" item-title="title"
                                                item-value="value" />
                                        </v-col>
                                        <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="12">
                                            <v-select :label="$t('tabItem.placeName.placeName')"
                                                :items="getPlaceList(selected_prefecture) || []" item-title="placeName"
                                                item-value="pngId" :disabled="!selected_prefecture"
                                                v-model="selected_place" />
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-tabs-window-item>
                            <!-- 分类编号 -->
                            <v-tabs-window-item value="ClassificationNumber">
                                <v-card-subtitle>{{ $t('tabItem.classificationNumber.rule') }}<a
                                        href="https://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%BB%8A%E8%BC%9B%E8%99%9F%E7%89%8C#%E5%88%86%E9%A1%9E%E7%B7%A8%E8%99%9F"
                                        target="_blank" class="card-link">{{
                                            $t('tabItem.classificationNumber.ruleLinkName') }}</a></v-card-subtitle>
                                <v-card-item>
                                    <v-row dense style="margin-top: 5px;">
                                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="12">
                                            <v-select :label="$t('tabItem.classificationNumber.number1')"
                                                :items="getClassificationNumberList(1) || []"
                                                v-model="selected_classificationNumber01" clearable />
                                        </v-col>
                                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="12">
                                            <v-select :label="$t('tabItem.classificationNumber.number2')"
                                                :items="getClassificationNumberList(2) || []"
                                                v-model="selected_classificationNumber02" clearable />
                                        </v-col>
                                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="12">
                                            <v-select :label="$t('tabItem.classificationNumber.number3')"
                                                :items="getClassificationNumberList(3) || []"
                                                v-model="selected_classificationNumber03" clearable />
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-tabs-window-item>
                            <v-tabs-window-item value="Hiragana">
                                <v-card-subtitle>{{ $t('tabItem.hiragana.rule') }}<a
                                        href="https://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%BB%8A%E8%BC%9B%E8%99%9F%E7%89%8C#%E5%B9%B3%E5%81%87%E5%90%8D"
                                        target="_blank" class="card-link">{{ $t('tabItem.hiragana.ruleLinkName')
                                        }}</a></v-card-subtitle>
                                <v-card-item>
                                    <v-select :label="$t('tabItem.hiragana.hiragana')"
                                        :items="getHiraganaList(selected_operationalPurpose, selected_vehiclePurpose)"
                                        style="margin-top: 5px;" v-model="selected_hiragana" />
                                </v-card-item>
                            </v-tabs-window-item>
                            <v-tabs-window-item value="VehicleNumber">
                                <v-card-subtitle>{{ $t('tabItem.vehicleNumber.rule') }}<a
                                        href="https://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%BB%8A%E8%BC%9B%E8%99%9F%E7%89%8C#%E8%BB%8A%E8%BC%9B%E7%B7%A8%E8%99%9F"
                                        target="_blank" class="card-link">{{ $t('tabItem.vehicleNumber.ruleLinkName')
                                        }}</a></v-card-subtitle>
                                <v-card-item>
                                    <v-row dense style="margin-top: 5px;">
                                        <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="12">
                                            <v-select :label="$t('tabItem.vehicleNumber.number1')"
                                                :items="vehicleNumberList01" v-model="selected_vehicleNumber01"
                                                clearable />
                                        </v-col>
                                        <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="12">
                                            <v-select :label="$t('tabItem.vehicleNumber.number2')"
                                                :items="vehicleNumberList02" v-model="selected_vehicleNumber02"
                                                clearable />
                                        </v-col>
                                        <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="12">
                                            <v-select :label="$t('tabItem.vehicleNumber.number3')"
                                                :items="vehicleNumberList03" v-model="selected_vehicleNumber03"
                                                clearable />
                                        </v-col>
                                        <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="12">
                                            <v-select :label="$t('tabItem.vehicleNumber.number4')"
                                                :items="vehicleNumberList04" v-model="selected_vehicleNumber04"
                                                clearable />
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-tabs-window-item>
                            <v-tabs-window-item value="Settings">
                                <v-card-item>
                                    <v-select :label="$t('tabItem.settings.operationalPurpose')"
                                        :items="operationalPurpose" style="margin-top: 5px;"
                                        v-model="selected_operationalPurpose" item-title="title" item-value="value" />
                                    <v-row dense>
                                        <v-col>
                                            <v-radio-group v-model="selected_vehiclePurpose">
                                                <v-radio :label="$t('tabItem.settings.vehiclePurpose.none')"
                                                    value="none"></v-radio>
                                                <v-radio :label="$t('tabItem.settings.vehiclePurpose.rentalCar')"
                                                    value="RentalCar"></v-radio>
                                                <v-radio
                                                    :label="$t('tabItem.settings.vehiclePurpose.USMilitaryPersonnel')"
                                                    value="USMilitaryPersonnel"
                                                    :disabled="selected_operationalPurpose === 1 || selected_operationalPurpose === 3"></v-radio>
                                            </v-radio-group>
                                        </v-col>
                                        <v-col>
                                            <v-checkbox density="compact" hide-details
                                                :label="$t('tabItem.settings.backLight')" v-model="selected_backlight"
                                                :disabled="selected_operationalPurpose === 3"></v-checkbox>
                                            <v-checkbox density="compact" hide-details
                                                :label="$t('tabItem.settings.background')"
                                                v-model="selected_background"></v-checkbox>
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" xl="3" lg="3" md="3" sm="12" xs="12">
                <v-card class="h-100" :title="$t('generateAndDownload')">
                    <v-card-item>
                        <v-btn block color="light-blue-accent-4" variant="tonal" @click="drawPlate()"
                            :disabled="!isDrawable()">{{ $t('generate') }}</v-btn>
                        <v-btn block style="margin-top: 5px; margin-bottom: 10px;" color="success" variant="tonal"
                            @click="downloadPlate()" :disabled="!isDrawable()">{{ $t('download') }}</v-btn>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { onMounted, nextTick } from 'vue'
import { useTheme } from 'vuetify';
import * as plateList from "../assets/placeList.js";
import * as list from "../assets/list.js";
import { Toast } from '@/assets/toast.js';
import * as locales from "../locales/list.js";

export default {
    setup() {
        const theme = useTheme();
        const toggleTheme = () => {
            const isDark = theme.global.current.value.dark;
            theme.global.name.value = isDark ? 'light' : 'dark';
            localStorage.setItem('theme', theme.global.name.value);
        };
        onMounted(() => {
            nextTick(() => {
                const savedTheme = localStorage.getItem('theme');
                if (!savedTheme) {
                    theme.global.name.value = 'light';
                    localStorage.setItem('theme', 'light');
                } else {
                    theme.global.name.value = savedTheme;
                }
            });
        });
        return {
            toggleTheme,
        };
    },
    data() {
        return {
            tab: 'PlaceName',
            locales: locales.locales,
            // 数据
            prefectureList: plateList.prefectureList,
            operationalPurpose: list.operationalPurpose,
            vehicleNumberList01: [],
            vehicleNumberList02: [],
            vehicleNumberList03: [],
            vehicleNumberList04: [],
            // 选中数据
            selected_prefecture: null, // 都道府县
            selected_place: null, // 地名标识
            selected_classificationNumber01: null, // 分类编号，第一位
            selected_classificationNumber02: null, // 分类编号，第二位
            selected_classificationNumber03: null, // 分类编号，第三位
            selected_hiragana: null, // 平假名
            selected_vehicleNumber01: null, // 车辆编号，第一位
            selected_vehicleNumber02: null, // 车辆编号，第二位
            selected_vehicleNumber03: null, // 车辆编号，第三位
            selected_vehicleNumber04: null, // 车辆编号，第四位
            selected_operationalPurpose: 0, // 营运用途
            selected_backlight: false, // 背光
            selected_background: true, // 号牌背景
            selected_vehiclePurpose: 'none', // 车辆用途
        }
    },
    methods: {
        getPlaceList: (prefectureName) => plateList.getPlaceList(prefectureName),
        getClassificationNumberList: (position) => list.getClassificationNumberList(position),
        getHiraganaList: (operationalPurpose, vehiclePurpose) => list.getHiraganaList(operationalPurpose, vehiclePurpose),
        getVehicleNumberList() {
            const isDigit = (c) => {
                return c !== '·' && c !== null && c !== undefined && c !== '' && '0123456789'.includes(c);
            };

            const s1 = this.selected_vehicleNumber01;
            const s2 = this.selected_vehicleNumber02;
            const s3 = this.selected_vehicleNumber03;

            // 生成vehicleNumberList01（第一位）
            this.vehicleNumberList01 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '·'];

            // 生成vehicleNumberList02（第二位）
            if (isDigit(s1)) {
                this.vehicleNumberList02 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            } else {
                this.vehicleNumberList02 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '·'];
            }

            // 生成vehicleNumberList03（第三位）
            const hasDigitBefore3 = isDigit(s1) || isDigit(s2);
            if (hasDigitBefore3) {
                this.vehicleNumberList03 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            } else {
                this.vehicleNumberList03 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '·'];
            }

            // 生成vehicleNumberList04（第四位）
            const hasDigitBefore4 = hasDigitBefore3 || isDigit(s3);
            if (hasDigitBefore4) {
                this.vehicleNumberList04 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            } else {
                this.vehicleNumberList04 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            }

            // 检查并修正当前选中的值是否合法
            const lists = [
                { list: this.vehicleNumberList01, selected: 'selected_vehicleNumber01' },
                { list: this.vehicleNumberList02, selected: 'selected_vehicleNumber02' },
                { list: this.vehicleNumberList03, selected: 'selected_vehicleNumber03' },
                { list: this.vehicleNumberList04, selected: 'selected_vehicleNumber04' },
            ];

            lists.forEach(item => {
                const currentValue = this[item.selected];
                if (currentValue && !item.list.includes(currentValue)) {
                    this[item.selected] = null; // 重置为null或第一个有效选项
                }
            });
        },
        async drawPlate() {
            if (!this.isDrawable()) return;
            const canvas = this.$refs.canvas;
            const ctx = canvas.getContext("2d");
            // 清除画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // 背景
            if (this.selected_background) {
                canvas.width = 1632;
                canvas.height = 816;
                try {
                    let bgModule;
                    if (Number(this.selected_operationalPurpose) === 0) {
                        bgModule = await import('@/assets/homeUse_AutomatiVehicle/background.png');
                    } else if (Number(this.selected_operationalPurpose) === 1) {
                        bgModule = await import('@/assets/homeUse_LightVehicle/background.png');
                    } else if (Number(this.selected_operationalPurpose) === 2) {
                        bgModule = await import('@/assets/businessUse_AutomatiVehicle/background.png');
                    } else if (Number(this.selected_operationalPurpose) === 3) {
                        bgModule = await import('@/assets/businessUse_LightVehicle/background.png');
                    } else {
                        bgModule = await import('@/assets/homeUse_AutomatiVehicle/background.png');
                    }
                    const bgImage = new Image();
                    bgImage.src = bgModule.default;
                    await new Promise(resolve => bgImage.onload = resolve);
                    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
                } catch (error) {
                    console.error("Error loading image:\n", error);
                    Toast.error(`生成号牌背景时发生错误\n原因：${error}`);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            }
            // 地名标识
            if (this.selected_place !== null) {
                try {
                    let regionModule;
                    if (Number(this.selected_operationalPurpose) === 0) {
                        if (this.selected_backlight) {
                            regionModule = await import(`@/assets/homeUse_AutomatiVehicle/place/backlight/${this.selected_place}.png`);
                        } else {
                            regionModule = await import(`@/assets/homeUse_AutomatiVehicle/place/normal/${this.selected_place}.png`);
                        }
                    } else if (Number(this.selected_operationalPurpose) === 1) {
                        if (this.selected_backlight) {
                            regionModule = await import(`@/assets/homeUse_LightVehicle/place/backlight/${this.selected_place}.png`);
                        } else {
                            regionModule = await import(`@/assets/homeUse_LightVehicle/place/normal/${this.selected_place}.png`);
                        }
                    } else if (Number(this.selected_operationalPurpose) === 2) {
                        if (this.selected_backlight) {
                            regionModule = await import(`@/assets/businessUse_AutomatiVehicle/place/backlight/${this.selected_place}.png`);
                        } else {
                            regionModule = await import(`@/assets/businessUse_AutomatiVehicle/place/normal/${this.selected_place}.png`);
                        }
                    } else if (Number(this.selected_operationalPurpose) === 3) {
                        regionModule = await import(`@/assets/businessUse_LightVehicle/place/normal/${this.selected_place}.png`);
                    } else {
                        if (this.selected_backlight) {
                            regionModule = await import(`@/assets/homeUse_AutomatiVehicle/place/backlight/${this.selected_place}.png`);
                        } else {
                            regionModule = await import(`@/assets/homeUse_AutomatiVehicle/place/normal/${this.selected_place}.png`);
                        }
                    }
                    const regionImage = new Image();
                    regionImage.src = regionModule.default;
                    regionImage.onload = () => {
                        ctx.drawImage(regionImage, 310, 35, 544, 280);
                    };
                } catch (error) {
                    console.error("Error loading image:\n", error);
                    Toast.error(`生成地区时发生错误\n原因：${error}`);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            }
            // 分类编号
            if (this.selected_classificationNumber01 !== null && this.selected_classificationNumber02 !== null && this.selected_classificationNumber03 !== null) {
                try {
                    const smallNumber = `${this.selected_classificationNumber01}${this.selected_classificationNumber02}${this.selected_classificationNumber03}`
                    for (let index = 0; index < smallNumber.length; index++) {
                        const digit = smallNumber[index];
                        let digitModule;
                        if (Number(this.selected_operationalPurpose) === 0) {
                            if (this.selected_backlight) {
                                digitModule = await import(`@/assets/homeUse_AutomatiVehicle/backlight/smallNumber.png`);
                            } else {
                                digitModule = await import(`@/assets/homeUse_AutomatiVehicle/normal/smallNumber.png`);
                            }
                        } else if (Number(this.selected_operationalPurpose) === 1) {
                            if (this.selected_backlight) {
                                digitModule = await import(`@/assets/homeUse_LightVehicle/backlight/smallNumber.png`);
                            } else {
                                digitModule = await import(`@/assets/homeUse_LightVehicle/normal/smallNumber.png`);
                            }
                        } else if (Number(this.selected_operationalPurpose) === 2) {
                            if (this.selected_backlight) {
                                digitModule = await import(`@/assets/businessUse_AutomatiVehicle/backlight/smallNumber.png`);
                            } else {
                                digitModule = await import(`@/assets/businessUse_AutomatiVehicle/normal/smallNumber.png`);
                            }
                        } else if (Number(this.selected_operationalPurpose) === 3) {
                            digitModule = await import(`@/assets/businessUse_LightVehicle/normal/smallNumber.png`);
                        } else {
                            if (this.selected_backlight) {
                                digitModule = await import(`@/assets/homeUse_AutomatiVehicle/backlight/smallNumber.png`);
                            } else {
                                digitModule = await import(`@/assets/homeUse_AutomatiVehicle/normal/smallNumber.png`);
                            }
                        }
                        const digitImage = new Image();
                        digitImage.src = digitModule.default;
                        digitImage.onload = () => {
                            // 计算字符参数
                            const charWidth = 2080 / 10; // 每字宽度 208px
                            const charHeight = 560 / 2; // 每字高度 280px
                            const rowMap = {
                                // 第一行：数字 0-9
                                '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
                                '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
                                // 第二行：字母
                                'A': 0, 'C': 1, 'F': 2, 'H': 3, 'K': 4,
                                'L': 5, 'M': 6, 'P': 7, 'X': 8, 'Y': 9
                            };
                            // 计算源坐标
                            const isNumber = !isNaN(digit);
                            const sx = rowMap[digit.toUpperCase()] * charWidth;
                            const sy = isNumber ? 0 : charHeight; // 字母第二行
                            ctx.drawImage(
                                digitImage,
                                sx, sy, // 源起点
                                charWidth, charHeight, // 源尺寸
                                825 + index * 145, 35, // 目标起点
                                208, 280 // 目标尺寸
                            );
                        };
                    }
                } catch (error) {
                    console.error("Error loading image:\n", error);
                    Toast.error(`生成分类编号时发生错误\n原因：${error}`);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            }
            // 平假名
            if (this.selected_hiragana !== null) {
                try {
                    let characterModule;
                    if (Number(this.selected_operationalPurpose) === 0) {
                        if (this.selected_backlight) {
                            characterModule = await import(`@/assets/homeUse_AutomatiVehicle/backlight/character.png`);
                        } else {
                            characterModule = await import(`@/assets/homeUse_AutomatiVehicle/normal/character.png`);
                        }
                    } else if (Number(this.selected_operationalPurpose) === 1) {
                        if (this.selected_backlight) {
                            characterModule = await import(`@/assets/homeUse_LightVehicle/backlight/character.png`);
                        } else {
                            characterModule = await import(`@/assets/homeUse_LightVehicle/normal/character.png`);
                        }
                    } else if (Number(this.selected_operationalPurpose) === 2) {
                        if (this.selected_backlight) {
                            characterModule = await import(`@/assets/businessUse_AutomatiVehicle/backlight/character.png`);
                        } else {
                            characterModule = await import(`@/assets/businessUse_AutomatiVehicle/normal/character.png`);
                        }
                    } else if (Number(this.selected_operationalPurpose) === 3) {
                        characterModule = await import(`@/assets/businessUse_LightVehicle/normal/character.png`);
                    } else {
                        if (this.selected_backlight) {
                            characterModule = await import(`@/assets/homeUse_AutomatiVehicle/backlight/character.png`);
                        } else {
                            characterModule = await import(`@/assets/homeUse_AutomatiVehicle/normal/character.png`);
                        }
                    }
                    const characterImage = new Image();
                    characterImage.src = characterModule.default;
                    characterImage.onload = () => {
                        // 计算字符参数
                        const charWidth = 2296 / 7; // 每字宽度
                        const charHeight = 2624 / 8; // 每字高度
                        // 平假名字符到索引的映射
                        const hiraganaMap = [
                            'あ', 'い', 'う', 'え', 'か', 'き', 'く',
                            'け', 'こ', 'さ', 'す', 'せ', 'そ', 'た',
                            'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ',
                            'ね', 'の', 'は', 'ひ', 'ふ', 'ほ', 'ま',
                            'み', 'む', 'め', 'も', 'や', 'ゆ', 'ら',
                            'り', 'る', 'れ', 'ろ', 'わ', 'を', 'Y',
                            'よ', 'A', 'B', 'E', 'H', 'K', 'M',
                            'T'
                        ];
                        // 获取选中的平假名字符的索引
                        const index = hiraganaMap.indexOf(this.selected_hiragana);
                        if (index === -1) {
                            console.error("Invalid Hiragana character selected!");
                            Toast.error("您选中了无效的平假名字符！");
                            return;
                        }
                        // 计算平假名所在的行列
                        const row = Math.floor(index / 7);  // 行数
                        const col = index % 7;  // 列数
                        // 计算源坐标
                        const sx = col * charWidth;  // 列位置
                        const sy = row * charHeight;  // 行位置
                        ctx.drawImage(
                            characterImage,
                            sx, sy, // 源起点
                            charWidth, charHeight, // 源尺寸
                            15, 375, // 目标起点
                            328, 328 // 目标尺寸
                        );
                    };
                } catch (error) {
                    console.error("Error loading image:\n", error);
                    Toast.error(`生成平假名时发生错误\n原因：${error}`);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            }
            // 车辆编号
            if (this.selected_vehicleNumber01 !== null && this.selected_vehicleNumber02 !== null && this.selected_vehicleNumber03 !== null && this.selected_vehicleNumber04 !== null) {
                try {
                    const vehicleNumber = `${this.selected_vehicleNumber01}${this.selected_vehicleNumber02}${this.selected_vehicleNumber03}${this.selected_vehicleNumber04}`;
                    for (let index = 0; index < vehicleNumber.length; index++) {
                        const digit = vehicleNumber[index];
                        let digitModule;
                        if (Number(this.selected_operationalPurpose) === 0) {
                            if (this.selected_backlight) {
                                digitModule = await import(`@/assets/homeUse_AutomatiVehicle/backlight/bigNumber.png`);
                            } else {
                                digitModule = await import(`@/assets/homeUse_AutomatiVehicle/normal/bigNumber.png`);
                            }
                        } else if (Number(this.selected_operationalPurpose) === 1) {
                            if (this.selected_backlight) {
                                digitModule = await import(`@/assets/homeUse_LightVehicle/backlight/bigNumber.png`);
                            } else {
                                digitModule = await import(`@/assets/homeUse_LightVehicle/normal/bigNumber.png`);
                            }
                        } else if (Number(this.selected_operationalPurpose) === 2) {
                            if (this.selected_backlight) {
                                digitModule = await import(`@/assets/businessUse_AutomatiVehicle/backlight/bigNumber.png`);
                            } else {
                                digitModule = await import(`@/assets/businessUse_AutomatiVehicle/normal/bigNumber.png`);
                            }
                        } else if (Number(this.selected_operationalPurpose) === 3) {
                            digitModule = await import(`@/assets/businessUse_LightVehicle/normal/bigNumber.png`);
                        } else {
                            if (this.selected_backlight) {
                                digitModule = await import(`@/assets/homeUse_AutomatiVehicle/backlight/bigNumber.png`);
                            } else {
                                digitModule = await import(`@/assets/homeUse_AutomatiVehicle/normal/bigNumber.png`);
                            }
                        }

                        const digitImage = new Image();
                        digitImage.src = digitModule.default;
                        digitImage.onload = () => {
                            // 计算字符参数
                            const charWidth = 2016 / 7; // 每字宽度 297px
                            const charHeight = 960 / 2; // 每字高度 280px
                            // 定义数字字符到索引的映射
                            const rowMap = {
                                '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
                                '7': 7, '8': 8, '9': 9, '·': 10, '-': 11
                            };
                            // 判断是否是需要绘制 "−"
                            const isNumberOrDash = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '·', '-'].includes(digit);
                            if (!isNumberOrDash) return; // 非有效字符不绘制
                            // 计算源坐标
                            const row = Math.floor(rowMap[digit] / 7);  // 行数
                            const col = rowMap[digit] % 7;  // 列数
                            const sx = col * charWidth;  // 列位置
                            const sy = row * charHeight;  // 行位置
                            // 绘制参数（保持比例缩放）
                            const targetWidth = 288;  // 目标显示宽度
                            const targetHeight = charHeight * (targetWidth / charWidth);  // ≈66.67px
                            // 1&2
                            if (index < 2) {
                                ctx.drawImage(
                                    digitImage,
                                    sx, sy, // 源起点
                                    charWidth, charHeight, // 源尺寸
                                    325 + index * 273, 300, // 目标起点
                                    targetWidth, targetHeight // 目标尺寸
                                );
                            }
                            // 3&4
                            if (index >= 2) {
                                ctx.drawImage(
                                    digitImage,
                                    sx, sy, // 源起点
                                    charWidth, charHeight, // 源尺寸
                                    1010 + (index - 2) * 273, 300, // 目标起点
                                    targetWidth, targetHeight // 目标尺寸
                                );
                            }
                            // 绘制 "-"
                            if (index === 1 || index === 2) {
                                if (this.selected_vehicleNumber01 !== '·' && this.selected_vehicleNumber02 !== '·') {
                                    const dashImage = new Image();
                                    dashImage.src = digitModule.default;
                                    dashImage.onload = () => {
                                        const dashCol = 4; // "-" 在第二行的索引
                                        const sxDash = dashCol * charWidth;
                                        const syDash = charHeight; // 第二行
                                        ctx.drawImage(
                                            dashImage,
                                            sxDash, syDash, // 源起点
                                            charWidth, charHeight, // 源尺寸
                                            800, 300, // 目标起点
                                            targetWidth, targetHeight // 目标尺寸
                                        );
                                    };
                                }
                            }
                        };
                    }
                } catch (error) {
                    console.error("Error loading image:\n", error);
                    Toast.error(`生成车辆编号时发生错误\n原因：${error}`);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            }
        },
        downloadPlate() {
            const canvas = this.$refs.canvas;
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "license_plate.png";
            link.click();
        },
        isDrawable() {
            if (this.selected_place === null) return false;
            if (this.selected_classificationNumber01 === null) return false;
            if (this.selected_classificationNumber02 === null) return false;
            if (this.selected_classificationNumber03 === null) return false;
            if (this.selected_hiragana === null) return false;
            if (this.selected_vehicleNumber01 === null) return false;
            if (this.selected_vehicleNumber02 === null) return false;
            if (this.selected_vehicleNumber03 === null) return false;
            if (this.selected_vehicleNumber04 === null) return false;
            if (this.selected_operationalPurpose === null) return false;
            if (this.selected_vehiclePurpose === null) return false;
            if (this.selected_backlight === null) return false;
            if (this.selected_background === null) return false;
            return true;
        },
        autoDrawPlate() {
            if (!this.isDrawable()) return;
            this.drawPlate();
        },
        onChangeLang(lang) {
            this.$i18n.locale = lang;
            localStorage.setItem('lang', lang);
        }
    },
    watch: {
        selected_operationalPurpose() {
            this.selected_hiragana = null;
            if (this.selected_operationalPurpose === 3) {
                this.selected_backlight = false;
            }
            // 如果当前选中的是驻留军人并且用户切换到了轻自动车，则重新归位
            if (this.selected_operationalPurpose === 1 || this.selected_operationalPurpose === 3) {
                this.selected_vehiclePurpose = 'none';
            }
        },
        selected_vehiclePurpose() {
            this.selected_hiragana = null;
        },
        selected_prefecture() {
            this.selected_place = null;
        }
    },
    mounted() {
        this.getVehicleNumberList();
        this.$watch(() => [this.selected_vehicleNumber01, this.selected_vehicleNumber02, this.selected_vehicleNumber03, this.selected_vehicleNumber04], () => { this.getVehicleNumberList(); },
        );
        this.$watch(
            () => [
                this.selected_place,
                this.selected_classificationNumber01,
                this.selected_classificationNumber02,
                this.selected_classificationNumber03,
                this.selected_hiragana,
                this.selected_vehicleNumber01,
                this.selected_vehicleNumber02,
                this.selected_vehicleNumber03,
                this.selected_vehicleNumber04,
                this.selected_operationalPurpose,
                this.selected_vehiclePurpose,
                this.selected_backlight,
                this.selected_background
            ],
            () => {
                this.autoDrawPlate();
            }
        );
    }
}
</script>

<style scoped>
.preview {
    display: flex;
    justify-content: center;
}

canvas {
    border: 1px solid #ccc;
}
</style>