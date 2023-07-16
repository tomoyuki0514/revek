// ドロワーメニュー
jQuery( function( $ ) {
	$( '.drawer' ).drawer();
});

// スライダー設定
// フェードエフェクト
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
	effect: "fade", //フェードのエフェクト
	speed:2000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// To-Top ボタン表示
jQuery(window).on('scroll', function ($) {
	if (100 < jQuery(this).scrollTop()) {
		jQuery('.to-top').show();
	} else {
		jQuery('.to-top').hide();
	}
});

// drawer ボタン表示
// jQuery(window).on('scroll', function ($) {
// 	if (500 < jQuery(this).scrollTop()) {
// 		jQuery('.drawer-hamburger').show();
// 	} else {
// 		jQuery('.drawer-hamburger').hide();
// 	}
// });


/* SmoothScroll */
jQuery('a[href^="#"]').click(function () {
	var header = 0; // jQuery( '#header' ).height();
	var speed = 300;
	var id = jQuery(this).attr('href');
	var target = jQuery('#' == id ? 'html' : id);
	var position = jQuery(target).offset().top - header;
	if (0 > position) {
		position = 0;
	}
	jQuery('html, body').animate(
		{
			scrollTop: position
		},
		speed
	);
	return false;
});

// 「highlight.js」の設定（初期化）
hljs.initHighlightingOnLoad();　

// 任意の要素をハイライトする
var elms = document.getElementsByClassName( 'code' ) ;
for( var i=0 , l=elms.length ; l>i ; i++ ) {
	hljs.highlightBlock( elms[i] ) ;
}

// タブの文字数を調整する
hljs.configure({
	tabReplace: '  ' // 2文字分のスペースを入力
});

