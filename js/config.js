// Config Supabase centralisée - BoxeTool
// Ne plus dupliquer URL/clé dans chaque HTML, importer ce fichier

const SUPABASE_CONFIG = {
  URL: 'https://uxrfrtmahfymwuxgprsd.supabase.co',
  KEY: 'sb_publishable_ortsq5JcE7acoRZ_jfJXgg_0V6gmnkz',
  TABLES: {
    BOXEURS: 'Boxeurs',
    PRESENCES: 'Presences',
    LICENCES: 'licencesetcotisations'
  }
};

// Headers par défaut pour fetch REST
function sbHeaders(extra = {}) {
  return {
    apikey: SUPABASE_CONFIG.KEY,
    Authorization: 'Bearer ' + SUPABASE_CONFIG.KEY,
    ...extra
  };
}
