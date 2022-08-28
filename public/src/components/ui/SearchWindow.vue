<template>
    <Transition name="modal-fade">
        <div class="overlay" @click.self="close">
            <div class="container" @click.self="close">
                <div class="modal-window search-modal-window">modal</div>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    name: "SearchWindow",
    methods: {
        close() {
            this.$emit("close");
        },
    },
};
</script>

<style lang="scss">

.modal-fade-enter-active,
.modal-fade-leave-active,
.search-modal-window {
    transition: all 0.5s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-leave-to .search-modal-window,
.modal-fade-enter-from .search-modal-window {
    transform: translateY(25px);
}

.search-modal-window {
    margin-top: 110px !important;
    width: 100%;
    height: 200px;
    padding: 10px;
    border-radius: 20px;
    animation-delay: 1500ms;
}
</style>
