<template>
  <div>
    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <AdminCard :test="test"></AdminCard>
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
    return {
      test: "薛薛",
    };
  },
  mounted() {
    getData().then(() => {
      // console.log(data);
    });
  },
  props: {},
  methods: {
    testMethod() {
      this.test = "梦梦";
    },
  },
  components: {
    AdminCard,
    TableCard,
  },
};
</script>

<style scoped></style>
