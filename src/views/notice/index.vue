<template>
  <div class="notice-container ">
    <div class="notice-title">
      {{ $t('notice.instruction') }}
    </div>
      <div class="notice-module">
       <div class="notice-label">
        {{ $t('notice.online_pay') }}
      </div>
       <div class="notice-word">
         {{ $t('notice.detail') }}
        <div class="notice-card-list">
            <div class="notice-card"> <svg-icon class-name="big-icon" icon-class="emergency" /><div>{{ $t('notice.emergency') }}</div></div>
            <div class="notice-card lines"> <svg-icon class-name="big-icon" icon-class="hospital" />
              <div>
                <div>{{ $t('notice.hospitalize') }}</div>
                <div>{{ $t('notice.benefit') }}</div>
              </div>
            </div>
        </div>
        <div class="notice-word-list">
        <div>1. 首次理赔时，请点击页面内【我的资料】，根据提示填写相关信息并上传身份证正反面及银行卡正反面图片；</div>
        <div>2. 请上传三个月以内的理赔单证（所需材料请阅“理赔申请资料”），上传的影像件务必完整、清晰可辨； </div>
        <div>3. 超过三个月的理赔单证  单次理赔发票金额在1000元以上，请线下提交； </div>
       </div>
       </div>
    </div>
     <div class="notice-module">
       <div class="notice-label">
        {{ $t('notice.offline_pay') }}
      </div>
       <div class="notice-word">
         {{ $t('notice.detail') }}
         <div class="notice-card-list">
        <div class="notice-card">  <svg-icon class-name="big-icon" icon-class="woman" /><div>{{ $t('notice.woman_benefit') }}</div></div>
        <div class="notice-card">  <svg-icon class-name="big-icon" icon-class="disability" /><div>{{ $t('notice.disability') }}</div></div>
        <div class="notice-card"> <svg-icon class-name="big-icon" icon-class="terrible" /><div>{{ $t('notice.terrible') }}</div></div>
        </div>
         <div class="notice-card-list">
            <div class="notice-card "> <svg-icon class-name="big-icon" icon-class="emergency" /><div>{{ $t('notice.emergency') }}</div></div>
            <div class="notice-card lines"> <svg-icon class-name="big-icon" icon-class="hospital" />
              <div>
                <div>{{ $t('notice.hospitalize') }}</div>
                <div>{{ $t('notice.benefit') }}</div>
              </div>
            </div>
        </div>
        <div class="notice-word-list">
        <div>1. 意外伤害/疾病身故及重大疾病保险金请先向CDP报案，CDP受理之后会告知所需的理赔材料；</div>
        <div>2. 请认真、完整地填写《团体医疗保险理赔申请表》（可在“理赔申请资料下载” 页面进行下载）；</div>
        <div>3. 提供相应理赔材料原件及复印件，整理完后提交给HR或快递至CDP进行理赔申请； </div>
        <div>4. 请将填写好的纸质材料快递至如下地址：</div>
        <div class="notice-address">   收件人：CDP商保部理赔专员|地址：上海市闵行区莲花路1733好D06幢|电话：+86 21 3329 5715</div>
        </div>
       </div>
    </div>

    <div class="notice-module">
       <div class="notice-label2">
        {{ $t('notice.material') }}
      </div>
       <div class="notice-word">
         {{ $t('notice.alert') }}
        
     <div class="notice-table-list">
     <el-table
    :data="tableData" class="table1"
    border style="width: 100%"> 
    <el-table-column
      prop="material"
      label="理赔材料"
      >
    </el-table-column>
    <el-table-column
      prop="cost1"
      label="门急诊费用"
     >
    </el-table-column>
    <el-table-column
      prop="cost2"
      label="住院费用"
     >
    </el-table-column>
    <el-table-column
      prop="woman"
      label="女性生育 (线下理赔)"
      >
    </el-table-column>
  </el-table>
       </div>
        <div class="notice-card-list2">
            <div class="notice-card ">
              <div class="card-flow"><span class="middle-icon"> 1</span> <svg-icon class-name="middle-icon" icon-class="pill" /> </div>
              <div>病历上需清晰注明： 病情主诉、疾病诊断、检查、治疗、用药及剂量等</div>
            </div>
            <div class="notice-card ">
              <div class="card-flow"><span class="middle-icon"> 2</span> <svg-icon class-name="middle-icon" icon-class="record" /> </div>
              <div>病历上的记录与收据上的收费项目相符</div>
            </div>
            <div class="notice-card ">
              <div class="card-flow"><span class="middle-icon"> 3</span> <svg-icon class-name="middle-icon" icon-class="doctor" /> </div>
              <div>1. 收据上应有医院收费章 <br/>2. 病历修改需加盖医生章</div>
            </div>
            <div class="notice-card ">
              <div class="card-flow"><span class="middle-icon"> 4</span> <svg-icon class-name="middle-icon" icon-class="reservation" /> </div>
              <div>1. 病历上的诊病日期须与收据上的日期一致   <br/>2. 特殊原因请用文字说明</div>
            </div>
            <div class="notice-card ">
              <div class="card-flow"><span class="middle-icon"> 5</span> <svg-icon class-name="middle-icon" icon-class="me" /> </div>
              <div>1. 收据上的姓名无误 <br/> 2. 如有误必须由医院更正后加盖医院章</div>
            </div>
            
        </div>
       </div>
    </div>
   
  </div>
</template>
<script>


export default {
  name: 'Notice',
  data() {
    return {
     tableData: [{
            material: '《团体医疗保险理赔申请表》（仅线下理赔需要）',
            cost1: <svg-icon  icon-class="check" />,
            cost2: <svg-icon  icon-class="check" />,
            woman:<svg-icon  icon-class="check" />,
          }, {
            material: '门急诊病历复印件',
            cost1: <svg-icon  icon-class="check" />,
            cost2: '',
            woman:<svg-icon  icon-class="check" />,
          }, {
            material: '医疗费用原始凭证',
            cost1: <svg-icon  icon-class="check" />,
            cost2: <svg-icon  icon-class="check" />,
            woman:<svg-icon  icon-class="check" />,
          }, {
            material: '医疗费用明细清单、核价处方',
             cost1: <svg-icon  icon-class="check" />,
            cost2: '',
            woman:<svg-icon  icon-class="check" />,
          },{
            material: '检查报告（如有）',
            cost1: <svg-icon  icon-class="check" />,
            cost2: <svg-icon  icon-class="check" />,
            woman:<svg-icon  icon-class="check" />,
          }, {
            material: '出院小结、住院费用明细清单',
            cost1: <svg-icon  icon-class="check" />,
           cost2: <svg-icon  icon-class="check" />,
            woman:<svg-icon  icon-class="check" />,
          },{
            material: '身份证正反面复印件、银行卡复印件',
             cost1: '',
            cost2:<svg-icon  icon-class="check" />,
            woman:<svg-icon  icon-class="check" />,
          },
          {
            material: '结婚证复印件',
             cost1: '',
            cost2:'',
            woman:<svg-icon  icon-class="check" />,
          }]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
.notice-container{
  font-size: 12px;
  .notice-title{
    font-size: 12px;
    color: #666666;
  }
  .notice-module{
    margin-top: 25px;
    .notice-label{
    background:url("/static/images/label.png") no-repeat;
    text-indent: 30px;
    color: #ffffff;
    padding: 3px 0;
    color: #ffffff;  
    }
     .notice-label2{
    background:url("/static/images/label2.png") no-repeat;
    text-indent: 30px;
    color: #ffffff;
    padding: 3px 0;
    color: #ffffff;  
    }
    .notice-word{
      margin: 15px 30px;
    }
    .notice-card-list{
      display: flex;
      margin-top: 15px;
      .notice-card{
        width: 156px;
        height: 60px;
        line-height: 60px;
        background: #EDEFF2;
        margin-right:20px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 5px;
         >div{
          width:60%;
          float: right;
          text-align: left;
            div{
            height: 30px;
            line-height: 30px;
               }
           }
      }
      .notice-card.lines>div{
        height: 40px;
        div{
          height: 20px;
          line-height: 20px;
        }
        
      }

      
    }
    .notice-card-list2{
      width: 848px;
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      .notice-card{
        padding: 0 6px;
        width: 152px;
        height: 120px;
        line-height:18px;
        font-size:12px;
        background:#F8F8F8;
        border-radius:2px;
        color: #666666;
        .card-flow{
          height: 50px;
          line-height: 50px;
          +div{
            letter-spacing: 0px;
            line-height: 18px;
          }
        }
      }
    }
    .notice-word-list{
       margin-top: 15px;
       line-height: 25px;
       color: #333333;
       .notice-address{
      text-indent: 15px;
      color: #636CB0;
    }
    }
    .notice-table-list{
        margin-top: 15px;
        .el-table.table1 thead th{
          text-align: center;
        }
        .el-table.table1 .el-table__body tr td:first-child{
          text-align: left;
        }
        .el-table.table1 .el-table__body tr td{
          height: 0.3rem;
          line-height: 0.3rem;
          text-align: center
}
    }
    .el-table.table1 .el-table__body tr td{
      height: 0.3rem!important;
      line-height: 0.3rem;
    }
  }
.big-icon{
  font-size: 40px;
  color: #636CB0;
}
.middle-icon{
  font-size: 30px;
  color: #CCCCCC;
  margin-right: 10px
}
}


</style>
