<script>
    import { toc, html } from './info.md'
    import {Container} from "svelte-materialify";
    const source = html
</script>
<style>
    .section {
        margin-top: 50px;
    }
</style>

<div class="section">
    <Container style="max-width: 85%">{@html source}</Container>
</div>