$(window).on("load", init);

function init() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Yes, my parents went to college',
                'no,my parents did not go to college',
                'do not know'
            ],
            datasets: [{
                data: [65, 30, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    const ctx2 = document.getElementById('myChart2');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['English',
                'French',
                'Other',
                'Prefer not to say',
            ],
            datasets: [{

                data: [44, 2, 51, 3],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }

            },
            aspectRatio: 1
        }
    })

    const ctx3 = document.getElementById('myChart3');
    new Chart(ctx3, {
        type: 'line',
        
        data: {
            labels: [
                '1996',
                '2001',
                '2006',
                '2011',
            ],
            datasets: [{
                label:'GBC',
                data: [7751, 8356, 11102, 14068],
                borderWidth: 1
            },
            {
                label:'Seneca',
                data: [12452, 13374, 14475, 15668],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

}