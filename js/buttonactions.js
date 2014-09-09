$(document).ready(function() {
    $("#submit_btn").click(function() { 
        //get input field values
	
        var username       = $('#upload_name').val(); 
        var useremail      = $('#upload_email').val();
		var filename      = $('#filename').val();
		var filetype      = $('#filetype').val();
		var base64textarea      = $('#base64textarea').val();
		var attach_file     = $('input[name=file_attach]')[0].files[0];
       
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if(username==""){ 
            $('#upload_name').css('border-color','red'); 
            proceed = false;
        }
        if(useremail==""){ 
            $('#upload_email').css('border-color','red'); 
            proceed = false;
        }
       

        //everything looks good! proceed...
        if(proceed) 
        {
		//	$(".loading-img").show(); //show loading image
		//	$(".submit_btn").hide(); //hide submit button
			
			//data to be sent to server			
			var post_data = new FormData();    
			post_data.append( 'filename', filename );
			post_data.append( 'filetype', filetype );
			post_data.append( 'username', username );
			post_data.append( 'useremail', useremail );
			post_data.append( 'base64textarea', base64textarea );
			post_data.append( 'file_attach', attach_file );
			
			//instead of $.post() we are using $.ajax()
			//that's because $.ajax() has more options and can be used more flexibly.
			$.ajax({
			  url: 'uploadresume.php',
			  data: post_data,
			  processData: false,
			  contentType: false,
			  type: 'POST',
			  dataType:'json',
			  success: function(data){
					//load json data from server and output message     
					
						  $('#quote_success').show();
						
						//reset values in all input fields
					
					
					
					//$("#result").hide().html(output).slideDown(); //show results from server
					 //show submit button
			  },
			  error:function(data) {
			    $('#quote_success').show();
			  },
			});

        }
    });
	 $("#submit_btn2").click(function() { 
        //get input field values
	
        var contact_name       = $('#contact_name').val(); 
        var contact_message      = $('#contact_message').val();
		var contact_email      = $('#contact_email').val();
		
       
        
        var proceed = true;
        if(contact_name==""){ 
            $('#contact_name').css('border-color','red'); 
            proceed = false;
        }
        if(contact_email==""){ 
            $('#contact_email').css('border-color','red'); 
            proceed = false;
        }
		if(contact_message==""){ 
            $('#contact_message').css('border-color','red'); 
            proceed = false;
        }
       

        //everything looks good! proceed...
        if(proceed) 
        {
	
			var post_data = new FormData();    
			post_data.append( 'contact_name', contact_name );
			post_data.append( 'contact_email', contact_email );
			post_data.append( 'contact_message', contact_message );
			
			
			$.ajax({
			  url: 'contactform.php',
			  data: post_data,
			  processData: false,
			  contentType: false,
			  type: 'POST',
			  dataType:'json',
			  success: function(data){
					//load json data from server and output message     
					
						$('#contactsuccess').show();
						
						//reset values in all input fields
					
					
					
					//$("#result").hide().html(output).slideDown(); //show results from server
					 //show submit button
			  },
			  error:function(data)
			  {
			  $('#contactsuccess').show();
			  },
			});

        }
    });

	
    
   
    var handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        document.getElementById("filename").value = file.name;
        document.getElementById("filetype").value = file.type;
        if (files && file) {
            var reader = new FileReader();

            reader.onload = function (readerEvt) {
                var binaryString = readerEvt.target.result;
                document.getElementById("base64textarea").value = btoa(binaryString);
            };

            reader.readAsBinaryString(file);
        }
    };

    if (window.File && window.FileReader && window.FileList && window.Blob) {
        document.getElementById('file_attach').addEventListener('change', handleFileSelect, false);
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
   
});