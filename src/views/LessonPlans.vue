<template>
  <div class='page page--dark-theme lesson-plans'>
    <header>
      <router-link class='go-back light' :to="{name: 'ege'}">Go back</router-link>
    </header>
    <div class='contents'>
      <h1 class='primary-title heading-white'>Lesson plans</h1>
      <ColorStates :colorsList="plansColorsList"/>
      <PlanTable
        tableId='lesson_plans_table'
        :tableArray="lessonPlans"
      />
    </div>
    <ScrollTopBtn
      scroll-to-id='lesson_plans_table'
      :startScroll="300"
    />
  </div>
</template>

<script>
import ColorStates from '@/components/ColorStates.vue';
import ScrollTopBtn from '@/components/ScrollTopBtn.vue';
import PlanTable from '@/components/PlanTable.vue';

export default {
  name: 'LessonPlans',
  components: {
    ColorStates,
    ScrollTopBtn,
    PlanTable,
  },
  data() {
    return {
      plansColorsList: [
        {
          class: 'actual',
          explanation: 'Актуальный план',
        },
        {
          class: 'done',
          explanation: 'Выполненный пункт',
        },
        {
          class: 'partially-done',
          explanation: 'Частично выполненный пункт',
        },
        {
          class: 'debt',
          explanation: 'Долг',
        },
        {
          class: 'order-important',
          explanation: 'Важен порядок выполнения пунктов',
        },
      ],
      lessonPlans: [
        [
          {},
          {
            actual: false,
            date: '27.01.22',
            time: '1 час',
            list: [
              [`Сравнить ощущения от гитарной и оригинальной версии песни My heart will go on.
                Использовать сделанную таблицу словообразования на миро -
                использовать другие части речи, не те, что были даны в словарике и выделены в таблице желтым`, 'done'],
              ['Разобрать речь Speaker B до конца согласно плану Как работать с аудированием.', 'done'],
            ],
            links: [
              {
                address: 'https://miro.com/app/board/o9J_kuE-FSk=/?moveToWidget=3458764516690915363&cot=14',
                title: 'Таблица словообразования на миро',
              },
              {
                address: 'https://daria-blomma-tutoring.herokuapp.com/dictionaries#music_feelings',
                title: 'Cловарик Feelings about music',
              },
              {
                address: 'https://youtu.be/8u_T0ZEVD24',
                title: 'Celine Dion My heart will go on',
              },
              {
                address: 'https://youtu.be/gGraiFN283E',
                title: '(Guitar cover) My heart will go on',
              },
              {
                address: 'https://en-ege.sdamgia.ru/problem?id=176',
                title: 'Задание ЕГЭ 176 на аудирование (аудио запись)',
              },
            ],
          },
          {
            actual: true,
            date: '29.01.22',
            time: '1 час',
            list: [
              ['Записать на английском речь Speaker B из Задания 176 на аудирование'],
              ['Обсудить речь Speaker B - проблемы, трудности, преимущества этой профессии.', 'done'],
              ['Разобрать речь Speaker C  согласно плану Как работать с аудированием.'],
              ['Обсудить речь Speaker C - проблемы, трудности, преимущества этой профессии.'],
            ],
          },
          {
            date: '30.01.22',
            time: '30 мин',
            list: [
              ['Фонетическая разминка - песня Everybody walking this land'],
              ['Записать на английском речь Speaker C из Задания 176 на аудирование'],
            ],
            links: [
              {
                address: 'https://youtu.be/q5H1i2GBxEc',
                title: 'Home Free - Everybody walking this land',
              },
              {
                address: 'https://www.azlyrics.com/lyrics/homefree/everybodywalkinthisland.html',
                title: 'Lyrics for Everybody walking this land',
              },
            ],
          },
        ],
      ],
    };
  },
};
</script>
