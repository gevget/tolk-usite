import aiInner from '../assets/images/ai 1.webp';
import ai from '../assets/images/ai.webp';
import catalonInner from '../assets/images/catalon 2.webp';
import catalon from '../assets/images/catalon.webp';
import dscInner from '../assets/images/dsc 1.webp';
import dsc from '../assets/images/dsc.webp';
import fnsInner from '../assets/images/fns 1.webp';
import fns from '../assets/images/fns.webp';
import foxInner from '../assets/images/fox 1.webp';
import fox from '../assets/images/fox.webp';
import futureInner from '../assets/images/future 1.webp';
import future from '../assets/images/future.webp';
import heroNew from '../assets/images/hero new.webp';
import komanda from '../assets/images/komanda.webp';
import leadsInner from '../assets/images/leads 1.webp';
import leads from '../assets/images/leads.webp';
import moyInner from '../assets/images/moy 1.webp';
import moy from '../assets/images/moy.webp';
import pronetInner from '../assets/images/pronet 1.webp';
import pronet from '../assets/images/pronet.webp';
import setkaInner from '../assets/images/setka 1.webp';
import setka from '../assets/images/setka.webp';
import simbadInner from '../assets/images/simbad 1.webp';
import simb from '../assets/images/simb.webp';
import smmbazaInner from '../assets/images/smmbaza 1.webp';
import smmbaza from '../assets/images/smmbaza.webp';
import stolkomInner from '../assets/images/stolkom 1.webp';
import stolkom from '../assets/images/stolkom.webp';
import vodInner from '../assets/images/vod 1.webp';
import vod from '../assets/images/vod.webp';
import yandexInner from '../assets/images/yandex 1.webp';
import yandex from '../assets/images/yandex.webp';

const baseUrl = import.meta.env.BASE_URL;

const publicAssetMap: Record<string, string> = {
  '/hero-one.png': `${baseUrl}hero-one.png`,
  '/work.png': `${baseUrl}work.webp`,
  '/skill.png': `${baseUrl}skill.webp`,
  '/ai-inside.png': `${baseUrl}ai-inside.webp`,
};

const importedAssetMap: Record<string, string> = {
  '/src/assets/images/ai 1.png': aiInner,
  '/src/assets/images/ai.png': ai,
  '/src/assets/images/catalon 2.png': catalonInner,
  '/src/assets/images/catalon.png': catalon,
  '/src/assets/images/dsc 1.png': dscInner,
  '/src/assets/images/dsc.jpg': dsc,
  '/src/assets/images/fns 1.png': fnsInner,
  '/src/assets/images/fns.jpg': fns,
  '/src/assets/images/fox 1.png': foxInner,
  '/src/assets/images/fox.jpg': fox,
  '/src/assets/images/future 1.png': futureInner,
  '/src/assets/images/future.png': future,
  '/src/assets/images/hero new.png': heroNew,
  '/src/assets/images/komanda.png': komanda,
  '/src/assets/images/leads 1.png': leadsInner,
  '/src/assets/images/leads.png': leads,
  '/src/assets/images/moy 1.png': moyInner,
  '/src/assets/images/moy.png': moy,
  '/src/assets/images/pronet 1.png': pronetInner,
  '/src/assets/images/pronet.png': pronet,
  '/src/assets/images/setka 1.png': setkaInner,
  '/src/assets/images/setka.png': setka,
  '/src/assets/images/simbad 1.png': simbadInner,
  '/src/assets/images/simb.jpg': simb,
  '/src/assets/images/smmbaza 1.png': smmbazaInner,
  '/src/assets/images/smmbaza.png': smmbaza,
  '/src/assets/images/stolkom 1.png': stolkomInner,
  '/src/assets/images/stolkom.jpg': stolkom,
  '/src/assets/images/vod 1.png': vodInner,
  '/src/assets/images/vod.png': vod,
  '/src/assets/images/yandex 1.png': yandexInner,
  '/src/assets/images/yandex.jpg': yandex,

  // Legacy asset paths kept for existing slide data and galleries.
  '/src/assets/images/ai_intelligence_abstract_1781610109003.jpg': yandex,
  '/src/assets/images/audit_roadmap_abstract_1781607496541.jpg': fns,
  '/src/assets/images/case_city_infrastructure_1781608005789.jpg': vod,
  '/src/assets/images/case_logistics_viz_1781607975934.jpg': simb,
  '/src/assets/images/case_messenger_ui_1781607960558.jpg': pronet,
  '/src/assets/images/case_payment_vibe_1781608019099.jpg': fns,
  '/src/assets/images/case_social_platform_1781607990589.jpg': fox,
  '/src/assets/images/product_education_ai_1781611553224.jpg': future,
  '/src/assets/images/product_logistics_platform_1781611535239.jpg': catalon,
  '/src/assets/images/product_smm_platform_1781611567495.jpg': smmbaza,
  '/src/assets/images/systems_architecture_art_1781610094808.jpg': dsc,
};

const assetDimensionsMap: Record<string, { width: number; height: number }> = {
  '/hero-one.png': { width: 860, height: 1080 },
  '/work.png': { width: 860, height: 1080 },
  '/skill.png': { width: 860, height: 1080 },
  '/ai-inside.png': { width: 860, height: 739 },
  '/src/assets/images/hero new.png': { width: 700, height: 700 },
  '/src/assets/images/komanda.png': { width: 780, height: 800 },
  '/src/assets/images/ai.png': { width: 680, height: 510 },
  '/src/assets/images/catalon.png': { width: 680, height: 510 },
  '/src/assets/images/dsc.jpg': { width: 680, height: 510 },
  '/src/assets/images/fns.jpg': { width: 680, height: 510 },
  '/src/assets/images/fox.jpg': { width: 680, height: 510 },
  '/src/assets/images/future.png': { width: 680, height: 510 },
  '/src/assets/images/leads.png': { width: 680, height: 510 },
  '/src/assets/images/moy.png': { width: 680, height: 510 },
  '/src/assets/images/pronet.png': { width: 680, height: 510 },
  '/src/assets/images/setka.png': { width: 680, height: 510 },
  '/src/assets/images/simb.jpg': { width: 680, height: 510 },
  '/src/assets/images/smmbaza.png': { width: 680, height: 510 },
  '/src/assets/images/stolkom.jpg': { width: 680, height: 510 },
  '/src/assets/images/vod.png': { width: 680, height: 510 },
  '/src/assets/images/yandex.jpg': { width: 680, height: 510 },
  '/src/assets/images/ai 1.png': { width: 1280, height: 721 },
  '/src/assets/images/catalon 2.png': { width: 1280, height: 569 },
  '/src/assets/images/dsc 1.png': { width: 1280, height: 569 },
  '/src/assets/images/fns 1.png': { width: 1280, height: 569 },
  '/src/assets/images/fox 1.png': { width: 1280, height: 569 },
  '/src/assets/images/future 1.png': { width: 1280, height: 569 },
  '/src/assets/images/leads 1.png': { width: 1280, height: 569 },
  '/src/assets/images/moy 1.png': { width: 1280, height: 569 },
  '/src/assets/images/pronet 1.png': { width: 1280, height: 569 },
  '/src/assets/images/setka 1.png': { width: 1200, height: 800 },
  '/src/assets/images/simbad 1.png': { width: 1280, height: 569 },
  '/src/assets/images/smmbaza 1.png': { width: 1280, height: 569 },
  '/src/assets/images/stolkom 1.png': { width: 1280, height: 674 },
  '/src/assets/images/vod 1.png': { width: 1280, height: 569 },
  '/src/assets/images/yandex 1.png': { width: 1280, height: 569 },
};

export function resolveAssetPath(path?: string): string | undefined {
  if (!path) return path;
  return publicAssetMap[path] ?? importedAssetMap[path] ?? path;
}

export function getAssetDimensions(path?: string): { width: number; height: number } | undefined {
  if (!path) return undefined;
  return assetDimensionsMap[path];
}
