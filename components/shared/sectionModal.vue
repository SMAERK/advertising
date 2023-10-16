<scripts lang="ts">
import { ref, defineComponent, computed, PropType } from 'vue'

export default defineComponent({
    name: 'SectionModal',
    props:{
        title:{type: String, required: true}
    }
})
const handleClose = () => {
      emit('hide')
    }

</scripts>
<template>
   <VModal
   :title="`${props.title}`"
   actions="center"
   size="big"
   open="isModalOpen"
   @close="handleClose"
   >
   <template>
    <div>
        <h1>hola</h1>
    </div>
   </template>

   </VModal> 
</template>