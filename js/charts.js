function getGrapich(i) {
    var e = document.getElementById("departmanSecimiYap_"+i);
    var strUser = e.options[e.selectedIndex].value;
    if(strUser === "all"){
        $(".tumDepartmanlar").css("display","block");
        $(".satisDepartmani").css("display","none");
        $(".digerDepartmani").css("display","none");
        allDepChart(i);
    }else if(strUser === "satis"){
        $(".tumDepartmanlar").css("display","none");
        $(".satisDepartmani").css("display","block");
        $(".digerDepartmani").css("display","none");
        salesDepChart(i);
    }else{
        $(".tumDepartmanlar").css("display","none");
        $(".satisDepartmani").css("display","none");
        $(".digerDepartmani").css("display","block");
        otherDepChart(i);
    }
}

function getGrapichAdminETO(i) {
    var e = document.getElementById("departmanSecimiYap_"+i);
    var strUser = e.options[e.selectedIndex].value;
    if(strUser === "all"){
        $(".tumDepartmanlarETO").css("display","block");
        $(".satisDepartmaniETO").css("display","none");
        $(".digerDepartmaniETO").css("display","none");
        tripleChartBuild(i);
    }else if(strUser === "satis"){
        $(".tumDepartmanlarETO").css("display","none");
        $(".satisDepartmaniETO").css("display","block");
        $(".digerDepartmaniETO").css("display","none");
        tripleChartBuild2(i);
    }else{
        $(".tumDepartmanlarETO").css("display","none");
        $(".satisDepartmaniETO").css("display","none");
        $(".digerDepartmaniETO").css("display","block");
        tripleChartBuild3(i);
    }
}

function getGrapichAdminEOTO(i) {
    var e = document.getElementById("departmanSecimiYapEOTO_"+i);
    var strUser = e.options[e.selectedIndex].value;
    if(strUser === "all"){
        $(".tumDepartmanlarEOTO").css("display","block");
        $(".satisDepartmaniEOTO").css("display","none");
        $(".digerDepartmaniEOTO").css("display","none");
        tripleChartBuildETO(i);
    }else if(strUser === "satis"){
        $(".tumDepartmanlarEOTO").css("display","none");
        $(".satisDepartmaniEOTO").css("display","block");
        $(".digerDepartmaniEOTO").css("display","none");
        tripleChartBuildETO2(i);
    }else{
        $(".tumDepartmanlarEOTO").css("display","none");
        $(".satisDepartmaniEOTO").css("display","none");
        $(".digerDepartmaniEOTO").css("display","block");
        tripleChartBuildETO3(i);
    }
}

function getGrapichAdminPDH(i) {
    var e = document.getElementById("departmanSecimiYapPDH_"+i);
    var strUser = e.options[e.selectedIndex].value;
    if(strUser === "all"){
        $(".tumDepartmanlarPDH").css("display","block");
        $(".satisDepartmaniPDH").css("display","none");
        $(".digerDepartmaniPDH").css("display","none");
        tripleChartBuildPDH(i);
    }else if(strUser === "satis"){
        $(".tumDepartmanlarPDH").css("display","none");
        $(".satisDepartmaniPDH").css("display","block");
        $(".digerDepartmaniPDH").css("display","none");
        tripleChartBuildPDH2(i);
    }else{
        $(".tumDepartmanlarPDH").css("display","none");
        $(".satisDepartmaniPDH").css("display","none");
        $(".digerDepartmaniPDH").css("display","block");
        tripleChartBuildPDH3(i);
    }
}

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
function totalEmpChart(i) {
    am4core.useTheme(am4themes_animated);

    var totalEmpChartId = document.getElementById("totalEmpChart_"+i);
    var totalEmpChartValue1 = parseInt(totalEmpChartId.getAttribute("data-percent1"));
    var totalEmpChartValue2 = parseInt(totalEmpChartId.getAttribute("data-percent2"));


    // create chart
    var chart = am4core.create("totalEmpChart_"+i, am4charts.GaugeChart);

    chart.innerRadius = am4core.percent(72);
    chart.paddingTop = am4core.percent(0);
    chart.paddingLeft = am4core.percent(0);
    chart.paddingRight = am4core.percent(0);
    chart.paddingBottom = am4core.percent(0);

    var colorSet = new am4core.ColorSet();

	var label = chart.chartContainer.createChild(am4core.Label);
	label.fontSize = 32;
	label.marginTop = -50;
	label.align = "center";
	label.fill = am4core.color("#ffffff");
	label.html = '<span class="icon-icon-employee"></span>';

    var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 100;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = true;

    var range2 = axis2.axisRanges.create();
    range2.value = 0;
    range2.endValue = 70;
    range2.axisFill.fillOpacity = 1;
    range2.axisFill.fill = am4core.color("#ffffff");
    range2.axisFill.radius = am4core.percent(117);
    range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    range2.grid.disabled = true;

    var range3 = axis2.axisRanges.create();
    range3.value = 70;
    range3.endValue = 100;
    range3.axisFill.fillOpacity = 1;
    range3.axisFill.fill = am4core.color("#DADADA");
    range3.axisFill.radius = am4core.percent(117);
    range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    range3.grid.disabled = true;

    var hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(10);
    hand.startWidth = 0;
    hand.pin.disabled = true;
    hand.value = 0;
    hand.opacity = 0;

    hand.events.on("propertychanged", function(ev) {
        range2.endValue = ev.target.value;
        range3.value = ev.target.value;
    });

    var animation1 = new am4core.Animation(hand, {
        property: "value",
        to: 70
    }, 2000).start();

}

function allDepChart(i) {

    var allDepChartId = document.getElementById("allDepChart_"+i);
    var allDepChartValue1 = parseInt(allDepChartId.getAttribute("data-percent1"));
    var allDepChartValue2 = parseInt(allDepChartId.getAttribute("data-percent2"));

    // create chart
    var chart = am4core.create("allDepChart_"+i, am4charts.GaugeChart);

    chart.innerRadius = am4core.percent(72);
    chart.paddingTop = am4core.percent(0);
    chart.paddingLeft = am4core.percent(0);
    chart.paddingRight = am4core.percent(0);
    chart.paddingBottom = am4core.percent(0);

    var colorSet = new am4core.ColorSet();

    var axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.renderer.innerRadius = 10
    axis.strictMinMax = true;
    axis.renderer.labels.template.disabled = true;
    axis.renderer.ticks.template.disabled = true;
    axis.renderer.grid.template.disabled = true;

    var range0 = axis.axisRanges.create();
    range0.value = 0;
    range0.endValue = allDepChartValue1;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = am4core.color("#e42c3b");
    range0.grid.disabled = true;

    var range1 = axis.axisRanges.create();
    range1.value = allDepChartValue1;
    range1.endValue = 100;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = am4core.color("#DADADA");
    range1.grid.disabled = true;

    var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 100;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.ticks.template.strokeOpacity = 0;
    axis2.renderer.ticks.template.strokeWidth = 0;
    axis2.renderer.ticks.template.length = 0;

    var range2 = axis2.axisRanges.create();
    range2.value = 0;
    range2.endValue = allDepChartValue2;
    range2.axisFill.fillOpacity = 1;
    range2.axisFill.fill = am4core.color("#2d96cd");
    range2.axisFill.radius = am4core.percent(117);
    range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    range2.grid.disabled = true;

    var range3 = axis2.axisRanges.create();
    range3.value = allDepChartValue2;
    range3.endValue = 100;
    range3.axisFill.fillOpacity = 1;
    range3.axisFill.fill = am4core.color("#DADADA");
    range3.axisFill.radius = am4core.percent(117);
    range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    range3.grid.disabled = true;

    var hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(10);
    hand.startWidth = 0;
    hand.pin.disabled = true;
    hand.value = 0;
    hand.opacity = 0;

    var hand2 = chart.hands.push(new am4charts.ClockHand());
    hand2.axis = axis;
    hand2.innerRadius = am4core.percent(10);
    hand2.startWidth = 0;
    hand2.pin.disabled = true;
    hand2.value = 0;
    hand2.opacity = 0;

    hand.events.on("propertychanged", function(ev) {
        range2.endValue = ev.target.value;
        range3.value = ev.target.value;
    });
    hand2.events.on("propertychanged", function(ev) {
        range0.endValue = ev.target.value;
        range1.value = ev.target.value;
    });

    var animation1 = new am4core.Animation(hand, {
        property: "value",
        to: allDepChartValue2
    }, 2000).start();

    var animation2 = new am4core.Animation(hand2, {
        property: "value",
        to: allDepChartValue1
    }, 2000).start();

}

function salesDepChart(i) {

    var allDepChartId = document.getElementById("salesDepChart_"+i);
    var allDepChartValue1 = allDepChartId.getAttribute("data-percent1");
    var allDepChartValue2 = allDepChartId.getAttribute("data-percent2");


    // create chart
    var chart = am4core.create("salesDepChart_"+i, am4charts.GaugeChart);

    chart.innerRadius = am4core.percent(72);
    chart.paddingTop = am4core.percent(0);
    chart.paddingLeft = am4core.percent(0);
    chart.paddingRight = am4core.percent(0);
    chart.paddingBottom = am4core.percent(0);

    var colorSet = new am4core.ColorSet();

    var axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.renderer.innerRadius = 10
    axis.strictMinMax = true;
    axis.renderer.labels.template.disabled = true;
    axis.renderer.ticks.template.disabled = true;
    axis.renderer.grid.template.disabled = true;

    var range0 = axis.axisRanges.create();
    range0.value = 0;
    range0.endValue = allDepChartValue1;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = am4core.color("#09b409");
    range0.grid.disabled = true;

    var range1 = axis.axisRanges.create();
    range1.value = allDepChartValue1;
    range1.endValue = 100;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = am4core.color("#DADADA");
    range1.grid.disabled = true;

    var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 100;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.ticks.template.strokeOpacity = 0;
    axis2.renderer.ticks.template.strokeWidth = 0;
    axis2.renderer.ticks.template.length = 0;

    var range2 = axis2.axisRanges.create();
    range2.value = 0;
    range2.endValue = allDepChartValue2;
    range2.axisFill.fillOpacity = 1;
    range2.axisFill.fill = am4core.color("#2d96cd");
    range2.axisFill.radius = am4core.percent(117);
    range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    range2.grid.disabled = true;

    var range3 = axis2.axisRanges.create();
    range3.value = allDepChartValue2;
    range3.endValue = 100;
    range3.axisFill.fillOpacity = 1;
    range3.axisFill.fill = am4core.color("#DADADA");
    range3.axisFill.radius = am4core.percent(117);
    range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    range3.grid.disabled = true;

}

function otherDepChart(i) {
    am4core.useTheme(am4themes_animated);

    var allDepChartId = document.getElementById("otherDepChart_"+i);
    var allDepChartValue1 = allDepChartId.getAttribute("data-percent1");
    var allDepChartValue2 = allDepChartId.getAttribute("data-percent2");

    // create chart
    var chart = am4core.create("otherDepChart_"+i, am4charts.GaugeChart);

    chart.innerRadius = am4core.percent(72);
    chart.paddingTop = am4core.percent(0);
    chart.paddingLeft = am4core.percent(0);
    chart.paddingRight = am4core.percent(0);
    chart.paddingBottom = am4core.percent(0);

    var colorSet = new am4core.ColorSet();

    var axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.renderer.innerRadius = 10
    axis.strictMinMax = true;
    axis.renderer.labels.template.disabled = true;
    axis.renderer.ticks.template.disabled = true;
    axis.renderer.grid.template.disabled = true;

    var range0 = axis.axisRanges.create();
    range0.value = 0;
    range0.endValue = allDepChartValue1;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = am4core.color("#072f62");
    range0.grid.disabled = true;

    var range1 = axis.axisRanges.create();
    range1.value = allDepChartValue1;
    range1.endValue = 100;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = am4core.color("#DADADA");
    range1.grid.disabled = true;

    var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 100;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = true;

    var range2 = axis2.axisRanges.create();
    range2.value = 0;
    range2.endValue = allDepChartValue2;
    range2.axisFill.fillOpacity = 1;
    range2.axisFill.fill = am4core.color("#2d96cd");
    range2.axisFill.radius = am4core.percent(117);
    range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    range2.grid.disabled = true;

    var range3 = axis2.axisRanges.create();
    range3.value = allDepChartValue2;
    range3.endValue = 100;
    range3.axisFill.fillOpacity = 1;
    range3.axisFill.fill = am4core.color("#DADADA");
    range3.axisFill.radius = am4core.percent(117);
    range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    range3.grid.disabled = true;

}

function tripleChartBuild(i) {
    /*Chart2 3 Değerli*/
	// create chart
	
    var tripleChartBuildId = document.getElementById("tripleChartBuild_"+i);
    var tripleChartBuildValue1 = parseInt(tripleChartBuildId.getAttribute("data-percent1"));
    var tripleChartBuildValue2 = parseInt(tripleChartBuildId.getAttribute("data-percent2"));
    var tripleChartBuildValue3 = parseInt(tripleChartBuildId.getAttribute("data-percent3"));
	
    var chart2 = am4core.create("tripleChartBuild_"+i, am4charts.GaugeChart);
    chart2.innerRadius = am4core.percent(72);
    chart2.paddingTop = am4core.percent(0);
    chart2.paddingLeft = am4core.percent(0);
    chart2.paddingRight = am4core.percent(0);
    chart2.paddingBottom = am4core.percent(0);

    var colorSet2 = new am4core.ColorSet();

    var axisChart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axisChart2.min = 0;
    axisChart2.max = 100;
    axisChart2.renderer.innerRadius = 10
    axisChart2.strictMinMax = true;
    axisChart2.renderer.labels.template.disabled = true;
    axisChart2.renderer.ticks.template.disabled = true;
    axisChart2.renderer.grid.template.disabled = true;

    var chart2range0 = axisChart2.axisRanges.create();
    chart2range0.value = 0;
    chart2range0.endValue = tripleChartBuildValue1;
    chart2range0.axisFill.fillOpacity = 1;
    chart2range0.axisFill.fill = am4core.color("#e42c3b");
    chart2range0.grid.disabled = true;

    var chart2range1 = axisChart2.axisRanges.create();
    chart2range1.value = tripleChartBuildValue1;
    chart2range1.endValue = 100;
    chart2range1.axisFill.fillOpacity = 1;
    chart2range1.axisFill.fill = am4core.color("#DADADA");
    chart2range1.grid.disabled = true;

    var axis2Chart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axis2Chart2.min = 0;
    axis2Chart2.max = 100;
    axis2Chart2.strictMinMax = true;
    axis2Chart2.renderer.labels.template.disabled = true;
    axis2Chart2.renderer.ticks.template.disabled = true;
    axis2Chart2.renderer.grid.template.disabled = true;

    var chart2range2 = axis2Chart2.axisRanges.create();
    chart2range2.value = 0;
    chart2range2.endValue = tripleChartBuildValue2;
    chart2range2.axisFill.fillOpacity = 1;
    chart2range2.axisFill.fill = am4core.color("#69a9f9");
    chart2range2.axisFill.radius = am4core.percent(117);
    chart2range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range2.grid.disabled = true;

    var chart2range3 = axis2Chart2.axisRanges.create();
    chart2range3.value = tripleChartBuildValue2;
    chart2range3.endValue = tripleChartBuildValue3;
    chart2range3.axisFill.fillOpacity = 1;
    chart2range3.axisFill.fill = am4core.color("#af46d1");
    chart2range3.axisFill.radius = am4core.percent(117);
    chart2range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range3 .grid.disabled = true;

    var chart2range4 = axis2Chart2.axisRanges.create();
    chart2range4.value = tripleChartBuildValue3;
    chart2range4.endValue = 100;
    chart2range4.axisFill.fillOpacity = 1;
    chart2range4.axisFill.fill = am4core.color("#DADADA");
    chart2range4.axisFill.radius = am4core.percent(117);
    chart2range4.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range4 .grid.disabled = true;
}

function tripleChartBuild2(i) {
    /*Chart2 3 Değerli*/
	// create chart
	
    var tripleChartBuildId = document.getElementById("tripleChartBuild2_"+i);
    var tripleChartBuildValue1 = parseInt(tripleChartBuildId.getAttribute("data-percent1"));
    var tripleChartBuildValue2 = parseInt(tripleChartBuildId.getAttribute("data-percent2"));
    var tripleChartBuildValue3 = parseInt(tripleChartBuildId.getAttribute("data-percent3"));
	
    var chart2 = am4core.create("tripleChartBuild2_"+i, am4charts.GaugeChart);
    chart2.innerRadius = am4core.percent(72);
    chart2.paddingTop = am4core.percent(0);
    chart2.paddingLeft = am4core.percent(0);
    chart2.paddingRight = am4core.percent(0);
    chart2.paddingBottom = am4core.percent(0);

    var colorSet2 = new am4core.ColorSet();

    var axisChart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axisChart2.min = 0;
    axisChart2.max = 100;
    axisChart2.renderer.innerRadius = 10
    axisChart2.strictMinMax = true;
    axisChart2.renderer.labels.template.disabled = true;
    axisChart2.renderer.ticks.template.disabled = true;
    axisChart2.renderer.grid.template.disabled = true;

    var chart2range0 = axisChart2.axisRanges.create();
    chart2range0.value = 0;
    chart2range0.endValue = tripleChartBuildValue1;
    chart2range0.axisFill.fillOpacity = 1;
    chart2range0.axisFill.fill = am4core.color("#e42c3b");
    chart2range0.grid.disabled = true;

    var chart2range1 = axisChart2.axisRanges.create();
    chart2range1.value = tripleChartBuildValue1;
    chart2range1.endValue = 100;
    chart2range1.axisFill.fillOpacity = 1;
    chart2range1.axisFill.fill = am4core.color("#DADADA");
    chart2range1.grid.disabled = true;

    var axis2Chart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axis2Chart2.min = 0;
    axis2Chart2.max = 100;
    axis2Chart2.strictMinMax = true;
    axis2Chart2.renderer.labels.template.disabled = true;
    axis2Chart2.renderer.ticks.template.disabled = true;
    axis2Chart2.renderer.grid.template.disabled = true;

    var chart2range2 = axis2Chart2.axisRanges.create();
    chart2range2.value = 0;
    chart2range2.endValue = tripleChartBuildValue2;
    chart2range2.axisFill.fillOpacity = 1;
    chart2range2.axisFill.fill = am4core.color("#69a9f9");
    chart2range2.axisFill.radius = am4core.percent(117);
    chart2range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range2.grid.disabled = true;

    var chart2range3 = axis2Chart2.axisRanges.create();
    chart2range3.value = tripleChartBuildValue2;
    chart2range3.endValue = tripleChartBuildValue3;
    chart2range3.axisFill.fillOpacity = 1;
    chart2range3.axisFill.fill = am4core.color("#af46d1");
    chart2range3.axisFill.radius = am4core.percent(117);
    chart2range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range3 .grid.disabled = true;

    var chart2range4 = axis2Chart2.axisRanges.create();
    chart2range4.value = tripleChartBuildValue3;
    chart2range4.endValue = 100;
    chart2range4.axisFill.fillOpacity = 1;
    chart2range4.axisFill.fill = am4core.color("#DADADA");
    chart2range4.axisFill.radius = am4core.percent(117);
    chart2range4.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range4 .grid.disabled = true;
}

function tripleChartBuild3(i) {
    /*Chart2 3 Değerli*/
	// create chart
	
    var tripleChartBuildId = document.getElementById("tripleChartBuild3_"+i);
    var tripleChartBuildValue1 = parseInt(tripleChartBuildId.getAttribute("data-percent1"));
    var tripleChartBuildValue2 = parseInt(tripleChartBuildId.getAttribute("data-percent2"));
    var tripleChartBuildValue3 = parseInt(tripleChartBuildId.getAttribute("data-percent3"));
	
    var chart2 = am4core.create("tripleChartBuild3_"+i, am4charts.GaugeChart);
    chart2.innerRadius = am4core.percent(72);
    chart2.paddingTop = am4core.percent(0);
    chart2.paddingLeft = am4core.percent(0);
    chart2.paddingRight = am4core.percent(0);
    chart2.paddingBottom = am4core.percent(0);

    var colorSet2 = new am4core.ColorSet();

    var axisChart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axisChart2.min = 0;
    axisChart2.max = 100;
    axisChart2.renderer.innerRadius = 10
    axisChart2.strictMinMax = true;
    axisChart2.renderer.labels.template.disabled = true;
    axisChart2.renderer.ticks.template.disabled = true;
    axisChart2.renderer.grid.template.disabled = true;

    var chart2range0 = axisChart2.axisRanges.create();
    chart2range0.value = 0;
    chart2range0.endValue = tripleChartBuildValue1;
    chart2range0.axisFill.fillOpacity = 1;
    chart2range0.axisFill.fill = am4core.color("#e42c3b");
    chart2range0.grid.disabled = true;

    var chart2range1 = axisChart2.axisRanges.create();
    chart2range1.value = tripleChartBuildValue1;
    chart2range1.endValue = 100;
    chart2range1.axisFill.fillOpacity = 1;
    chart2range1.axisFill.fill = am4core.color("#DADADA");
    chart2range1.grid.disabled = true;

    var axis2Chart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axis2Chart2.min = 0;
    axis2Chart2.max = 100;
    axis2Chart2.strictMinMax = true;
    axis2Chart2.renderer.labels.template.disabled = true;
    axis2Chart2.renderer.ticks.template.disabled = true;
    axis2Chart2.renderer.grid.template.disabled = true;

    var chart2range2 = axis2Chart2.axisRanges.create();
    chart2range2.value = 0;
    chart2range2.endValue = tripleChartBuildValue2;
    chart2range2.axisFill.fillOpacity = 1;
    chart2range2.axisFill.fill = am4core.color("#69a9f9");
    chart2range2.axisFill.radius = am4core.percent(117);
    chart2range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range2.grid.disabled = true;

    var chart2range3 = axis2Chart2.axisRanges.create();
    chart2range3.value = tripleChartBuildValue2;
    chart2range3.endValue = tripleChartBuildValue3;
    chart2range3.axisFill.fillOpacity = 1;
    chart2range3.axisFill.fill = am4core.color("#af46d1");
    chart2range3.axisFill.radius = am4core.percent(117);
    chart2range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range3 .grid.disabled = true;

    var chart2range4 = axis2Chart2.axisRanges.create();
    chart2range4.value = tripleChartBuildValue3;
    chart2range4.endValue = 100;
    chart2range4.axisFill.fillOpacity = 1;
    chart2range4.axisFill.fill = am4core.color("#DADADA");
    chart2range4.axisFill.radius = am4core.percent(117);
    chart2range4.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range4 .grid.disabled = true;
}

function tripleChartBuildPDH(i) {
    /*Chart2 3 Değerli*/
	// create chart
	var tripleChartBuildPDHId = document.getElementById("tripleChartBuildPDH_"+i);
    var tripleChartBuildPDHValue1 = parseInt(tripleChartBuildPDHId.getAttribute("data-percent1"));
    var tripleChartBuildPDHValue2 = parseInt(tripleChartBuildPDHId.getAttribute("data-percent2"));
    var tripleChartBuildPDHValue3 = parseInt(tripleChartBuildPDHId.getAttribute("data-percent3"));
	
    var chart2 = am4core.create("tripleChartBuildPDH_"+i, am4charts.GaugeChart);
    chart2.innerRadius = am4core.percent(72);
    chart2.paddingTop = am4core.percent(0);
    chart2.paddingLeft = am4core.percent(0);
    chart2.paddingRight = am4core.percent(0);
    chart2.paddingBottom = am4core.percent(0);

    var colorSet2 = new am4core.ColorSet();

    var axisChart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axisChart2.min = 0;
    axisChart2.max = 100;
    axisChart2.renderer.innerRadius = 10
    axisChart2.strictMinMax = true;
    axisChart2.renderer.labels.template.disabled = true;
    axisChart2.renderer.ticks.template.disabled = true;
    axisChart2.renderer.grid.template.disabled = true;

    var chart2range0 = axisChart2.axisRanges.create();
    chart2range0.value = 0;
    chart2range0.endValue = tripleChartBuildPDHValue1;
    chart2range0.axisFill.fillOpacity = 1;
    chart2range0.axisFill.fill = am4core.color("#002e6d");
    chart2range0.grid.disabled = true;

    var chart2range1 = axisChart2.axisRanges.create();
    chart2range1.value = tripleChartBuildPDHValue1;
    chart2range1.endValue = 100;
    chart2range1.axisFill.fillOpacity = 1;
    chart2range1.axisFill.fill = am4core.color("#DADADA");
    chart2range1.grid.disabled = true;

    var axis2Chart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axis2Chart2.min = 0;
    axis2Chart2.max = 100;
    axis2Chart2.strictMinMax = true;
    axis2Chart2.renderer.labels.template.disabled = true;
    axis2Chart2.renderer.ticks.template.disabled = true;
    axis2Chart2.renderer.grid.template.disabled = true;

    var chart2range2 = axis2Chart2.axisRanges.create();
    chart2range2.value = 0;
    chart2range2.endValue = tripleChartBuildPDHValue2;
    chart2range2.axisFill.fillOpacity = 1;
    chart2range2.axisFill.fill = am4core.color("#69a9f9");
    chart2range2.axisFill.radius = am4core.percent(117);
    chart2range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range2.grid.disabled = true;

    var chart2range3 = axis2Chart2.axisRanges.create();
    chart2range3.value = tripleChartBuildPDHValue2;
    chart2range3.endValue = tripleChartBuildPDHValue3;
    chart2range3.axisFill.fillOpacity = 1;
    chart2range3.axisFill.fill = am4core.color("#af46d1");
    chart2range3.axisFill.radius = am4core.percent(117);
    chart2range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range3 .grid.disabled = true;

    var chart2range4 = axis2Chart2.axisRanges.create();
    chart2range4.value = tripleChartBuildPDHValue3;
    chart2range4.endValue = 100;
    chart2range4.axisFill.fillOpacity = 1;
    chart2range4.axisFill.fill = am4core.color("#DADADA");
    chart2range4.axisFill.radius = am4core.percent(117);
    chart2range4.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range4 .grid.disabled = true;
}

function tripleChartBuildPDH2(i) {
    /*Chart2 3 Değerli*/
	// create chart
	var tripleChartBuildPDHId = document.getElementById("tripleChartBuildPDH2_"+i);
    var tripleChartBuildPDHValue1 = parseInt(tripleChartBuildPDHId.getAttribute("data-percent1"));
    var tripleChartBuildPDHValue2 = parseInt(tripleChartBuildPDHId.getAttribute("data-percent2"));
    var tripleChartBuildPDHValue3 = parseInt(tripleChartBuildPDHId.getAttribute("data-percent3"));
	
    var chart2 = am4core.create("tripleChartBuildPDH2_"+i, am4charts.GaugeChart);
    chart2.innerRadius = am4core.percent(72);
    chart2.paddingTop = am4core.percent(0);
    chart2.paddingLeft = am4core.percent(0);
    chart2.paddingRight = am4core.percent(0);
    chart2.paddingBottom = am4core.percent(0);

    var colorSet2 = new am4core.ColorSet();

    var axisChart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axisChart2.min = 0;
    axisChart2.max = 100;
    axisChart2.renderer.innerRadius = 10
    axisChart2.strictMinMax = true;
    axisChart2.renderer.labels.template.disabled = true;
    axisChart2.renderer.ticks.template.disabled = true;
    axisChart2.renderer.grid.template.disabled = true;

    var chart2range0 = axisChart2.axisRanges.create();
    chart2range0.value = 0;
    chart2range0.endValue = tripleChartBuildPDHValue1;
    chart2range0.axisFill.fillOpacity = 1;
    chart2range0.axisFill.fill = am4core.color("#002e6d");
    chart2range0.grid.disabled = true;

    var chart2range1 = axisChart2.axisRanges.create();
    chart2range1.value = tripleChartBuildPDHValue1;
    chart2range1.endValue = 100;
    chart2range1.axisFill.fillOpacity = 1;
    chart2range1.axisFill.fill = am4core.color("#DADADA");
    chart2range1.grid.disabled = true;

    var axis2Chart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axis2Chart2.min = 0;
    axis2Chart2.max = 100;
    axis2Chart2.strictMinMax = true;
    axis2Chart2.renderer.labels.template.disabled = true;
    axis2Chart2.renderer.ticks.template.disabled = true;
    axis2Chart2.renderer.grid.template.disabled = true;

    var chart2range2 = axis2Chart2.axisRanges.create();
    chart2range2.value = 0;
    chart2range2.endValue = tripleChartBuildPDHValue2;
    chart2range2.axisFill.fillOpacity = 1;
    chart2range2.axisFill.fill = am4core.color("#69a9f9");
    chart2range2.axisFill.radius = am4core.percent(117);
    chart2range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range2.grid.disabled = true;

    var chart2range3 = axis2Chart2.axisRanges.create();
    chart2range3.value = tripleChartBuildPDHValue2;
    chart2range3.endValue = tripleChartBuildPDHValue3;
    chart2range3.axisFill.fillOpacity = 1;
    chart2range3.axisFill.fill = am4core.color("#af46d1");
    chart2range3.axisFill.radius = am4core.percent(117);
    chart2range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range3 .grid.disabled = true;

    var chart2range4 = axis2Chart2.axisRanges.create();
    chart2range4.value = tripleChartBuildPDHValue3;
    chart2range4.endValue = 100;
    chart2range4.axisFill.fillOpacity = 1;
    chart2range4.axisFill.fill = am4core.color("#DADADA");
    chart2range4.axisFill.radius = am4core.percent(117);
    chart2range4.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range4 .grid.disabled = true;
}

function tripleChartBuildPDH3(i) {
    /*Chart2 3 Değerli*/
	// create chart
	var tripleChartBuildPDHId = document.getElementById("tripleChartBuildPDH3_"+i);
    var tripleChartBuildPDHValue1 = parseInt(tripleChartBuildPDHId.getAttribute("data-percent1"));
    var tripleChartBuildPDHValue2 = parseInt(tripleChartBuildPDHId.getAttribute("data-percent2"));
    var tripleChartBuildPDHValue3 = parseInt(tripleChartBuildPDHId.getAttribute("data-percent3"));
	
    var chart2 = am4core.create("tripleChartBuildPDH3_"+i, am4charts.GaugeChart);
    chart2.innerRadius = am4core.percent(72);
    chart2.paddingTop = am4core.percent(0);
    chart2.paddingLeft = am4core.percent(0);
    chart2.paddingRight = am4core.percent(0);
    chart2.paddingBottom = am4core.percent(0);

    var colorSet2 = new am4core.ColorSet();

    var axisChart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axisChart2.min = 0;
    axisChart2.max = 100;
    axisChart2.renderer.innerRadius = 10
    axisChart2.strictMinMax = true;
    axisChart2.renderer.labels.template.disabled = true;
    axisChart2.renderer.ticks.template.disabled = true;
    axisChart2.renderer.grid.template.disabled = true;

    var chart2range0 = axisChart2.axisRanges.create();
    chart2range0.value = 0;
    chart2range0.endValue = tripleChartBuildPDHValue1;
    chart2range0.axisFill.fillOpacity = 1;
    chart2range0.axisFill.fill = am4core.color("#002e6d");
    chart2range0.grid.disabled = true;

    var chart2range1 = axisChart2.axisRanges.create();
    chart2range1.value = tripleChartBuildPDHValue1;
    chart2range1.endValue = 100;
    chart2range1.axisFill.fillOpacity = 1;
    chart2range1.axisFill.fill = am4core.color("#DADADA");
    chart2range1.grid.disabled = true;

    var axis2Chart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axis2Chart2.min = 0;
    axis2Chart2.max = 100;
    axis2Chart2.strictMinMax = true;
    axis2Chart2.renderer.labels.template.disabled = true;
    axis2Chart2.renderer.ticks.template.disabled = true;
    axis2Chart2.renderer.grid.template.disabled = true;

    var chart2range2 = axis2Chart2.axisRanges.create();
    chart2range2.value = 0;
    chart2range2.endValue = tripleChartBuildPDHValue2;
    chart2range2.axisFill.fillOpacity = 1;
    chart2range2.axisFill.fill = am4core.color("#69a9f9");
    chart2range2.axisFill.radius = am4core.percent(117);
    chart2range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range2.grid.disabled = true;

    var chart2range3 = axis2Chart2.axisRanges.create();
    chart2range3.value = tripleChartBuildPDHValue2;
    chart2range3.endValue = tripleChartBuildPDHValue3;
    chart2range3.axisFill.fillOpacity = 1;
    chart2range3.axisFill.fill = am4core.color("#af46d1");
    chart2range3.axisFill.radius = am4core.percent(117);
    chart2range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range3 .grid.disabled = true;

    var chart2range4 = axis2Chart2.axisRanges.create();
    chart2range4.value = tripleChartBuildPDHValue3;
    chart2range4.endValue = 100;
    chart2range4.axisFill.fillOpacity = 1;
    chart2range4.axisFill.fill = am4core.color("#DADADA");
    chart2range4.axisFill.radius = am4core.percent(117);
    chart2range4.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range4 .grid.disabled = true;
}

function tripleChartBuildETO(i) {
    /*Chart2 3 Değerli*/
// create chart
	
	var tripleChartBuildETOId = document.getElementById("tripleChartBuildETO_"+i);
    var tripleChartBuildETOValue1 = parseInt(tripleChartBuildETOId.getAttribute("data-percent1"));
    var tripleChartBuildETOValue2 = parseInt(tripleChartBuildETOId.getAttribute("data-percent2"));
    var tripleChartBuildETOValue3 = parseInt(tripleChartBuildETOId.getAttribute("data-percent3"));
	
    var chart2 = am4core.create("tripleChartBuildETO_"+i, am4charts.GaugeChart);
    chart2.innerRadius = am4core.percent(72);
    chart2.paddingTop = am4core.percent(0);
    chart2.paddingLeft = am4core.percent(0);
    chart2.paddingRight = am4core.percent(0);
    chart2.paddingBottom = am4core.percent(0);

    var colorSet2 = new am4core.ColorSet();

    var axisChart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axisChart2.min = 0;
    axisChart2.max = 100;
    axisChart2.renderer.innerRadius = 10
    axisChart2.strictMinMax = true;
    axisChart2.renderer.labels.template.disabled = true;
    axisChart2.renderer.ticks.template.disabled = true;
    axisChart2.renderer.grid.template.disabled = true;

    var chart2range0 = axisChart2.axisRanges.create();
    chart2range0.value = 0;
    chart2range0.endValue = tripleChartBuildETOValue1;
    chart2range0.axisFill.fillOpacity = 1;
    chart2range0.axisFill.fill = am4core.color("#09b409");
    chart2range0.grid.disabled = true;

    var chart2range1 = axisChart2.axisRanges.create();
    chart2range1.value = tripleChartBuildETOValue1;
    chart2range1.endValue = 100;
    chart2range1.axisFill.fillOpacity = 1;
    chart2range1.axisFill.fill = am4core.color("#DADADA");
    chart2range1.grid.disabled = true;

    var axis2Chart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axis2Chart2.min = 0;
    axis2Chart2.max = 100;
    axis2Chart2.strictMinMax = true;
    axis2Chart2.renderer.labels.template.disabled = true;
    axis2Chart2.renderer.ticks.template.disabled = true;
    axis2Chart2.renderer.grid.template.disabled = true;

    var chart2range2 = axis2Chart2.axisRanges.create();
    chart2range2.value = 0;
    chart2range2.endValue = tripleChartBuildETOValue2;
    chart2range2.axisFill.fillOpacity = 1;
    chart2range2.axisFill.fill = am4core.color("#69a9f9");
    chart2range2.axisFill.radius = am4core.percent(117);
    chart2range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range2.grid.disabled = true;

    var chart2range3 = axis2Chart2.axisRanges.create();
    chart2range3.value = tripleChartBuildETOValue2;
    chart2range3.endValue = tripleChartBuildETOValue3;
    chart2range3.axisFill.fillOpacity = 1;
    chart2range3.axisFill.fill = am4core.color("#af46d1");
    chart2range3.axisFill.radius = am4core.percent(117);
    chart2range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range3 .grid.disabled = true;

    var chart2range4 = axis2Chart2.axisRanges.create();
    chart2range4.value = tripleChartBuildETOValue3;
    chart2range4.endValue = 100;
    chart2range4.axisFill.fillOpacity = 1;
    chart2range4.axisFill.fill = am4core.color("#DADADA");
    chart2range4.axisFill.radius = am4core.percent(117);
    chart2range4.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range4 .grid.disabled = true;
}

function tripleChartBuildETO2(i) {
    /*Chart2 3 Değerli*/
// create chart
	
	var tripleChartBuildETOId = document.getElementById("tripleChartBuildETO2_"+i);
    var tripleChartBuildETOValue1 = parseInt(tripleChartBuildETOId.getAttribute("data-percent1"));
    var tripleChartBuildETOValue2 = parseInt(tripleChartBuildETOId.getAttribute("data-percent2"));
    var tripleChartBuildETOValue3 = parseInt(tripleChartBuildETOId.getAttribute("data-percent3"));
	
    var chart2 = am4core.create("tripleChartBuildETO2_"+i, am4charts.GaugeChart);
    chart2.innerRadius = am4core.percent(72);
    chart2.paddingTop = am4core.percent(0);
    chart2.paddingLeft = am4core.percent(0);
    chart2.paddingRight = am4core.percent(0);
    chart2.paddingBottom = am4core.percent(0);

    var colorSet2 = new am4core.ColorSet();

    var axisChart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axisChart2.min = 0;
    axisChart2.max = 100;
    axisChart2.renderer.innerRadius = 10
    axisChart2.strictMinMax = true;
    axisChart2.renderer.labels.template.disabled = true;
    axisChart2.renderer.ticks.template.disabled = true;
    axisChart2.renderer.grid.template.disabled = true;

    var chart2range0 = axisChart2.axisRanges.create();
    chart2range0.value = 0;
    chart2range0.endValue = tripleChartBuildETOValue1;
    chart2range0.axisFill.fillOpacity = 1;
    chart2range0.axisFill.fill = am4core.color("#09b409");
    chart2range0.grid.disabled = true;

    var chart2range1 = axisChart2.axisRanges.create();
    chart2range1.value = tripleChartBuildETOValue1;
    chart2range1.endValue = 100;
    chart2range1.axisFill.fillOpacity = 1;
    chart2range1.axisFill.fill = am4core.color("#DADADA");
    chart2range1.grid.disabled = true;

    var axis2Chart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axis2Chart2.min = 0;
    axis2Chart2.max = 100;
    axis2Chart2.strictMinMax = true;
    axis2Chart2.renderer.labels.template.disabled = true;
    axis2Chart2.renderer.ticks.template.disabled = true;
    axis2Chart2.renderer.grid.template.disabled = true;

    var chart2range2 = axis2Chart2.axisRanges.create();
    chart2range2.value = 0;
    chart2range2.endValue = tripleChartBuildETOValue2;
    chart2range2.axisFill.fillOpacity = 1;
    chart2range2.axisFill.fill = am4core.color("#69a9f9");
    chart2range2.axisFill.radius = am4core.percent(117);
    chart2range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range2.grid.disabled = true;

    var chart2range3 = axis2Chart2.axisRanges.create();
    chart2range3.value = tripleChartBuildETOValue2;
    chart2range3.endValue = tripleChartBuildETOValue3;
    chart2range3.axisFill.fillOpacity = 1;
    chart2range3.axisFill.fill = am4core.color("#af46d1");
    chart2range3.axisFill.radius = am4core.percent(117);
    chart2range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range3 .grid.disabled = true;

    var chart2range4 = axis2Chart2.axisRanges.create();
    chart2range4.value = tripleChartBuildETOValue3;
    chart2range4.endValue = 100;
    chart2range4.axisFill.fillOpacity = 1;
    chart2range4.axisFill.fill = am4core.color("#DADADA");
    chart2range4.axisFill.radius = am4core.percent(117);
    chart2range4.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range4 .grid.disabled = true;
}

function tripleChartBuildETO3(i) {
    /*Chart2 3 Değerli*/
// create chart
	
	var tripleChartBuildETOId = document.getElementById("tripleChartBuildETO3_"+i);
    var tripleChartBuildETOValue1 = parseInt(tripleChartBuildETOId.getAttribute("data-percent1"));
    var tripleChartBuildETOValue2 = parseInt(tripleChartBuildETOId.getAttribute("data-percent2"));
    var tripleChartBuildETOValue3 = parseInt(tripleChartBuildETOId.getAttribute("data-percent3"));
	
    var chart2 = am4core.create("tripleChartBuildETO3_"+i, am4charts.GaugeChart);
    chart2.innerRadius = am4core.percent(72);
    chart2.paddingTop = am4core.percent(0);
    chart2.paddingLeft = am4core.percent(0);
    chart2.paddingRight = am4core.percent(0);
    chart2.paddingBottom = am4core.percent(0);

    var colorSet2 = new am4core.ColorSet();

    var axisChart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axisChart2.min = 0;
    axisChart2.max = 100;
    axisChart2.renderer.innerRadius = 10
    axisChart2.strictMinMax = true;
    axisChart2.renderer.labels.template.disabled = true;
    axisChart2.renderer.ticks.template.disabled = true;
    axisChart2.renderer.grid.template.disabled = true;

    var chart2range0 = axisChart2.axisRanges.create();
    chart2range0.value = 0;
    chart2range0.endValue = tripleChartBuildETOValue1;
    chart2range0.axisFill.fillOpacity = 1;
    chart2range0.axisFill.fill = am4core.color("#09b409");
    chart2range0.grid.disabled = true;

    var chart2range1 = axisChart2.axisRanges.create();
    chart2range1.value = tripleChartBuildETOValue1;
    chart2range1.endValue = 100;
    chart2range1.axisFill.fillOpacity = 1;
    chart2range1.axisFill.fill = am4core.color("#DADADA");
    chart2range1.grid.disabled = true;

    var axis2Chart2 = chart2.xAxes.push(new am4charts.ValueAxis());
    axis2Chart2.min = 0;
    axis2Chart2.max = 100;
    axis2Chart2.strictMinMax = true;
    axis2Chart2.renderer.labels.template.disabled = true;
    axis2Chart2.renderer.ticks.template.disabled = true;
    axis2Chart2.renderer.grid.template.disabled = true;

    var chart2range2 = axis2Chart2.axisRanges.create();
    chart2range2.value = 0;
    chart2range2.endValue = tripleChartBuildETOValue2;
    chart2range2.axisFill.fillOpacity = 1;
    chart2range2.axisFill.fill = am4core.color("#69a9f9");
    chart2range2.axisFill.radius = am4core.percent(117);
    chart2range2.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range2.grid.disabled = true;

    var chart2range3 = axis2Chart2.axisRanges.create();
    chart2range3.value = tripleChartBuildETOValue2;
    chart2range3.endValue = tripleChartBuildETOValue3;
    chart2range3.axisFill.fillOpacity = 1;
    chart2range3.axisFill.fill = am4core.color("#af46d1");
    chart2range3.axisFill.radius = am4core.percent(117);
    chart2range3.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range3 .grid.disabled = true;

    var chart2range4 = axis2Chart2.axisRanges.create();
    chart2range4.value = tripleChartBuildETOValue3;
    chart2range4.endValue = 100;
    chart2range4.axisFill.fillOpacity = 1;
    chart2range4.axisFill.fill = am4core.color("#DADADA");
    chart2range4.axisFill.radius = am4core.percent(117);
    chart2range4.axisFill.innerRadius = am4core.percent(110); // set it to >100 if you'd like to have some gap between fills
    chart2range4 .grid.disabled = true;
}

function statusChart(i){
    var durumChartId = document.getElementById("durumChart_"+i);
    var durumCenterText = durumChartId.getAttribute("data-percent");
    var durumCenterNum = parseInt(durumCenterText);

    const div = document.createElement('div');

    if(durumCenterNum === 0) {
        div.innerHTML = '<div class="single-chart">\n' +
            '\t\t\t\t\t\t\t\t\t\t<svg viewBox="-2 -2 40 40" class="circular-chart orange">\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<path class="circle-bg"\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t  d="M18 2.0845\n' +
            '          a 15.9155 15.9155 0 0 1 0 31.831\n' +
            '          a 15.9155 15.9155 0 0 1 0 -31.831"\n' +
            '\t\t\t\t\t\t\t\t\t\t\t/>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<text x="18" y="22.35" class="percentage">' + durumCenterNum + '</text>\n' +
            '\t\t\t\t\t\t\t\t\t\t</svg>\n' +
            '\t\t\t\t\t\t\t\t\t</div>';
    }else if (durumCenterNum<100){
        div.innerHTML = '<div class="single-chart">\n' +
            '\t\t\t\t\t\t\t\t\t\t<svg viewBox="-2 -2 40 40" class="circular-chart orange">\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<path class="circle-bg"\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t  d="M18 2.0845\n' +
            '          a 15.9155 15.9155 0 0 1 0 31.831\n' +
            '          a 15.9155 15.9155 0 0 1 0 -31.831"\n' +
            '\t\t\t\t\t\t\t\t\t\t\t/>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<path class="circle"\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t  stroke-dasharray="' + durumCenterNum + ', 100"\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t  d="M18 2.0845\n' +
            '          a 15.9155 15.9155 0 0 1 0 31.831\n' +
            '          a 15.9155 15.9155 0 0 1 0 -31.831"\n' +
            '\t\t\t\t\t\t\t\t\t\t\t/>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<text x="18" y="22.35" class="percentage">' + durumCenterNum + '</text>\n' +
            '\t\t\t\t\t\t\t\t\t\t</svg>\n' +
            '\t\t\t\t\t\t\t\t\t</div>';
    }else{
        div.innerHTML = '<div class="single-chart">\n' +
            '\t\t\t\t\t\t\t\t\t\t<svg viewBox="-2 -2 40 40" class="circular-chart green">\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<path class="circle-bg"\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t  d="M18 2.0845\n' +
            '          a 15.9155 15.9155 0 0 1 0 31.831\n' +
            '          a 15.9155 15.9155 0 0 1 0 -31.831"\n' +
            '\t\t\t\t\t\t\t\t\t\t\t/>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<path class="circle"\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t  stroke-dasharray="' + durumCenterNum + ', 100"\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t  d="M18 2.0845\n' +
            '          a 15.9155 15.9155 0 0 1 0 31.831\n' +
            '          a 15.9155 15.9155 0 0 1 0 -31.831"\n' +
            '\t\t\t\t\t\t\t\t\t\t\t/>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<text x="18" y="22.35" class="percentage">' + durumCenterNum + '</text>\n' +
            '\t\t\t\t\t\t\t\t\t\t</svg>\n' +
            '\t\t\t\t\t\t\t\t\t</div>';
    }
    durumChartId.appendChild(div);
}