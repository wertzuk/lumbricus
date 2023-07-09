<template>
  <h1 class="section-heading">Veranstaltung bearbeiten</h1>
  <form @submit.prevent="submit" class="event-form box-shadow">
    <div class="form-row flex flex-col">
      <label for="title">Titel</label>
      <input type="text" id="title" v-model="title" required />
    </div>
    <div class="flex justify-between">
      <div class="form-row flex flex-col">
        <label for="dateStart">Startdatum</label>
        <input type="date" id="dateStart" v-model="dateStart" required />
      </div>
      <div class="form-row flex flex-col">
        <label for="dateEnd">Enddatum</label>
        <input type="date" id="dateEnd" v-model="dateEnd" />
      </div>
    </div>
    <QuillEditor
      style="min-height: 200px"
      theme="snow"
      ref="editor"
      contentType="html"
      v-model:content="content"
      @ready="(quill) => start(quill)"
    />
    <button class="btn">Speichern</button>
  </form>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { QuillEditor } from '@vueup/vue-quill';

const store = inject('store');

const event = store.state.eventSelected;
const editor = ref(null);
const content = ref(event.content);
const dateStart = ref(event.dateStart);
const dateEnd = ref(event.dateEnd);
const title = ref(event.title);
const router = useRouter();
const dialog = ref(null);

let quillEditor = null;

function start(quill) {
  quillEditor = quill;
  editor.value = quill;
  console.log(quillEditor);
}

async function submit() {
  const post = {
    title: title.value,
    dateStart: dateStart.value,
    dateEnd: dateEnd.value,
    content: content.value,
  };
  const token = localStorage.getItem('token');
  const response = await fetch(
    `http://localhost/lumbricus/server/api/posts.php?id=${event.id}`,
    {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  if (response.ok) {
    store.methods.displaySuccessMessage(true, 'Erfolgreich bearbeitet');

    router.push('/');
  }

  title.value = '';
  dateStart.value = '';
  dateEnd.value = '';
  content.value = '';
  quillEditor.setContents([{ insert: '\n' }]);
}
</script>

<style lang="scss" scoped>
@import '../scss/vars';

.dailog1 {
  padding: 1.5rem;
  border: none;
  background: red;
}

h1 {
  text-align: center;
  margin-block: 2rem;
}
.event-form {
  width: 70%;
  max-width: 900px;
  margin: 0 auto 3rem;
  background: #d7f2d2fc;
  padding: 2rem;
}

input {
  margin-bottom: 1rem;
}

input[type='text'] {
  border: none;
  outline: none;
  padding: 0.3em 0.7em;
  font-size: $fs-400;
  border: 1px solid rgba(0, 0, 0, 0.4);
}

input[type='date'] {
  cursor: pointer;
  padding: 0.5rem;
}

.btn {
  padding: 0.5em 1.3em;
  margin-top: 3rem;
  font-size: $fs-400;
}

.btn,
input[type='date'] {
  border: 1px solid rgba(0, 0, 0, 0.4);
  transition: all 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}

.ql-container.ql-snow {
  border: 1px solid black !important  ;
}
</style>
