var callBackContactFunction='';

function DetailController($scope, $rootScope, $routeParams)
{
	clearAllMenu()
	$('#menu-detail').addClass('active');
	callBackContactFunction  = '';

	$scope.games = [
		{'index':0, 'img':'img/detail-platform.jpg','swf':'flash/game.swf'},
		{'index':1, 'img':'img/detail-catapult.jpg','swf':'flash/balloons.swf'},
		{'index':2, 'img':'img/detail-spaceshooter.jpg','swf':'flash/space.swf'},
		{'index':3, 'img':'img/detail-racing.jpg','swf':'http://static.stencyl.com/games/4435-0.swf'}
	 ];
	$scope.selectedGame = $scope.games[0];

	$scope.selectGame = function(index){
		$scope.selectedGame = $scope.games[index];
		swfobject.embedSWF($scope.selectedGame.swf, "gameContent", "640", "384", "9.0.0", "expressInstall.swf");
	}

	$scope.getChosenClass = function(index)
	{
		//console.log('get chosen ' + index);
		if(index == $scope.selectedGame.index)
			return "chosen";
	}

	$scope.callInfo = function()
	{
		callBackContactFunction = function(){
			setTimeout(function(){
				$('#contact-btn').click();
			}, 100)
			
		}
	}

	$scope.callRegist = function()
	{
		callBackContactFunction = function(){
			setTimeout(function(){
				$('#regist-btn').click();
			}, 100)
			
		}
	}

	$scope.selectGame(0);

}

function HomeController($scope, $rootScope, $routeParams)
{
	clearAllMenu()
	$('#menu-logo').addClass('active')
	doJqInit(function(){
		console.log('start')
		console.log($('.detail a'));

		$('.detail a').on('hover', function(){
			console.log('hover');
			var target = $($('img',this)[0]).attr('target');
			console.log(target)
			$(target).animate({'background':'#FF6B6B'});
		});

		$('.detail a').on('mouseout', function(){
			console.log('mouseout');
			var target = $($('img',this)[0]).attr('target');
			console.log(target)
			$(target).animate({'background':'#C7F464'});
		})

	});
	
}

function WhyController($scope, $rootScope, $routeParams)
{
	clearAllMenu()
	$('#menu-why').addClass('active');
}

function ContactController($scope, $rootScope, $routeParams)
{
	clearAllMenu()
	$('#menu-contact').addClass('active');
	$scope.showForm = function()
	{
		$('#myContact').modal();
	}
	 doJqInit(function(){
		if(callBackContactFunction!='')
		{
			console.log('do callback')
			callBackContactFunction();
			callBackContactFunction = '';
		} 	
	 })
	

}

var _doCount =0;
function doJqInit(func){
	_doCount++;
	if(_doCount == 2)
	{
		func();
		_doCount = 0;
	}

}

function clearAllMenu()
{
	$('#menu-logo').removeClass('active');
	$('#main-menu ul li').removeClass('active');
}