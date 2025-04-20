<template>
    <RouterView />
    <footer class="py-3">
        <div class="body text-center">
            <p class="message">仅供个人学习研究和交流使用，严禁用于商业用途</p>
            <p class="message">Released Under the <a href="https://www.gnu.org/licenses/gpl-3.0.html"
                    style="color: #de4f7a; text-decoration: underline;" target="blank">GNU General Public License
                    v3.0</a>.</p>
            <p class="copyright">Copyright &copy; 2023-Present <a href="https://github.com/kKsk03"
                    style="color: #de4f7a; text-decoration: underline;" target="blank">kKsk03</a></p>
        </div>
    </footer>
</template>

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