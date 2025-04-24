<template>
    <RouterView />
    <footer class="py-3">
        <div class="body text-center">
            <p class="message">{{ $t('disclaimerMessage') }}</p>
            <p class="message">Released Under the <a href="https://www.gnu.org/licenses/gpl-3.0.html"
                    style="color: #de4f7a; text-decoration: underline;" target="blank">GNU General Public License
                    v3.0</a>.</p>
            <p class="copyright">Copyright &copy; 2023-Present <a href="https://github.com/kKsk03"
                    style="color: #de4f7a; text-decoration: underline;" target="blank">kKsk03</a> | Source Code: <a
                    href="https://github.com/kKsk03/PlateCraftJP" style="color: #de4f7a; text-decoration: underline;"
                    target="blank">GitHub</a></p>
        </div>
    </footer>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { useI18n } from 'vue-i18n'
import * as locales from "./locales/list.js";

// 自动设置主题
const theme = useTheme();
const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
theme.global.name.value = currentTheme;
localStorage.setItem('theme', currentTheme);

// 设置语言逻辑
const { locale } = useI18n()
const userLang = navigator.language || navigator.userLanguage
const supportedLangs = locales.locales.map(locale => locale.value)
const matchedLang = supportedLangs.includes(userLang)
  ? userLang
  : supportedLangs.find(lang => userLang.startsWith(lang.split('-')[0])) || 'en-US'

const currentSetLang = localStorage.getItem('lang') || matchedLang
locale.value = currentSetLang
localStorage.setItem('lang', currentSetLang)
</script>

<style scoped>
.message,
.copyright {
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 0 !important;
    opacity: var(--v-card-subtitle-opacity, var(--v-medium-emphasis-opacity));
}

.body {
    margin: 0 auto;
    max-width: 1440px;
    text-align: center;
}
</style>