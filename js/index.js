var ProvinceNum=["江西省","河北省"];
var CityNum =[["南昌市","赣州市"],["石家庄市","邢台市"]];
var CountryNum =[[["南昌县1","南昌县2"],["赣州县1","赣州县2"]],[["石家庄县1","石家庄县2"],["邢台县1","邢台县2"]]];
var firstNum;//所选省的索引值
var secondNum;//所选市的索引值
$(function(){
	for(var i=0;i<ProvinceNum.length;i++){
		$("#selProvince").append("<option>"+ProvinceNum[i]+"</option>");
	}
	$("#selProvince").change(function(){
		//重新选择省，需要把市的选项都移除，除了第一项
		$("#selCity").children().not(":eq(0)").remove();
		//所选项的索引值
		firstNum = $(this).children("option:selected").index();
		var cNum = CityNum[firstNum-1];
		for(var f=0;f<cNum.length;f++){
		$("#selCity").append("<option>"+cNum[f]+"</option>");
	}
	});
	$("#selCity").change(function(){
		$("#selCountry").children().not(":eq(0)").remove();
		secondNum = $(this).children("option:selected").index();
		var counNum = CountryNum[firstNum-1][secondNum-1];
		for(var k=0;k<counNum.length;k++){
			$("#selCountry").append("<option>"+counNum[k]+"</option>");
		}
		
	});
});
