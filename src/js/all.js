init_base();


inView.offset(150);


$(document).ready(() => {

  console.log(ChungTool.getUrlParameter('info')==='2');

  if (ChungTool.getUrlParameter('info') === '2') {
    $('#index-t1').addClass('hide');
    $('#index-t2').removeClass('hide');
  }

  init_index();
  init_simple_ani();
  init_motus_animation();

});


function init_simple_ani() {
  inView('.tempHide')
    .on('enter', (el) => {
      $(el).addClass('show');
    })
  // .on('exit', (el) => {
  //   $(el).removeClass('show');
  // })
}

function init_motus_animation(){
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