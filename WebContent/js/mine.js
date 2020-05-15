//要素揃える
$(document).ready(function() {
  $(".columns").equalHeights(100,300);
});


//フェードイン
$(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });


//スライダー
(function($){
	$(window).on('load',function(){
		//
		var $slide5 = $('.bxslider5');
		var $slide5_ul = $slide5.find('ul');
		var $slide5_photo = $slide5.find('.bxslier5_photo');

		$slide5_ul.children('li').each(function(i,elem){
			$(this).attr('data-num',i);
			var $img = $(this).find('img');
			var $anc = $(this).children('a[href]');
			if($anc.size()){
				$img.attr('data-href',$anc.attr('href'));
				if($anc.attr('target')){
					$img.attr('data-target',$anc.attr('target'));
				}
			}
		});

		var wrapImg = function($img){
			if($img.attr('data-href')){
				$slide5_photo.find('img').wrap('<a href="' + $img.attr('data-href') + ' "></a>');
				if($img.attr('data-target')){
					$slide5_photo.find('a').attr('target',$img.attr('data-target'));
				}
			} else {
				$slide5_photo.find('a img').unwrap();
			}
		}
		var $img_first = $slide5_ul.find('li:first-child img');
		var $img = $('<img />').attr('src',$img_first.attr('data-photo'));
		wrapImg($img_first);

		var slide5 = $slide5_ul.bxSlider({
				easing: 'easeOutExpo',
				speed: 500,
				pager: false,
				minSlides: 5,
				maxSlides: 5,
				moveSlides: 1,
				slideWidth: 200,
				onSliderLoad: function(cr){
					$img.appendTo($slide5_photo);
					var $photo_l = $slide5_photo.find('img');
					$photo_l.fadeIn(500);
					$slide5_ul.children('li[data-num="' + cr + '"]').addClass('active');
					$slide5_ul.animate({
						opacity: 1
					},500);
				},
				onSlideBefore: function(){
					$slide5_ul.children('li').removeClass('active').animate({
						opacity: 0.5
					},500);
					$slide5_photo.find('img').animate({
						opacity: 0
					},250);
				},
				onSlideAfter: function($slideElement, oldIndex, newIndex){
					var $current = $slide5.find('.bx-viewport > ul > li[data-num="' + newIndex + '"]:not(.bx-clone)');
					var $photo_l = $slide5_photo.find('img');
					console.log($current.find('img'));
					$photo_l.attr('src',$current.find('img').attr('data-photo')).animate({
						opacity: 1
					},250).promise().done(function(){
						wrapImg($current.find('img'));
					});
					$current.addClass('active').animate({
						opacity: 1
					},500);
				}
			});
			$slide5_ul.find('li').on('click',function(){
				slide5.goToSlide(parseInt($(this).attr('data-num')));
			}).on('mouseenter',function(){
				$(this).stop(true,true).animate({
					opacity: 1
				},500);
			}).on('mouseleave',function(){
				if(!$(this).is('.active')){
					$(this).stop(true,true).animate({
						opacity: 0.5
					},500);
				}
			});
			$slide5_ul.find('li a').on('click',function(e){
				e.preventDefault();
			});
	});
})(jQuery);



//スライダー
$(function(){
	$("img.slider").click(function(){
		var ImgSrc = $(this).attr("src");
		var ImgAlt = $(this).attr("alt");
		$("img#MainPhoto").attr({src:ImgSrc,alt:ImgAlt});
		$("img#MainPhoto").hide();
		$("img#MainPhoto").fadeIn("slow");
		return false;
	});
});


//スライダー２(スリック)
$('.slider2').slick({
    arrows:false,
    asNavFor:'.thumb2',
});
$('.thumb2').slick({
    asNavFor:'.slider2',
    focusOnSelect: false,
    slidesToShow:4,
    slidesToScroll:1
});

//ローディング
window.onload = function() {
  const spinner = document.getElementById('loading');

  // Add .loaded to .loading
  spinner.classList.add('loaded');
}




//雲が動く
$(function() {
    var bg1 = $('#kumo-img');
    var speed = 3000;
    cloudMove();
    setInterval(cloudMove, 6000);
    function cloudMove(){
        bg1
            .animate({backgroundPosition:'200px'}, speed)
            .animate({backgroundPosition:'100'}, speed);

    }
});

//上下に動く
$(function(){
	$("#test-box").click(function(){     //クリックを検出するリスナー
	$("#test-box").animate({top:"500px"}, 300);     //500px下に移動
	$("#test-box").animate({top:"0px"}, 300);     //500px上に移動
	});
});

//メニューバー
$(function () {
	  $(window).scroll(function () {
	    if ($(this).scrollTop() >100) {
	      $('#menu').addClass('fixed');
	    } else {
	      $('#menu').removeClass('fixed');
	    }
	  });
	});

//★ページトップ★
//■page topボタン
$(function(){
var topBtn=$('#pageTop');
topBtn.hide();

//◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>800){
    //---- 画面を800pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn();

  }else{
    //---- 画面が80pxより上なら、ボタンを表示しない
    topBtn.fadeOut();
  }
});


// ◇ボタンをクリックしたら、スクロールして上に戻る
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;

});

});

//ゆらゆら
$pageButton.find('#pageTop').yurayura({
    'move': 5,
    'duration' : 500
});

//文字を一文字ずつ表示
$(function() {
    var $allMsg = $('#title');
    var $wordList = $('#title').html().split("");
    $('#title').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 70);
        newEL.animate({ opacity: 1 }, 5500);
    });
});

//マウスオーバーで画像切替
$(function() {

	  //マウスを乗せたら発動
	  $("#iro").hover(function() {

	    //マウスを乗せたら色が変わる
	    $(this).css('background', '#c00');

	  });
	});

//

$(document).ready(function(){
	$("#pageToP").hover(function(){
		$("#pageTop img")
		.animate({top:"-10px"}, 200).animate({top:"-4px"}, 200) // first jump
		.animate({top:"-7px"}, 100).animate({top:"-4px"}, 100) // second jump
		.animate({top:"-6px"}, 100).animate({top:"-4px"}, 100); // the last jump
	});
});

//クリックでふきだし表示

function showBalloon(){
var wObjballoon	= document.getElementById("makeImg");
if (wObjballoon.className == "balloon1"){
wObjballoon.className = "balloon";
}else{
wObjballoon.className = "balloon1";
}
}


//点滅
$(function(){
$(".mouseover-text-animation-nav3 a").hover(function() {
$(this).stop()
.fadeTo(200,0)
.fadeTo(200,1)
.fadeTo(200,0)
.fadeTo(200,1)
.fadeTo(200,0)
.fadeTo(200,1)
},
function(){
$(this).stop(true, false)
.fadeTo(200,1)
});
});


//スライダー
jQuery('#mainSlide').slick({//スライダー画像
    fade: true,
    arrows:false,
    responsive:true,
    asNavFor: '#firstNav'//サムネイル部分の要素を記述
  });
jQuery('#firstNav').slick({//サムネイル画像
    dots: false,
    arrows:false,
    slidesToShow: 6,
    focusOnSelect: true,
    asNavFor: '#mainSlide',//スライダー部分の要素を記述
  });
