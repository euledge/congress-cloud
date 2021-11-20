<template>
  <!-- 最新の議事を並べる-->
  <v-row class="mt-5">
    <v-row>
      <v-banner
        >これは、<a href="http://www.city.fukuroi.shizuoka.dbsr.jp/index.php/"
          >袋井市議会会議録</a
        >&nbsp;に公開されている議事録から発言された単語の回数をもとにワードクラウドにしたものです
        2020/11/20更新</v-banner
      >
    </v-row>
    <v-row>
      <cloud-card
        v-for="m in meetings"
        :key="m.id"
        :meeting="m"
        :fontSizeRatio="5"
      ></cloud-card>
    </v-row>
  </v-row>
</template>

<script>
import { API } from 'aws-amplify'
import { listMeetings } from '~/src/graphql/queries'

export default {
  data() {
    return {
      meetings: [],
    }
  },
  async created() {
    await this.getMeetings()
  },
  methods: {
    async getMeetings() {
      const getMeetings = await API.graphql({
        query: listMeetings,
      })
      this.meetings = getMeetings.data.listMeetings.items
        // 開催日の降順に並べる
        .sort((a, b) => {
          const dateA = a.eventDate
          const dateB = b.eventDate
          if (dateA < dateB) {
            return 1
          }
          if (dateA > dateB) {
            return -1
          }
          return 0
        })
    },
  },
}
</script>