<template>
    <div class='color-states'>
        <h2 class='secondary-title light'>Значения цветов</h2>
        <div class='color-states__line'>
          <div class='color-states__example color-states__example--actual' />
          <div class='color-states__explanation'>Актуальное дз</div>
        </div>
        <div class='color-states__line'>
          <div class='color-states__example color-states__example--done' />
          <div class='color-states__explanation'>Выполненный пункт</div>
        </div>
        <div class='color-states__line'>
          <div class='color-states__example color-states__example--partially-done' />
          <div class='color-states__explanation'>Частично выполненный пункт</div>
        </div>
        <div class='color-states__line'>
          <div class='color-states__example color-states__example--debt' />
          <div class='color-states__explanation'>Долг</div>
        </div>
        <div class='color-states__line'>
          <div class='color-states__example color-states__example--order-important' />
          <div class='color-states__explanation'>Важен порядок выполнения пунктов</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ColorStates',
};
</script>
