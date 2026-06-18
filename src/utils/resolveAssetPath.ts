import ai from '../assets/images/ai.png';
import catalon from '../assets/images/catalon.png';
import dsc from '../assets/images/dsc.jpg';
import fns from '../assets/images/fns.jpg';
import fox from '../assets/images/fox.jpg';
import future from '../assets/images/future.png';
import komanda from '../assets/images/komanda.png';
import leads from '../assets/images/leads.png';
import moy from '../assets/images/moy.png';
import pronet from '../assets/images/pronet.png';
import setka from '../assets/images/setka.png';
import simb from '../assets/images/simb.jpg';
import smmbaza from '../assets/images/smmbaza.png';
import stolkom from '../assets/images/stolkom.jpg';
import teamFoundersVibe from '../assets/images/team_founders_vibe_1781610078621.jpg';
import vod from '../assets/images/vod.png';
import yandex from '../assets/images/yandex.jpg';

const baseUrl = import.meta.env.BASE_URL;

const publicAssetMap: Record<string, string> = {
  '/hero-one.png': `${baseUrl}hero-one.png`,
  '/work.png': `${baseUrl}work.png`,
  '/skill.png': `${baseUrl}skill.png`,
  '/ai-inside.png': `${baseUrl}ai-inside.png`,
};

const importedAssetMap: Record<string, string> = {
  '/src/assets/images/dsc.jpg': dsc,
  '/src/assets/images/fns.jpg': fns,
  '/src/assets/images/fox.jpg': fox,
  '/src/assets/images/future.png': future,
  '/src/assets/images/komanda.png': komanda,
  '/src/assets/images/leads.png': leads,
  '/src/assets/images/moy.png': moy,
  '/src/assets/images/pronet.png': pronet,
  '/src/assets/images/setka.png': setka,
  '/src/assets/images/simb.jpg': simb,
  '/src/assets/images/smmbaza.png': smmbaza,
  '/src/assets/images/stolkom.jpg': stolkom,
  '/src/assets/images/team_founders_vibe_1781610078621.jpg': teamFoundersVibe,
  '/src/assets/images/vod.png': vod,
  '/src/assets/images/yandex.jpg': yandex,
  '/src/assets/images/ai.png': ai,
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
