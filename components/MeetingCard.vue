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
    <form
      method="post"
      :action="url"
      id="postjump"
      target="_blank"
      v-if="isShow"
    >
      <input type="hidden" name="Phrase[]" v-model="phrase" />
      <input type="hidden" name="TermStartYear" v-model="eventDate.year" />
      <input type="hidden" name="TermStartMonth" v-model="eventDate.month" />
      <input type="hidden" name="TermStartDay" v-model="eventDate.day" />
      <input type="hidden" name="TermEndYear" v-model="eventDate.year" />
      <input type="hidden" name="TermEndMonth" v-model="eventDate.month" />
      <input type="hidden" name="TermEndDay" v-model="eventDate.day" />
      <input type="hidden" name="Class[]" value="3" />
    </form>
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
    isShow: false,
    eventDate: {
      year: 0,
      month: 0,
      day: 0,
    },
    phrase: '',
    url: 'https://www.city.fukuroi.shizuoka.dbsr.jp/index.php/2418958?Template=list',
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
      this.isShow = true
      this.phrase = word[0]
      if (this.meeting.eventDate) {
        const date = this.meeting.eventDate.split('-')
        this.eventDate.year = date[0]
        this.eventDate.month = date[1]
        this.eventDate.day = date[2]
      }
      this.$nextTick(() => {
        document.getElementById('postjump').submit()
        this.isShow = false
      })
    },
  },
}
</script>