<template>
  <div class="sub-page sub-page--dark-theme en-grammar">
    <header>
      <router-link class='go-back light' :to="{name: 'en-tenses'}">
        To Tenses
      </router-link>
    </header>
    <main>
      <div class='sub-page__contents'>
        <h2 class='secondary-title heading-white'>All tenses</h2>
        <div class='filled-table all-tenses-table'>
          <table class='table'>
            <tr>
              <th><div class='card meaning'>Значение</div></th>
              <th><div class='card tense-type--header'>Тип времени</div></th>
              <th><div class='card past'>Past</div></th>
              <th><div class='card card--grey'>Маркеры</div></th>
              <th><div class='card present'>Present</div></th>
              <th><div class='card card--grey'>Маркеры</div></th>
              <th><div class='card future'>Future</div></th>
              <th><div class='card card--grey'>Маркеры</div></th>
            </tr>
            <tr>
              <td>
                <div class='card meaning meaning--with-margin'>факт</div>
                <div class='card meaning'>повторяющиеся действия</div>
              </td>
              <td>
                <div class='card tense-type--simple'>Simple</div>
              </td>
              <!-- образование Past Simple -->
              <td>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>+</div>
                  <div class='card past'>V ed, V 2</div>
                </div>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>-</div>
                  <div class='card past'>did not = didn't</div>
                </div>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>?</div>
                  <div class='card past'>did</div>
                </div>
              </td>
              <td>
                <table class='table markers-table'>
                  <tr>
                    <td>
                      <div class='card card--grey'>
                        yesterday
                      </div>
                    </td>
                    <td>
                      <div class='card card--yellow'>вчера</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>the day before yesterday</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>позавчера</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'><b>last</b> night</div>
                    </td>
                    <td>
                      <div class='card card--yellow'><b>прошлым</b> вечером</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'><b>last</b> week</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>на <b>прошлой</b> неделе</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'><b>last</b> month</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>в <b>прошлом</b> месяце</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'><b>last</b> year</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>в <b>прошлом</b> году</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>2 days ago</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>2 дня назад</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>in 1990</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>в 1990</div>
                    </td>
                  </tr>
                </table>
              </td>
              <!-- образование Present Simple -->
              <td>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>+</div>
                  <div class='card present'>she, he, it - V s</div>
                </div>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>-</div>
                  <div class='card present'>
                    do + not = don't <br />
                    does + not = doesn't
                  </div>
                </div>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>?</div>
                  <div class='card present'>do. does</div>
                </div>
              </td>
              <td>
                <table class='table markers-table'>
                  <tr>
                    <td>
                      <div class='card card--grey'>
                        never
                      </div>
                    </td>
                    <td>
                      <div class='card card--yellow'>никогда</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>seldom/ rarely</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>редко</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>sometimes</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>иногда</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>usually</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>обычно</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>often</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>часто</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>always</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>всегда</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>every ...</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>каждый ...</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>on Mondays</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>по Пн кам</div>
                    </td>
                  </tr>
                </table>
              </td>
              <!-- образование Future Simple -->
              <td>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>+</div>
                  <div class='card future'>will</div>
                </div>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>-</div>
                  <div class='card future'>
                    will + not = won't
                  </div>
                </div>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>?</div>
                  <div class='card future'>will</div>
                </div>
              </td>
              <td>
                <table class='table markers-table'>
                  <tr>
                    <td>
                      <div class='card card--grey'>
                        tomorrow
                      </div>
                    </td>
                    <td>
                      <div class='card card--yellow'>завтра</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>the day after tomorrow</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>послезавтра</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>next week</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>на следующей неделе</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>soon</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>скоро</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>in a year</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>через год</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>in 2050</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>в 2050</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>every ...</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>каждый ...</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>on Mondays</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>по Пн кам</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- continuous -->
            <tr>
              <td>
                <div class='card meaning'>длительное в точке времени</div>
              </td>
              <td>
                <div class='card tense-type--continuous'>Continuous</div>
              </td>
              <!-- образование Past Continuous -->
              <td>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>+</div>
                  <div class='card past'>was, were + V ing</div>
                </div>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>-</div>
                  <div class='card past'>wasn't, weren't + V ing</div>
                </div>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>?</div>
                  <div class='card past'>was, were + V ing</div>
                </div>
              </td>
              <td>
                <table class='table markers-table'>
                  <tr>
                    <td>
                      <div class='card card--grey'>
                        at 5 o'clock yesterday
                      </div>
                    </td>
                    <td>
                      <div class='card card--yellow'>в 5 часов вчера</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>from 5 to 6 on Sunday</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>с 5 до 6 в ВС</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>when Mum came</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>когда мама пришла</div>
                    </td>
                  </tr>
                </table>
              </td>
              <!-- образование Present Continuous -->
              <td>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>+</div>
                  <div class='card present'>am, is, are + V ing</div>
                </div>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>-</div>
                  <div class='card present'>am not, isn't, aren't + V ing</div>
                </div>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>?</div>
                  <div class='card present'>am, is, are  + V ing</div>
                </div>
              </td>
              <td>
                <table class='table markers-table'>
                  <tr>
                    <td>
                      <div class='card card--grey'>
                        now
                      </div>
                    </td>
                    <td>
                      <div class='card card--yellow'>сейчас</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>at the moment</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>в данный момент</div>
                    </td>
                  </tr>
                </table>
              </td>
              <!-- образование Future Continuous -->
              <td class='not-used-in-speech'>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>+</div>
                  <div class='card future'>will be  + V ing</div>
                </div>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>-</div>
                  <div class='card future'>won't be + V ing</div>
                </div>
                <div class='formation-line'>
                  <div class='card centered sentense-type'>?</div>
                  <div class='card future'>will (subject) be + V ing</div>
                </div>
              </td>
              <td class='not-used-in-speech'>
                <table class='table markers-table'>
                  <tr>
                    <td>
                      <div class='card card--grey'>
                        at 3 o'clock tomorrow
                      </div>
                    </td>
                    <td>
                      <div class='card card--yellow'>в 3 завтра</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>from 5 to 6 tomorrow</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>с 5 до 6 завтра</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>when I come</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>когда я приду</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- perfect -->
            <tr>
              <td>
                <div class='card meaning'>результат</div>
              </td>
              <td>
                <div class='card tense-type--perfect'>Perfect</div>
              </td>
              <!-- образование Past Perfect -->
              <td class='not-used-in-speech'>
                <div class='add-meaning-wrapper'>
                  <div class='card meaning meaning--with-large-margin'>предпрошедшее</div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>+</div>
                    <div class='card past'>had + V3</div>
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>-</div>
                    <div class='card past'>hadn't + V3</div>
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>?</div>
                    <div class='card past'>had + V3</div>
                  </div>
                </div>
              </td>
              <td class='not-used-in-speech'>
                <table class='table markers-table'>
                  <tr>
                    <td>
                      <div class='card card--grey'>
                        by 2 o'clock yesterday
                      </div>
                    </td>
                    <td>
                      <div class='card card--yellow'>к (до) 3 часам вчера</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>when he came</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>когда он пришел</div>
                    </td>
                  </tr>
                </table>
              </td>
              <!-- образование Present Perfect -->
              <td>
                <div class='add-meaning-wrapper'>
                  <div class='card meaning meaning--with-large-margin'>
                    связь с прошлым, результат в настоящем
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>+</div>
                    <div class='card present'>have, has + V 3</div>
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>-</div>
                    <div class='card present'>haven't , hasn't + V 3</div>
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>?</div>
                    <div class='card present'>have, has + V 3</div>
                  </div>
                </div>
              </td>
              <td>
                <table class='table markers-table'>
                  <tr>
                    <td>
                      <div class='card card--grey'>
                        ever
                      </div>
                    </td>
                    <td>
                      <div class='card card--yellow'>когда либо</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>never</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>никогда</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>just</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>только, только что</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>already</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>уже</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>yet</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>еще</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>lately\recently</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>недавно</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>this morning</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>этим утром</div>
                    </td>
                  </tr>
                </table>
              </td>
              <!-- образование Future Perfect -->
              <td class='not-used-in-speech'>
                <div class='add-meaning-wrapper'>
                  <div class='card meaning meaning--with-large-margin'>
                    связь с прошлым, результат в настоящем
                  </div>
                    <div class='formation-line'>
                      <div class='card centered sentense-type'>+</div>
                      <div class='card future'>will  have + V 3</div>
                    </div>
                    <div class='formation-line'>
                      <div class='card centered sentense-type'>-</div>
                      <div class='card future'>won't have + V 3</div>
                    </div>
                    <div class='formation-line'>
                      <div class='card centered sentense-type'>?</div>
                      <div class='card future'>will have + V 3</div>
                    </div>
                </div>
              </td>
              <td class='not-used-in-speech'>
                <table class='table markers-table'>
                  <tr>
                    <td>
                      <div class='card card--grey'>
                        by 4 o'clock tomorrow
                      </div>
                    </td>
                    <td>
                      <div class='card card--yellow'>к (до) 4 часам завтра</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>when I call him</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>когда я позвоню ему</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- perfect continuous -->
            <tr>
              <td>
                <div class='card meaning'>длится отрезок времени</div>
              </td>
              <td>
                <div class='card tense-type--perfect-continuous'>Perfect Continuous</div>
              </td>
              <!-- образование Past Perfect Continuous-->
              <td class='not-used-in-speech'>
                <div class='add-meaning-wrapper'>
                  <div class='card meaning meaning--with-large-margin'>
                    предпрошедшее длительное
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>+</div>
                    <div class='card past'>had been + V3</div>
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>-</div>
                    <div class='card past'>hadn't been + V3</div>
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>?</div>
                    <div class='card past'>had been + V3</div>
                  </div>
                </div>
              </td>
              <td class='not-used-in-speech'>
                <table class='table markers-table'>
                  <tr>
                    <td>
                      <div class='card card--grey'>
                        for
                      </div>
                    </td>
                    <td>
                      <div class='card card--yellow'>на протяжении</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>since</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>с ; с тех пор, как</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>how long</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>как долго</div>
                    </td>
                  </tr>
                </table>
              </td>
              <!-- образование Present Perfect Continuous-->
              <td class='not-used-in-speech'>
                <div class='add-meaning-wrapper'>
                  <div class='card meaning meaning--with-large-margin'>
                    началось в прошлом, длилось до наст. вр-ни
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>+</div>
                    <div class='card present'>have, has been + V ing</div>
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>-</div>
                    <div class='card present'>haven't , hasn't + V ing</div>
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>?</div>
                    <div class='card present'>have, has been + V ing</div>
                  </div>
                </div>
              </td>
              <td class='not-used-in-speech'>
                <table class='table markers-table'>
                  <tr>
                    <td>
                      <div class='card card--grey'>
                        for
                      </div>
                    </td>
                    <td>
                      <div class='card card--yellow'>на протяжении</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>since</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>с ; с тех пор, как</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>how long</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>как долго</div>
                    </td>
                  </tr>
                </table>
              </td>
              <!-- образование Future Perfect Continuous-->
              <td class='not-used-in-speech'>
                <div class='add-meaning-wrapper'>
                  <div class='card meaning meaning--with-large-margin'>
                    будет длиться до момента в будущем
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>+</div>
                    <div class='card future'>will have been + V ing</div>
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>-</div>
                    <div class='card future'>won't have  been+ V ing</div>
                  </div>
                  <div class='formation-line'>
                    <div class='card centered sentense-type'>?</div>
                    <div class='card future'>will have been + V ing</div>
                  </div>
                </div>
              </td>
              <td class='not-used-in-speech'>
                <table class='table markers-table'>
                  <tr>
                    <td>
                      <div class='card card--grey'>
                        for
                      </div>
                    </td>
                    <td>
                      <div class='card card--yellow'>на протяжении</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>since</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>с ; с тех пор, как</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='card card--grey'>how long</div>
                    </td>
                    <td>
                      <div class='card card--yellow'>как долго</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        <img
          src='@/assets/english-level-tests/all-tenses-funny-1.jpg'
          class='all-tenses-funny'
        >
        <img
          src='@/assets/english-level-tests/all-tenses-funny-2.jpg'
          class='all-tenses-funny'
        >
      </div>
    </main>
    <footer>
      <ScrollTopBtn />
    </footer>
  </div>
</template>

<script setup>
import ScrollTopBtn from '@/components/ScrollTopBtn.vue';
</script>
