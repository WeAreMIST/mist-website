var app = angular.module('mist', ['ngRoute', 'vtortola.ng-terminal']);

app.config(function($routeProvider) {
	$routeProvider

	//route for Home Page
		.when('/', {
		templateUrl: './views/home.html',
		controller: 'homeController'
	})

	.when('/geek', {
		templateUrl: './views/geek.html',
		controller: 'geekController'
	})

	.when('/nongeek', {
		templateUrl: './views/nongeek.html',
		controller: 'nonGeekController'
	})

	.otherwise({
		redirectTo: '/'
	});

});

app.controller('geekController', ['$scope', '$location', function($scope, $location) {

	setTimeout(function() {
		$scope.$broadcast('terminal-output', {
			output: true,
			text: ['We are MIST',
				'Defend your roots.'
			],
			breakLine: true
		});
		$scope.$apply();
	}, 0.1);

	/* Take user input */
	$scope.$on('terminal-input', function(e, consoleInput) {
		var cmd = consoleInput[0];
		switch(cmd.command) {
			case 'help': tHelp(); break;
			case 'man': tMan(); break;
			case 'ls' : tLs(); break;
			case 'clr': tClr(); break;
			default: tDefault();
		}

		/* ~Functions~ */
		function tHelp() {
			setTimeout(function() {
				$scope.$broadcast('terminal-output', {
					output: true,
					text: ['Available Commands:',
						'help: Get Help',
						'man: what we do',
						'ls: current events',
						'clr: clear screen'
					],
					breakLine: true
				});
				$scope.$apply();
			}, 0.1);
		}

		function tMan() {
			setTimeout(function() {
				$scope.$broadcast('terminal-output', {
					output: true,
					text: ['We are committed to spreading awareness about the increasing need for Information and Network Security.',
					'We plan to train other like-minded students to enhance their skills and aptitude in this branch of computer science.'
					],
					breakLine: true
				});
				$scope.$apply();
			}, 0.1);
		}

		function tLs() {
			setTimeout(function() {
				$scope.$broadcast('terminal-output', {
					output: true,
					text: ['1st year recruitments coming up, stay tuned!'
					],
					breakLine: true
				});
				$scope.$apply();
			}, 0.1);
		}

		function tClr() {
			setTimeout(function() {
				$scope.results.splice(0, $scope.results.length);
				$scope.$apply();
				$scope.$broadcast('terminal-output', {
					output: true,
					text: ['We are MIST',
						'Defend your roots.'
					],
					breakLine: true
				});
				$scope.$apply();
			}, 0.1);
		}

		function tDefault() {
			setTimeout(function() {
				$scope.$broadcast('terminal-output', {
					output: true,
					text: ['Invalid Command!',
						'type help to get help (duh)'
					],
					breakLine: true
				});
				$scope.$apply();
			}, 0.1);
		}



		// $location.path('/newNgRouteYouWishToDisplay');
	});

}]);

app.controller('nonGeekController', ['$scope', '$location', function($scope, $location) {
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.src = "./js/nongeek.js";
	document.head.appendChild(s);
}]);

app.controller('homeController', ['$scope', function($scope) {
	// $scope.load = function() {
	//
	// 	$(".right").hover(
	// 		function() {
	// 			$(".slider").css("width", "0vw");
	// 		},
	// 		function() {
	// 			$(".slider").css("width", "55vw");
	// 		});
	//
	//     $(".left").hover(
	// 			function() {
	// 				$(".slider").css("width", "130vw");
	// 			},
	// 			function() {
	// 				$(".slider").css("width", "55vw");
	// 			});
	//
	// };
	//
	// $scope.load();

}]);

app.config(['terminalConfigurationProvider', function(terminalConfigurationProvider) {
	terminalConfigurationProvider.outputDelay = 20;
	terminalConfigurationProvider.allowTypingWriteDisplaying = false;
}]);
