<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <vue-word-cloud
      style="height: 250px; width: 374px"
      :words="words"
      :color="([, weight]) => translateColor(weight)"
      font-size-ratio="10"
      font-family="Roboto"
    />

    <v-card-title>{{ meeting.title }}</v-card-title>
    <v-card-text>{{ meeting.eventDate }}</v-card-text>
  </v-card>
</template>
<script>
const colormap = require('colormap')

export default {
  props: {
    meeting: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    loading: false,
    selection: 25,
  }),
  computed: {
    words() {
      const comments = this.meeting.comments.items
      const words = comments
        .flatMap((c) => JSON.parse(c.words))
        .reduce((acc, key) => {
          if (acc.has(key)) {
            acc.set(key, acc.get(key) + 1)
          } else {
            acc.set(key, 1)
          }
          return acc
        }, new Map())
      const wordList = [...words.entries()]
        .sort((a, b) => (a[1] < b[1] ? 1 : -1))
        .slice(0, this.selection)
      return wordList.map((v, k, m) => {
        return [v[0], v[1]]
      })
    },
  },
  methods: {
    translateColor(weight) {
      const index = weight
      console.log(index)
      const colors = colormap({
        colormap: 'viridis',
        nshades: 128,
        format: 'rgbaString',
        alpha: 1,
      })
      return colors[index]
    },
  },
}
</script>