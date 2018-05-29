var url = "http://api.wps-inc.com/taxonomyterms/196/items?include=images";
pages = []
n = 0;
var count1 = 0;
var count2 = 0;

var success = function(item_array) {
  count1 = 0;
  count2 = 0;
  $.each(item_array, function(index, item_array) {
    var objects = item_array.length;
    for (var i = 0; i < objects; i++) {
      var items = item_array[i].images;
      if (items.data.length > 0) {
        var img_url = "http://cdn.wpsstatic.com/images/500_max/" + items.data[0].filename;
        console.log(item_array[i].sku, img_url);
      }
    }
  })
  for (x=0;x<3000; x++){console.log("hi");}
  cursor_next = item_array.meta.cursor.next;
  pages.push(cursor_next)
  console.log(pages)
  console.log(cursor_next);
}

function get() {
  return $.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: success,
    beforeSend: function(xhr, settings) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + 'dC3JTLrTdywkE1lNdZ2S0b9UIoKSy7gr6dAKQfrn');
      console.log("HI BRANDON");
    }
  })
}
get()
  .then(function() {
    //for (x = 0; x < 10000; x++) {
      console.log(pages[n]);
      //if (pages[n] != pages[n-1] && n != 0) {
      next_url = "http://api.wps-inc.com/taxonomyterms/196/items?include=images&page[cursor]=" + pages[n];
      //if (count1 != 1){
        count1++;
        get(url = next_url)
        console.log("HI TOMMY");
    //  }


    /*} else if (n == 0) {
      next_url = "http://api.wps-inc.com/taxonomyterms/196/items?include=images&page[cursor]=" + pages[n];
    //  if (count2 != 1){
        count2++;
        get(url = next_url)
        console.log("fuck you");
    //  }
    }
    */

  //  }
  })
