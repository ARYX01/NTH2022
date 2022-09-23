<script>
    import Chartjs from 'chart.js';
    import {onMount} from "svelte";
    import liberaApi from "../api/api.js";

    let point = {
        x: 2,
        y: 2
    }

    let data= {
        datasets: [
            {
                label: 'Pozicija',
                fill: false,
                borderColor: 'red',
                backgroundColor: 'transparent',
                data: [point],
            },
        ],
    }

    const options={
        scale: {
            type: 'radialLinear',
            gridLines: { circular: true },
            ticks: {
                display: false,
                stepSize: 0.5,
                beginAtZero: true,
                min: 0,
                max: 2
            },
        },
        scales: {
            xAxes: [
                {
                    gridLines: { color: 'transparent' },
                    ticks: {
                        stepSize: 0.5,
                        min:-2,
                        max:2
                    },
                },
            ],
            yAxes: [
                {
                    gridLines: { color: 'transparent' },
                    ticks: {
                        stepSize: 0.5,
                        min:-2,
                        max:2
                    },
                },
            ],
        }
    }

    let ctx
    let chartCanvas
    onMount(async (promise) => {
        liberaApi().then((res)=>{
            console.log(res)
            data.datasets[0].data.push(res)
            console.log(data)
            ctx = chartCanvas.getContext('2d');
            var chart = new Chartjs(ctx, {
                type: 'scatter',
                data,
                options
            });
        })


    });

</script>

<canvas width="500" height="500" style="max-height: 500px;max-width: 500px" bind:this={chartCanvas} id="myChart" ></canvas>

