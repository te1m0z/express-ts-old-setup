<template>
    <form id="login-form">
        <div class="form-group">
            <label for="login_input">Логин</label>
            <input type="text" name="login" id="login_input" />
        </div>
        <div class="form-group">
            <label for="password_input">Пароль</label>
            <input type="password" name="password" id="password_input" />
        </div>
        <button type="submit">Войти</button>
    </form>
</template>

<script>
export default {
    name: "LoginForm",
    
};
</script>

<style scoped lang="scss">
#login-form {
    width: 400px;
    margin: 50px auto 0 auto;

    & .form-group {
        display: flex;
        flex-flow: column nowrap;

        & + .form-group {
            margin-top: 20px;
        }

        & label {
            margin: 10px;
        }

        & input {
            margin-top: 10px;
            padding: 10px;
            border-radius: 4px;
            border: 2px solid #ccc;
        }
    }

    & > button {
        margin-top: 20px;
        padding: 10px;
        font-size: 16px;
    }
}
</style>
