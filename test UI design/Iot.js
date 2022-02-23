window.onload = function () {
    // var x = 100,
    //     max = 3000,
    //     ctr = document.getElementById("Room");

    // function incrementCounter() {
    //     ctr.innerHTML = "<span id='Room' class='animated fadeIn superscript'>" + x + "%</span>";
    //     if (x-- > 0)
    //         setTimeout(incrementCounter, 5000);
    // }
    const numberrr = document.querySelector(".number");
    let counterr = 500;
    setInterval(() => {
        if (counterr == 0) {
            clearInterval();
        } else {
            counterr -= 1;
            numberrr.textContent = counterr + "ml";
        }
    }, 350);
    const numberrr2 = document.querySelector(".number1");
    let counterr2 = 20;
    setInterval(() => {
        if (counterr2 == 0) {
            clearInterval();
        } else {
            counterr2 -= 1;
            numberrr2.textContent = counterr2 + "mins";
        }
    }, 8500);
//     const numb = document.querySelector(".number");
// let counter = 0;
// setInterval(() => {
//     if (counter == 100) {
//         clearInterval();
//     } else {
//         counter += 1;
//         numb.textContent = counter + "ml";
//     }
// }, 80);

    // incrementCounter();
    function getActualData() {
        var actualData = []
        for (var m = 0; m < 20; m++)
            actualData.push(45 + parseInt(Math.random() * 35))
            return actualData;
    }
    var ANIMATIONSTEPS = 200;
    var myLineChart;
    var labels;
    var animationStep;
    setInterval(function () {
        if (myLineChart === undefined) {
            var actualData = getActualData();
            var interpolationSteps = Math.ceil(ANIMATIONSTEPS / actualData.length);
            labels = []
            var data = []
            var blankData = []
            for (var i = 0; i < (actualData.length - 1); i++) {
                labels.push('')
                data.push(actualData[i])
                blankData.push(null)
                var difference = actualData[i + 1] - actualData[i];
                var interpolationStep = 1 / interpolationSteps;
                for (var j = 1; j < interpolationSteps; j++) {
                    labels.push('')
                    data.push(actualData[i] + difference * Chart.helpers.easingEffects["linear"](j * interpolationStep));
                    blankData.push(null)
                }
            }
            labels.push('')
            data.push(actualData[i])
            blankData.push(null)
            var data = {
                labels: labels,
                datasets: [
                    {
                        strokeColor: "rgba(243, 118, 27, 1)",
                        data: blankData
                    },
                    {
                        strokeColor: "transparent",
                        data: data
                    }
                ]
            };
            var ctx = document.getElementById("myChart").getContext("2d");
            myLineChart = new Chart(ctx).Line(data, {
                animation: false,
                datasetFill: false,
                pointDot: false,
                datasetStrokeWidth: 5,
                showTooltips: false,
                scaleOverride: true,
                scaleSteps: 12,
                scaleStepWidth: 5,
                scaleStartValue: 30,
                scaleShowVerticalLines: false,
                scaleShowLabels: false,
            });
            animationStep = 0;
        }
        myLineChart.datasets[0].points[animationStep].value = myLineChart.datasets[1].points[animationStep].value
        myLineChart.update();
        animationStep++;
        if (animationStep >= labels.length) {
            myLineChart.destroy();
            myLineChart = undefined;
        }
    }, 10)
}
