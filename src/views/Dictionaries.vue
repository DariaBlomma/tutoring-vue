<template>
  <div class="page dictionary">
    <header>
      <router-link class='go-back light' :to="{name: 'ege'}">Go back</router-link>
    </header>
    <h1 class='primary-title heading-light centered'>Dictionaries</h1>
    <h2 class='secondary-title heading-light'>Occupations</h2>
    <div class='dictionary__words-block'>
      <div
        class='dictionary__item'
        :class='item.class'
        v-for='(item, i) in dictionaries_occupations'
        :key='i'
      >
          <h3 v-if='item.title' class='title-3'>{{item.title}}</h3>
          <input
              v-if='item.answer'
              type='text'
              class='input dictionary__input title-3 ex-10'
              placeholder='Write the topic name'
              :data-answer='item.answer'
          >
          <ol class='en'>
              <li
                class='dictionary__line dictionary__line_en'
                :class='elem[1]'
                v-for='elem in item.en'
                :key='elem[0]'
              >
              <span>
                {{elem[0]}}
              </span>
              </li>
          </ol>
          <ul v-if='item.ru' class='ru'>
              <li
                class='dictionary__line'
                :class='elem[1]'
                v-for='elem in item.ru'
                :key='elem[0]'
              >
              <span>
                {{elem[0]}}
              </span>
              </li>
          </ul>
      </div>
    </div>
    <h2 class='secondary-title heading-light'>Exam tasks</h2>
    <h4 class='title-4'>№10 - 9983</h4>
    <div class='dictionary__words-block dictionary__words-block_another-topic'>
      <div
        class='dictionary__item'
        :class='item.class'
        v-for='(item, i) in dictionaries_10_9983'
        :key='i'
      >
          <h3 v-if='item.title' class='title-3'>{{item.title}}</h3>
          <input
              v-if='item.answer'
              type='text'
              class='input title-3 heading-light ex-10 dictionary__input'
              placeholder='Write the topic name'
              :data-answer='item.answer'
          >
          <ol class='en'>
              <li
                class='dictionary__line dictionary__line_en'
                :class='elem[1]'
                v-for='elem in item.en'
                :key='elem[0]'
              >
              <span>
                {{elem[0]}}
              </span>
              </li>
          </ol>
          <ul v-if='item.ru' class='ru'>
              <li
                class='dictionary__line'
                :class='elem[1]'
                v-for='elem in item.ru'
                :key='elem[0]'
              >
              <span>
                {{elem[0]}}
              </span>
              </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dictionaries',
  data() {
    return {
      dictionaries_occupations: [
        {
          title: 'Lawyer',
          en: [
            ['spend time in office'],
            ['court'],
            ['legal'],
            ['be arrested for a crime'],
            ['to commit a crime'],
            ['to persuade the police'],
            ['lawyer', 'main'],
            ['represent clients'],
          ],
          ru: [
            ['проводить время в офисе'],
            ['суд'],
            ['законный'],
            ['быть арестованным за преступление'],
            ['совершить преступление'],
            ['убедить полицию'],
            ['адвокат', 'main'],
            ['представлять клиентов'],
          ],
        },
        {
          title: 'Driver',
          en: [
            ['be away from family for long periods of time'],
            ['like being on the road'],
            ['behind the wheel'],
            ['unload boxes'],
            ['at the end of the journey'],
            ["it's part of the job"],
            ['driver', 'main'],
            ['to know what is happening in the world'],
            ['occupation'],
          ],
          ru: [
            ['быть вдали от семьи долгое время'],
            ['любить быть в пути (в дороге)'],
            ['за рулем'],
            ['разгружать коробки'],
            ['в конце путешествия'],
            ['это часть работы'],
            ['водитель', 'main'],
            ['знать, что происходит в мире'],
            ['профессия, занятие'],
          ],
        },
        {
          title: 'Journalist',
          en: [
            ['to work for a tabloid'],
            ['a serious paper'],
            ['to go to press conferences'],
            ['to interview politicians'],
            ['to see my name in print above a story'],
            ['jourlanlist', 'main'],
          ],
          ru: [
            ['работать на таблоид'],
            ['серьезная газета (печатное издание)'],
            ['ходить на пресс конференции'],
            ['брать  интервью у политиков'],
            ['видеть моё имя напечатанным над историей'],
            ['журналист', 'main'],
          ],
        },
        {
          title: 'Librarian',
          en: [
            ['people have this image of us being very boring'],
            ['to whisper'],
            ['to adore literature'],
            ['to provide a valuable service to the public'],
            ['to borrow books from'],
            ['be able to afford to buy'],
            ['librarian', 'main'],
          ],
          ru: [
            ['у людей сложилась такая картинка (люди думают), что мы скучные'],
            ['шептать'],
            ['восхищаться литературой'],
            ['обеспечивать ценный сервис для общества (публики)'],
            ['брать (одалживать) книги из'],
            ['быть способным позволить купить'],
            ['библиотекарь', 'main'],
          ],
        },
      ],
      dictionaries_10_9983: [
        {
          class: 'dictionary__item_important',
          title: 'Названия тем параграфов',
          en: [
            ['First things first'],
            ['Set objectives wisely'],
            ['Delegate and refuse'],
            ['Plan for efficiency'],
            ['Not only work matters'],
            ['Avoid distractions'],
            ['The faster, the better'],
            ['Importance of time management'],
          ],
        },
        {
          title: 'Перевод некоторых слов из названий тем',
          en: [
            ['set objectives wisely'],
            ['delegate'],
            ['efficiency'],
            ['to matter'],
            ['avoid distractions'],
            ['importance of time management'],
          ],
          ru: [
            ['ставить цели с умом'],
            ['делегировать'],
            ['эффективность'],
            ['иметь значение'],
            ['избегать тех вещей, что отвлекают'],
            ['важность управления временем'],
          ],
        },
        {
          answer: 'Importance of time management',
          en: [
            ['precious', 'not-for-add'],
            ['responsibility'],
            ['to-do list', 'not-for-add'],
            ['never enough time'],
            ['to maintain a healthy work-life balance'],
            ['skills really need to be on point', 'not-for-add'],
          ],
          ru: [
            ['ценный', 'not-for-add'],
            ['ответственность'],
            ['список дел, которые надо сделать', 'not-for-add'],
            ['никогда нет достаточно времени'],
            ['поддерживать здоровый баланс между работой и жизнью'],
            ['навыки реально должны быть на уровне (очень хорошими)', 'not-for-add'],
          ],
        },
        {
          answer: 'Set objectives wisely',
          en: [
            ['goal setting'],
            ['time management strategy', 'not-for-add'],
            ['to support business goals', 'not-for-add'],
            ['short and long term goals', 'not-for-add'],
            ['define goals in clear terms', 'not-for-add'],
            ['achievable'],
            ['find yourself self-stressed', 'not-for-add'],
            ['step-by-step tasks', 'not-for-add'],
          ],
          ru: [
            ['постановка целей'],
            ['стратегия управления временем', 'not-for-add'],
            ['поддерживать бизнес цели', 'not-for-add'],
            ['короткосрочные и долгосрочные цели', 'not-for-add'],
            ['определять цели в ясных, понятных терминах<', 'not-for-add'],
            ['достижимый'],
            ['обнаружить себя в стрессе', 'not-for-add'],
            ['пошаговые задачи', 'not-for-add'],
          ],
        },
        {
          answer: 'First things first',
          en: [
            ['to achieve goals'],
            ['to priotorise'],
            ['to-do list', 'not-for-add'],
            ['based on urgency', 'not-for-add'],
            ['to complete the most urgent tasks', 'not-for-add'],
            ['to make sure'],
          ],
          ru: [
            ['достигать целей'],
            ['выставлять приоритеты'],
            ['список дел, которые надо сделать', 'not-for-add'],
            ['основанный на срочности', 'not-for-add'],
            ['выполнять самые срочные задачи', 'not-for-add'],
            ['убеждаться'],
          ],
        },
        {
          answer: 'Plan for efficiency',
          en: [
            ['to seem'],
            ['a waste of time'],
            ['to think ahead', 'not-for-add'],
            ['to dedicate time to planning', 'not-for-add'],
            ['to schedule time wisely'],
            ['to focus at one task at a time'],
          ],
          ru: [
            ['казаться'],
            ['(пустая) трата времени'],
            ['думать наперед, заранее', 'not-for-add'],
            ['посвящать время планированию', 'not-for-add'],
            ['планировать время (составлять расписание) с умом'],
            ['фокусироваться на одной задаче за раз'],
          ],
        },
        {
          answer: 'Avoid distractions',
          en: [
            ['to pay attention to'],
            ['to interrupt'],
            ['extremely useful'],
            ['addictive'],
            ['will power'],
            ['turn off your phone'],
          ],
          ru: [
            ['обращать внимание на'],
            ['прерывать'],
            ['чрезвычайно полезный'],
            ['вызывающий привыкание'],
            ['сила воли'],
            ['отключить твой телефон'],
          ],
        },
        {
          answer: 'Delegate and refuse',
          en: [
            ['to hire employees'],
            ['to handle tasks', 'not-for-add'],
            ['to run a business'],
            ['to depend on'],
            ['to look for opportunities'],
            ['to pass responsibility to others', 'not-for-add'],
          ],
          ru: [
            ['нанимать сотрудников'],
            ['урегулировать задачи, проблемы', 'not-for-add'],
            ['управлять бизнесом'],
            ['зависеть от'],
            ['искать возможности'],
            ['передавать ответственость другим', 'not-for-add'],
          ],
        },
        {
          answer: 'Not only work matters',
          en: [
            ['to take care of yourself'],
            ['to cause'],
            ['to lose productivity'],
            ['to improve concentration'],
            ['ability to learn'],
            ['to lower stress level'],
            ['mental health'],
          ],
          ru: [
            ['заботиться о себе'],
            ['вызывать'],
            ['терять продуктивность'],
            ['улучшать концентрацию'],
            ['способность учиться'],
            ['понижать уровень стресса'],
            ['психическое здоровье'],
          ],
        },
      ],
    };
  },
};
</script>
