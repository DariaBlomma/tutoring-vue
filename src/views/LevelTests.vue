<template>
  <div class="page page--dark-theme english">
    <header>
      <router-link class="go-back light" :to="{ name: 'home' }">To home page</router-link>
    </header>
    <main>
      <h1 class="primary-title heading-white centered">Level tests</h1>
      <ContentsList :contentsList="levelTests" />
      <LevelTest testId="beginner" testTitle="Beginner" :test="beginnerTest" />
      <LevelTest
        testId="pre-intermediate"
        testTitle="Pre-Intermediate"
        :test="preIntermediateTest"
      />
    </main>
    <footer>
      <ScrollTopBtn />
    </footer>
  </div>
</template>

<script setup>
import ContentsList from '@/components/ui/ContentsList.vue';
import ScrollTopBtn from '@/components/ScrollTopBtn.vue';
import LevelTest from '@/components/LevelTest.vue';

const levelTests = [
  {
    moveTo: 'beginner',
    title: 'Beginner',
  },
  {
    moveTo: 'pre-intermediate',
    title: 'Pre-intermediate',
  },
];

const beginnerTest = [
  {
    id: 1,
    task: 'Исправьте предложения, вставив пропущенные слова',
    questionsList: [
      {
        id: 1,
        questionText: 'You not Dutch',
        answer: 'You are not Dutch',
      },
      {
        id: 2,
        questionText: 'we ready to go?',
        answer: 'Are we ready to go?',
      },
      {
        id: 3,
        questionText: 'It a horse',
        answer: 'It is a horse',
      },
    ],
  },
  {
    id: 2,
    task: 'Переведите на английский',
    questionsList: [
      {
        id: 1,
        questionText: 'Как тебя зовут?',
        answer: 'What is your name?',
      },
      {
        id: 2,
        questionText: 'Сколько ей лет?',
        answer: 'How old is she?',
      },
      {
        id: 3,
        questionText: 'Ему 15 лет',
        answer: 'He is fifteen years old',
      },
      {
        id: 4,
        questionText: 'Эта девочка из Шотландии',
        answer: 'This girl is from Scotland',
      },
    ],
  },
  {
    id: 3,
    task: 'Напишите притяжательные местоимения',
    questionsList: [
      {
        id: 1,
        questionText: 'I',
        answer: 'my',
      },
      {
        id: 2,
        questionText: 'She',
        answer: 'her',
      },
      {
        id: 3,
        questionText: 'It',
        answer: 'Its',
      },
      {
        id: 4,
        questionText: 'They',
        answer: 'Their',
      },
    ],
  },
  {
    id: 4,
    task: 'Переведите на английский',
    questionsList: [
      {
        id: 1,
        questionText: 'Дом Анны',
        answer: "Ann's house",
      },
      {
        id: 2,
        questionText: 'Папина кружка',
        answer: "father's cup",
      },
      {
        id: 3,
        questionText: 'У нас есть три дома',
        answer: 'We have three houses',
      },
      {
        id: 4,
        questionText: 'У нее есть хороший кот',
        answer: 'She has a good cat',
      },
    ],
  },
  {
    id: 5,
    task: 'Что такое Present Simple? Что оно значит и как образуетcя?',
  },
  {
    id: 6,
    task: 'Переведите на английский',
    questionsList: [
      {
        id: 1,
        questionText: 'Я люблю играть в футбол',
        answer: 'I like to play football',
      },
      {
        id: 2,
        questionText: 'Чем ты занимаешься? (в плане работы)',
        answer: 'What do you do?',
      },
      {
        id: 3,
        questionText: 'Ты учишься или работаешь?',
        answer: 'Do you study or work?',
      },
      {
        id: 4,
        questionText: 'Он родом не из Канады',
        answer: "He isn't from Canada",
      },
      {
        id: 5,
        questionText: 'Она говорит по английски?',
        answer: 'Does she speak English?',
      },
    ],
  },
  {
    id: 7,
    task: 'Расположите наречия частоты в порядке убывания',
    questionsList: [
      {
        id: 1,
        questionText: 'rarely never always sometimes',
        answer: 'always sometimes rarely never',
      },
    ],
  },
  {
    id: 8,
    task: 'Прочитайте время',
    questionsList: [
      {
        id: 1,
        questionText: '12.00 10.30 16.45',
      },
    ],
  },
  {
    id: 9,
    task: 'Переведите вопросительные слова',
    questionsList: [
      {
        id: 1,
        questionText: 'what',
        answer: 'что',
      },
      {
        id: 2,
        questionText: 'how',
        answer: 'как',
      },
      {
        id: 3,
        questionText: 'who',
        answer: 'кто',
      },
    ],
  },
  {
    id: 10,
    task: 'Напишите объектные местоимения',
    questionsList: [
      {
        id: 1,
        questionText: 'I',
        answer: 'me',
      },
      {
        id: 2,
        questionText: 'She',
        answer: 'her',
      },
      {
        id: 3,
        questionText: 'Their',
        answer: 'them',
      },
    ],
  },
  {
    id: 11,
    task: 'Как можно перевести there is?',
  },
  {
    id: 12,
    task: 'Переведите на английский',
    questionsList: [
      {
        id: 1,
        questionText: 'Кресло находится рядом с диваном',
        answer: 'An armchair is near the sofa',
      },
      {
        id: 2,
        questionText: 'Книги находятся под столом',
        answer: 'Books are under the table',
      },
      {
        id: 3,
        questionText: 'Остались ли у нас еще овощи?',
        answer: 'Are there still vegetables left?',
      },
    ],
  },
  {
    id: 12,
    task: 'Что такое Past Simple и как оно образуется?',
  },
  {
    id: 13,
    task: 'Переведите на английский',
    questionsList: [
      {
        id: 1,
        questionText: 'Я родилась в 1998 году',
        answer: 'I was born in 1998',
      },
      {
        id: 2,
        questionText: 'Она вчера учила поэму',
        answer: 'She learned a poem yesterday',
      },
      {
        id: 3,
        questionText: 'Мой брат пошел в школу вчера',
        answer: 'My brother went to school yesterday',
      },
      {
        id: 4,
        questionText: 'Я видела оленя пару дней назад',
        answer: 'I saw a deer a couple of days ago',
      },
    ],
  },
  {
    id: 14,
    task: 'Переведите на английский',
    questionsList: [
      {
        id: 1,
        questionText: 'Я не ел торт!',
        answer: "I didn't eat a cake!",
      },
      {
        id: 2,
        questionText: 'Кто сказал тебе это?',
        answer: 'Who told you that?',
      },
      {
        id: 3,
        questionText: 'Ты учился в университете?',
        answer: 'Did you study at the university?',
      },
    ],
  },
  {
    id: 15,
    task: 'К какому типы глаголов относится can ? В чем их особенности?',
  },
  {
    id: 16,
    task: 'Переведите на английский',
    questionsList: [
      {
        id: 1,
        questionText: 'Могу я Вам помочь?',
        answer: 'Can I help you?',
      },
      {
        id: 2,
        questionText: 'Он совсем не умеет готовить',
        answer: "He can't cook at all",
      },
    ],
  },
  {
    id: 17,
    task: 'Выберите правильный вариант (в качестве ответа укажите цифру верного варианты)',
    questionsList: [
      {
        id: 1,
        hasMarkUp: true,
        questionText: "I <b>'d like/like</b> some coffee, please",
        answer: '1',
      },
      {
        id: 2,
        questionText: 'Do we have <b>some/any/no</b> bread left?',
        answer: '2',
      },
      {
        id: 3,
        questionText: "Don't buy juice, we still have <b>any/some/no</b> ",
        answer: '2',
      },
    ],
  },
  {
    id: 18,
    task: 'Выберите правильный вариант (в качестве ответа укажите цифру верного варианты)',
    questionsList: [
      {
        id: 1,
        questionText: "I <b>'m going /go</b> to school now",
        answer: '1',
      },
      {
        id: 2,
        questionText: '<b>Does he like/is he liking</b> English?',
        answer: '1',
      },
    ],
  },
  {
    id: 19,
    task: 'Переведите на английский',
    questionsList: [
      {
        id: 1,
        questionText: 'Они собираются посетить все музеи в нашем городе',
        answer: 'They are going to visit all museums in our town',
      },
      {
        id: 2,
        questionText: 'Кажется, собирается дождь!',
        answer: 'It seems like it is going to rain',
      },
      {
        id: 3,
        questionText: 'Сегодня пойдет снег?',
        answer: 'Will it snow today?',
      },
      {
        id: 4,
        questionText: 'Он не будет журналистом',
        answer: "He won't be a journalist",
      },
    ],
  },
  {
    id: 20,
    task: 'Прочитайте текст',
    img: {
      name: 'beginnerReading.png',
    },
  },
  {
    id: 21,
    task: 'Прочитайте по транскрипции',
    links: [
      {
        title: "Blackmore's Night - Spitit of the Sea",
        address: 'https://music.yandex.ru/artist/233138/tracks',
      },
    ],
    img: {
      name: 'transcriptionReading.png',
    },
  },
];

const preIntermediateTest = [
  {
    id: 1,
    task: 'Заполните пропуски нужными временами - Past Simple/Past Continuous (напишите ответы через пробел)',
    questionsList: [
      {
        id: 1,
        questionText: 'I <b>(to walk)</b> in the forest when I <b>(to meet)</b> my mother',
        answer: 'was walking met',
      },
      {
        id: 2,
        questionText: 'When you <b>(to ring)</b> me, I <b>(to do)</b> my homework',
        answer: 'rang was doing',
      },
    ],
  },
  {
    id: 2,
    task: 'Выберите правильный вариант (в качестве ответа укажите цифру верного варианты)',
    questionsList: [
      {
        id: 1,
        questionText: 'How <b>much/many</b> money do you have?',
        answer: '1',
      },
      {
        id: 2,
        questionText: '<b>A few / a little</b> apples',
        answer: '1',
      },
      {
        id: 3,
        questionText: 'I see <b>someone/anybody</b> out there',
        answer: '1',
      },
      {
        id: 4,
        questionText: 'Always <b>sometimes/somewhere</b>, always there',
        answer: '1',
      },
    ],
  },
  {
    id: 3,
    task: 'В чем разниица?',
    questionsList: [
      {
        id: 1,
        questionText: "Don't stand up, I <b>will open</b> the door!",
      },
      {
        id: 2,
        questionText: "I <b>am going to open</b> the door in the evening, it's too early right now",
      },
      {
        id: 3,
        questionText: 'I <b>am opening</b> the door at 8.15 and not a minute earlier!',
      },
    ],
  },
  {
    id: 4,
    task: 'Напишите сравнительную и превосходные степени через пробел',
    questionsList: [
      {
        id: 1,
        questionText: 'big',
        answer: 'bigger the biggest',
      },
      {
        id: 2,
        questionText: 'good',
        answer: 'better the best',
      },
      {
        id: 3,
        questionText: 'wonderful',
        answer: 'more wonderful the most wondeful',
      },
      {
        id: 4,
        questionText: 'bright',
        answer: 'brigher the brightest',
      },
    ],
  },
  {
    id: 5,
    task: 'Переведите на английский',
    questionsList: [
      {
        id: 1,
        questionText: 'Ты когда-нибудь был за границей?',
        answer: 'Have you ever been abroad?',
      },
      {
        id: 2,
        questionText: 'Я только что закончил завтракать',
        answer: 'I have just finished my breakfast',
      },
    ],
  },
  {
    id: 6,
    task: 'К какой части речи принадлежат эти слова?',
    questionsList: [
      {
        id: 1,
        questionText: 'have to, should, must',
      },
    ],
  },
  {
    id: 7,
    task: 'Вставьте пропуски c помощью слов из предыдущего вопроса',
    questionsList: [
      {
        id: 1,
        questionText: "Don't you see the red light? You ____ not cross the road!",
        answer: 'must',
      },
      {
        id: 2,
        questionText: " You're right, I don't like my job, but I ____ continue, because I need money",
        answer: 'have to',
      },
      {
        id: 3,
        questionText: 'You ____ visit your friend, he is ill and will be very glad to meet you.',
        answer: 'should',
      },
    ],
  },
  {
    id: 8,
    task: 'Заполните пропуски нужными временами - Past Simple/Past Perfect (напишите ответы через пробел)',
    questionsList: [
      {
        id: 1,
        questionText: 'When my mother <b>(to come)</b> home, I <b>(to complete)</b> already my homework',
        answer: 'came had completed',
      },
      {
        id: 2,
        questionText: "Mum, I didn't have time to come back - when I <b>(to go out)</b>, it <b>(to begin)</b> to rain. That's why I'm a bit wet",
        answer: 'went out had begun',
      },
    ],
  },
  {
    id: 9,
    task: 'Переведите на английский',
    questionsList: [
      {
        id: 1,
        questionText: 'Американский президент был убит',
        answer: 'An Americam president was killed',
      },
      {
        id: 2,
        questionText: 'Эта работа написана тобой?',
        answer: 'Was this work written by you?',
      },
      {
        id: 3,
        questionText: 'В будущем люди будут заменены роботами',
        answer: 'In future people will be replaced by robots',
      },
    ],
  },
  {
    id: 10,
    task: 'Переведите на английский',
    questionsList: [
      {
        id: 1,
        questionText: 'Как долго Вы учите английский?',
        answer: 'How long have you been learning English?',
      },
      {
        id: 2,
        questionText: 'Он работает здесь с 2001 года',
        answer: 'He has been working here since 2001',
      },
    ],
  },
  {
    id: 11,
    task: 'Раскройте скобки в нужном времени (напишите ответы через пробел)',
    questionsList: [
      {
        id: 1,
        questionText: 'If it <b>(to be)</b> still sunny and snowy today, I <b>(to go)</b> for a walk with my cat',
        answer: 'is will go',
      },
      {
        id: 2,
        questionText: 'If I <b>(to have)</b> a million dollars, I <b>(to buy)</b> a huge castle in Ireland',
        answer: 'had would buy',
      },
    ],
  },
  {
    id: 12,
    task: 'Прочитайте текст',
    img: {
      name: 'preIntermediateReading.png',
    },
  },
];
</script>
