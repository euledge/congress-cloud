<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <vue-word-cloud
      style="height: 250px; width: 374px"
      :words="words"
      :color="([, weight]) => translateColor(weight)"
      font-size-ratio="5"
      font-family="Roboto"
    />

    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>2021-06-30</v-card-text>
  </v-card>
</template>
<script>
const colormap = require('colormap')

export default {
  data: () => ({
    loading: false,
    selection: 1,
    words: [
      ['企業', 127],
      ['市民', 117],
      ['接種', 109],
      ['事業', 102],
      ['地域', 100],
      ['情報', 99],
      ['高齢者', 91],
      ['子供', 90],
      ['必要', 88],
      ['支援', 87],
      ['取組', 85],
      ['市長', 81],
      ['教育', 78],
      ['状況', 73],
      ['対応', 72],
      ['実施', 65],
      ['社会', 61],
      ['学校', 61],
      ['道路', 60],
      ['活動', 58],
      ['対策', 56],
      ['自治会', 55],
      ['議員', 53],
      ['課題', 51],
      ['センター', 50],
      ['計画', 48],
      ['デジタル', 47],
      ['調査', 46],
      ['整備', 45],
      ['環境', 44],
      ['推進', 44],
      ['ワクチン', 43],
      ['健康', 42],
      ['地区', 42],
      ['育児', 42],
      ['理解', 41],
      ['生活', 41],
      ['制度', 41],
      ['活用', 40],
      ['子育て', 40],
    ],
    title: '令和３年６月定例会（第６号）',
  }),
  methods: {
    translateColor(weight) {
      const colors = colormap({
        colormap: 'viridis',
        nshades: 128,
        format: 'rgbaString',
        alpha: 1,
      })
      return colors[weight]
    },
  },
}
</script>