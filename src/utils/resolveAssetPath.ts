import aiIntelligenceAbstract from '../assets/images/ai_intelligence_abstract_1781610109003.jpg';
import auditRoadmapAbstract from '../assets/images/audit_roadmap_abstract_1781607496541.jpg';
import caseCityInfrastructure from '../assets/images/case_city_infrastructure_1781608005789.jpg';
import caseLogisticsViz from '../assets/images/case_logistics_viz_1781607975934.jpg';
import caseMessengerUi from '../assets/images/case_messenger_ui_1781607960558.jpg';
import casePaymentVibe from '../assets/images/case_payment_vibe_1781608019099.jpg';
import caseSocialPlatform from '../assets/images/case_social_platform_1781607990589.jpg';
import productEducationAi from '../assets/images/product_education_ai_1781611553224.jpg';
import productLogisticsPlatform from '../assets/images/product_logistics_platform_1781611535239.jpg';
import productSmmPlatform from '../assets/images/product_smm_platform_1781611567495.jpg';
import systemsArchitectureArt from '../assets/images/systems_architecture_art_1781610094808.jpg';
import teamFoundersVibe from '../assets/images/team_founders_vibe_1781610078621.jpg';

const baseUrl = import.meta.env.BASE_URL;

const publicAssetMap: Record<string, string> = {
  '/hero-one.png': `${baseUrl}hero-one.png`,
  '/work.png': `${baseUrl}work.png`,
  '/skill.png': `${baseUrl}skill.png`,
  '/ai-inside.png': `${baseUrl}ai-inside.png`,
};

const importedAssetMap: Record<string, string> = {
  '/src/assets/images/ai_intelligence_abstract_1781610109003.jpg': aiIntelligenceAbstract,
  '/src/assets/images/audit_roadmap_abstract_1781607496541.jpg': auditRoadmapAbstract,
  '/src/assets/images/case_city_infrastructure_1781608005789.jpg': caseCityInfrastructure,
  '/src/assets/images/case_logistics_viz_1781607975934.jpg': caseLogisticsViz,
  '/src/assets/images/case_messenger_ui_1781607960558.jpg': caseMessengerUi,
  '/src/assets/images/case_payment_vibe_1781608019099.jpg': casePaymentVibe,
  '/src/assets/images/case_social_platform_1781607990589.jpg': caseSocialPlatform,
  '/src/assets/images/product_education_ai_1781611553224.jpg': productEducationAi,
  '/src/assets/images/product_logistics_platform_1781611535239.jpg': productLogisticsPlatform,
  '/src/assets/images/product_smm_platform_1781611567495.jpg': productSmmPlatform,
  '/src/assets/images/systems_architecture_art_1781610094808.jpg': systemsArchitectureArt,
  '/src/assets/images/team_founders_vibe_1781610078621.jpg': teamFoundersVibe,
};

export function resolveAssetPath(path?: string): string | undefined {
  if (!path) return path;
  return publicAssetMap[path] ?? importedAssetMap[path] ?? path;
}
