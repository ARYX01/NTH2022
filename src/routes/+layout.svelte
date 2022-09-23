<script>
    import {Container, MaterialApp} from "svelte-materialify";
    import NavBar from "../NavBar.svelte";
</script>

<NavBar/>

<MaterialApp>
    <Container><slot /></Container>
</MaterialApp>
