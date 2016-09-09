$(function () {

	var li,
		iframe,
		ul = document.getElementById('frames');

	li = document.createElement('LI');

	iframe = document.createElement('IFRAME');
	iframe.src = "frame1.html";
	iframe.setAttribute('frameborder', 0);
	iframe.setAttribute("scolling", "no");
	iframe.id = "frame1";

	$(iframe).on('load', function () {

		$('li', document.getElementById('mainDraggables')).draggable({
			connectToSortable: $(this).contents().find('ul').sortable({
				revert: true,
				iframefix: true,
	            cancel: '',
	            helper: 'clone',
	            placeholder: "drop-hover",
	            over: function (event, ui) {
	            	console.log(ui);
	            }
			}),
			helper: "clone",
	        revert: "invalid",
	        iframefix: true,
	        appendTo: document.body
		});

	});

	li.appendChild(iframe);
	ul.appendChild(li);

});