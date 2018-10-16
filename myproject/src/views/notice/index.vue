<template>
      <div>
          <NewsItem></NewsItem>
      </div>
</template>

<script>
    import NewsItem from "@/components/newsItem"
    export default {
        name: "index",
        components:
          {
            "NewsItem":NewsItem,
          }
    }
</script>

<style scoped>

</style>
