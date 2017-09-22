<template>
  <div class="putaway-course">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/putaway' }">上架管理</el-breadcrumb-item>
      <el-breadcrumb-item>课程审核列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true" :model="query" label-width="80px" class="query">
      <el-form-item label="课程名称">
        <el-input v-model="query.product_name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="课程类型">
        <el-select v-model="query.product_type" placeholder="请选择">
          <el-option label="全部" value="all"></el-option>
          <el-option label="在线课程" value="course"></el-option>
          <el-option label="解决方案" value="series"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="讲师">
        <el-input v-model="query.lecturer_name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="上架时间">
        <el-date-picker
          v-model="query.daterange"
          type="daterange"
          placeholder="选择日期范围"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>
      <el-form-item style="margin-left:20px">
        <el-button type="primary" @click="onQuery">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      class="table"
      :data="items"
      v-loading.body="loading"
      border>
      <el-table-column
        type="index"
        align="center"
        width="65">
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程名称">
      </el-table-column>
      <el-table-column
        prop="lecturer_name"
        label="讲师名称">
      </el-table-column>
      <el-table-column
        prop="product_type"
        label="课程类型">
        <template scope="scope">
          <span v-if="scope.row.product_type === 'course'">在线课程</span>
          <span v-else-if="scope.row.product_type === 'series'">解决方案</span>
          <span v-else>未知</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="onshelves_time"
        label="申请上架时间">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        :formatter="formatterStatus">
      </el-table-column>
      <el-table-column
        prop="is_top"
        label="置顶">
      </el-table-column>
      <el-table-column
        label="操作"
        width="65">
        <template scope="scope">
          <el-button type="text" size="small" @click="handleView(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.currentPage"
      :page-size="pagination.pageSize"
      :total="pagination.total"
      :page-sizes="[10, 20, 30, 40, 50, 100, 500]"
      layout="total, sizes, prev, pager, next, jumper"
      >
    </el-pagination>
  </div>
</template>

<script>
  import axios from 'axios'

  const INDEX = 1
  const SIZE = 10

  export default {
    data () {
      return {
        loading: true,
        items: [],
        query: {
          product_name: '',
          lecturer_name: '',
          product_type: 'all',
          daterange: '',
        },
        pagination: {
          currentPage: INDEX,
          pageSize: SIZE,
          total: 0,
        },
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              // start.setMonth(start.getMonth() - 1)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              // start.setMonth(start.getMonth() - 3)
              picker.$emit('pick', [start, end])
            }
          }]
        },
      }
    },
    created () {
      this.getTabelData()
    },
    watch: {
      '$route' (to, from) {
        console.log('$route')
        this.getTabelData()
      }
    },
    // computed: {
    //   indexWidth () {
    //     return this.pagination.pageSize.toString().length * 10 + 40
    //   }
    // },
    methods: {
      handleCurrentChange (val) {
        this.$router.push({
          path: '/putaway/course',
          query: {
            index: val,
            size: this.pagination.pageSize,
            product_type: this.$route.query.product_type,
            product_name: this.$route.query.product_name,
            lecturer_name: this.$route.query.lecturer_name,
            daterange: this.$route.query.daterange,
          }
        })
      },
      handleSizeChange (val) {
        this.$router.push({
          path: '/putaway/course',
          query: {
            index: this.pagination.currentPage,
            size: val,
            product_type: this.$route.query.product_type,
            product_name: this.$route.query.product_name,
            lecturer_name: this.$route.query.lecturer_name,
            daterange: this.$route.query.daterange,
          }
        })
      },
      onQuery () {
        console.log('onQuery' + this.query.daterange)
        this.$router.push({
          path: '/putaway/course',
          query: {
            index: INDEX,
            size: SIZE,
            product_type: this.query.product_type,
            product_name: this.query.product_name,
            lecturer_name: this.query.lecturer_name,
            daterange: this.query.daterange,
          }
        })
      },
      getTabelData () {
        this.pagination.currentPage = +this.$route.query.index || INDEX
        this.pagination.pageSize = +this.$route.query.size || SIZE
        this.query.product_type = this.$route.query.product_type || 'all'
        this.query.product_name = this.$route.query.product_name
        this.query.lecturer_name = this.$route.query.lecturer_name

        this.query.daterange = this.$route.query.daterange
        const start = this.query.daterange && new Date(this.query.daterange[0]) // F5 刷新后，会变成 Array[string]
        const end = this.query.daterange && new Date(this.query.daterange[1])

        this.loading = true
        const _this = this
        axios.get('/boss/products', {
          params: {
            index: this.pagination.currentPage,
            size: this.pagination.pageSize,
            product_type: this.query.product_type,
            product_name: this.query.product_name,
            lecturer_name: this.query.lecturer_name,
            onshelves_time_start: start,
            onshelves_time_end: end
          }
        })
        .then(function (response) {
          _this.pagination.currentPage = response.page.current_index
          _this.pagination.total = response.page.total_size
          _this.items = response.items
          _this.loading = false
        })
        .catch(function (error) {
          _this.loading = false
          error && alert(`获取数据失败：${error.message}`)
        })
      },
      formatterStatus (row, column, cellValue) {
        const obj = {
          onshelves: '已上架',
          offshelves: '已下架',
          auditing: '待审核',
          notpass: '已拒绝'
        }
        return obj[cellValue]
      },
      handleView (row) {
        console.log(row)
        this.$router.push({
          path: `/putaway/course/${row.id}`,
          // params: {
          //   id: row.id,
          // }
        })
      },
    }
  }
</script>