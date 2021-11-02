<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-card-title
      ><v-btn :href="meeting.url" target="_blank">{{
        meeting.title
      }}</v-btn></v-card-title
    >
    <v-card-subtitle>開催日：{{ meeting.eventDate }}</v-card-subtitle>
    <vue-word-cloud
      style="height: 250px; width: 374px"
      :words="words"
      :color="([, weight]) => translateColor(weight)"
      :font-size-ratio="fontSizeRatio"
      font-family="Roboto"
    />
  </v-card>
</template>
<script>
import { API } from 'aws-amplify'
import { listCommentByMeetingId } from '~/src/graphql/queries'

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
    comments: [],
    maxCount: 0,
    minCount: 0,
  }),
  async mounted() {
    await this.getComments(this.meeting.id)
  },
  computed: {
    words() {
      const comments = this.comments || []
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
    async getComments(meeting_id) {
      const getComments = await API.graphql({
        query: listCommentByMeetingId,
        variables: {
          meetingId: meeting_id,
        },
      })
      this.comments = getComments.data.listCommentByMeetingId.items
    },
  },
}
</script>