angular.module('FrontBookApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

    /*$scope.goToAboutUs = function(){
      $state.transitionTo('app.aboutUs');
    };*/
})

.controller('TeamsCtrl', function($scope) {
  $scope.teams = [
    { name: 'Managing Partners', id: 5, src: 'img/partnerLogo.png' },
    { name: 'IT Department', id: 0, src: 'img/ItDepartment.png' },
    { name: 'Tomato Talent', id: 1, src: 'img/tomatoTalent.png' },
    { name: 'Sales', id: 2, src: 'img/salesLogo.png' },
    { name: 'Talent Acquisition', id: 3, src: 'img/talentAcqusition.png' },
    { name: 'E-Learning', id: 4, src: 'img/ItDepartment.png'}
  ];
})

.controller('TeamCtrl', function($scope, $state, $stateParams, $http) {
    $scope.teamId = $stateParams.id;

    $scope.FWGImages = [{
      'src' : 'img/FWG_Team.jpg'
    },
       {
      'src' : 'img/logo.jpg'
    }]

    $scope.teams = [
      {
        id: 0,
        name: 'IT Department',
        src: 'img/ItDepartment.png',
        landimage: 'img/IT-landimage.jpg',
        teamTasks: 'Developing web and mobile applications',
        projects: [
          {
            name: 'FrontBook',
            description: 'FrontBook is a mobile application developed witn AngularJS and Ionic Framework for Frontwisegroup.',
            period: '2015'
          },
          {
            name: 'SearchWiser',
            description: 'A web application developed with AngularJS and ASP.NET WEB API for the needs of Frontwisegroup. ' +
            'The main purpose is to reduce the time of recruiters in the process of building their search data.',
            period: '2015'
          },
          {
            name: 'TimeWriting Application',
            description: 'TimeWriting App is a web application developed witn AngularJS and built for the ServiceNow platform.',
            period: '2015'
          },
          {
            name: 'Agrifirm Plant veris-limeadvice',
            description: 'A web application developed with KnockoutJS for the needs of Pyramid Applied Solutions.',
            period: '2015'
          }
        ],
        members: [
          {
            id: 0,
            name: 'Vladimir Smokvoski',
            position: 'Graphic Designer',
            src: 'img/VladimirSmokvoski.jpg',
            phone: 'tel:+389-76-744-633',
            linkedin: 'https://mk.linkedin.com/in/vladimir-smokvoski-15b8b4115'
          },
          {
            id: 1,
            name: 'Metodi Tosheski',
            position: 'Web Developer',
            src: 'img/TosheskiMetodi.jpg',
            phone: 'tel:+389-72-319-882',
            linkedin: 'https://mk.linkedin.com/in/metodi-tosheski-a8467547'
          },
          {
            id: 2,
            name: 'Kristijan Risteski',
            position: 'Web Developer',
            src: 'img/employees/KristijanRisteski.jpg',
            phone: 'tel:+389-72-319-879',
            linkedin: 'https://mk.linkedin.com/in/kristijan-risteski-83524618'
          },
          {
            id: 3,
            name: 'Riste Janakieski',
            position: 'Android Developer',
            src: 'img/employees/RisteJanakieski.jpg',
            phone: 'tel:+389-72-319-880',
            linkedin: 'https://mk.linkedin.com/in/kristijan-risteski-83524618'
          }
        ]
      },
      {
        id: 1,
        name: 'Tomato Talent',
        src: 'img/ItDepartment.png',
        teamTasks: 'Creating user and business cases',
        landimage: 'img/Tomato-landimage.jpg',
        projects: [
          {
            name: 'Tomato Talent Product v1.0',
            description: 'Creating user and business cases for Tomato Talent. Setting partnership between companies.',
            period: '2015'
          }
        ],
        members: [
          {
            id: 4,
            name: 'Petar Simjanoski',
            position: 'Talent consultant and executive recruiter',
            src: 'img/employees/PetarSimjanoski.png',
            phone: 'tel:+389-70-386-417',
            linkedin: 'https://nl.linkedin.com/in/petarsimjanoski'
          },
          {
            id: 5,
            name: 'Aneta Rafajlovska',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/AnetaRafajloska.jpg',
            phone: 'tel:+389-72-319-884',
            linkedin: 'https://mk.linkedin.com/in/aneta-rafajlovska-21b55643'
          },
          {
            id: 6,
            name: 'Cvetanka Dimitrieska',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/CvetankaDimitrieska.jpg',
            phone: 'tel:+389-77-566-142',
            linkedin: 'https://mk.linkedin.com/in/ceci-dimitrieska-62b089aa'
          },
          {
            id: 7,
            name: 'Ninnar Selimoska',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/NinnarSelimoska.jpg',
            phone: 'tel:+389-77-716-734',
            linkedin: 'https://mk.linkedin.com/in/ninnar-selimoska-152355a6'
          },
          {
            id: 8,
            name: 'Katerina Arsova',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/KaterinaArsova.png',
            phone: 'tel:+389-70-386-422',
            linkedin: 'https://mk.linkedin.com/in/katerina-arsova-670355115'
          },
          {
            id: 9,
            name: 'Ana Eftimova',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/AnaEftimova.png',
            phone: 'tel:+389-71-525-533',
            linkedin: 'https://mk.linkedin.com/in/ana-eftimova-69217a113'
          },
          {
            id: 10,
            name: 'Liljana Sekulovska',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/LiljanaSekulovska.jpg',
            phone: 'tel:+389-70-224-468',
            linkedin: 'https://nl.linkedin.com/in/liljana-sekulovska-ll-m-7785b14'
          },
          {
            id: 11,
            name: 'Elena Trencheva',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/ElenaTrencheva.jpg',
            phone: 'tel:+389-75-777-630',
            linkedin: 'https://mk.linkedin.com/in/elena-trencheva-65a075115'
          },
          {
            id: 12,
            name: 'Dean Neskovski',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/DeanNeskovski.jpg',
            phone: 'tel:+389-78-528-378',
            linkedin: 'https://mk.linkedin.com/in/dean-neskovski-6388b167'
          },
          {
            id: 13,
            name: 'Kristina Kraljevska Janachkov',
            position: 'Professional Talent Acquisition Consultant',
            src: '',
            phone: 'tel:+389-78-375-509',
            linkedin: 'https://mk.linkedin.com/in/kristina-kraljevska-janachkov-45263977'
          }, {
            id: 32,
            name: 'Daniela Stojkova Jankoska',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/DanielaStojkovaJankoska.jpg',
            phone: 'tel:+389-77-71-372-551',
            linkedin: 'https://mk.linkedin.com/in/daniela-stojkova-jankoska-48b8b73'
          }
        ]
      },
      {
        id: 2,
        name: 'Sales',
        src: 'img/ItDepartment.png',
        members: [
          {
            id: 22,
            name: 'Maria Arsovska',
            position: 'Senior Recruitment Consultant',
            src: 'img/employees/MarijaArsovska.jpg',
            phone: 'tel:+389-70-923-022',
            linkedin: 'https://mk.linkedin.com/in/maria-arsovska-b4397164'
          },
          {
            id: 23,
            name: 'Aneta Arsovska',
            position: 'Recruitment and Professional Development Consultant',
            src: 'img/employees/AnetaArsovska.jpg',
            phone: 'tel:+389-77-908-480',
            linkedin: 'https://nl.linkedin.com/in/aneta-arsovska-16340362'
          }
        ]
      },
      {
        id: 3,
        name: 'Talent Acquisition',
        src: 'img/ItDepartment.png',
        members: [
          {
            id: 14,
            name: 'Davor Dabeski',
            position: 'Talent consultant and executive recruiter',
            src: 'img/employees/DavorDabeski.png',
            phone: 'tel:+389-71-377-034',
            linkedin: 'https://nl.linkedin.com/in/petarsimjanoski'
          },
          {
            id: 15,
            name: 'Natasha Manchevska',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/NatasaManchevska.jpg',
            phone: 'tel:+389-78-422-710',
            linkedin: 'https://nl.linkedin.com/in/natasha-manchevska-1b4291106'
          },
          {
            id: 16,
            name: 'Marija Shamakoska',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/MarijaShamakoska.png',
            phone: 'tel:+389-71-377-034',
            linkedin: 'https://nl.linkedin.com/in/marija-shamakoska-853bb891'
          },
          {
            id: 17,
            name: 'Biljana Alampioska',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/BiljanaAlampioska.jpg',
            phone: 'tel:+389-72-311-122',
            linkedin: 'https://mk.linkedin.com/in/biljana-alampioska-74ba6917'
          },
          {
            id: 18,
            name: 'Marjan Hristovski',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/MarjanHristovski.jpg',
            phone: 'tel:+389-75-425-600',
            linkedin: 'https://mk.linkedin.com/in/marjanhristovski'
          },
          {
            id: 19,
            name: 'Viktorija Marinkova',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/ViktorijaMarinkova.jpg',
            phone: 'tel:+389-75-335-534',
            linkedin: 'https://mk.linkedin.com/in/viktorija-marinkova-msc-a04b4958'
          }, {
            id: 20,
            name: 'Angel Kovachovski',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/AngelKovachki.jpg',
            phone: 'tel:+389-78-400-254',
            linkedin: 'https://nl.linkedin.com/in/angel-kovachovski-73592b52'
          },
          {
            id: 21,
            name: 'Dushanka Knezhevikj',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/DushankaKnezhevik.jpg',
            phone: 'tel:+389-75-423-404',
            linkedin: 'https://mk.linkedin.com/in/dushanka-knezhevikj-11a8b0119'
          },
          {
            id: 30,
            name: 'Gorjan Zivchevski',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/GorjanZivchevski.jpg',
            phone: 'tel:+389-71-244-632',
            linkedin: 'https://mk.linkedin.com/in/gorjan-zivchevski-6a9282104'
          },
          {
            id: 31,
            name: 'Zoran Grueski',
            position: 'Professional Talent Acquisition Consultant',
            src: 'img/employees/ZoranGrueski.jpg',
            phone: 'tel:+389-78-403-360',
            linkedin: 'https://mk.linkedin.com/in/zoran-grueski-60478611'
          }
        ]
      },
      {
        id: 4,
        name: 'E-Learning',
        src: 'img/ItDepartment.png',
        members: [
          {
            id: 24,
            name: 'Daniel Stankovski',
            position: 'Professional Talent Acquisition And E Business Consultant',
            src: 'img/employees/DanielStankovski.jpg',
            phone: 'tel:+389-72-319-883',
            linkedin: 'https://mk.linkedin.com/in/daniel-stankovski-52a694a1'
          },
          {
            id: 25,
            name: 'Pavel Simjanoski',
            position: 'E-learning content designer',
            src: 'img/employees/PavelSimjanoski.jpg',
            phone: 'tel:+389-70-610-008',
            linkedin: 'https://mk.linkedin.com/in/pavel-simjanoski-145b65115'
          }
        ]
      },
      {
        id: 5,
        name: 'Managing Partners',
        src: 'img/ItDepartment.png',
        landimage: 'img/logoGif.gif',
        members: [
          {
            id: 26,
            name: 'Gerrit Loopstra',
            position: 'Managing Partner',
            src: 'img/employees/GerritLoopstra.jpg',
            phone: 'tel:+31-6-20491047',
            linkedin: 'https://nl.linkedin.com/in/gerritloopstra'
          },
          {
            id: 27,
            name: 'Marc van Straten',
            position: 'Managing Partner',
            src: 'img/employees/MarcVanStraten.jpg',
            phone: 'tel:+31-6-22197367',
            linkedin: 'https://nl.linkedin.com/in/marc-van-straten-2815ab'
          }
          ,
          {
            id: 28,
            name: 'Bart Tukkers',
            position: 'Managing Partner',
            src: 'img/employees/BartTukkers.jpg',
            phone: 'tel:+31-6-19499101',
            linkedin: 'https://nl.linkedin.com/in/inhouseselect'
          }
          ,
          {
            id: 29,
            name: 'Olgica Naumovska',
            position: 'Managing Partner',
            src: 'img/employees/OlgicaNaumovska.jpg',
            phone: 'tel:+389-70-386-418',
            linkedin: 'https://nl.linkedin.com/in/olgica-naumovska-5a730829'
          }
        ]
      }
    ]

    $scope.goToEmployeeProfile = function(employeeId){
      //PassDistanceService.setDistance($scope.distance);
      $state.transitionTo('app.employee', {id: employeeId});
    };
})

.controller('PeopleCtrl',  function($scope, $state, $http) {

    $scope.callUser = function(phone){
      window.location.href = phone;
    };

    $scope.openLinkedin = function(linkedin){
      window.open(linkedin, '_system');
    };

    $scope.developers = [
      {
        id: 0,
        name: 'Vladimir Smokvoski',
        position: 'Graphic Designer',
        src: 'img/VladimirSmokvoski.jpg',
        phone: 'tel:+389-76-744-633',
        linkedin: 'https://mk.linkedin.com/in/vladimir-smokvoski-15b8b4115'
      },
      {
        id: 1,
        name: 'Metodi Tosheski',
        position: 'Web Developer',
        src: 'img/TosheskiMetodi.jpg',
        phone: 'tel:+389-72-319-882',
        linkedin: 'https://mk.linkedin.com/in/metodi-tosheski-a8467547'
      },
      {
        id: 2,
        name: 'Kristijan Risteski',
        position: 'Web Developer',
        src: 'img/employees/KristijanRisteski.jpg',
        phone: 'tel:+389-72-319-879',
        linkedin: 'https://mk.linkedin.com/in/kristijan-risteski-83524618'
      },
      {
        id: 3,
        name: 'Riste Janakieski',
        position: 'Android Developer',
        src: 'img/employees/RisteJanakieski.jpg',
        phone: 'tel:+389-72-319-880',
        linkedin: 'https://mk.linkedin.com/in/kristijan-risteski-83524618'
      }
    ]
    $scope.tomatoes = [
      {
        id: 4,
        name: 'Petar Simjanoski',
        position: 'Talent consultant and executive recruiter',
        src: 'img/employees/PetarSimjanoski.png',
        phone: 'tel:+389-70-386-417',
        linkedin: 'https://nl.linkedin.com/in/petarsimjanoski'
      },
      {
        id: 5,
        name: 'Aneta Rafajlovska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/AnetaRafajloska.jpg',
        phone: 'tel:+389-72-319-884',
        linkedin: 'https://mk.linkedin.com/in/aneta-rafajlovska-21b55643'
      },
      {
        id: 6,
        name: 'Cvetanka Dimitrieska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/CvetankaDimitrieska.jpg',
        phone: 'tel:+389-77-566-142',
        linkedin: 'https://mk.linkedin.com/in/ceci-dimitrieska-62b089aa'
      },
      {
        id: 7,
        name: 'Ninnar Selimoska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/NinnarSelimoska.jpg',
        phone: 'tel:+389-77-716-734',
        linkedin: 'https://mk.linkedin.com/in/ninnar-selimoska-152355a6'
      },
      {
        id: 8,
        name: 'Katerina Arsova',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/KaterinaArsova.png',
        phone: 'tel:+389-70-386-422',
        linkedin: 'https://mk.linkedin.com/in/katerina-arsova-670355115'
      },
      {
        id: 9,
        name: 'Ana Eftimova',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/AnaEftimova.png',
        phone: 'tel:+389-71-525-533',
        linkedin: 'https://mk.linkedin.com/in/ana-eftimova-69217a113'
      },
      {
        id: 10,
        name: 'Liljana Sekulovska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/LiljanaSekulovska.jpg',
        phone: 'tel:+389-70-224-468',
        linkedin: 'https://nl.linkedin.com/in/liljana-sekulovska-ll-m-7785b14'
      },
      {
        id: 11,
        name: 'Elena Trencheva',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/ElenaTrencheva.jpg',
        phone: 'tel:+389-75-777-630',
        linkedin: 'https://mk.linkedin.com/in/elena-trencheva-65a075115'
      },
      {
        id: 12,
        name: 'Dean Neskovski',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/DeanNeskovski.jpg',
        phone: 'tel:+389-78-528-378',
        linkedin: 'https://mk.linkedin.com/in/dean-neskovski-6388b167'
      },
      {
        id: 13,
        name: 'Kristina Kraljevska Janachkov',
        position: 'Professional Talent Acquisition Consultant',
        src: '',
        phone: 'tel:+389-78-375-509',
        linkedin: 'https://mk.linkedin.com/in/kristina-kraljevska-janachkov-45263977'
      }, {
        id: 32,
        name: 'Daniela Stojkova Jankoska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/DanielaStojkovaJankoska.jpg',
        phone: 'tel:+389-77-71-372-551',
        linkedin: 'https://mk.linkedin.com/in/daniela-stojkova-jankoska-48b8b73'
      }
    ]

    $scope.talentAcquisitions = [
      {
        id: 14,
        name: 'Davor Dabeski',
        position: 'Talent consultant and executive recruiter',
        src: 'img/employees/DavorDabeski.png',
        phone: 'tel:+389-71-377-034',
        linkedin: 'https://nl.linkedin.com/in/petarsimjanoski'
      },
      {
        id: 15,
        name: 'Natasha Manchevska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/NatasaManchevska.jpg',
        phone: 'tel:+389-78-422-710',
        linkedin: 'https://nl.linkedin.com/in/natasha-manchevska-1b4291106'
      },
      {
        id: 16,
        name: 'Marija Shamakoska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/MarijaShamakoska.png',
        phone: 'tel:+389-71-377-034',
        linkedin: 'https://nl.linkedin.com/in/marija-shamakoska-853bb891'
      },
      {
        id: 17,
        name: 'Biljana Alampioska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/BiljanaAlampioska.jpg',
        phone: 'tel:+389-72-311-122',
        linkedin: 'https://mk.linkedin.com/in/biljana-alampioska-74ba6917'
      },
      {
        id: 18,
        name: 'Marjan Hristovski',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/MarjanHristovski.jpg',
        phone: 'tel:+389-75-425-600',
        linkedin: 'https://mk.linkedin.com/in/marjanhristovski'
      },
      {
        id: 19,
        name: 'Viktorija Marinkova',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/ViktorijaMarinkova.jpg',
        phone: 'tel:+389-75-335-534',
        linkedin: 'https://mk.linkedin.com/in/viktorija-marinkova-msc-a04b4958'
      }, {
        id: 20,
        name: 'Angel Kovachovski',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/AngelKovachki.jpg',
        phone: 'tel:+389-78-400-254',
        linkedin: 'https://nl.linkedin.com/in/angel-kovachovski-73592b52'
      },
      {
        id: 21,
        name: 'Dushanka Knezhevikj',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/DushankaKnezhevik.jpg',
        phone: 'tel:+389-75-423-404',
        linkedin: 'https://mk.linkedin.com/in/dushanka-knezhevikj-11a8b0119'
      },
      {
        id: 30,
        name: 'Gorjan Zivchevski',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/GorjanZivchevski.jpg',
        phone: 'tel:+389-71-244-632',
        linkedin: 'https://mk.linkedin.com/in/gorjan-zivchevski-6a9282104'
      },
      {
        id: 31,
        name: 'Zoran Grueski',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/ZoranGrueski.jpg',
        phone: 'tel:+389-78-403-360',
        linkedin: 'https://mk.linkedin.com/in/zoran-grueski-60478611'
      }
    ]
    $scope.sales = [
      {
        id: 22,
        name: 'Maria Arsovska',
        position: 'Senior Recruitment Consultant',
        src: 'img/employees/MarijaArsovska.jpg',
        phone: 'tel:+389-70-923-022',
        linkedin: 'https://mk.linkedin.com/in/maria-arsovska-b4397164'
      },
      {
        id: 23,
        name: 'Aneta Arsovska',
        position: 'Recruitment and Professional Development Consultant',
        src: 'img/employees/AnetaArsovska.jpg',
        phone: 'tel:+389-77-908-480',
        linkedin: 'https://nl.linkedin.com/in/aneta-arsovska-16340362'
      }
    ]
    $scope.eLearning = [
      {
        id: 24,
        name: 'Daniel Stankovski',
        position: 'Professional Talent Acquisition And E Business Consultant',
        src: 'img/employees/DanielStankovski.jpg',
        phone: 'tel:+389-72-319-883',
        linkedin: 'https://mk.linkedin.com/in/daniel-stankovski-52a694a1'
      },
      {
        id: 25,
        name: 'Pavel Simjanoski',
        position: 'E-learning content designer',
        src: 'img/employees/PavelSimjanoski.jpg',
        phone: 'tel:+389-70-610-008',
        linkedin: 'https://mk.linkedin.com/in/pavel-simjanoski-145b65115'
      }
    ]

    $scope.managingPartners = [
      {
        id: 26,
        name: 'Gerrit Loopstra',
        position: 'Managing Partner',
        src: 'img/employees/GerritLoopstra.jpg',
        phone: 'tel:+31-6-20491047',
        linkedin: 'https://nl.linkedin.com/in/gerritloopstra'
      },
      {
        id: 27,
        name: 'Marc van Straten',
        position: 'Managing Partner',
        src: 'img/employees/MarcVanStraten.jpg',
        phone: 'tel:+31-6-22197367',
        linkedin: 'https://nl.linkedin.com/in/marc-van-straten-2815ab'
      }
      ,
      {
        id: 28,
        name: 'Bart Tukkers',
        position: 'Managing Partner',
        src: 'img/employees/BartTukkers.jpg',
        phone: 'tel:+31-6-19499101',
        linkedin: 'https://nl.linkedin.com/in/inhouseselect'
      }
      ,
      {
        id: 29,
        name: 'Olgica Naumovska',
        position: 'Managing Partner',
        src: 'img/employees/OlgicaNaumovska.jpg',
        phone: 'tel:+389-70-386-418',
        linkedin: 'https://nl.linkedin.com/in/olgica-naumovska-5a730829'
      }
    ]

    $scope.goToEmployeeProfile = function(employeeId){
      //PassDistanceService.setDistance($scope.distance);
      $state.transitionTo('app.employee', {id: employeeId});
    };

    $scope.developersNumber = $scope.developers.length;
    $scope.tomatoesNumber = $scope.tomatoes.length;
    $scope.salesNumber = $scope.sales.length;
    $scope.talentsNumber = $scope.talentAcquisitions.length;
    $scope.eLearningNumber = $scope.eLearning.length;
    $scope.partners = $scope.managingPartners.length;
    $scope.sumEmpl = $scope.developersNumber + $scope.tomatoesNumber + $scope.salesNumber + $scope.talentsNumber + $scope.eLearningNumber + $scope.partners;

/*

// Define relevant info
    var privateKey = 'AIzaSyABfw9WPNyk2M37W5WBiY4nEg2B4QQt8Ms ';
    var user_ids = ['bojan_kovacki@hotmail.com'];
    var appId = '4ce84d91';

// Encode your key
    var auth = btoa(privateKey + ':');

// Build the request object
    var req = {
      method: 'POST',
      url: 'https://push.ionic.io/api/v1/push',
      headers: {
        'Content-Type': 'application/json',
        'X-Ionic-Application-Id': appId,
        'Authorization': 'basic ' + auth
      },
      data: {
        "user_ids": user_ids,
        "notification": {
          "alert":"Hello World!"
        }
      }
    };

// Make the API call
    $http(req).success(function(resp){
      // Handle success
      console.log("Ionic Push: Push success!");
    }).error(function(error){
      // Handle error
      console.log("Ionic Push: Push error...");
    });
*/

})

  .controller('EmployeeCtrl', function($scope, $stateParams, $http) {
    //var param1 = $routeParams.id;

    $http.get('http://christinaros-001-site1.ctempurl.com/api/employees').then(function (results){
      var emp = results.data;
    })
    $scope.employeeId = $stateParams.id;

    $scope.callUser = function(phone){
      window.location.href = phone;
    };
    $scope.FWGImages = [{
      'src' : 'img/FrontwisegroupLogo.png'
    }, {
      'src' : 'img/pic2.jpg'
    }, {
      'src' : 'img/pic3.jpg'
    }]

    $scope.employees = [
      {
        id: 0,
        name: 'Vladimir Smokvoski',
        position: 'Graphic Designer',
        src: 'img/VladimirSmokvoski.jpg',
        phone: 'tel:+389-76-744-633',
        linkedin: 'https://mk.linkedin.com/in/vladimir-smokvoski-15b8b4115'
      },
      {
        id: 1,
        name: 'Metodi Tosheski',
        position: 'Web Developer',
        src: 'img/TosheskiMetodi.jpg',
        phone: 'tel:+389-72-319-882',
        birthday: '25 December',
        linkedin: 'https://mk.linkedin.com/in/metodi-tosheski-a8467547',
        projects: [
          {
            name: 'FrontBook',
            description: 'FrontBook is a mobile application developed witn AngularJS and Ionic Framework for Frontwisegroup.',
            period: '2015'
          },
          {
            name: 'SearchWiser',
            description: 'A web application developed with AngularJS and ASP.NET WEB API for the needs of Frontwisegroup. ' +
            'The main purpose is to reduce the time of recruiters in the process of building their search data.',
            period: '2015'
          },
          {
            name: 'Agrifirm Plant veris-limeadvice',
            description: 'A web application developed with KnockoutJS for the needs of Pyramid Applied Solutions.',
            period: '2015'
          }
        ]
      },
      {
        id: 2,
        name: 'Kristijan Risteski',
        position: 'Web Developer',
        src: 'img/employees/KristijanRisteski.jpg',
        phone: 'tel:+389-72-319-879',
        linkedin: 'https://mk.linkedin.com/in/kristijan-risteski-83524618'
      },
      {
        id: 3,
        name: 'Riste Janakieski',
        position: 'Android Developer',
        src: 'img/employees/RisteJanakieski.jpg',
        birthday: 'October 16, 1993',
        phone: 'tel:+389-72-319-880',
        linkedin: 'https://mk.linkedin.com/in/kristijan-risteski-83524618',
        projects: [
          {
            name: 'Service management application',
            description: 'Service management application for Fujitsu Technology Services, that supports execution of interventions by mobile field engineers',
            period: '2015 - 2016'
          },
          {
            name: 'Agrifirm Plant veris-limeadvice',
            description: 'A web application developed with KnockoutJS for the needs of Pyramid Applied Solutions.',
            period: '2015'
          }
        ]
      },
      {
        id: 4,
        name: 'Petar Simjanoski',
        position: 'Talent consultant and executive recruiter',
        src: 'img/employees/PetarSimjanoski.png',
        phone: 'tel:+389-70-386-417',
        linkedin: 'https://nl.linkedin.com/in/petarsimjanoski'
      },
      {
        id: 5,
        name: 'Aneta Rafajlovska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/AnetaRafajloska.jpg',
        phone: 'tel:+389-72-319-884',
        linkedin: 'https://mk.linkedin.com/in/aneta-rafajlovska-21b55643'
      },
      {
        id: 6,
        name: 'Cvetanka Dimitrieska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/CvetankaDimitrieska.jpg',
        phone: 'tel:+389-77-566-142',
        linkedin: 'https://mk.linkedin.com/in/ceci-dimitrieska-62b089aa'
      },
      {
        id: 7,
        name: 'Ninnar Selimoska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/NinnarSelimoska.jpg',
        phone: 'tel:+389-77-716-734',
        linkedin: 'https://mk.linkedin.com/in/ninnar-selimoska-152355a6'
      },
      {
        id: 8,
        name: 'Katerina Arsova',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/KaterinaArsova.png',
        phone: 'tel:+389-70-386-422',
        linkedin: 'https://mk.linkedin.com/in/katerina-arsova-670355115'
      },
      {
        id: 9,
        name: 'Ana Eftimova',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/AnaEftimova.png',
        phone: 'tel:+389-71-525-533',
        linkedin: 'https://mk.linkedin.com/in/ana-eftimova-69217a113'
      },
      {
        id: 10,
        name: 'Liljana Sekulovska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/LiljanaSekulovska.jpg',
        phone: 'tel:+389-70-224-468',
        linkedin: 'https://nl.linkedin.com/in/liljana-sekulovska-ll-m-7785b14'
      },
      {
        id: 11,
        name: 'Elena Trencheva',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/ElenaTrencheva.jpg',
        phone: 'tel:+389-75-777-630',
        linkedin: 'https://mk.linkedin.com/in/elena-trencheva-65a075115'
      },
      {
        id: 12,
        name: 'Dean Neskovski',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/DeanNeskovski.jpg',
        phone: 'tel:+389-78-528-378',
        linkedin: 'https://mk.linkedin.com/in/dean-neskovski-6388b167'
      },
      {
        id: 13,
        name: 'Kristina Kraljevska Janachkov',
        position: 'Professional Talent Acquisition Consultant',
        src: '',
        phone: 'tel:+389-78-375-509',
        linkedin: 'https://mk.linkedin.com/in/kristina-kraljevska-janachkov-45263977'
      },
      {
        id: 14,
        name: 'Davor Dabeski',
        position: 'Talent consultant and executive recruiter',
        src: 'img/employees/DavorDabeski.png',
        phone: 'tel:+389-71-377-034',
        linkedin: 'https://nl.linkedin.com/in/petarsimjanoski'
      },
      {
        id: 15,
        name: 'Natasha Manchevska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/NatasaManchevska.jpg',
        phone: 'tel:+389-78-422-710',
        linkedin: 'https://nl.linkedin.com/in/natasha-manchevska-1b4291106'
      },
      {
        id: 16,
        name: 'Marija Shamakoska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/MarijaShamakoska.png',
        phone: 'tel:+389-71-377-034',
        linkedin: 'https://nl.linkedin.com/in/marija-shamakoska-853bb891'
      },
      {
        id: 17,
        name: 'Biljana Alampioska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/BiljanaAlampioska.jpg',
        phone: 'tel:+389-72-311-122',
        linkedin: 'https://mk.linkedin.com/in/biljana-alampioska-74ba6917'
      },
      {
        id: 18,
        name: 'Marjan Hristovski',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/MarjanHristovski.jpg',
        phone: 'tel:+389-75-425-600',
        linkedin: 'https://mk.linkedin.com/in/marjanhristovski'
      },
      {
        id: 19,
        name: 'Viktorija Marinkova',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/ViktorijaMarinkova.jpg',
        phone: 'tel:+389-75-335-534',
        linkedin: 'https://mk.linkedin.com/in/viktorija-marinkova-msc-a04b4958'
      }, {
        id: 20,
        name: 'Angel Kovachovski',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/AngelKovachki.jpg',
        phone: 'tel:+389-78-400-254',
        linkedin: 'https://nl.linkedin.com/in/angel-kovachovski-73592b52'
      },
      {
        id: 21,
        name: 'Dushanka Knezhevikj',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/DushankaKnezhevik.jpg',
        phone: 'tel:+389-75-423-404',
        linkedin: 'https://mk.linkedin.com/in/dushanka-knezhevikj-11a8b0119'
      },
      {
        id: 22,
        name: 'Maria Arsovska',
        position: 'Senior Recruitment Consultant',
        src: 'img/employees/MarijaArsovska.jpg',
        phone: 'tel:+389-70-923-022',
        linkedin: 'https://mk.linkedin.com/in/maria-arsovska-b4397164'
      },
      {
        id: 23,
        name: 'Aneta Arsovska',
        position: 'Recruitment and Professional Development Consultant',
        src: 'img/employees/AnetaArsovska.jpg',
        phone: 'tel:+389-77-908-480',
        linkedin: 'https://nl.linkedin.com/in/aneta-arsovska-16340362'
      },
      {
        id: 24,
        name: 'Daniel Stankovski',
        position: 'Professional Talent Acquisition And E Business Consultant',
        src: 'img/employees/DanielStankovski.jpg',
        phone: 'tel:+389-72-319-883',
        linkedin: 'https://mk.linkedin.com/in/daniel-stankovski-52a694a1'
      },
      {
        id: 25,
        name: 'Pavel Simjanoski',
        position: 'E-learning content designer',
        src: 'img/employees/PavelSimjanoski.jpg',
        phone: 'tel:+389-70-610-008',
        linkedin: 'https://mk.linkedin.com/in/pavel-simjanoski-145b65115'
      },
      {
        id: 26,
        name: 'Gerrit Loopstra',
        position: 'Managing Partner',
        src: 'img/employees/GerritLoopstra.jpg',
        phone: 'tel:+31-6-20491047',
        linkedin: 'https://nl.linkedin.com/in/gerritloopstra'
      },
      {
        id: 27,
        name: 'Marc van Straten',
        position: 'Managing Partner',
        src: 'img/employees/MarcVanStraten.jpg',
        phone: 'tel:+31-6-22197367',
        linkedin: 'https://nl.linkedin.com/in/marc-van-straten-2815ab',
        projects: [
          {
            name: 'Managing Director & E-learning developer',
            description: 'Supply Chain Academy Network BV',
            period: '2016 - Present'
          },
          {
            name: 'Managing Director',
            description: 'Hulpstudent.nl' +
            'The main purpose is to reduce the time of recruiters in the process of building their search data.',
            period: '2015 - Present'
          },
          {
            name: 'Managing Partner',
            description: 'FrontwiseGroup',
            period: '2014 - Present'
          },
          {
            name: 'Directeur',
            description: 'Apics Flexjobs B.V.',
            period: '2011 - Present'
          }
        ]
      }
      ,
      {
        id: 28,
        name: 'Bart Tukkers',
        position: 'Managing Partner',
        src: 'img/employees/BartTukkers.jpg',
        phone: 'tel:+31-6-19499101',
        linkedin: 'https://nl.linkedin.com/in/inhouseselect'
      },
      {
        id: 29,
        name: 'Olgica Naumovska',
        position: 'Managing Partner',
        src: 'img/employees/OlgicaNaumovska.jpg',
        phone: 'tel:+389-70-386-418',
        linkedin: 'https://nl.linkedin.com/in/olgica-naumovska-5a730829'
      },
      {
        id: 30,
        name: 'Gorjan Zivchevski',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/GorjanZivchevski.jpg',
        phone: 'tel:+389-71-244-632',
        linkedin: 'https://mk.linkedin.com/in/gorjan-zivchevski-6a9282104'
      },
      {
        id: 31,
        name: 'Zoran Grueski',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/ZoranGrueski.jpg',
        phone: 'tel:+389-78-403-360',
        linkedin: 'https://mk.linkedin.com/in/zoran-grueski-60478611'
      }, {
        id: 32,
        name: 'Daniela Stojkova Jankoska',
        position: 'Professional Talent Acquisition Consultant',
        src: 'img/employees/DanielaStojkovaJankoska.jpg',
        phone: 'tel:+389-77-71-372-551',
        linkedin: 'https://mk.linkedin.com/in/daniela-stojkova-jankoska-48b8b73'
      }
    ]

    $scope.addNewProject = function()
    {

    }
  })

  .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
    //function initialize() {
      var myLatlng = new google.maps.LatLng(41.986739, 21.434479);

      var mapOptions = {
        center: myLatlng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

      //Marker + infowindow + angularjs compiled ng-click
      var contentString = "<div><a ng-click='clickTest()'>Frontwisegroup Location</a></div>";
      var compiled = $compile(contentString)($scope);

      var infowindow = new google.maps.InfoWindow({
        content: compiled[0]
      });

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Frontwisegroup Location'
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

      $scope.map = map;
    //}

    //google.maps.event.addDomListener(window, 'load', initialize);

    /*$scope.centerOnMe = function() {
      if(!$scope.map) {
        return;
      }

      $scope.loading = $ionicLoading.show({
        content: 'Getting current location...',
        showBackdrop: false
      });

      navigator.geolocation.getCurrentPosition(function(pos) {
        $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        $scope.loading.hide();
      }, function(error) {
        alert('Unable to get location: ' + error.message);
      });
    };

    $scope.clickTest = function() {
      alert('Example of infowindow with ng-click')
    };*/

  })

  .controller('AboutCtrl', function($scope) {

    $scope.FWGImages = [{
      'src': 'img/FrontwisegroupLogo.png'
    }];
  })

  .controller('AdminCtrl', function($scope, $http){
    $scope.addEmployee = function(){};
  });
