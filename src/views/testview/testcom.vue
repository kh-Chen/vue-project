<template>
  <div style="border: 0px solid red ;">
    <Collapse accordion @on-change="colchange">
      <Panel name="1">
        search
        <Button @click.stop="search" size="small" >Default</Button>
        <div slot="content">
          <Input search placeholder="Enter something..." style="width: 200px" @on-search="" />
        </div>
      </Panel>
    </Collapse>
    <Table border :loading="loading" ref="table" size="small" :height="height" :columns="columns" :data="data" @on-select="select" @on-row-click="rowClick"></Table>
    <Page style="float: right;margin: 5px 5px 0px 0px" :total="dataTotal" :page-size="pageSize" @on-change="pageChange" @on-page-size-change="pageSizeChange" transfer show-sizer show-total />
  </div>
</template>
<script>

  export default {
    name:'iView_table_pic',
    data () {
      return {
        height:500,
        loading:false,
        columns: [
          {type:'selection', width: 50, align: 'center',fixed: 'left'},
          { title: 'Name', width: 200,key: 'name' ,fixed: 'left'},
          { title: 'Age', width: 600,key: 'age'},
          { title: 'Address', width: 600,key: 'address' },
          { title: 'date', width: 600,key: 'date' }
        ],
        data: [],
        pageSize:20,
        dataTotal:0,
        showPage:1
      }
    },
    mounted() {
      this.height = document.documentElement.clientHeight-270;
      const that = this;
      window.onresize = function () {
        that.height = document.documentElement.clientHeight-270
      };
      let param = {};
      param.page = this.showPage;
      param.pageSize = this.pageSize
      this.getData(param);
    },
    methods :{
      pageChange (num) {
        this.showPage = num;
        let param = {};
        param.page = num;
        param.pageSize = this.pageSize
        this.getData(param)
      },
      pageSizeChange (num) {
        this.pageSize = num
        let param = {};
        param.page = this.showPage;
        param.pageSize = num;
        this.getData(param)
      },
      getData (param ) {
        this.$ajax({
          method: 'get',
          url: '/TestServlet',
          // transformRequest: [data => Qs.stringify(data)],//post用这个
          // transformRequest: [function (data) {
          //   return Qs.stringify(data)
          // }],
          // data:param,//post用这个
          params: param//get用这个
        }).then((rep) => {

          let obj = rep.data;

          this.data = obj.data;
          this.dataTotal = obj.total;
          this.loading = false;
        })
      },
      select (seletion,row) {
        // console.log(seletion)
        // console.log(row)
      },
      rowClick (data,index) {
        this.$refs.table.toggleSelect(index);
      },
      colchange (cols) {
        if(cols.length > 0){
          this.height -= 60
        }else{
          this.height += 60
        }
      }
    }
  }
  window.onresize = function(){
    console.log(document.documentElement.clientHeight);
  }
</script>

