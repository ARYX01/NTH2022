<script>
    import { toc, html } from './docs.md'
    import {Container} from "svelte-materialify";
    const source = html
</script>

<style>
    .section {
        margin-top: 50px;
    }
</style>

<div class="section">
    <Container style="max-width: 85%">
        <h3 class="text-center">LIBERA Spark EL / HL</h3>
        <hr>
        <img style="width: 90%" src="libera.png" alt="Libera"/>
        {@html source}
    </Container>
</div>