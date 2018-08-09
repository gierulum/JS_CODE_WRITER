var num_symbol = 0;
var get_timer = document.getElementById("timer");
var txt_p = document.getElementById("gen_txt");
var text_positions = "1var1 4project4 = {@$^1title1^: ^2Software House2^,@$^1name1^: ^3Code Generator3^,@$^1owner1^: ^4gierulum4^,@$^1idea1^: [^5Asper Brothers5^, ^5https://asperbrothers.com5^],@$^1who1^: [^8Name_Surname8^, ^8Name_Surname8^]@$}";
var txt_length = text_positions.length;
var color_handler = 0;
var color_palete = ['#FF9C33','#337DFF','#B533FF','#FF33E3','#FF3333','#FF9933','#FFFF33','#99FF33', '#33FF33', '#33FF99'];
var font_color;

function SetTime(){
    setInterval(function(){ 

		var symbol = text_positions.substr(num_symbol, 1);

		    if (symbol >= 1 && symbol <= 9){
				if (color_handler === 0){
					color_handler = symbol; 
					
				} 
				else 
				{
					color_handler = 0;	
				}
			}
		
		
			if (symbol === "@"){
				txt_p.innerHTML = txt_p.innerHTML + "<br /> ";
			}
			else if (symbol >= 1 && symbol <= 9){
				
				}
			else if (symbol === "$") {
					txt_p.innerHTML = txt_p.innerHTML + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
				
			} else if (color_handler > 0) {
			font_color = color_palete[color_handler];
				
				
//		else {
					txt_p.innerHTML = txt_p.innerHTML +	"<span style='white-space: pre-line; color: " + font_color+ ";'>" + symbol + "</span>";
//
			}			
			else if (symbol === "^"){
				txt_p.innerHTML = txt_p.innerHTML + '"';				
			}

			else 
			{
				txt_p.innerHTML = txt_p.innerHTML + symbol;	
			}
		num_symbol = num_symbol+1;
		}, 50);
}

function txt(num_symbol){


for (var x = 0; x <= txt_length; x++){
var y = 1;
var symbol = text_positions.substr(x, y);


	if (symbol === "@"){
		txt_p.innerHTML = txt_p.innerHTML + "<br /> ";

	}
	else {
		txt_p.innerHTML = txt_p.innerHTML + symbol;	
	}
}
	num_symbol = num_symbol+1;
}


SetTime();


