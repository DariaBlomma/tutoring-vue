<template>
  <div class='page page--dark-theme lesson-plans'>
    <header>
      <router-link class='go-back light' :to="{name: 'ege'}">
        Back to EGE page
      </router-link>
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
      :startScroll="300"
    />
  </div>
</template>

<script>
// todo 1) скролл к актуальному плану
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
            actual: false,
            date: '29.01.22',
            time: '1 час',
            list: [
              ['Записать на английском речь Speaker B из Задания 176 на аудирование', 'done'],
              ['Обсудить речь Speaker B - проблемы, трудности, преимущества этой профессии.', 'done'],
            ],
          },
          {
            actual: false,
            date: '30.01.22',
            time: '30 мин',
            list: [
              ['Фонетическая разминка - песня Everybody walking this land', 'done'],
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
        [
          {
            actual: false,
            date: '01.02.2022',
            time: '30 мин',
            list: [
              ['Разобрать речь Speaker C  согласно плану Как работать с аудированием.', 'done'],
            ],
          },
          {
            actual: false,
            date: '03.02.2022',
            time: '30 мин',
            list: [
              ['Обсудить речь Speaker C - проблемы, трудности, преимущества этой профессии.'],
              ['Записать на английском речь Speaker C из Задания 176 на аудирование'],
            ],
          },
          {
            actual: false,
            date: '05.02.2022',
            time: '30 мин',
            list: [
              ['Проработать песню Everybody walking this land, строки с быстрым ритмом и речь певца в конце подробно', 'done'],
            ],
          },
          {
            actual: false,
            date: '06.02.2022',
            time: '60 мин',
            list: [
              ['Разговор на общие темы - как прошла неделя и т.д', 'done'],
              ['Обсудить речь Speaker C - проблемы, трудности, преимущества этой профессии.', 'done'],
              ['Записать на английском речь Speaker C из Задания 176 на аудирование'],
              ['Разобрать речь Speaker D'],
            ],
          },
        ],
        [
          {
            actual: false,
            date: '08.02.2022',
            time: '30 мин',
            list: [
              ['Записать на английском речь Speaker C из Задания 176 на аудирование', 'done'],
              ['Разобрать речь Speaker D'],
            ],
          },
          {},
          {
            actual: false,
            date: '12.02.2022',
            time: '60 мин',
            list: [
              ['Разобрать речь Speaker D'],
              ['Записать на английском речь Speaker D из Задания 176 на аудирование'],
              ['Обсудить речь Speaker D - проблемы, трудности, преимущества этой профессии.'],
            ],
          },
          {
            actual: true,
            date: '13.02.2022',
            time: '30 мин',
            list: [
              ['Разобрать речь Speaker E'],
            ],
          },
        ],
        [
          {
            actual: false,
            date: '14.02.2022',
            time: '30 мин',
            list: [
              ['Записать на английском речь Speaker E из Задания 176 на аудирование'],
              ['Обсудить речь Speaker E - проблемы, трудности, преимущества этой профессии.'],
            ],
          },
          {
            actual: false,
            date: '16.02.2022',
            time: '30 мин',
            list: [
              ['Разобрать речь Speaker F'],
            ],
          },
          {
            actual: false,
            date: '18.02.2022',
            time: '30 мин',
            list: [
              ['Записать на английском речь Speaker F из Задания 176 на аудирование'],
              ['Обсудить речь Speaker F - проблемы, трудности, преимущества этой профессии.'],
            ],
          },
        ],
      ],
    };
  },
};
</script>
