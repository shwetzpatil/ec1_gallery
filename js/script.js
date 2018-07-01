(function($) {
  $("#search-button").on("click", function(e) {
    e.preventDefault();
    if ($("#app-header .search-container").hasClass("hdn")) {
      //don't search
      $("#app-header .search-container").removeClass("hdn");
      return false;
    } else {
      // do search logic
      var inputVal = $("#app-header .search-container input").val();
      console.log("Term to search: " + inputVal);
    }
    return false;
  });
  //collapse search bar when input loses focus
  $("#app-header .search-container .cross-button").on("click", function(e) {
    e.preventDefault();
    if (!$("#app-header .search-container").hasClass("hdn")) {
      $("#app-header .search-container").addClass("hdn");
      $("#app-header .search-container input").val(""); //set value to empty string
    }
  });
})(jQuery);

function showEvent(parentEl) {
  var eventList = events;
  console.log(eventList.length);
  for (var i = 0; i < eventList.length; i++) {
    var eventListHtml =
      '<div class="col-md-4 col-sm-12">\
      <div class="event-img">\
        <img src="imgs/' +
      eventList[i]["img"] +
      '" class="d-block w-100">\
      </div>\
      <div class="event-title font-weight-bold">\
        <a href="#"><h5>' +
      eventList[i]["title"] +
      '</h5></a>\
      </div>\
      <div class="event-date">' +
      eventList[i]["time"] +
      '</div>\
      <div class="event-details text-justify">' +
      eventList[i]["details"] +
      "\
      </div>\
    </div>";
    $(parentEl).append(eventListHtml);
  }
}
showEvent(".event-list");

function showArtistList(parentEl) {
  var artistNameList = artists["nameList"];
  // console.log(artistNameList.length);
  var artistHtml = "";
  var artistNameEl = "";
  for (var i = 0; i < artistNameList.length; i++) {
    artistHtml =
      "<div class='artistName col-md-4 col-sm-12'><a href='#'>" +
      artistNameList[i] +
      "</a></div>";
    artistNameEl = artistNameEl + artistHtml;
    // console.log(artistNameEl);
  }
  var artistList =
    '<div class="container">\
  <div class="d-flex justify-content-between section-title">\
    <h5 class="font-weight-bold">Artists</h5>\
    <a href="#">View all</a>\
  </div>\
  <div class="row">\ ' +
    artistNameEl +
    " \
  </div>\
</div>";

  $(parentEl).append(artistList);
}
showArtistList("#artists");
