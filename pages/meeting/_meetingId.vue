<template>
  <!-- 最新の議事を並べる-->
  <div>
    <v-row justify="center" class="my-5">
      <v-banner
        >これは、<a href="http://www.city.fukuroi.shizuoka.dbsr.jp/index.php/"
          >袋井市議会会議録</a
        >&nbsp;に公開されている議事録から発言された単語の回数をもとにワードクラウドにしたものです</v-banner
      >
    </v-row>
    <v-row justify="center">
      <meeting-card
        width="80%"
        :meeting="meeting"
        :fontSizeRatio="5"
      ></meeting-card>
    </v-row>
  </div>
</template>
<script>
import { API } from 'aws-amplify'
import { getMeeting } from '~/src/graphql/queries'

export default {
  data() {
    return {
      meeting: {},
    }
  },
  async mounted() {
    const meeting = await API.graphql({
      query: getMeeting,
      variables: {
        id: this.$route.params.meetingId,
      },
    })
    this.meeting = meeting.data.getMeeting
  },
}
</script>