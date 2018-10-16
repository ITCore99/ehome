<template>
    <div class="map-wraper">
        <hNav options="流动党员找组织"></hNav>
        <div class="map" id="container">

        </div>
    </div>
</template>

<script>
    import  hNav from "@/components/Hnav"
    export default {
        name: "index",
        components:{
          "hNav":hNav
        },
        methods:{
          initMap()
          {
            const  BMap=window.BMap;

            this.map = new BMap.Map("container");          // 创建地图实例

            var point = new BMap.Point(116.404, 39.915);           // 创建点坐标
            var ponint2= new BMap.Point(114.01, 32.58);
            this.map.centerAndZoom(point,5);                 // 初始化地图，设置中心点坐标和地图级别

            var  markerBejing = new BMap.Marker(point);           // 创建标注
            var  markerLuoYAng=new BMap.Marker(ponint2);

            this.map.addOverlay(markerBejing);                     // 将标注添加到地图中
            this.map.addOverlay(markerLuoYAng);

            let  optionsBJ1={position:point, offset: new BMap.Size(10,-40)};
            let  optionsLY1={position:ponint2, offset: new BMap.Size(10,-20)};
            let  optionsLY2={position:ponint2, offset: new BMap.Size(10,-50)};

            var  labelBejing1=new BMap.Label("信息工程学院学生流动党支部 总支书记：高阳 电话：14758963058",optionsBJ1);
            var  labelLuoYAng=new BMap.Label("信息工程学院学生流动党支部 总支书记：杨芩 电话：15140450306",optionsLY1);
            var  labelLuoYAng2=new BMap.Label("信息工程学院学生流动党支部 总支书记：杨晓阳 电话：1545488989",optionsLY2);
            let  style={
              color: '#fff',
              background: '#ff8355',
              border: '1px solid "#ff8355"',
              borderRadius: "5px",
              textAlign: "center",
              height: "20px",
              lineHeight: "20px"
            }
            labelBejing1.setStyle(style);
            labelLuoYAng.setStyle(style);
            labelLuoYAng2.setStyle(style);
            this.map.addOverlay(labelBejing1);
            this.map.addOverlay(labelLuoYAng);
            this.map.addOverlay(labelLuoYAng2);
          }
        },
        mounted()
        {
          this.initMap();
        }
    }
</script>

<style scoped>
.map-wraper
{
  width: 7.5rem;
  height: 100%;
  position: absolute;
  top:0px;
  left:0px;
  right: 0px;
  bottom:0px;
}
.map
{
  width: 100%;
  height: 100%;
}
</style>
