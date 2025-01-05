<template>
  <div>
    <h1>{{ $t('hello') }}</h1>
    <p>{{ $t('welcome') }}</p>
	  <p>{{ $t('message') }}</p>
    <button>{{ $t('button.submit') }}</button>
    <button>{{ $t('button.cancel') }}</button>

    <br>
    <button @click="changeLanguage('zh-Hans')">切换中文</button>
    <button @click="changeLanguage('en-US')">切换英文</button>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const changeLanguage = (lang) => {
  proxy.$i18n.locale = lang;
  uni.setLocale(lang);
};
</script>
