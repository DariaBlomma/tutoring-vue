<template>
  <div class='page homework'>
    <header>
      <router-link class='go-back light' :to="{name: 'home'}">Go back</router-link>
    </header>
    <div class='contents'>
      <h1 class='primary-title heading-light'>Homework</h1>
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
            v-for="week in item"
            :key="week"
            class='row-item'
          >
            <span
              v-if="week.date"
              class='date-goal'
            >
            Дз на {{ week.date }}
            </span>
            <div
              :class="['hw-list', {'hw-actual': week.actual}]"
            >
              <ol>
                <li
                  v-for="elem in week.list"
                  :key="elem"
                  :class="['hw-list__item', {'hw-actual': week.actual}]"
                >
                {{ elem }}
                </li>
              </ol>
              <ul v-if="week.links">
                <h4 class='title-4'>Links</h4>
                <li
                    v-for="link in week.links"
                    :key="link.address"
                >
                  <a
                    :href="link.address"
                  >
                    {{ link.title }}
                  </a>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HWTasks',
  data() {
    return {
      hws: [
        [
          {},
          {},
          {},
          {
            actual: true,
            date: '26.12.21',
            list: [
              'Перевести устно прикрепленное в телеграме аудио (максимально близко к оригиналу, опираясь на ранее переведенные слова в словариках)',
              'Смотреть видео Continuous tenses и исправить свое образование Continuous в Present, Past, Future (например, с глаголом come )',
              'Слушать песню On the railroad. Проверить отстутствие технических проблем и параллельно смотреть слова (есть справа на сайте Яндекс Музыки)',
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
      ],
    };
  },
};
</script>
