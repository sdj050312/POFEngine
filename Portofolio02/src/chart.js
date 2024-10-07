const ctx = document.getElementById('chart01');
Chart.defaults.color = "#000"

new Chart(ctx, {
    type: 'bar',
    color: 'black',
    data: {
      labels: ['한달전', '한달후'],
      datasets: [{
        label: '독서량',
        data: [ 2, 3],
        backgroundColor:'rgb(241, 88, 61)',

    }],
    borderDashOffset:'none',
    borderRadius: '20'
    },

 option: {
    plugin:{
        legend:{
            labels: {
                font: {
                    size :20
                    , weight : 800
                }
            }
        }
    }
 }


});

