jQuery(document).ready(function(){
	
	jQuery('#sidebar_gallery_sub_ul.open li').mouseenter(function(){
		jQuery('.sidebar_gallery_ul li').removeClass('hover');
	});
	jQuery('.sidebar_gallery_ul li').mouseenter(function(){
		jQuery(this).addClass('hover');
	});
	jQuery('.sidebar_gallery_ul li').mouseleave(function(){
		jQuery(this).removeClass('hover');
	});
	
	
	
	jQuery('.down_details .links a').first().css('margin-left', '0px'); 
	jQuery('#page-text p').last().css('margin-bottom', '0px');
	
	jQuery('#Direct_to option:first-child').attr("selected", "selected");
	var sub_menu_parent = jQuery("#pageHeader ul.menu .sub-menu").parent().attr("id") ;
	
	jQuery('#' + sub_menu_parent+ ' a').css({"cursor":"text"});
	jQuery('#pageHeader ul.menu .sub-menu a').css({"cursor":"pointer"});
	jQuery('#home_img img').attr('title',''); 
	
    jQuery("#pageHeader ul.menu").children().wrapInner('<div class="span_li"></div>');
	
	jQuery('#buttonsend1').click( function() {
		var jsonMessages = validateMessages();
		var messageObj = jQuery.parseJSON(jsonMessages);
				
	    var name    = jQuery('#name').val();
	    var email   = jQuery('#email').val();
		var message = jQuery('#message').val();
		//var siteurl = jQuery('#siteurl').val();
		var phone = jQuery('#phone').val();
		//var sendto = jQuery("#Direct_to option:selected").val();
		
		var emailFilter = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;
		var isemail = emailFilter.test(email);
		if(phone != "Phone:" && phone != ""){
		var phoneFilter=/^\d+$/;
		var isphone = phoneFilter.test(phone);
		}
		else{
		var isphone =true;
		}
		jQuery('.loading').fadeIn('fast');
		
		if (name != ""  && email != "" && message != "" && isemail && isphone && name != "Name:" &&  email != "Email:" && message != "Message:" )
			{
			    return true;
			} 
		else 
			{
				if( name == "" || name == messageObj.name){
					jQuery('#name').next('.error').text(messageObj.bn);  
					//jQuery('#name').css({"border":"1px solid #FF0000"});
				}
				if(email == "" || email == messageObj.email){
					jQuery('#email').next('.error').text(messageObj.be);  
					//jQuery('#email').css({"border":"1px solid #FF0000"});
				}else if(!isemail) {
					jQuery('#email').next('.error').text('Please enter valid email');  
					//jQuery('#email').css({"border":"1px solid #FF0000"});
				}
				if(message == "" || message == messageObj.message){
					jQuery('#message').next('.errormessage').text('Please enter message');  
					//jQuery('#message').css({"border":"1px solid #FF0000"});
				}
				if(!isphone){
					jQuery('#phone').next('.error').text('Please enter valid phone');  
					//jQuery('#phone').css({"border":"1px solid #FF0000"});
				}
				
				return false;
			}
	});

	jQuery('#name, #phone, #email,#message').focus(function(){
		//jQuery(this).css({"border":"1px solid #000000"});
		jQuery(this).next(".error").text('');
		jQuery(this).next(".errormessage").text('');
	});   
	
	
	
	jQuery('#menu-top-nav .sub-menu li:first').css({"border-top": "4px solid #000000"});
	jQuery('#menu-top-nav .sub-menu li:last').css({"border-bottom": "4px solid #000000"});
	
	jQuery('#menu-top-nav .sub-menu li:last a').css({"border-bottom": "none"});
	
	calc_gallery_margin();
	calc_gallery_sidbar_height();
	calc_footer_last_width();
	
});		
function calc_gallery_sidbar_height(){
	var gallery_content_height = jQuery('#page_gallery_content').height();
	jQuery('.gallery_sidebar').css({"height":gallery_content_height+"px"});
}

function calc_gallery_margin(){
	//var full_width = jQuery('#centertop-page').width();
	//jQuery('#gallery_content').css({"margin-left":((full_width - 920)/2)+"px"});
}

function calc_footer_last_width(){
	//dynamic calculation: the width of the last footer_items
	var footer_width = 0;
	
	//set the last element width to 0px;
	jQuery('.footer-menu .footer_items:last').css({"width":"0px","margin-right":"0px"});
	
	//get the width of all other footer_items except of the last one (its width is 0px)
	jQuery('.footer-menu .footer_items').each(function() {
	footer_width = footer_width + jQuery(this).width()+parseInt(jQuery(this).css("margin-right"));
	});
	
	//set the new width
	jQuery('.footer-menu .footer_items:last').css({"width":(920-footer_width)+"px"});
}
