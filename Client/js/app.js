function enginelocation() {
    var url = "http://127.0.0.1:5000/engine_locations"; // Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
    $.get(url,function(data, status) {
        console.log("got response for engine_locations request");
        if(data) {
            var locations = data.engine_locations;
            var uiLocations = document.getElementById("uilocation");
            $('#uilocation').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uilocation').append(opt);
            }
        }
    });
    var url1 = "http://127.0.0.1:5000/fuel_type";
    $.get(url1,function(data, status) {
        if(data) {
            var locations = data.fuel_type;
            var uiLocations = document.getElementById("fuel_type");
            $('#fuel_type').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#fuel_type').append(opt);
            }
        }
    });
    var url2 = "http://127.0.0.1:5000/odometer";
    $.get(url2,function(data, status) {
        if(data) {
            var locations = data.odometer;
            var uiLocations = document.getElementById("odometer");
            $('#odometer').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#odometer').append(opt);
            }
        }
    });
    var url3 = "http://127.0.0.1:5000/speedometer";
    $.get(url3,function(data, status) {
        if(data) {
            var locations = data.speedometer;
            var uiLocations = document.getElementById("speedometer");
            $('#speedometer').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#speedometer').append(opt);
            }
        }
    });
    var url4 = "http://127.0.0.1:5000/seats_material";
    $.get(url4,function(data, status) {
        if(data) {
            var locations = data.seats_material;
            var uiLocations = document.getElementById("seats_material");
            $('#seats_material').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#seats_material').append(opt);
            }
        }
    });
    var url5 = "http://127.0.0.1:5000/audiosystem";
    $.get(url5,function(data, status) {
        if(data) {
            var locations = data.audiosystem;
            var uiLocations = document.getElementById("audiosystem");
            $('#audiosystem').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#audiosystem').append(opt);
            }
        }
    });
  } 
 
  
  window.onload = enginelocation;

