<script>
  import Page from 'fragments/Page.svelte';
  import PageContent from 'fragments/PageContent.svelte';
  import PageFooter from 'fragments/PageFooter.svelte';
  import PageHeader from 'fragments/PageHeader.svelte';
</script>

<Page>
  <PageHeader />
  <PageContent>
    <slot />
  </PageContent>
  <PageFooter />
</Page>
