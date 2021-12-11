<template>
  <div class="page dictionary">
    <header>
      <router-link class='go-back light' :to="{name: 'ege'}">Go back</router-link>
    </header>
    <h1 class='primary-title heading-light centered'>Dictionaries</h1>
    <ol class='contents-list'>
      <li class='contents-list__line'>
        <a href='#occupations' class='link'>Occupations</a>
      </li>
      <li class='contents-list__line'>
        <a href='#exam-tasks' class='link'>Exam tasks</a>
        <ol>
          <li class='contents-list__line'>
            <a href='#n10-9983'>
              <span class='contents-list__unique-number'>№10 - 9983 </span>
              <span class='contents-list__topic'>Time management</span>
            </a>
          </li>
          <li class='contents-list__line'>
            <a href='#n11-1926'>
              <span class='contents-list__unique-number'>№11-1926 </span>
              <span class='contents-list__topic'>Number of teenagers with Saturday job drops</span>
            </a>
          </li>
          <li class='contents-list__line'>
            <a href='#n12-806'>
              <span class='contents-list__unique-number'>№12-806 </span>
              <span class='contents-list__topic'>Cry-baby</span>
            </a>
          </li>
          <li class='contents-list__line'>
            <a href='#n15-18-530'>
              <span class='contents-list__unique-number'>№15-18: 530 </span>
              <span class='contents-list__topic'>Sales adviser</span>
            </a>
          </li>
        </ol>
      </li>
    </ol>
    <h2 class='secondary-title heading-light' id='occupations'>Occupations</h2>
    <div class='dictionary__words-block'>
      <DictionaryItem
        :dictionary='dictionaries_occupations'
      />
    </div>
    <h2 class='secondary-title heading-light' id='exam-tasks'>Exam tasks</h2>
    <h2 class='secondary-title heading-light'  id='n10-9983'>
      Time management
    </h2>
    <div class='dictionary__words-block dictionary__words-block_another-topic'>
      <DictionaryItem
        :dictionary='dictionaries_10_9983'
      />
    </div>
    <h2 class='secondary-title heading-light' id='n11-1926'>
      Number of teenagers with Saturday job drops
    </h2>
    <div class='dictionary__words-block'>
      <DictionaryItem
        :dictionary='dictionaries_11_1926'
      />
    </div>
    <h2 class='secondary-title heading-light' id='n12-806'>
      Cry-baby
    </h2>
    <div class='dictionary__words-block'>
      <DictionaryItem
        :dictionary='dictionaries_12_806'
      />
    </div>
    <h2 class='secondary-title heading-light' id='n15-18-530'>
      Sales adviser
    </h2>
    <div class='dictionary__words-block'>
      <DictionaryItem
        :dictionary='dictionaries_15_18_530'
      />
    </div>
  </div>
</template>

<script>
import DictionaryItem from '@/components/DictionaryItem.vue';

export default {
  name: 'Dictionaries',
  components: {
    DictionaryItem,
  },
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
      dictionaries_11_1926: [
        {
          title: 'Number of teenagers with Saturday job drops',
          en: [
            ['number of teenagers'],
            ['to drop'],
            ['to acquire experience'],
            ['CV'],
            ['full-time work'],
            ['part-time job'],
            ['to combine'],
            ['according to'],
            ['to show'],
            ['increasing'],
            ['a falling number'],
            ['employer'],
            ['employee'],
            ['find less time to do'],
            ['state school'],
            ['is meant to'],
            ['an access to'],
            ['to offer'],
            ['to research'],
            ['compared with'],
            ['to leave'],
            ['increasingly less experienced'],
            ['to inspire'],
            ['to mean'],
          ],
          ru: [
            ['число подростков'],
            ['падать'],
            ['приобретать опыт'],
            ['резюме'],
            ['полный рабочий день'],
            ['частичный рабочий день'],
            ['совмещать'],
            ['согласно (кому-либо)'],
            ['показывать'],
            ['возрастающий'],
            ['падающее число'],
            ['работодатель'],
            ['работник'],
            ['находить меньше времени чтобы делать'],
            ['городская школа'],
            ['предназначено, чтобы'],
            ['доступ к'],
            ['предлагать'],
            ['исследовать'],
            ['по сравнению с'],
            ['покидать, оставлять'],
            ['намного менее опытные'],
            ['вдохновлять'],
            ['означать'],
          ],
        },
      ],
      dictionaries_12_806: [
        {
          title: 'Cry-baby',
          en: [
            ['well-known', 'common'],
            ['personality', 'common'],
            ['guest stars'],
            ['to award a prize'],
            ['invention', 'common'],
            ['other', 'common'],
            ['significant', 'common'],
            ['to look around', 'common'],
            ['you see', 'common'],
            ['to bring to a ceremony'],
            ['to play a role'],
            ['to be called the greatest find', 'not-for-add'],
            ['to steal under the nose of', 'common'],
            ['a female star'],
            ['to nominate'],
            ['to announce'],
            ['a contest'],
            ['leading contestants'],
            ['to boil each other', 'not-for-add'],
            ['a scene'],
            ['audience'],
            ['to applaud'],
            ['to run episode'],
            ['applause'],
            ['pleasant', 'common'],
            ["couldn't do anyting with", 'common'],
          ],
          ru: [
            ['хорошо известный', 'common'],
            ['личность (человек)', 'common'],
            ['звезды - гости'],
            ['наградить призом'],
            ['изобретение', 'common'],
            ['другой', 'common'],
            ['значительный', 'common'],
            ['оглядеться вокруг', 'common'],
            ['видишь (ли)', 'common'],
            ['принести на церемонию'],
            ['играть роль'],
            ['быть названным величайшей находкой', 'not-for-add'],
            ['украсть из-под носа (кого-либо)', 'common'],
            ['звезда - женщина'],
            ['номинировать'],
            ['объявить'],
            ['соревнование'],
            ['ведущие (основные) участники соревнования'],
            ['вскипятить друг друга', 'not-for-add'],
            ['сцена'],
            ['публика, зрители, аудитория'],
            ['аплодировать'],
            ['проиграть (включить для просмотра) эпизод'],
            ['аплодисменты'],
            ['приятный', 'common'],
            ['не мог ничего поделать с', 'common'],
          ],
        },
      ],
      dictionaries_15_18_530: [
        {
          title: 'Text',
          en: [
            ['sales adviser'],
            ['to donate money to charities'],
            ['to decide'],
            ['a decision'],
            ['to look for a project abroad'],
            ['rural development'],
            ['poor state'],
            ['face to face'],
            ['to talk through with husband'],
            ['expected me to go through with it'],
            ['to offer services'],
            ['to receive a reply'],
            ['in broken English'],
          ],
          ru: [
            ['продавец, консультант'],
            ['жертвовать деньги на благотворительность'],
            ['решать'],
            ['решение'],
            ['искать проект заграницей'],
            ['сельское развитие'],
            ['бедный штат'],
            ['лицом к лицу'],
            ['обговорить с мужем'],
            ['ожидал, что я пройду это'],
            ['предлагать услуги'],
            ['полуить отклик'],
            ['на ломаном английском'],
          ],
        },
        {
          title: 'Questions',
          en: [
            ['to feel bored'],
            ['to earn money'],
            ['eager to help'],
            ['directly'],
            ['attitude'],
            ['to accompany'],
            ['to encourage'],
            ['to be opposed to her going there'],
            ['to respect'],
            ['to arrive'],
            ['disappointing'],
            ['scared'],
            ['angry'],
            ['during her stay'],
            ['to manage to improve'],
            ['conditions'],
            ['close friends'],
            ['possible'],
            ['to raise money'],
            ['to move to India'],
            ['to leave'],
            ['any more'],
          ],
          ru: [
            ['чувствовать себя скучающим'],
            ['зарабатывать деньги'],
            ['желающий помочь'],
            ['напрямую'],
            ['отношение'],
            ['сопровождать'],
            ['воодушевлять, вдохновлять'],
            ['быть против, чтобы она поехала туда'],
            ['уважать'],
            ['прибывать'],
            ['разачаровывающий'],
            ['пугающий'],
            ['злой'],
            ['в течении ее пребывания'],
            ['суметь улучшить'],
            ['условия'],
            ['близкие друзья'],
            ['возможный'],
            ['собирать деньги'],
            ['переехать в Индию'],
            ['уезжать'],
            ['больше (нет)'],
          ],
        },
      ],
    };
  },
};
</script>
