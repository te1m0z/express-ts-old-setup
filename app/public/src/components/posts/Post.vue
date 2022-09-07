<template>
    <div class="post">
        <header class="post-header">
            <router-link :to="slug">
                <div class="post-header_title">{{ title }}</div>
            </router-link>
            <div class="post-header_date">{{ date }}</div>
        </header>
        <div class="post-body">
            {{ content }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Post",
    data() {
        return {
            title: null,
            content: null,
            date: null,
            slug: null,
        };
    },
    props: {
        post: Object,
    },
    created() {
        this.title = this.post.title;
        this.content = this.post.content;
        // this.date = this.post.date;
        this.slug = this.post.slug;
    },
};
</script>

<style lang="scss">

.post {
    border: 3px solid rgba(0, 0, 0, 0.05);
    padding: 14px 20px;
    border-radius: 20px;
    transition: 400ms ease;
    cursor: pointer;

    &:hover {
        border-color: aqua;
        background: rgba(0, 0, 0, 0.05);
    }

    & + .post {
        margin-top: 30px;
    }

    &-header {
        display: flex;
        justify-content: space-between;
        height: 34px;
        margin-bottom: 24px;

        &_title {
            transition: 500ms ease;
            font-size: 30px;

            &.blick {
                height: 40px;
                width: 200px;
            }
        }

        &_date {
            &.blick {
                height: 40px;
                width: 100px;
            }
        }
    }

    &-body {

        &.blick {
            height: 160px;
            width: 100%;
        }
    }
}
</style>
