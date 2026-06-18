import aiInner from '../assets/images/ai 1.png';
import ai from '../assets/images/ai.png';
import catalonInner from '../assets/images/catalon 2.png';
import catalon from '../assets/images/catalon.png';
import dscInner from '../assets/images/dsc 1.png';
import dsc from '../assets/images/dsc.jpg';
import fnsInner from '../assets/images/fns 1.png';
import fns from '../assets/images/fns.jpg';
import foxInner from '../assets/images/fox 1.png';
import fox from '../assets/images/fox.jpg';
import futureInner from '../assets/images/future 1.png';
import future from '../assets/images/future.png';
import heroNew from '../assets/images/hero new.png';
import komanda from '../assets/images/komanda.png';
import leadsInner from '../assets/images/leads 1.png';
import leads from '../assets/images/leads.png';
import moyInner from '../assets/images/moy 1.png';
import moy from '../assets/images/moy.png';
import pronetInner from '../assets/images/pronet 1.png';
import pronet from '../assets/images/pronet.png';
import setkaInner from '../assets/images/setka 1.png';
import setka from '../assets/images/setka.png';
import simbadInner from '../assets/images/simbad 1.png';
import simb from '../assets/images/simb.jpg';
import smmbazaInner from '../assets/images/smmbaza 1.png';
import smmbaza from '../assets/images/smmbaza.png';
import stolkomInner from '../assets/images/stolkom 1.png';
import stolkom from '../assets/images/stolkom.jpg';
import teamFoundersVibe from '../assets/images/team_founders_vibe_1781610078621.jpg';
import vodInner from '../assets/images/vod 1.png';
import vod from '../assets/images/vod.png';
import yandexInner from '../assets/images/yandex 1.png';
import yandex from '../assets/images/yandex.jpg';

const baseUrl = import.meta.env.BASE_URL;

const publicAssetMap: Record<string, string> = {
  '/hero-one.png': `${baseUrl}hero-one.png`,
  '/work.png': `${baseUrl}work.png`,
  '/skill.png': `${baseUrl}skill.png`,
  '/ai-inside.png': `${baseUrl}ai-inside.png`,
};

const importedAssetMap: Record<string, string> = {
  '/src/assets/images/ai 1.png': aiInner,
  '/src/assets/images/dsc.jpg': dsc,
  '/src/assets/images/dsc 1.png': dscInner,
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
  '/src/assets/images/team_founders_vibe_1781610078621.jpg': teamFoundersVibe,
  '/src/assets/images/vod 1.png': vodInner,
  '/src/assets/images/vod.png': vod,
  '/src/assets/images/yandex 1.png': yandexInner,
  '/src/assets/images/yandex.jpg': yandex,
  '/src/assets/images/ai.png': ai,
  '/src/assets/images/catalon 2.png': catalonInner,
  '/src/assets/images/catalon.png': catalon,

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

export function resolveAssetPath(path?: string): string | undefined {
  if (!path) return path;
  return publicAssetMap[path] ?? importedAssetMap[path] ?? path;
}
