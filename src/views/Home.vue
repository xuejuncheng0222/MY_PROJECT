<template>
  <div>
    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <AdminCard></AdminCard>
          <TableCard /></div
      ></el-col>
      <el-col :span="16"
        ><div class="grid-content bg-purple-light">22222</div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import AdminCard from "@/components/AdminCard.vue";
import TableCard from "@/components/TableCard.vue";
import { getData } from "@/api/index";
export default {
  data() {
    return {};
  },
  mounted() {
    getData().then((data) => {
      console.log(data);
    });
  },
  props: {},
  methods: {},
  components: {
    AdminCard,
    TableCard,
  },
};
</script>

<style scoped></style>
