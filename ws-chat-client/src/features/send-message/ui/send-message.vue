<script setup lang="ts">
import {messageLib} from '@/entities/message';
import {ref, unref} from "vue";
import {useMessageList} from "@/widgets/message/list/lib/useMessageList";

const connection = messageLib.createSocketConnection();
const value = ref();
const date = new Date();
const localDate = date.toLocaleDateString()
const generateMessageId = 0

function sendMessage() {
  connection.send(JSON.stringify({
    userName: 'name',
    msgValue: unref(value),
    msgDate: localDate,
    msgId: Date.now(),
  }));

  value.value = '';
}
</script>

<template>
  <form class="sendMessageForm" @submit.prevent="sendMessage">
    <input class="sendMessageForm_input" v-model="value" placeholder="Введите сообщение">
    <!--    <button type="submit">send message</button>-->
  </form>
</template>

<style scoped>
.sendMessageForm{
  height: 10vh;
  background-color: #36364b;
  border-top: rgba(245, 255, 250, 0.06);
  border-style: solid;
}
.sendMessageForm_input{
  height: 100%;
  width: 100%;
  border: none;
  padding-left: 1em;
  background-color: transparent;
  color: mintcream;




}
.sendMessageForm_input:focus{
  outline: none;
}
</style>