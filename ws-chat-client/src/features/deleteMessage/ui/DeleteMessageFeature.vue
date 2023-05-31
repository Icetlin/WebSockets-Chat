<script setup lang="ts">
import {messageLib, messageModel} from '@/entities/message';
import {unref} from "vue";

const {message, messages} = defineProps<{
  message: messageModel.Message,
  messages: messageModel.Message[],
}>();


const connection = messageLib.createSocketConnection();

function remove() {
  connection.send(JSON.stringify({
    action: 'delete',
    msgId: message.id,
  }))
}

function deleteForUser() {
  const messageToDeleteIndex = unref(messages).findIndex((msg) => msg.id === message.id);

  messages.splice(messageToDeleteIndex, 1);
}
</script>

<template>
  <div class="buttons">
    <div class="remove" @click="remove">Удалить у всех</div>
    <div class="deleteForUser" @click="deleteForUser">Удалить у меня</div>
  </div>
</template>

<style scoped>
.buttons{
  display: flex;
  color: silver;
}
.buttons:hover{
  cursor: default;
}
.remove{
  margin-left: 1em;

}
.remove:hover{
  color: azure;
}
.deleteForUser{
  margin-left: 1em;
}
.deleteForUser:hover{
  color: azure;
}
</style>