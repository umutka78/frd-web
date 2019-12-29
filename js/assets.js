$(document).ready( function () {
	var pTable = $('#dataTablePersonel').DataTable({
		responsive: {
			details: {
				renderer: function ( api, rowIdx, columns ) {
					var data = $.map( columns, function ( col, i ) {
						return col.hidden ?
							'<tr data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
							'<td>'+col.title+':'+'</td> '+
							'<td>'+col.data+'</td>'+
							'</tr>' :
							'';
					} ).join('');

					return data ?
						$('<table/>').append( data ) :
						false;
				},
				type: 'none',
				target: 'tr'
			}
		},
		"language": {
			"paginate": {
				"previous": "Önceki",
				"next": "Sonraki"
			}
		},
		"columnDefs": [
		  { "width": "25px", "targets": 0 },
		  { "width": "25px", "targets": 4 },
		  { "width": "25px", "targets": 5 },
		  { "width": "25px", "targets": 6 },
		  { "width": "25px", "targets": 7 },
		  { "width": "25px", "targets": 8 },
		]
	});
	
	var yTable = $('#dataTableYonetici').DataTable({
		responsive: {
			details: {
				renderer: function ( api, rowIdx, columns ) {
					var data = $.map( columns, function ( col, i ) {
						return col.hidden ?
							'<tr data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
							'<td>'+col.title+':'+'</td> '+
							'<td>'+col.data+'</td>'+
							'</tr>' :
							'';
					} ).join('');

					return data ?
						$('<table/>').append( data ) :
						false;
				},
				type: 'column',
				target: 'tr'
			}
		},
		"language": {
			"paginate": {
				"previous": "Önceki",
				"next": "Sonraki"
			}
		},
		"columnDefs": [
		  { "width": "25px", "targets": 0 },
		  { "width": "80px", "targets": 8 },
		],
	});

	$('#tableSearch').keyup(function(){
		pTable.search($(this).val()).draw();
		yTable.search($(this).val()).draw();
	});

	$('.videolar').slick({
		dots: true,
		infinite: false,
		arrows: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$(".select-selected").on('change', function() {
		alert('changed');
	});

	$('.topGraphicArea').slick({
		dots: true,
		infinite: false,
		arrows: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

});

function showGrup(i) {

	if ($('.grupEgitim_' + i).css('display') == 'none') {
		$('.grupEgitim_' + i).show(100);
	} else {
		$('.grupEgitim_' + i).hide(100);
	}
}

count = 1;
$('.menu-toggle').click(function(){
	$('.mobilMenu').toggleClass('show');
	if(count%2 === 0){
		$('body').css("overflow","visible");
	}else{
		$('body').css("overflow","hidden");
	}
	count += 1;
});

function showMobilMenu(i){
	if($('#minus_mobilnav'+i).css('display')=='none'){
		$("#duyuru_baslik_"+i).css("color","#2d96cd");
		$('#minus_mobilnav'+i).show();
		$('#plus_mobilnav'+i).hide();
		$('#table_mobilnav'+i).show(100);
	}else{
		$("#duyuru_baslik_"+i).css("color","#ffffff");
		$('#minus_mobilnav'+i).hide();
		$('#plus_mobilnav'+i).show();
		$('#table_mobilnav'+i).hide(100);
	}
}

function ShowTimes(i) {
	var startDate = document.getElementById("startDate_"+i).getAttribute("data-countdown");
	var parts =startDate.split('.');
	var mydate = new Date(parts[2], parts[1] - 1, parts[0]);
	var diff = Math.abs(new Date() - mydate);
	var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((diff % (1000 * 60)) / 1000);
	if(new Date() >= mydate){
		document.getElementById("countdown_"+i).innerHTML = "<span class=\"icon-icon-play\"></span>";
	}else{
		document.getElementById("countdown_"+i).innerHTML = hours+'<sup>SA</sup>'+minutes+'<sup>DK</sup><br/>'+seconds+'<sup>SN</sup>';
	}
}

$("g[aria-labelledby]").hide();