<template>
    <v-container max-width="1000px" class="mt-5 mb-5" style="margin-top: 40px; margin-bottom: 40px;">
        <h1>PlateCraftJP<v-app-bar-nav-icon @click="toggleTheme()" icon="mdi-theme-light-dark" /></h1>
        <!-- 预览框 -->
        <div class="preview" style="margin-top: 20px; margin-bottom: 20px;">
            <canvas ref="canvas" width="1632" height="816" style="width: 100%; height: auto; max-width: 1000px">
            </canvas>
        </div>
        <!-- 操作区域 -->
        <v-row dense>
            <v-col cols="12" xl="9" lg="9" md="9" sm="12" xs="12">
                <v-card class="h-100">
                    <v-tabs v-model="tab" show-arrows center-active>
                        <v-tab value="PlaceName">地名标识</v-tab>
                        <v-tab value="ClassificationNumber">分类编号</v-tab>
                        <v-tab value="Hiragana">平假名</v-tab>
                        <v-tab value="VehicleNumber">车辆编号</v-tab>
                        <v-tab value="Settings">设定</v-tab>
                    </v-tabs>
                    <v-card-text style="padding-left: 0; padding-right: 0; padding-bottom: 0;">
                        <v-tabs-window v-model="tab">
                            <!-- 地名标识 -->
                            <v-tabs-window-item value="PlaceName">
                                <v-card-subtitle>地名标识规则：<a
                                        href="https://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%BB%8A%E8%BC%9B%E8%99%9F%E7%89%8C#%E5%9C%B0%E5%90%8D"
                                        target="_blank" class="card-link">详解与一览</a></v-card-subtitle>
                                <v-card-item>
                                    <v-row dense style="margin-top: 5px;">
                                        <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="12">
                                            <v-select label="都道府县" :items="prefectureList" v-model="selected_prefecture"
                                                item-title="title" item-value="value" />
                                        </v-col>
                                        <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="12">
                                            <v-select label="地名标识" :items="getPlaceList(selected_prefecture) || []"
                                                item-title="placeName" item-value="pngId"
                                                :disabled="!selected_prefecture" v-model="selected_place" />
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-tabs-window-item>
                            <!-- 分类编号 -->
                            <v-tabs-window-item value="ClassificationNumber">
                                <v-card-subtitle>地名标识规则：<a
                                        href="https://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%BB%8A%E8%BC%9B%E8%99%9F%E7%89%8C#%E5%88%86%E9%A1%9E%E7%B7%A8%E8%99%9F"
                                        target="_blank" class="card-link">详解与一览</a></v-card-subtitle>
                                <v-card-item>
                                    <v-row dense style="margin-top: 5px;">
                                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="12">
                                            <v-select label="第 1 位" :items="getClassificationNumberList(1) || []"
                                                v-model="selected_classificationNumber01" clearable />
                                        </v-col>
                                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="12">
                                            <v-select label="第 2 位" :items="getClassificationNumberList(2) || []"
                                                v-model="selected_classificationNumber02" clearable />
                                        </v-col>
                                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="12">
                                            <v-select label="第 3 位" :items="getClassificationNumberList(3) || []"
                                                v-model="selected_classificationNumber03" clearable />
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-tabs-window-item>
                            <v-tabs-window-item value="Hiragana">
                                <v-card-subtitle>平假名规则：<a
                                        href="https://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%BB%8A%E8%BC%9B%E8%99%9F%E7%89%8C#%E5%B9%B3%E5%81%87%E5%90%8D"
                                        target="_blank" class="card-link">详解与一览</a></v-card-subtitle>
                                <v-card-item>
                                    <v-select label="平假名"
                                        :items="getHiraganaList(selected_operationalPurpose, selected_vehiclePurpose)"
                                        style="margin-top: 5px;" v-model="selected_hiragana" />
                                </v-card-item>
                            </v-tabs-window-item>
                            <v-tabs-window-item value="VehicleNumber">
                                <v-card-subtitle>车辆编号规则：<a
                                        href="https://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%BB%8A%E8%BC%9B%E8%99%9F%E7%89%8C#%E8%BB%8A%E8%BC%9B%E7%B7%A8%E8%99%9F"
                                        target="_blank" class="card-link">详解与一览</a></v-card-subtitle>
                                <v-card-item>
                                    <v-row dense style="margin-top: 5px;">
                                        <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="12">
                                            <v-select label="第 1 位" :items="vehicleNumberList01"
                                                v-model="selected_vehicleNumber01" clearable />
                                        </v-col>
                                        <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="12">
                                            <v-select label="第 2 位" :items="vehicleNumberList02"
                                                v-model="selected_vehicleNumber02" clearable />
                                        </v-col>
                                        <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="12">
                                            <v-select label="第 3 位" :items="vehicleNumberList03"
                                                v-model="selected_vehicleNumber03" clearable />
                                        </v-col>
                                        <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="12">
                                            <v-select label="第 4 位" :items="vehicleNumberList04"
                                                v-model="selected_vehicleNumber04" clearable />
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-tabs-window-item>
                            <v-tabs-window-item value="Settings">
                                <v-card-item>
                                    <v-select label="营运用途" :items="operationalPurpose" style="margin-top: 5px;"
                                        v-model="selected_operationalPurpose" item-title="title" item-value="value" />
                                    <v-row dense>
                                        <v-col>
                                            <v-radio-group v-model="selected_vehiclePurpose">
                                                <v-radio label="普通车辆" value="none"></v-radio>
                                                <v-radio label="租赁车辆" value="RentalCar"></v-radio>
                                                <v-radio label="驻留军人用" value="USMilitaryPersonnel"></v-radio>
                                            </v-radio-group>
                                        </v-col>
                                        <v-col>
                                            <v-checkbox density="compact" hide-details label="背光"
                                                v-model="selected_backlight"></v-checkbox>
                                            <v-checkbox density="compact" hide-details label="号牌背景"
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
                <v-card class="h-100" title="生成 & 下载">
                    <v-card-item>
                        <v-btn block color="light-blue-accent-4" variant="tonal">生成</v-btn>
                        <v-btn block style="margin-top: 5px; margin-bottom: 10px;" color="success"
                            variant="tonal">下载</v-btn>
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
            selected_background: false, // 号牌背景
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
        }
    },
    watch: {
        selected_operationalPurpose() {
            this.selected_hiragana = null;
        },
        selected_vehiclePurpose() {
            this.selected_hiragana = null;
        }
    },
    mounted() {
        this.getVehicleNumberList();
        this.$watch(() => [this.selected_vehicleNumber01, this.selected_vehicleNumber02, this.selected_vehicleNumber03, this.selected_vehicleNumber04], () => { this.getVehicleNumberList(); },
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