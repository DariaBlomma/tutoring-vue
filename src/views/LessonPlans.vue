<template>
  <div class='page page--dark-theme lesson-plans'>
    <header>
      <router-link class='go-back light' :to="{name: route.params.name}">
        Back to personal page
      </router-link>
    </header>
    <div class='contents'>
      <h1 class='primary-title heading-white'>Lesson plans</h1>
      <ColorStates :colorsList="plansColorsList"/>
      <PlanTable
        tableId='lesson_plans_table'
        :tableArray="lessonPlans"
        :planDays="planDays"
      />
    </div>
    <ScrollTopBtn
      :startScroll="300"
    />
  </div>
</template>

<script setup>
// todo 2) адаптация под мобильный
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ColorStates from '@/components/ColorStates.vue';
import ScrollTopBtn from '@/components/ScrollTopBtn.vue';
import PlanTable from '@/components/PlanTable.vue';

const plansColorsList = [
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
];

const MashaPlanDays = ['ВТ', 'ЧТ', 'СБ', 'ВС'];
const MashaLessonPlans = [
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
        ['Разобрать речь Speaker D', 'done'],
      ],
    },
    {
      actual: false,
      date: '13.02.2022',
      time: '30 мин',
      list: [
        ['Разговор на общие темы - про пищевые привычки в семье', 'done'],
      ],
    },
  ],
  // 14.02 - 20.02
  [
    {
    },
    {
      actual: false,
      date: '17.02.2022',
      time: '30 мин',
      list: [
        ['Записать на английском речь Speaker D из Задания 176 на аудирование', 'done'],
        ['Обсудить речь Speaker D - проблемы, трудности, преимущества этой профессии.', 'partially-done'],
      ],
    },
    {
      actual: false,
      date: '19.02.2022',
      time: '30 мин',
      list: [
        ['Обсудить речь Speaker D - проблемы, трудности, преимущества этой профессии.', 'done'],
        ['Разобрать речь Speaker E', 'partially-done'],
      ],
    },
    {
      actual: false,
      date: '20.02.2022',
      time: '30 мин',
      list: [
        ['Записать на английском речь Speaker E из Задания 176 на аудирование'],
      ],
    },
  ],
  // 21.02. - 27.02
  [
    {
      actual: false,
      date: '22.02.2022',
      time: '30 мин',
      list: [
        ['Обсуждение личных и политических новостей', 'done'],
      ],
    },
    {
      // занятие перенесено
    },
    {
      actual: true,
      date: '26.02.2022',
      time: '1 час',
      list: [
        ['Выполнение задания на подстановку пропусков по текущей политической ситуации'],
      ],
      links: [
        {
          title: 'Some politics of 2022',
          address: 'https://daria-blomma-tutoring.herokuapp.com/lesson-materials#politics_2022',
        },
      ],
    },
    {
      actual: false,
      date: '27.02.2022',
      time: '30 мин',
      list: [
        ['Разобрать речь Speaker E', 'partially-done'],
        ['Записать на английском речь Speaker E из Задания 176 на аудирование'],
      ],
    },
  ],
  // 28.02 - 06.03
  [
    {
      actual: false,
      date: '01.03.2022',
      time: '30 мин',
      list: [
        ['Обсудить речь Speaker E - проблемы, трудности, преимущества этой профессии.'],
        ['Разобрать речь Speaker F'],
        ['Записать на английском речь Speaker F из Задания 176 на аудирование'],
        ['Обсудить речь Speaker F - проблемы, трудности, преимущества этой профессии.'],
      ],
    },
    {
      actual: false,
      date: '03.03.2022',
      time: '30 мин',
      list: [
        ['Записать на английском речь Speaker F из Задания 176 на аудирование'],
        ['Обсудить речь Speaker F - проблемы, трудности, преимущества этой профессии.'],
      ],
    },
    {},
    {},
  ],
];

const VladPlanDays = ['ВТ', 'ЧТ'];
const VladLessonPlans = [
  // 28.02.22 - 06.03.22
  [
    {},
    {
      actual: false,
      date: '01.03.2022',
      time: '60 мин',
      list: [
        ['Теория про всю системы времен', 'done'],
        ['Теория про Present Simple, To be in Present Simple', 'done'],
        ['Упражнение на коррекцию ошибок в Present Simple', 'done'],
        ['Разговор - introduce yourself, используя Present Simple', 'done'],
      ],
      links: [
        {
          title: 'Коррекция ошибок в Present Simple',
          address: 'https://docs.google.com/document/d/1CwgIFzOmLeJDoukPgEa7u4NN_9d0w2Pq/edit?usp=sharing&ouid=100114228061075300910&rtpof=true&sd=true',
        },
      ],
    },
  ],
  // 07 - 13.03.21
  [
    {},
    {
      actual: true,
      date: '10.03.2022',
      time: '60 мин',
      list: [
        ['Вопрос: значения типов времен (simple, continuous), примеры из жизни'],
        ['Вопрос: Теория про Present Simple, его значение, образование'],
        ['Грамматические упражнени на образование Present Simple (Speakout Elementary, 4a, Murphy Elementary 5.3, 6.1, 7.1'],
        ['Аудирование на тему Introductions - видео представление канала, из учебника New Headway'],
      ],
      links: [
        {
          title: 'All tenses',
          address: 'https://daria-blomma-tutoring.herokuapp.com/tenses/all-tenses',
        },
        {
          title: 'Present Simple theory',
          address: 'https://daria-blomma-tutoring.herokuapp.com/tenses/present-simple',
        },
        {
          title: 'Present Simple exercises',
          address: 'https://daria-blomma-tutoring.herokuapp.com/vlad/lesson-2/#vlad-lesson2-gr-exs',
        },
        {
          title: 'Listening Introductions',
          address: 'https://daria-blomma-tutoring.herokuapp.com/vlad/lesson-2/#vlad-lesson2-listening',
        },
      ],
    },
  ],
  [
    {
      actual: false,
      date: '15.03.2022',
      time: '60 мин',
      list: [
        ['Вопрос: Теория про Present Simple, его значение, образование'],
        ['Вопрос: Теория про To be, его применение, формы в Present Simple'],
        ['Грамматические упражнения на образование To be (Murphy Elementary 1.1, 1.2, 2.2'],
        ['Полезные фразы для разговора.(Speakout Elementary 1.1, 1.2, 2.2)'],
        ['Разговор - пример обсуждения чего-либо с заказчиком'],
      ],
      links: [
        {
          title: 'Present Simple theory',
          address: 'https://daria-blomma-tutoring.herokuapp.com/tenses/present-simple',
        },
      ],
    },
  ],
];

const route = useRoute();
const lessonPlans = computed(() => (route.params.name === 'masha' ? MashaLessonPlans : VladLessonPlans));
const planDays = computed(() => (route.params.name === 'masha' ? MashaPlanDays : VladPlanDays));

const scrollToActualPlan = () => {
  const actualPlan = document.querySelector('.plan-actual');
  actualPlan.scrollIntoView(false);
};

onMounted(scrollToActualPlan);
</script>
