

function MainNavBar() {
	document.write(
		'<div class="navbar navbar-expand-lg nav-pills row" style="background-color: #e3f2fd;">' +
			'<div class="col-3">' +
				'<img src="./static/MCCWRS_LOGO.png" alt="Logo" height="60px" style="margin-left:30px">' +
			'</div>' +
			'<div class="col-9 d-flex justify-content-end" <ul style="list-style-type: none;">' +
				'<li class="nav-item">' +
					'<a class="nav-link active" aria-current="page" href="index.html">Home</a>' +
				'</li>' +
				'<li class="nav-item dropdown">' +
					'<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>' +
					'<ul class="dropdown-menu">' +
						'<li><a class="dropdown-item" href="education.html">Education</a></li>' +
						'<li><a class="dropdown-item" href="HousingUnit.html">SMWRC</a></li>' +
						'<li><a class="dropdown-item" href="HousingUnit.html">Womens Center</a></li>' +
						'<li><hr class="dropdown-divider"></li>' +
					'</ul>' +
				'</li>' +
			'</div> ' +
		'</div>');
}

function FooterNav() {
	document.write(
		'<footer class="border border-3">' +
		'	<div class="container-fluid">' +
		'		<div class="row">' +
		'			<div class="col-8">' +
		'				<h6>This site was made for the Women of MCC</h6>' +
		'				<p>It is made to share information about the classes and <br>degrees you can participate in while you serve your time.</p>' +
		'			</div>' +
		'			<div class="col-2">' +
		'				<div class="btn-group-vertical" role="group" aria-label="Vertical button group">' +
		'					<a href="index.html" ><button type="button" class="btn btn-primary btn-sm m-1">Home</button></a>' +
		'					<a href="HousingUnit.html"><button type="button" class="btn btn-primary btn-sm m-1">SMWRC</button></a>' +
		'					<a href="HousingUnit.html"><button type="button" class="btn btn-primary btn-sm m-1">Womens Center</button></a>' +
		'			    </div>' +
		'			</div>' +
		'			<div class="col-2">' +
		'				<div class="btn-group-vertical" role="group" aria-label="Vertical button group">' +
		'					<a href="education.html" ><button type="button" class="btn btn-primary btn-sm m-1">UMA</button></a>' +
		'					<a href="education.html" ><button type="button" class="btn btn-primary btn-sm m-1">WCCC</button></a>' +
		'					<a href="education.html"><button type="button" class="btn btn-primary btn-sm m-1">Facility Classes</button></a>' +
		'				</div>' +
		'			</div>' +
		'		</div>' +
		'	</div>' +
		'</footer>');

}
