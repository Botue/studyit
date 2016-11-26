	// 折叠效果
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 选中状态
	$('.navs a').each(function () {
		var _this = $(this),
			pathname = location.pathname,
			href = _this.attr('href').slice(1);

		if(pathname.lastIndexOf(href) == 1) {

			_this.addClass('active');
			_this.closest('ul').show();

			return false;
		}
	});

	// Ajax进度条
	$(document).ajaxStart(function () {
		NProgress.start();
	}).ajaxStop(function () {
		NProgress.done();
	});