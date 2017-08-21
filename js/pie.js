        // based ready dom, initialize echarts instance 
        var myChart = echarts.init(document.getElementById('main'));

        // Specify configurations and data graphs 
        var option = {
    backgroundColor: 'None',

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 50,
        max: 600,
        inRange: {
            colorLightness: [0.3, 1]
        }
    },
    series : [
        {
            name:'Top 10% Developers Recruitment',
            type:'pie',
            radius : '65%',
            center: ['50%', '50%'],
            data:[
                {value:40, name:'Solution Architech'},
                {value:110, name:'.NET Developer'},
                {value:110, name:'C, C++ Developer'},
                {value:130, name:'JAVA Developer'},
                {value:130, name:'Mobile App Developer'},
                {value:120, name:'ORACLE PL/ SQL Developer'},
                {value:270, name:'PHP Deveopler'},
                {value:40, name:'Specific App Developer'},
                {value:50, name:'Project Manager'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: '',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(0, 0, 0, 0.4)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.2)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#1A53F0',
                    shadowBlur: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

        // Use just the specified configurations and data charts. 
        myChart.setOption(option);