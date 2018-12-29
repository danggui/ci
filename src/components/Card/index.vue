<template>
    <div>
    <div class="card-flex">
    <span class="demonstration">就诊日期</span>
    <el-date-picker
      v-model="value1"
      align="right"
      type="date"
      size="small"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>
     </div> 
     <div class="card-flex">
     <span class="demonstration">就诊人</span>
     <el-select v-model="value"  size="small" placeholder="请选择"  width="306px" @change="getPerson">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      >
    </el-option>
   </el-select>
   <span class="row-arrow">
              <arrow  @arrowAction="toggleInfo"  :rotate="isDegree"/>
      </span>
     </div>
     <div v-show="isShow">
     <div class="card-flex">
     <span>证件号码</span>
     <span>{{identify}}</span>
     </div>
     <div class="card-flex">
     <span >手机号码</span>
      <span>{{mobile}}</span>
     </div>
     <div class="card-flex">
     <span >电子邮箱</span>
      <span>{{email}}</span>
    </div>
    <div class="card-flex">
     <span>银行卡</span>
      <span>{{ bank_name}} | {{card_num}} | {{card_holder}}</span>
    

    </div>
    </div>
    </div>
     
</template>

<script>
import Arrow from '@/components/Arrow'
export default {
    components:{Arrow},
    data() {
        return {
            isShow:true,
            isDegree: true,
            value1: '',
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }]
            },
              value: '',
        }
    },
    computed:{
        options(){
            return this.$store.state.apply.options
        },
        identify(){
            return  this.$store.state.apply.identify[1]
        },
        mobile(){
            return  this.$store.state.apply.mobile[1]
        },
        email(){
            return  this.$store.state.apply.email[1]
        },
        bank_name(){
            return  this.$store.state.apply.bank_name[1]
        },
        card_num(){
            return  this.$store.state.apply.card_num[1]
        },
        card_holder(){
            return  this.$store.state.apply.card_holder[1]
        }
    },
    methods:{
        getPerson(){

        },
        toggleInfo(){
         this.isDegree = !this.isDegree;
         this.isShow = !this.isShow;  
        }

    }

}


</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .card-flex{
      display: flex;
      align-items: center;
      font-size: 14px;
     >span:first-child{
    color: #999999;
    min-width: 60px;
    margin-right: 80px;
    display: inline-block;
    text-align: right;
     }
   }
   .row-arrow{
       margin-left: 25px;
   }
</style>
