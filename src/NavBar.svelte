<script>
    import {AppBar, Button, Col, Icon, Row} from "svelte-materialify";
    import { mdiHomeCircleOutline, mdiRadar, mdiInformationOutline, mdiBookOpen } from '@mdi/js';
    import {goto} from "$app/navigation";
    import MobileNav from "./routes/MobileNav.svelte";
    import {onMount} from "svelte";

    let innerWidth
    let currentRoute = ""

    function routeToPage(route="", replaceState=true) {
        currentRoute = route
        goto(`/${route}`, { replaceState })
    }
    function changeRoute(e) {
        routeToPage(e.detail.route)
    }

    onMount(()=>{
        let pathname = window.location.pathname;
        console.log(pathname)
        currentRoute = pathname.substring(1)
    })
</script>

<style>
    .vDivider {
        margin: 0 4px;
        height: 35px;
        width: 1px;
        background-color: white;
    }
    .title p {
        font-size: 14px;
        margin-bottom: 0;
    }
    .year {
        font-size: 12px;
        color: #acee00;
    }
</style>

<svelte:window bind:innerWidth/>

{#if innerWidth>750}
<AppBar class="gray theme--dark">
    <Row>
        <Col>
            <div class="d-flex align-center">
                <a href="https://www.talenthub.si" target="_blank"><img src="/nth_logo.png" alt="logo"/></a>
                <div class="vDivider"></div>
                <div class="title"><p>NextTalentHub</p><p class="year">2022</p></div>
            </div>
        </Col>

        <Col>
            <Button active={currentRoute === ""} depressed on:click={() => routeToPage()}>
                <Icon path={mdiHomeCircleOutline} label="Home" class="mr-2"/>
                Home
            </Button>
        </Col>
        <Col>
            <Button active={currentRoute === "mesure"} depressed on:click={() => routeToPage('mesure')}>
                <Icon path={mdiRadar} label="Measure position" class="mr-2"/>
                Measure
            </Button>
        </Col>
        <Col>
            <Button active={currentRoute === "info"} depressed on:click={() => routeToPage('info')}>
                <Icon path={mdiInformationOutline} label="Project info" class="mr-2"/>
                Info
            </Button>
        </Col>
        <Col>
            <Button active={currentRoute === "docs"} depressed on:click={() => routeToPage('docs')}>
                <Icon path={mdiBookOpen} label="Documentation" class="mr-2"/>
                Docs
            </Button>
        </Col>
    </Row>
</AppBar>
{:else}
    <MobileNav {currentRoute} on:route={changeRoute}/>
{/if}