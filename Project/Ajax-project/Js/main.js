$(document).ready(function(){
    $("#reset").click(function (e){
        $("#Kaupunkivalitsin").val("Valitse")
        $("#viesti").html("")
        
    });
//valitsee kaupunging nappulan avulla
$.ajax({
    type: "POSt",
    url: "http://pro.openweathermap.org/data/2.5/weather?id="+ $("#citySelect").val() + "&appid=f6c2716e92fa61a4a94481d15d56dc9d&units=metric", 
    success: function(){

    });
}
error: function(){
    alert("error loading data")
}
});
}