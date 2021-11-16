<template>
  <v-card height="500" width="80%">
    <v-card-title
      ><v-btn :href="meeting.url" target="_blank">{{
        meeting.title
      }}</v-btn></v-card-title
    >
    <v-card-subtitle>
      <v-slider v-model="selection" label="表示数" min="5"></v-slider>
    </v-card-subtitle>

    <vue-word-cloud
      style="height: 60%"
      :words="words"
      :color="([, weight]) => translateColor(weight)"
      :font-size-ratio="fontSizeRatio"
      font-family="Roboto"
      ><template slot-scope="{ text, weight, word }">
        <div
          :title="tooltipTitle(word[0], weight)"
          style="cursor: pointer"
          @click="onWordClick(word)"
        >
          {{ text }}
        </div>
      </template></vue-word-cloud
    >
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
    fontSizeRatio: {
      type: Number,
      default: 10,
    },
  },
  data: () => ({
    loading: false,
    selection: 25,
    maxCount: 0,
    minCount: 0,
  }),
  mounted() {},
  computed: {
    words() {
      const comments = this.meeting?.comments?.items || []
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
      const w = wordList.map((v, k, m) => {
        return [v[0], v[1]]
      })
      if (w.length > 0) {
        this.maxCount = w[0][1]
        this.minCount = w[w.length - 1][1]
      }
      return w
    },
  },
  methods: {
    translateColor(weight) {
      const index = Math.floor(weight * (254 / this.maxCount))
      const colors = colormap({
        colormap: 'viridis',
        nshades: 255,
        format: 'rgbaString',
        alpha: 1,
      })
      return colors[index]
    },
    tooltipTitle(word, weight) {
      return `${word}(${weight}回)`
    },
    onWordClick(word) {
      console.log(word)
    },
  },
}
</script>