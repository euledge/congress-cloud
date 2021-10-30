<template>
  <!-- 最新の議事を並べる-->
  <v-row>
    <cloud-card v-for="m in meetings" :key="m.id" :meeting="m"></cloud-card>
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