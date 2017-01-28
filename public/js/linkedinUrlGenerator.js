$( document ).ready(function() {

});

$(document).on("keyup","#typeurl",function() {
    var url = $(this).val();
    var right = "&orig=FCTD&f_E=3%2C2%2C1&sortBy=DD";
    var left = "https://www.linkedin.com/jobs/search?f_GC=us.3-2-0-31-1%2Cus.7-1-0-38-1%2Cus.7-1-0-19-57%2Cus.7-1-0-37-41%2Cus.7-1-0-43-12%2Cus.7-1-0-43-16%2Cus.7-1-0-34-21%2Cus.7-1-0-19-13%2Cus.7-1-0-30-18%2Cus.7-1-0-1-11%2Cus.7-1-0-19-56&locationId=us%3A0&keywords="
    var mid = getMid(url);
    var result = left+mid+right;
    var finalResult = "URL generated for <span>( "+url+" )</span> Key Word: <button type='button' class='btn btn-primary'><a href='"+result+"' target='_blank' id='clickMeUrl'>OPEN URL</a></button>";
   	$("#result").html("<img src='images/iphoneload.gif' width='50' height='50'>");
    setTimeout(function(){
    	$("#result").html(finalResult);
    },2000);
});

function getMid(url){
	var res = url.split(" ").join('%20');
	return res;
}