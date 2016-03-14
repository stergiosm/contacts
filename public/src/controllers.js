angular.module('ContactsApp')
	.controller('ListController', function($scope, Contact, $location) {
		$scope.contacts = Contact.query();
		$scope.fields = ["firstName", "lastName", "phoneNumber"];

		$scope.sort =function(field) {
			$scope.sort.field = field;
			$scope.sort.order = !$scope.sort.order;
		};
		$scope.sort.field = "firstName";
		$scope.sort.order = false;

		$scope.show = function($id) {
			$location.url('/contacts/' + $id);
		};
	})
	.controller('NewController', function($scope, Contact, $location) {
		$scope.contact = new Contact({
			firstName: ['', 'text'],
			lastName: ['', 'text'],
			email: ['', 'email'],
			phoneNumber: ['', 'tel'],
			homePhone: ['', 'tel'],
			birthDate: ['', 'date'],
			webSite: ['', 'url'],
			address: ['', 'text']
		});

		$scope.save = function() {
			if($scope.newContact.$invalid) {
				$scope.broadcast('record: invalid');
			} else {
				$scope.contact.$save();
				$location.url('/contacts');
			}
		};
	});
	// .controller('BoardController', [ '$scope', 'Account', 'Session', function($scope, account, session) {
	// 	$scope.toggle = true;
	// 	$scope.models = {
	// 		pageTitle = 'Welcome to Contacts application'
	// 	};
	// 	$scope.toggle.slidebar = function() {
	// 		$scope.toggle = !$scope.toggle;	
	// 	}
	// });
