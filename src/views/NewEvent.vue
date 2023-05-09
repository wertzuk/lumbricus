<template>
  <h1 class="section-heading">Neue Veranstaltung hinzufügen</h1>
  <form class="event-form">
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
    <button class="btn" @click.prevent="submit">Veranstaltung erstellen</button>
  </form>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { QuillEditor } from '@vueup/vue-quill';

const editor = ref(null);
const content = ref('');
const dateStart = ref('');
const dateEnd = ref('');
const title = ref('');
const router = useRouter();

const dialog = ref(null);

const store = inject('store');
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
  const response = await fetch(
    'http://localhost/lumbricus/server/api/posts.php',
    {
      method: 'POST',
      body: JSON.stringify(post),
    },
  );
  if (response.ok) {
    // alert('Erstellt');
    store.methods.displaySuccessMessage(true, 'Erfolgreich erstellt');

    router.push('/');
  }

  store.state.events.push(post);
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
