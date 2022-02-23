<template>
  <div class='page page--dark-theme homework'>
    <header>
      <router-link class='go-back light' :to="{name: 'ege'}">Go back</router-link>
    </header>
    <div class='contents'>
      <h1 class='primary-title heading-white'>Homework</h1>
      <ColorStates :colorsList="hwColorsList"/>
      <PlanTable
        tableId='hw_table'
        :tableArray="hws"
      />
    </div>
    <ScrollTopBtn
      :startScroll="300"
    />
  </div>
</template>

<script setup>
import ColorStates from '@/components/ColorStates.vue';
import ScrollTopBtn from '@/components/ScrollTopBtn.vue';
import PlanTable from '@/components/PlanTable.vue';

const hwColorsList = [
  {
    class: 'actual',
    explanation: 'Актуальное дз',
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
  {
    class: 'lesson-required',
    explanation: 'Нужно для урока',
  },
];
const hws = [
  [
    {},
    {},
    {},
    {
      actual: false,
      date: '26.12.21',
      list: [
        ['Перевести устно прикрепленное в телеграме аудио (максимально близко к оригиналу, опираясь на ранее переведенные слова в словариках)', 'done'],
        ['Смотреть видео Continuous tenses и исправить свое образование Continuous в Present, Past, Future (например, с глаголом come )', 'done'],
        ['Слушать песню On the railroad. Проверить отстутствие технических проблем и параллельно смотреть слова (есть справа на сайте Яндекс Музыки)', 'done'],
      ],
      links: [
        {
          address: 'https://youtu.be/k-9o1RK1AkQ',
          title: 'Continuous tenses',
        },
        {
          address: 'https://music.yandex.ru/album/5421271/track/41395019',
          title: 'On the railroad',
        },
      ],
    },
  ],
  [
    {
      actual: false,
      addInfo: `
        <h4 class='title-4'>Как работать с аудированием</h4>
        <ol class='add-info__list'>
          <li class='add-info__line'>прослушать часть предложения</li>
          <li class='add-info__line'>сказать ее по английски</li>
          <li class='add-info__line'>перевести ее на русский</li>
          <li class='add-info__line'>анализировать (каждый пункт проговорить вслух)
            <ul class='list-typed'>
              <li class='add-info__line'>Если в русском переводе больше слов, чем в английском, то какого слова не хватает в моем английском переводе?</li>
              <li class='add-info__line'>Если я не слышу какого-то слова, то надо разобрать по частям речи имеющееся и понять, какой части речи не хватает</li>
              <li class='add-info__line'>В каком времени сказано предложение? Как в этом времени тогда будут образованы глаголы в предложении? Слышу ли я это? Сказали ли я отчетливо это в своей речи?</li>
            </ul>
          </li>
          <li class='add-info__line'>после анализа сказать еще раз (уже в исправленном виде) предложение по английски и перевести на русский</li>
        </ol>
      `,
      date: '28.12.21',
      list: [
        ['Записать на английском речь Speaker A из Задания 176 на аудирование', 'done'],
        ['Разобрать речь Speaker B, С согласно плану Как работать с аудированием. Каждый пункт проговаривать вслух в качестве отчета', 'debt'],
        ['Потренироваться говорить в том же темпе, как и оригинал, песню On the railroad. Прислать аудиозапись получившегося', 'done'],
        [`Найти в интернете английские песни на рождество или новый год,
          те, которые ты где-либо слышала и те, которые тебе просто понравились. Несколько штук.
          Может помочь в поиске словосочетание Christmas carols, new year songs
          Прислать ссылки, где можно послушать эти песни`, 'done'],
      ],
      links: [
        {
          address: 'https://en-ege.sdamgia.ru/problem?id=176',
          title: 'Задание ЕГЭ 176 на аудирование (аудио запись)',
        },
        {
          address: 'https://music.yandex.ru/album/5421271/track/41395019',
          title: 'On the railroad',
        },
      ],
    },
    {},
    {
      actual: false,
      date: '15.01.22',
      list: [
        ['Пункты 2 и 3 из дз на 28.12.21', 'partially-done'],
        ['Прослушать песню в Телеграме My heart will go on', 'done'],
      ],
      links: [
        {
          address: 'https://youtu.be/gGraiFN283E',
          title: '(Guitar cover) My heart will go on',
        },
      ],
    },
    {},
  ],
  [
    {
      actual: false,
      date: '18.01.22',
      list: [
        ['Пункт 2 дз из на 28.12.21', 'lesson-required'],
        ['Заполнить таблицу словообразования на основе словарика Feelings about music',
          'order-important'],
        ['Прослушать оригинальную песню Celine Dion My heart will go on',
          'order-important'],
        [`Сравнить свои ощущения от гитарной и оригинальной версии этой песни,
          использую слова из указанного выше словарикаб НО! в другой части речи
          (взять из заполненной в пункте 2 таблицы)`,
        // eslint-disable-next-line indent
          'order-important'],
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
      ],
    },
    {},
    {
      actual: true,
      date: '26.02.22',
      list: [
        ['Рассказать кратко (5 - 10 предложений) о текущей политической ситуации.'],
        ['Статьи по теме на английском можно найти, если искать в Google - russia recognized independence'],
        ['В каждом предложении использоваать сложные слова.'],
        ['Может помочь мини-словарик Some politics of 2022 (ссылка приложена внизу)'],
      ],
      addInfo: `
        <h4 class='title-4'>Примерный план рассказа</h4>
        <ol class='add-info__list'>
          <li class='add-info__line'>Когда и почему ухудшились отношения между Украиной и нынешними ЛНР/ДНР (между восточной и западной частями страны)</li>
          <li class='add-info__line'>Реакция России на этот конфликт</li>
          <li class='add-info__line'>Отношение Запада к сложившейся ситуации</li>
          <li class='add-info__line'>Как произошло признание ДНР/ЛНР - кто был инициатором, кто как относился к возможному признанию?</li>
          <li class='add-info__line'>Что меняет факт признания - для самих республик Украины, для Росии, для Запада и США?</li>
        </ol>
      `,
      links: [
        {
          title: 'Some politics of 2022',
          address: 'https://daria-blomma-tutoring.herokuapp.com/lesson-materials#politics_2022',
        },
      ],
    },
    {},
  ],
];
</script>
