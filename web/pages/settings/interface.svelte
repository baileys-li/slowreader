<script lang="ts">
  import {
    settingsMessages as t,
    theme,
    type ThemeOption
  } from '@slowreader/core'

  import Card from '../../ui/card.svelte'
  import Page from '../../ui/page.svelte'
  import RadioField from '../../ui/radio-field.svelte'

  const OPTIONS: [ThemeOption, string][] = [
    ['system', $t.themeSystem],
    ['light', $t.themeLight],
    ['dark', $t.themeDark]
  ]
</script>

<Page title={$t.interface} type="list">
  <Card>
    <RadioField
      current={$theme}
      label={$t.theme}
      values={OPTIONS}
      on:change={e => {
        theme.set(e.detail)
      }}
    />
  </Card>
</Page>
