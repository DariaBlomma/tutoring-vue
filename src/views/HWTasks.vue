<template>
  <div class='page homework'>
    <header>
      <router-link class='go-back light' :to="{name: 'ege'}">Go back</router-link>
    </header>
    <div class='contents'>
      <h1 class='primary-title heading-light'>Homework</h1>
      <ColorStates/>
      <table class='table'>
        <tr>
          <th></th>
          <th class='th-light'>Вторник</th>
          <th class='th-light'>Четверг</th>
          <th class='th-light'>Суббота</th>
          <th class='th-light'>Воскресенье</th>
        </tr>
        <tr
          v-for="item in hws"
          :key="item"
        >
          <td></td>
          <td
            v-for="day in item"
            :key="day"
            class='row-item hw-row-item'
          >
            <span
              v-if="day.date"
              class='date-goal'
            >
            Дз на {{ day.date }}
            </span>
            <div
              v-if="Object.keys(day).length > 0"
              :class="['hw-list', {'hw-actual': day.actual}]"
            >
              <ol>
                <li
                  v-for="elem in day.list"
                  :key="elem"
                  :class="['hw-list__item', {'hw-actual': day.actual }, elem[1]]"
                >
                {{ elem[0] }}
                </li>
              </ol>
              <ul v-if="day.links">
                <h4 class='title-4'>Links</h4>
                <li
                    v-for="link in day.links"
                    :key="link.address"
                >
                  <a
                    :href="link.address"
                  >
                    {{ link.title }}
                  </a>
                </li>
              </ul>
              <div
                v-if="day.addInfo"
                v-html="day.addInfo"
                class='add-info'
              >
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ColorStates from '@/components/ColorStates.vue';

export default {
  name: 'HWTasks',
  components: { ColorStates },
  data() {
    return {
      hws: [
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
              <ol>
                <li>прослушать часть предложения</li>
                <li>сказать ее по английски</li>
                <li>перевести ее на русский</li>
                <li>анализировать (каждый пункт проговорить вслух)
                  <ul>
                    <li>Если в русском переводе больше слов, чем в английском, то какого слова не хватает в моем английском переводе?</li>
                    <li>Если я не слышу какого-то слова, то надо разобрать по частям речи имеющееся и понять, какой части речи не хватает</li>
                    <li>В каком времени сказано предложение? Как в этом времени тогда будут образованы глаголы в предложении? Слышу ли я это? Сказали ли я отчетливо это в своей речи?</li>
                  </ul>
                </li>
                <li>после анализа сказать еще раз (уже в исправленном виде) предложение по английски и перевести на русский</li>
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
            actual: true,
            date: '18.01.22',
            list: [
              ['Пункт 2 дз из на 28.12.21'],
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
          {}, {}, {},
        ],
      ],
    };
  },
};
</script>
