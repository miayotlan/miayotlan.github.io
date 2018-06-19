// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');








// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function(page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function() {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent('<!-- Top Navbar-->' + '<div class="navbar">' + '  <div class="navbar-inner">' + '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' + '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' + '  </div>' + '</div>' + '<div class="pages">' + '  <!-- Page, data-page contains page name-->' + '  <div data-page="dynamic-pages" class="page">' + '    <!-- Scrollable page content-->' + '    <div class="page-content">' + '      <div class="content-block">' + '        <div class="content-block-inner">' + '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' + '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' + '        </div>' + '      </div>' + '    </div>' + '  </div>' + '</div>');
    return;
}



var myApp = new Framework7();

var $$ = Dom7;

$$('.create-popup').on('click', function() {
    var popupHTML = '<div class="popup">' + '<div class="content-block">' + '<p>Anuncia tu Evento Aqui.</p>' + '<img src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/20785769_1079954365475458_318883350891752683_o.jpg?oh=1690a62b02161e7b0a8bb1a971d4fc9e&oe=5A2DDE6F" height="550" width="100%" alt="Gran Bailazo de dia de Campo 2017">' + '<p><a href="#" class="close-popup">Cerrar</a></p>' + '</div>' + '</div>'
    myApp.popup(popupHTML);
});





var myapp = new Framework7();
  var options = {
    'bgcolor': '#0da6ec',
    'fontcolor': '#fff',
    'onOpened': function () {
      console.log("welcome screen opened");
    },
    'onClosed': function () {
      console.log("welcome screen closed");
    }
  },
    welcomescreen_slides,
    welcomescreen;

  welcomescreen_slides = [
    {
      id: 'slide0',
      picture: '<div class="tutorialicon">  </div>',
      text: 'Gracias por tu visita.'
    },

    //  {
    //    id: 'slide1',
  //      picture: '<div class="tutorialicon">✲</div>',
  //      text: 'This is slide 2'
  //    },
  //    {
  //      id: 'slide2',
  //      picture: '<div class="tutorialicon">♫</div>',
  //      text: 'This is slide 3'
  //    },
  //    {
  //      id: 'slide3',
  //      picture: '<div class="tutorialicon">☆</div>',
  //      text: 'Thanks for reading! Enjoy this app or go to <a class="tutorial-previous-slide" href="#">previous slide</a>.<br><br><a class="tutorial-close-btn" href="#">End Tutorial</a>'
  //    }

  ];

  welcomescreen = new Welcomescreen(welcomescreen_slides, options);

  $(document).on('click', '.tutorial-close-btn', function () {
    welcomescreen.close();
  });

  $('.tutorial-open-btn').click(function () {
    welcomescreen.open();
  });

//  $(document).on('click', '.tutorial-next-link', function (e) {
//    welcomescreen.next();
//  });

//  $(document).on('click', '.tutorial-previous-slide', function (e) {
  //  welcomescreen.previous();
//  });

// });
