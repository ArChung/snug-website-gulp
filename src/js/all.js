


init_base();


inView.offset(150);


$(document).ready(() => {



  console.log(ChungTool.getUrlParameter('info') === '2');

  if (ChungTool.getUrlParameter('info') === '2') {
    $('#index-t1').addClass('hide');
    $('#index-t2').removeClass('hide');
  }

  init_index();
  init_simple_ani();
  init_motus_animation();


  initModal();
  initPages();

  $(".storeBtn").click(()=>{
    ChungTool.pageScrollAni($('.store').offset().top)
  })
});

function initPages() {
  setInterval(() => {
    const _h = $(window).height();
    let activeId = 0;
    $('section').each((index, el) => {
      const offest = ($(el).offset().top - $(document).scrollTop() - _h + 200);
      if (offest < 0) {
        activeId = index;
      }
    })
    checkSideBar(activeId);
    checkScrollBtn(activeId);
    checkBuyBtn(activeId);
  }, 200);

  function checkSideBar(id) {
    $('#sideContainer').find('li').eq(id).addClass('active').siblings('li').removeClass('active');
  }

  function checkScrollBtn(id) {
    if (id > 0) {
      $("#scrollBtn").removeClass('show');
    } else {
      $("#scrollBtn").addClass('show');
    }
  }

  function checkBuyBtn(id) {
    if (id >= 6) {
      $("#chatBtn").removeClass('show');
    } else {
      $("#chatBtn").addClass('show');
    }
  }
}

function initModal() {
  const md = $("#modal")
  $('.popBtn').click(function () {
    const id = $(this).attr('data-pop');

    md.find('img').attr('src', "");
    md.find('img').attr('src', `./img/images/prof_${id}.jpg`)

    md.removeClass('hide');
  });

  md.find('.bg').click(function(){
    md.addClass('hide');
  });

  md.find('.clozBtn').click(function(){
    md.addClass('hide');
  });

}


function init_simple_ani() {
  inView('.tempHide')
    .on('enter', (el) => {
      $(el).addClass('show');
    })
  // .on('exit', (el) => {
  //   $(el).removeClass('show');
  // })
}

function init_motus_animation() {
  Motus.addAnimation(new Motus.Animation({
    $el: $('.p2')[0],
    keyframes: [{
        backgroundPositionY: 100
      },
      {
        backgroundPositionY: 0
      }
    ],
  }));



}