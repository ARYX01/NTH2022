<script>
    import { Scatter } from 'svelte-chartjs';
    import 'chart.js/auto';
    import {Container, ProgressLinear} from "svelte-materialify";
    import {onMount, onDestroy } from "svelte";
    import liberaApi from "../api/api.js";

    let points = [{x:1,y:1}]
    let scanTimeout
    let refreshText = "loading"

    onMount(()=>{

        scanTimeout = setInterval(()=>{
            console.log('refreshing')
            let newdata = data.datasets[0].data
            let newdataCurrent = data.datasets[1].data
            newdataCurrent = [{}]
            //console.log(newdata)
            if(newdata.length===20)
                newdata.shift()
            refreshText="refreshing"
            liberaApi().then( point => {
                setTimeout(()=>{
                    newdata.push(point)
                    data.datasets[0].data = newdata
                }, 500)
                newdataCurrent.push(point)
                data.datasets[1].data = newdataCurrent
                //refreshText=""
            })
        }, 500)
    })

    onDestroy(()=>{
        if(scanTimeout)
            clearInterval(scanTimeout)
    })

    let data = {
        datasets: [
            {
                borderColor: 'rgba(100,0,150, .4)',
                backgroundColor: 'rgba(100,0,150, .6)',
                label: 'Stare pozicije',
                data: [{}],
            },
            {
                borderColor: 'rgba(255,0,255, .1)',
                backgroundColor: 'rgba(255,0,255, .3)',
                label: 'Sedanja pozicija',
                data: [{}],
            }
        ]
    }

    $: data = data

    const options={
        /*responsive: true,
        maintainAspectRatio: true,*/
        aspectRatio: 0.96,
        scales: {
            radial: {
                type: 'radialLinear',
                grid: { circular: true, color:'rgba(0,0,0, .2)' },
                min: 0,
                max: 2,
                ticks: {
                    display: false,
                    stepSize: 0.5,
                }
            },
            x: {
                title:{text:'x', display:true, align:'end', color:"#acee00",},
                position:'center',
                grid: { color: 'transparent' },
                min: -2,
                max: 2,
                ticks: {
                    stepSize: 0.5,
                }
            },
            y: {
                title:{text:'y', display:true, align:'end', color:"#acee00",},
                position:'center',
                grid: { color: 'transparent' },
                min: -2,
                max: 2,
                ticks: {
                    stepSize: 0.5,
                }
            }
        }
    }
</script>

<p class="text-center">Light Beam Position Visualization</p>

<div class="d-flex">
    <Container style="max-width: 500px">
        <Scatter {data} {options} />
        {#if refreshText==="refreshing"}
            <br/>
            <ProgressLinear indeterminate />
        {:else}
            <h4 class="text-center">{refreshText}</h4>
        {/if}
    </Container>
</div>

