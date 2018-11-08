
<template>
    <div class="layout">
        <Layout>
            <vHeader></vHeader>
            <vContent></vContent>
            <Footer>Footer</Footer>
        </Layout>
    </div>
</template>

<script>
import index from "./index";
import vHeader from "./v-header/v-header.vue";
import vContent from "./v-content/v-content.vue";
export default {
    ...index,
    components: {
        vHeader,
        vContent,
    },
};
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>