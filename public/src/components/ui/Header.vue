<template>
    <SearchWindow v-show="isModalShow" @close="closeModal" />
    <Transition name="main-header" appear>
        <header class="main-header">
            <div class="main-header-inner" @click.self="isModalShow = false">
                <Transition name="logo" appear>
                    <div class="main-header_logo">
                        <router-link to="/">Blog</router-link>
                    </div>
                </Transition>
                <Transition name="search" appear>
                    <div class="main-header_search">
                        <form
                            @submit.prevent="startSearch"
                            @keydown.enter="startSearch"
                        >
                            <input
                                type="text"
                                class="search"
                                placeholder="Поиск"
                                ref="search"
                                v-model="search"
                                @focus="showModal"
                            />
                            <input type="submit" value="" class="search-btn" />
                        </form>
                    </div>
                </Transition>
            </div>
        </header>
    </Transition>
    <div>&nbsp;</div>
</template>

<script>
import SearchWindow from "./SearchWindow.vue";
export default {
    name: "Header",
    data() {
        return {
            isModalShow: false,
            search: ""
        };
    },
    created() {
        window.addEventListener("keydown", this.onKeyDown);
    },
    beforeUnmount() {
        window.removeEventListener("keydown", this.onKeyDown);
    },
    components: {
        SearchWindow,
    },
    methods: {
        showModal() {
            document.body.style.overflow = "hidden";
            setTimeout(function () {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }, 300);
            this.isModalShow = true;
            this.$refs.search.focus();
        },
        closeModal() {
            document.body.style.overflow = "auto";
            this.isModalShow = false;
            this.$refs.search.blur();
            this.search = ""
        },
        startSearch() {
            console.log("startSearch");
        },
        onKeyDown(event) {
            if (event.ctrlKey && event.keyCode === 70) {
                this.showModal();
            }
            if (event.keyCode === 27) {
                this.closeModal();
            }
        },
    },
};
</script>

<style lang="scss">
.logo-enter-active,
.main-header-enter-active,
.search-enter-active {
    transition: all 700ms ease;
}

.logo-enter-active {
    transition-delay: 500ms;
}

.search-enter-active {
    transition-delay: 800ms;
}

.search-enter-from {
    transform: translateY(-20px);
    opacity: 0;
}

.logo-enter-from {
    top: calc(50% - 20px) !important;
    opacity: 0;
}

.main-header-enter-from {
    transform: translate(0, -100%);
    opacity: 0;
}

.main-header {
    height: 70px;
    z-index: 91;

    &-inner {
        margin-top: 20px;
        border-radius: 20px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: linear-gradient(to right, #fc00ff, #00dbde);
        z-index: 91;

        & .main-header_logo {
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);

            & > a {
                color: #fff;
                font-size: 30px;
            }
        }

        & .main-header_search {
            & .search {
                font-size: 18px;
                padding: 5px 15px;
                border-radius: 6px;
                transition: border 0.7s ease;
                border: 2px solid transparent;

                &:focus {
                    border-color: #1100ff;
                }
            }

            & .search-btn {
                font-size: 18px;
                margin-left: 20px;
                padding: 5px;
                border-radius: 6px;
            }
        }
    }
}
</style>
