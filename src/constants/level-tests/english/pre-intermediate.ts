import type { Task } from '@/types';

export const preIntermediateTest: Task[] = [
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
        questionText: 'Don\'t stand up, I <b>will open</b> the door!',
      },
      {
        id: 2,
        questionText: 'I <b>am going to open</b> the door in the evening, it\'s too early right now',
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
        questionText: 'Don\'t you see the red light? You ____ not cross the road!',
        answer: 'must',
      },
      {
        id: 2,
        questionText: ' You\'re right, I don\'t like my job, but I ____ continue, because I need money',
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
        questionText: 'Mum, I didn\'t have time to come back - when I <b>(to go out)</b>, it <b>(to begin)</b> to rain. That\'s why I\'m a bit wet',
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
  {
    id: 13,
    task: 'Listen and tell everything you hear',
    audio: 'IntermediateTest.mp3',
  },
];
