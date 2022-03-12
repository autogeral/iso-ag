var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart (ctx, {
    type: 'bar',
    data: {
        labels: ['2018', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', '2019'],
        datasets:[
            {
                label: 'Histórico',
                data: [{x:'2018', y:98.20},{x: '2019', y:98.80}],
                backgroundColor:[ 
                '#3B4BFF',
                '#3B4BFF'
                ],
            },
            {
                label: 'Realizado dentro da meta',
                data: [{x: 'Jan', y:70}, {x: 'Fev', y:99.15},{x: 'Mar', y:98.62},{x: 'Abr', y:98.48},{x: 'Mai', y:98.59}, {x: 'Jun', y:99},{x: 'Jul', y:99.09}, {x: 'Ago', y:98.66}, {x:'Set', y:97.74}, {x:'Out', y:97.54},{x:'Nov', y:98.77},{x:'Dez', y:98.95}],
                backgroundColor:[ 
                '#6FFF36',
                '#6FFF36',
                '#6FFF36',
                '#6FFF36',
                '#6FFF36',
                '#6FFF36',
                '#6FFF36',
                '#6FFF36',
                '#6FFF36',
                '#6FFF36',
                '#6FFF36',
                '#6FFF36'
                ],
                borderWidth: 1,
                barThickness: "flex",
            }
        ],
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero: true
                }
            }]
        }
    }
})