var URLs = ["https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD",
    "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson",
    "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD", "https://data.cityofnewyork.us/api/views/fn6f-htvy/rows.json?accessType=DOWNLOAD", "https://data.cityofnewyork.us/api/views/43hw-uvdj/rows.json?accessType=DOWNLOAD"];

var borough = {
    1: "Manhattan",
    2: "The Bronx",
    3: "Brooklyn",
    4: "Queens",
    5: "Staten Island"
};
var neighborhood = new Map();
var districts = new Map();
var crimes = new Map();
var housing = new Map();
var museums = [];
var galleries = [];
var nDistricts = [];
var galleriesPerDistricts = [];
var musPerDistricts = [];
var crimesPerDistricts = [];
var affPerDistricts = [];
var pond = [];



var filledSaf = false;
var filledDis = false;
var filledAff = false;
var filledEn = false;
$.when(getData()).then(initMap());



(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

 
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


})(jQuery);







$( document ).ready(getData());
function getDataFromURL(urlKey){
	
	
	if(urlKey == URLs.length){
	    $.ajax({
                    url: "https://data.cityofnewyork.us/resource/9s4h-37hy.json?$where=latitude > 0 AND cmplnt_fr_dt between '2015-12-31T00:00:00' AND '2016-01-01T00:00:00'",
                    type: "GET",
                    data: {
                        "$limit" : 1000,
                        "$$app_token" : "Vg0cQjNWhod6SuG8NbjRHr6DO"
                    }
                }).done(function(data) {
                    $.each( data, function( key, val) {
                        if(val.lat_lon !== null)
                            crimes.set(val.cmplnt_num, [val.boro_nm, val.ofns_desc, val.lat_lon, val.cmplnt_fr_dt]);    
                    
                    });
                }).fail(function(error){
                    console.log(error);
                });
	}else{
	    $.getJSON(URLs[urlKey], function(data){
	    switch(urlKey){
	        case 0:
	            $.each( data.data, function( key, val) {
                    neighborhood.set(key, [val[11], val[12], val[9]]); 
                });
                
                break;
            case 1:
                $.each( data.features, function( key, val) {
                    districts.set(val.properties.BoroCD,val.geometry);
                });
	            break;
            case 2:
                $.each( data.data, function( key, val) {
                    if(val[24] !== null && val[0] !== null)
                        housing.set(val[8], [val[17], val[23], val[24], val[31], val[9]]); 
                });
                break;
            case 3:
                $.each(data.data, function(key, val){
                    museums.push([val[9], val[8]]);
                });
                break;
            case 4:
                $.each(data.data, function(key, val){
                    galleries.push([val[8], val[9]]);
                });
	    }
            
	})
	.done( function(){
	})
	.fail( function(error){
		console.error(error);
	});
	}
	
	
}

function initTop(){
    var cont = 0;
    for(var i = 0; i < pond.length; i++){
        if(pond[i][0]%100 <= 18){
            var txt = borough[Math.floor(pond[i][0]/100)] + " CB ";
            txt += pond[i][0]%100;
            var Id = "top" + cont;
            console.log(Id);
            var div = document.getElementById(Id);
            div.textContent = txt;
            cont++;
            var cont2 = 1;
            for(var j = 0; j < crimesPerDistricts.length; j++){
                if(parseInt(crimesPerDistricts[j][0]) == parseInt(pond[i][0])){
                    var Id2 = "crimeTop"+cont;
                    var div2 = document.getElementById(Id2);
                    div2.textContent = cont2;
                    break;
                }
                if(parseInt(crimesPerDistricts[j][0])%100 <= 18) cont2++;
            }
            
            
            cont2 = 1;
            for(var j = 0; j < affPerDistricts.length; j++){
                if(parseInt(affPerDistricts[j][0]) == parseInt(pond[i][0])){
                    var Id2 = "affTop"+cont;
                    var div2 = document.getElementById(Id2);
                    div2.textContent = cont2;
                    break;
                }
                if(parseInt(affPerDistricts[j][0])%100 <= 18) cont2++;
            }
            
            
            cont2 = 1;
            for(var j = 0; j < nDistricts.length; j++){
                if(parseInt(nDistricts[j][0]) == parseInt(pond[i][0])){
                    var Id2 = "disTop"+cont;
                    var div2 = document.getElementById(Id2);
                    div2.textContent = cont2;
                    break;
                }
                if(parseInt(nDistricts[j][0])%100 <= 18) cont2++;
            }
        }
        
        if(cont == 3) return;
    }
}


function getData(){
    for(var i = 0; i <= URLs.length; i++){
        getDataFromURL(i);
    }
}



function drawTable(arrayAux, txt, dv, bl) {
        if(!bl){
            var dataTable = [];
            for (var r = 0; r < 10; r++) {
                dataTable.push({BCB: borough[Math.floor(arrayAux[r][0]/100)] + " CB " + arrayAux[r][0]%100, txt: arrayAux[r][1]});
            }
        var columns = [
                    { head: 'BCB', cl: 'title', html: function(r){return r.BCB} },
                    { head: txt, cl: 'num', html: function(r){return r.txt} }
            ]
            
                var table = d3.select('#'+dv);
        
        
          // create table header
    table.append('thead').append('tr')
        .selectAll('th')
        .data(columns).enter()
        .append('th')
        .attr('class', function(r){return r.cl})
        .text(function(r){return r.head});
    // create table body
    table.append('tbody')
        .selectAll('tr')
        .data(dataTable).enter()
        .append('tr')
        .selectAll('td')
        .data(function(row, i) {
            return columns.map(function(c) {
                // compute cell values for this specific row
                var cell = {};
                d3.keys(c).forEach(function(k) {
                    cell[k] = typeof c[k] == 'function' ? c[k](row,i) : c[k];
                });
                return cell;
            });
        }).enter()
        .append('td')
        .html(function(r){return r.html})
        .attr('class', function(r){return r.cl});
        
        }
    
    
}



function toCSV(arr){
    let csvContent = "data:text/csv;charset=utf-8,";
    arr.forEach(function(rowArray){
   let row = rowArray.join(",");
   csvContent += row + "\r\n";
}); 

var encodedUri = encodeURI(csvContent);
window.open(encodedUri);

}