const HASH_SEED = 37;

export const getTagHue = (tag: string) => {
  let hash = 0;
  for (const ch of tag) {
    hash = (hash * HASH_SEED + ch.charCodeAt(0)) | 0;
  }
  return Math.abs(hash) % 360;
};

export const getTagStyle = (tag: string) => ({
  "--lui-tag-h": String(getTagHue(tag)),
});
