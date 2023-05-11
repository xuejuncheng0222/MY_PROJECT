<template>
  <div>
    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <AdminCard></AdminCard>
          <AtCard /></div
      ></el-col>
      <el-col :span="16"
        ><div class="grid-content bg-purple-light">22222</div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import AdminCard from "@/components/AdminCard.vue";

export default {
  data() {
    return {};
  },
  props: {},
  methods: {},
  components: {
    AdminCard,
  },
};
</script>

<style scoped></style>
