app.controller('TargetController', ['$scope', 'AppEventManager',
    function (scope, AppEventManager) {
        AppEventManager.tellMenuNewSectionLoaded('target');

        // defining multiple language content
        scope.pageItems = {
            "title": {
                "ptLabel": "Público<br>Alvo",
                "enLabel": "Target<br>Audience"
            },
            "description": {
                "ptLabel": "O PhoneGap Bootcamp se destina a Front End Developers, Back End Developers, UX Developers, programadores em geral, Designers com noções de programação, estudantes e profissionais de tecnologia interessados em explorar o mundo de aplicativos móveis, focando em performance e custo benefício no desenvolvimento.",
                "enLabel": "PhoneGap Bootcamp is targeted to Front End Developers, Back End Developers, UX Developers, programmers in general, Designers with basic programming knowledge, students and technology professionals interested in exploring the world of mobile applications, focused on performance and development cost benefits."
            }
        };
}]);