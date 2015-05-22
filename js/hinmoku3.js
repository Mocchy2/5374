	var arr =[1, 2, 3];
	
	var s = "<select>";
	for(var i in arr) {
	            s += "<option>" + arr[i];
	}

	s += "</select>";
	document.getElementById("hinmoku3").innerHTML = s;
//	document.write(s); でも同じ結果が得られる。
