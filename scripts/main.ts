import { twoslasheTypes } from './jobs/twoslash-types';
import { downloadChangelog } from './jobs/fetch-changelog';
import { renderShields } from './jobs/render-shields';
import { sys } from './sys';

async function pipeline() {
  await sys.pipeline({ renderShields, downloadChangelog, twoslasheTypes });
}

pipeline();
