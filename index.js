/**
 * @作者 wangchn86@163.com
 * @创建时间 2020/7/30 4:03 下午
 */
$(function () {
  //设置场景
  var map = new LongMap('map')
  var point = new LongMap.Point3(114.116414, 22.541189, 5000)  // 创建点坐标
  map.move(point)

  map.addUrlProvider({
    url: 'http://banktest.longmap.com/model/tiles1/tiles/{z}/{x}/{y}.jpg',      //红色字体部分代表切片文件夹路径
    maximumLevel: 50, //图像提供程序支持的最大详细程度
  })
  var layer = new LongMap.Layer()   //创建图层
  map.addLayer(layer)              //添加图层
  // map.setSceneState(false)


  R.map((bank, index) => {
    const long = R.pathOr('', ['long'], bank)
    const lat = R.pathOr('', ['lat'], bank)
    const name = R.pathOr('', ['name'], bank)
    const category = R.pathOr('', ['category'], bank)
    const img = `./images/${category}.png`

    var maker = new LongMap.Sprite({
      position: new LongMap.Point3(Number(long), Number(lat), 20),
      url: img,
      scale: 0.3,
    })
    maker.orbank = {
      name,
      category,
      type:'luohuzhihang'
    }
    layer.addFeature(maker)
  })(banksDict)


  // const arr = [{
  //   long: 113.901672,
  //   lat : 22.515729
  // },{
  //   long: 113.850538,
  //   lat : 22.495133
  // }]
  // // R.map((item,index)=>{
  // //
  // // })(arr)
  // let pointArr = [];
  // for (let i = 0,j = arr.length;i<j;i++){
  //   let p = new LongMap.Point3(arr[i].long,arr[i].lat);
  //   pointArr.push(p)
  // }
  // console.log(pointArr)
  // // const cor = new LongMap.Color('#red')
  // var line=new LongMap.Line({
  //   points:pointArr,
  //   width:3,
  //   color:new LongMap.Color("#6EFFFF")
  // })
  // layer.addFeature(line)
  //
  // map.addEventListener('click', function (e) {
  //   console.log(e)
  //
  // })
  // const cor = new LongMap.Color('#000000')
  // const text = new LongMap.Text({
  //   position: new LongMap.Point3(114.116414, 22.541189),
  //   text: '中国银行深圳分行',
  //   font: 16,
  //   color: cor,
  // })
  // layer.addFeature(text)
  // text.addEventListener('click', function(e){
  //   text.hide()
  // })

})
