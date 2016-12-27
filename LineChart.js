AngualrsJSApp.controller('LineController', function LineController($scope) {
    $scope.Welcome ="Hi, Welcome to Machine Test";
    $scope.chart = new CanvasJS.Chart("chartContainer",
        {
            theme: "theme2",
            backgroundColor: "yellow",
            zoomEnabled: true,
            title: { text: "Quantity of Fruits" },
            axisY:{
                title : "In Kg",
                 },
            data:[{
                type: "line",
            dataPoints:[
                        { label: "apple", y: 450 },
                        { label: "orange", y: 414 },
                        { label: "orange", y: 420 },
                        { label: "mango", y: 460 },
                        { label: "grape", y: 500 },
            ]
        }]
     });
    $scope.chart.render();

});