<script>
    import Chart from 'svelte-frappe-charts';
    import {onMount} from "svelte";
    import liberaApi from "../api/api";

    const getLabels = (num) => {
        let labels = []
        for(let i=0; i<num; i++) labels.push(i)
        return labels
    }

    const dataSampleSize = 10

    let data = {

        labels: [-4,-3,-2,-1,0,1,2,3,4],
        datasets: [
            {
                name: "Posicija",
                values: [30],
                chartType: 'line'
            },{
                name: "prostor",
                values: [30, 50, -10, 15, 18, 32, 27, 14],
                chartType: 'pie'
            }
        ],
        /*yMarkers: [{ label: "Min", value: -4 },
            { label: "Max", value: 4 }],*/

        yRegions: [{ label: "Region", start: -5, end: 5 }]
    };

    let axisOptions = {
        xIsSeries: true // default: false
    }

    let chartRef;

    function updateData() {
        data = {
            labels: ['Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                    values: [300, 380, 275]
                }
            ]
        };
    }

    onMount( () => {
        liberaApi()
    })
</script>

<Chart title="Libera Spark" data={data} type="axis-mixed"/>

<Chart title="Libera Spark" data={data} type="pie"/>