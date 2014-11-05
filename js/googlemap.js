var geocoder = new google.maps.Geocoder(); //住所から緯度経度を算出
		geocoder.geocode({
			'address': '千葉県柏市'
		},function(result, status){
			if(status == google.maps.GeocoderStatus.OK){
				var latlng = result[0].geometry.location;
				var options = {
						zoom: 15, //地図のズームレベル
						center: latlng, //地図の中心の緯度経度
						mapTypeId: google.maps.MapTypeId.ROADMAP //地図の種類（ここでは通常の地図）
				};
				var map = new google.maps.Map(document.getElementById('map'),options); //地図を作製する

				google.maps.event.addListener(map, 'click', function(event){
					var marker = new google.maps.Marker({
						position: event.latLng,
						map: map
					});

					geocoder.geocode({
						'latLng': map.getCenter()
					}, function(result, status){
						if(status == google.maps.GeocoderStatus.OK){
							var infoWindow = new google.maps.InfoWindow({
								content: result[0].formatted_address
							});
							infoWindow.open(map, marker);
						} else {
							alert("エラー！");
						}
					});
				});


			} else {
				alert('エラーです！');
			}
		});