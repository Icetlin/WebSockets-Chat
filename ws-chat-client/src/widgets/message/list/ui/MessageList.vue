<script setup lang="ts">
import {useMessageList} from "../lib/useMessageList";
import {MessageInline} from '@/entities/message'
import {DeleteMessageFeature} from "@/features/deleteMessage";


const {messages} = useMessageList();
</script>

<template>
  <div class="messages">
  <MessageInline v-for="message in messages.slice().reverse()" :message="message">
    <DeleteMessageFeature :message="message" :messages="messages" />
  </MessageInline>
    </div>
</template>

<style scoped>
.messages{
  background-color: #36364b;
  overflow: scroll;
  display: flex;
  flex-direction: column-reverse;
  height: 90vh;
  color: mintcream;

}

</style>