$( document ).ready(function() {
	$("#re-d").hide();
	$("#tt-d").hide();
	$("#bb-d").hide();
  $("#rs-d").hide();
  $("#mm-d").hide();
	$("#final").hide();
	$("#1").click(function(){$("#re-d").toggle("slow");});
	$("#2").click(function(){$("#tt-d").toggle("slow");});
	$("#3").click(function(){$("#bb-d").toggle("slow");});
  $("#4").click(function(){$("#rs-d").toggle("slow");});
  $("#5").click(function(){$("#mm-d").toggle("slow");});
});

var locations = [];

function initialize() {
  var myOptions = {
    center: new google.maps.LatLng(40.762416, -73.878140),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("default"), myOptions);
  setMarkers(map,locations)
}

function setMarkers(map){
  var marker, i
  $(".lat").each(function() {
  var cords = $(this).val().split('>');
  var visittime = cords[0];
  var rec = cords[1];
  var ttc = cords[2];
  var bbc = cords[3];
  var rsc = cords[4];
  var ret = cords[5];
  var ttt = cords[6];
  var bbt = cords[7];
  var rst = cords[8];
  var long = cords[9];
  var lat = cords[10];
  var id = cords[11];
  var mmc = cords[12];
  var mmt = cords[13];
  var cent = new google.maps.LatLng(40.762416, -73.878140);

  latlngset = new google.maps.LatLng(lat, long);
  var marker = new google.maps.Marker({  
    icon: 'https://chart.googleapis.com/chart?chst=d_bubble_icon_text_small&chld=dollar|bb|Viewed '+visittime+' times...!|00C853|E8F5E9',
    map: map, title: "SHUBHAM PROJECT" , position: latlngset  
  });
  map.setCenter(cent)
  var content = '<div class="cont"><h2>TOTAL VISITS: '+visittime+'</h2>'+
      '<span class="left"><i class="fa fa-home"></i> REAL ESTATE: </span><span class="right">'+rec+'</span><br>'+
      '<span class="left"><i class="fa fa-book"></i> TASK TRACKER: </span><span class="right">'+ttc+'</span><br>'+
      '<span class="left"><i class="fa fa-university"></i> MY BLOG: </span><span class="right">'+bbc+'</span><br>'+
      '<span class="left"><i class="fa fa-file-pdf-o"></i> RESUME SELECTOR: </span><span class="right">'+rsc+'</span><br>'+
      '<span class="left"><i class="fa fa-music"></i> MediaBuzzNet: </span><span class="right">'+mmc+'</span>'+
      '<br></cont>';    

  var infowindow = new google.maps.InfoWindow()
  google.maps.event.addListener(marker,'mouseover', (function(marker,content,infowindow){ 
  return function() {
    openProperty(id);
    infowindow.setContent(content);
    infowindow.open(map,marker);
    $("#init").hide();
  };
  })(marker,content,infowindow)); 
    google.maps.event.addListener(marker, 'mouseout', function() {
    infowindow.close(map,marker);
  });
  });
}

              // google.maps.event.addListener(marker, 'click', function() {
              //   window.location.href = 'http://shubham-great-livings.herokuapp.com/detailedproperty/'+timestamp;
              // });

var count = 0;
function openProperty(tag){       
  var id = tag;
    $.post( "searchLocation", { id: id})
    .done(function( location ) {    
        $( "#lodardiv" ).html('<img src="images/load.gif" width=100" height="100">');
         setTimeout(function(){
            $("#final").show();
           $( "#lodardiv" ).html('<img src="images/done.jpg" width=70" height="70"> <span id="msg">Search successful<span> </p>');
            var staddress = location.fulladdress;  
            $('#fre').text(location.visittime);
            $('#re-v').text(location.re_c);
            $('#tt-v').text(location.tt_c);
            $('#bb-v').text(location.bb_c);
            $('#rs-v').text(location.rs_c);
            $('#mm-v').text(location.mm_c);
            $('#re-d').html(getFormatedCode(location.re_task));
            $('#tt-d').html(getFormatedCode(location.tt_task));
            $('#bb-d').html(getFormatedCode(location.bb_task));
            $('#rs-d').html(getFormatedCode(location.rs_task));
            $('#mm-d').html(getFormatedCode(location.mm_task));
            $(".1",".2",".3",".4",".5").hide();
            $("#cost").html('<p id="cost"><img src="images/dollar.jpg" width="22" height="22">&nbsp;&nbsp;'+property.cost+'</p>');
            $('#roomsdis').html('<br><p class="room"><img src="images/br.jpg" width="22" height="22"> '+property.bedroom+' | <img src="images/wr.jpg" width="22" height="22"> '+property.bathroom+' | <img src="images/area.jpg" width="22" height="22"> '+property.area+' SqFt');
            $("#description").text(property.discription);
            $("#readmorelink").html('<a id="readmorelink" href="detailedproperty/'+property.timestamp+'" target="_blank">Read More</a>');
            $("#features").text(property.features);
          },2000);
    });
 }

function getFormatedCode(actions) {
  var appendResult = "";
  if(actions===""){appendResult = "Woops! No results found."}
    else{appendResult = actions.replace(new RegExp(',', "g"), '<br><br>')}
 return appendResult;
}