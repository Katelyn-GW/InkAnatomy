/**
 * Body silhouette clip path for tattoo masking
 * Based on the actual body outline from the figure reference
 */

export function getBodyClipPath(): string {
  // Polygon traced carefully from body image - tight to avoid teal showing
  const points = [
    // Head
    [184, 12], [215, 18], [242, 28], [260, 42], [272, 62],
    [278, 85], [275, 108], [262, 122], [248, 130],
    
    // Neck and shoulders
    [244, 136], [250, 148], [265, 160],
    
    // Right arm and shoulder
    [285, 172], [305, 188], [320, 205], [330, 225], [328, 245],
    [310, 260], [285, 268], [270, 270],
    
    // Right torso
    [273, 295], [276, 360], [278, 425], [280, 490],
    
    // Right leg
    [283, 530], [287, 590], [283, 650], [278, 708], [272, 742],
    
    // Bottom
    [184, 743],
    
    // Left leg
    [96, 742], [90, 708], [85, 650], [81, 590], [85, 530],
    
    // Left torso
    [88, 490], [90, 425], [92, 360], [95, 295],
    
    // Left arm and shoulder
    [98, 270], [83, 268], [58, 260], [40, 245], [38, 225],
    [48, 205], [63, 188], [83, 172],
    
    // Left shoulder and neck
    [98, 160], [113, 148], [119, 136],
    
    // Head left side
    [105, 130], [91, 122], [78, 108], [75, 85], [81, 62],
    [93, 42], [111, 28], [138, 18],
  ];
  
  return `polygon(${points.map(p => `${p[0]}px ${p[1]}px`).join(', ')})`;
}

export default function BodyMask() {
  return null; // Clip-path is applied via CSS
}
