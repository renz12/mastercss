  var profileId 	 = &#39;116422610960600578580&#39;;
    //<![CDATA[
	var key      	 = 'AIzaSyC7xq21tQtlDkjFxuZkgkupsZlKVcWkGK0';
	var getprofileId = 'https://www.googleapis.com/plus/v1/people/'+profileId+'?key='+key;
    $(window).on('load', function() {
	  $.ajax({
  	    url: getprofileId,
  	    type: 'get',
  	    dataType: 'json',
  	    success: function(data) {
          var displayName = data.displayName;
          var url	        = data.url;
          var image	    = data.image.url.replace('?sz=50','');
    	  var gpluscount  = data.circledByCount;
          $('.author_name').html(displayName);
    	  $('.gplus-count').html(gpluscount);
          $('#gbii,#gbip').attr('src',(image)).attr('alt',(displayName));
          $('.gb_Be,.profile_url').attr('href',(url)).attr('title',(displayName));
  	    }
	  })
    })