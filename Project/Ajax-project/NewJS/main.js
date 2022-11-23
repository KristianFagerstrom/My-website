$(window).ready(function () {
  $("#reset").click(function (e) {
    $("#kaupunkivalitsin").val("valitse")
    $("#viesti").html("")
  });
  
  //valitsee kaupunging nappulan avulla
  $("#submit").click(function () {
    var validate = validate();
    $("#viesti").html(validate);
    if (validate.length == 0) {
      $.ajax({
        type: "POST",
        url:
          "http://api.openweathermap.org/data/2.5/weather?id=" +
          $("#kaupunkivalitsin").val() +
          "&appid=f6c2716e92fa61a4a94481d15d56dc9d&units=metric",
        dataType: "json",
        success: function (result, status, xhr) {
          var table = $("<table><tr><th>Sää tiedot</th></tr></table>");
          table.append(
            "<tr><td>City:</td><td>" + result["name"] + "</td></tr>"
          );
          table.append(
            "<tr><td>Country:</td><td>" +
              result["sys"]["country"] +
              "</td></tr>"
          );
          table.append(
            "<tr><td>Current Temperature:</td><td>" +
              result["main"]["temp"] +
              "°C</td></tr>"
          );
          table.append(
            "<tr><td>Humidity:</td><td>" +
              result["main"]["humidity"] +
              "</td></tr>"
          );
          table.append(
            "<tr><td>Weather:</td><td>" +
              result["weather"][0]["description"] +
              "</td></tr>"
          );
          $("#viesti").html(table);
        },
        error: function (xhr, status, error) {
          alert(
            "Result:  " +
              status +
              "" +
              error +
              " " +
              xhr.status +
              "" +
              xhr.statustext
          );
        },
      });
    }
  });
  $(document).ajaxStart(function () {
    $("img").show();
  });
  $(document).ajaxStop(function () {
    $("img").hide();
  });
  function validate() {
    var errorMessage = "";
    if ($("#kaupunkivalitsin").val() == "Select") {
      errorMessage += "► Select City";
    }
    return errorMessage;
  }
});