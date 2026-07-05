import { Page, PageSlider } from '../components/PageSlider/index.js';
import { Welcome } from '../components/slides/Welcome.js';
import { Bookmarks } from '../components/slides/Bookmarks.js';
import { Other } from '../components/slides/Other.js';

export function Home() {
  return <PageSlider>
    <Page><Welcome /></Page>
    <Page><Bookmarks /></Page>
    <Page><Other /></Page>
  </PageSlider>;
}
