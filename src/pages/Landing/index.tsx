import { PageSlider } from '../../components/PageSlider/index.jsx';
import { Page } from '../../components/Page/index.jsx';
import { Home } from '../../components/Home/index.jsx';
import { Bookmarks } from '../../components/Bookmarks/index.jsx';
import { Other } from '../../components/Other/index.jsx';

export function Landing() {
  return (
    <PageSlider>
      <Page><Home /></Page>
      <Page><Bookmarks /></Page>
      <Page><Other /></Page>
    </PageSlider>
  );
}
