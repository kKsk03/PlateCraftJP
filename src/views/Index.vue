<template>
    <v-container max-width="1000px" class="mt-5 mb-5" style="margin-top: 40px; margin-bottom: 40px;">
        <h1>PlateCraftJP</h1>
        <!-- 预览框 -->
        <div class="preview" style="margin-top: 20px; margin-bottom: 20px;">
            <canvas ref="canvas" width="1632" height="816" style="width: 100%; height: auto; max-width: 1000px">
            </canvas>
        </div>
        <!-- 操作区域 -->
        <v-row dense>
            <v-col cols="12" xl="4" lg="4" md="4" sm="6" xs="12">
                <v-card class="h-100" title="地名标识">
                    <v-card-subtitle>地名标识规则：<a
                            href="https://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%BB%8A%E8%BC%9B%E8%99%9F%E7%89%8C#%E5%9C%B0%E5%90%8D"
                            target="_blank" class="card-link">详解与一览</a></v-card-subtitle>
                    <v-card-text>
                        <v-select label="都道府县" :items="prefectureList" item-title="title" item-value="value"
                            v-model="selected_prefecture"></v-select>
                        <v-select label="地名标识" :items="getPlaceList(selected_prefecture) || []" item-title="placeName"
                            item-value="pngId" :disabled="!selected_prefecture"></v-select>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" xl="4" lg="4" md="4" sm="6" xs="12">
                <v-card class="h-100" title="分类编号" text="..."></v-card>
            </v-col>
            <v-col cols="12" xl="4" lg="4" md="4" sm="6" xs="12">
                <v-card class="h-100" title="平假名" text="..."></v-card>
            </v-col>
            <v-col cols="12" xl="5" lg="5" md="5" sm="6" xs="12">
                <v-card class="h-100" title="车辆编号" text="..."></v-card>
            </v-col>
            <v-col cols="12" xl="4" lg="4" md="4" sm="6" xs="12">
                <v-card class="h-100" title="设定" text="..."></v-card>
            </v-col>
            <v-col cols="12" xl="3" lg="3" md="3" sm="6" xs="12">
                <v-card class="h-100" title="生成 & 下载" text="..."></v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import * as plateList from "../assets/placeList.js";

export default {
    data() {
        return {
            prefectureList: plateList.prefectureList,
            selected_prefecture: null, // 都道府县
            selected_place: null, // 地名标识
        }
    },
    methods: {
        getPlaceList: (prefectureName) => plateList.getPlaceList(prefectureName),
    },
    mounted() {
        console.log(this.getPlaceList('北海道'));
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