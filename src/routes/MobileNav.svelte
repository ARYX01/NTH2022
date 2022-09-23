<script>
    import {AppBar, Button, Col, Icon, Row} from "svelte-materialify";
    import { mdiHomeCircleOutline, mdiRadar, mdiInformationOutline, mdiBookOpen } from '@mdi/js';
    import {createEventDispatcher, onMount} from "svelte";
    export let currentRoute
    const dispatch = createEventDispatcher();

    function routeToPage(route="") {
        dispatch('route', {
            route
        });
    }
    onMount( () => {
        const barTitles = document.querySelectorAll(".s-app-bar__title")
        barTitles.item(0).style.display = "none";
    })
</script>

<style>
    .d-fixed {
        position: fixed;
        bottom: 0;
        height: 80px;
        width: -webkit-fill-available;
    }
    .s-app-bar .s-app-bar__title {
        display: none;
    }
</style>

<div class="d-fixed">
    <AppBar class="gray theme--dark" height="80px">
        <Row>
            <Col>
                <div class="d-flex flex-column align-center">
                    <Button active={currentRoute === ""} fab depressed on:click={() => routeToPage()}>
                        <Icon path={mdiHomeCircleOutline} label="Home"/>
                    </Button>
                    <span>Home</span>
                </div>
            </Col>
            <Col>
                <div class="d-flex flex-column align-center">
                    <Button active={currentRoute === "mesure"} fab depressed on:click={() => routeToPage('mesure')}>
                        <Icon path={mdiRadar} label="Measure position"/>
                    </Button>
                    <span>Measure</span>
                </div>
            </Col>
            <Col>
                <div class="d-flex flex-column align-center">
                    <Button active={currentRoute === "info"} fab depressed on:click={() => routeToPage('info')}>
                        <Icon path={mdiInformationOutline} label="Project info"/>
                    </Button>
                    <span>Info</span>
                </div>
            </Col>
            <Col>
                <div class="d-flex flex-column align-center">
                    <Button active={currentRoute === "docs"} fab depressed on:click={() => routeToPage('docs')}>
                        <Icon path={mdiBookOpen} label="Documentation"/>
                    </Button>
                    <span>Docs</span>
                </div>
            </Col>
        </Row>
    </AppBar>
</div>