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
      :picker-options="pickerOptions1"
      @change="getTime">
    </el-date-picker>
     </div> 
     <div class="card-flex">
     <span class="demonstration">就诊人</span>
     <el-select v-if="!update" v-model="value"  size="small"  width="306px" @change="getPerson">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      >
    </el-option>
   </el-select>
    <span v-else>{{value}}</span>
    <div class="row-arrow">
              <arrow  @arrowAction="toggleInfo"  :rotate="isDegree"/>
    </div>
     </div>
     <div v-show="!isShow">
     <div class="card-flex">
     <span>证件号码</span>
     <span v-if="update">{{identify[num]}}</span>
     </div>
     <div class="card-flex">
     <span >手机号码</span>
      <span v-if="update">{{mobile[num]}}</span>
     </div>
     <div class="card-flex">
     <span >电子邮箱</span>
      <span v-if="update">{{email[num]}}</span>
    </div>
    <div class="card-flex">
     <span>银行卡</span>
      <span v-if="update">{{ bank_name[num]}} | {{card_num[num]}} | {{card_holder[num]}}</span>
    

    </div>
    </div>
    </div>
     
</template>

<script>
import Arrow from '@/components/Arrow'
export default {
    components:{Arrow},
    props:{
      num: {
      type: Number,
      default: 0
    },
    update: {
      type: Boolean,
      default: false
    }
    },
    data() {
        return {
            initiate:false,
            isShow:true,
            isDegree: false,
            //value:this.$store.state.apply.value,
            //value:"",
            //value1: this.$store.state.apply.time,
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
           
             
        }
    },
    computed:{  
         value:{
                    // getter
                    get: function () {
                        return this.$store.state.apply.value
                    },
                    // setter
                    set: function (newValue) {
                        this.$store.state.apply.value = newValue;
                    }
         },
         value1:{
             // getter
                    get: function () {
                        return  this.$store.state.apply.time
                    },
                    // setter
                    set: function (newValue) {
                        this.$store.state.apply.time = newValue;
                    }
         },
        options(){
            return this.$store.state.apply.options
        },
        identify(){
            return  this.$store.state.apply.identify
        },
        mobile(){
            return  this.$store.state.apply.mobile
        },
        email(){
            return  this.$store.state.apply.email
        },
        bank_name(){
            return  this.$store.state.apply.bank_name
        },
        card_num(){
            return  this.$store.state.apply.card_num
        },
        card_holder(){
            return  this.$store.state.apply.card_holder
        }
       
       
    },
    methods:{
        getPerson(item){
          this.initiate=true,
          this.$emit('getPerson', item)  
        },
        toggleInfo(){
         this.isDegree = !this.isDegree;
         this.isShow = !this.isShow;  
        },
        getTime(time){

            this.$emit('getTime', time)  
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
       display: inline-block;
       margin-top: 3px;
   }
</style>
