<script setup lang="ts">
import {Message} from "../model";
import {PropType, ref} from "vue";
import {MessageInline} from "@/entities/message";

const {message} = defineProps<{
  message: Message,
}>();
const hover = ref(false)
</script>

<template>
  <div class="message" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="messageHeader">
      <div class="username">{{ message.username }}</div>
      <slot v-if="hover"></slot>
    </div>
    <div class="messageValue">{{ message.value }}</div>
    <div class="messageDate">{{ message.createdAt }}</div>
  </div>
</template>

<style scoped>
.message{
  margin-left: 1em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-radius: 0.5em;
}
.message:hover{
  background-color: rgba(245, 255, 250, 0.04);
}
.messageHeader{
  display: flex;
}
.username{
  font-weight: bold;
}
.messageValue{
  margin: 0.5em;
}
.messageDate{
  font-size: 0.7em;
}

</style>