import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {ROOT} from './lib/docs-content.mjs';

const animations = [
  ['docs/ff-concepts/animations/hero_animations.md', 'animation_gifs/hero-animation-image-widget.gif', 'hero-animation-image-widget.gif', 'Hero animation applied to an Image widget in FlutterFlow'],
  ['docs/ff-concepts/animations/shaders.md', 'animation_gifs/sf1.gif', 'sf1', 'Perlin Gradient ShaderFill preset'],
  ['docs/ff-concepts/animations/shaders.md', 'animation_gifs/sf2.gif', 'sf2', 'Simplex Gradient ShaderFill preset'],
  ['docs/ff-concepts/animations/shaders.md', 'animation_gifs/sf3.gif', 'sf3', 'FBM Gradient ShaderFill preset'],
  ['docs/ff-concepts/animations/shaders.md', 'animation_gifs/sf4.gif', 'sf4', 'Turbulence Gradient ShaderFill preset'],
  ['docs/ff-concepts/animations/shaders.md', 'animation_gifs/sf5.gif', 'sf5', 'Voronoi Gradient ShaderFill preset'],
  ['docs/ff-concepts/animations/shaders.md', 'animation_gifs/sw1.gif', 'sw1', 'Ripple ShaderWrapper preset'],
  ['docs/ff-concepts/animations/shaders.md', 'animation_gifs/sw11.gif', 'sw11', 'Burn ShaderWrapper preset'],
  ['docs/ff-concepts/animations/shaders.md', 'animation_gifs/sw4.gif', 'sw4', 'Pixel Dissolve ShaderWrapper preset'],
  ['docs/ff-concepts/animations/shaders.md', 'animation_gifs/st.gif', 'st', 'Interactive shader responding to pointer input'],
  ['docs/ff-concepts/layout/responsive-layout.md', 'imgs/row-card-resize.gif', 'row-card-resize.gif', 'Category cards overflowing as the viewport narrows'],
  ['docs/ff-concepts/layout/responsive-layout.md', 'imgs/row-card-resize-2.gif', 'row-card-resize.gif', 'Wrap widget moving category cards onto new rows'],
  ['docs/ff-concepts/layout/responsive-layout.md', 'imgs/appbar-navbar-visibility-resize.gif', 'appbar-navbar-visibility-resize.gif', 'Nav Bar visibility changing across responsive breakpoints'],
  ['docs/ff-concepts/layout/responsive-widgets/wrap-widget.md', 'imgs/wrap-change-direction.gif', 'wrap-change-direction.gif', 'Changing the Wrap widget direction'],
  ['docs/ff-concepts/layout/responsive-widgets/wrap-widget.md', 'imgs/wrap-adjust-alignment.gif', 'wrap-adjust-alignment.gif', 'Adjusting Wrap widget alignment'],
  ['docs/ff-concepts/navigation-routing/special-page-navigation/tabbar-widget.md', 'imgs/setting-initial-tab-index.gif', 'setting-initial-tab-index .gif', 'Setting the initial TabBar index'],
  ['docs/intro/ff-ui/canvas.md', 'imgs/handle-bars.gif', 'handle-bars', 'Resizing a widget with Canvas handles'],
  ['docs/intro/ff-ui/widget-palette.md', 'imgs/floating-widget-palette.gif', 'Floating Widget Palette', 'Opening and moving the floating Widget Palette'],
  ['docs/resources/projects/how-to-collaborate-on-projects.md', '../../../static/img/real-time-collaboration.gif', 'real-time-collaboration.gif', 'Real-time collaboration in a FlutterFlow project'],
  ['docs/troubleshooting/ github/initialize_github_repository.md', '../assets/20250430121522561282.gif', 'Initialize GitHub Repository in FlutterFlow', 'Initializing a GitHub repository from FlutterFlow'],
  ['docs/troubleshooting/apple-store-deployment/fetch-signing-files/ios_deployment_authentication_error.md', '../../assets/20250430121336383410.gif', 'iOS Deployment Authentication Error in FlutterFlow', 'Resolving an iOS deployment authentication error'],
  ['docs/troubleshooting/custom-actions/custom_actions_errors.md', '../assets/20250430121139816551.gif', 'Custom Actions Errors in FlutterFlow', 'Correcting argument types in a FlutterFlow Custom Action'],
  ['docs/troubleshooting/widget/custom_widget_errors.md', '../assets/20250430121323364253.gif', 'Custom Widget Errors in FlutterFlow', 'Correcting a FlutterFlow Custom Widget error'],
  ['docs/troubleshooting/widget/infinite_scroll_pagination_in_listview.md', '../assets/20250430121249048672.gif', 'Infinite Scroll Pagination in ListView in FlutterFlow', 'Configuring infinite-scroll pagination in a ListView'],
];

let changed = 0;
for (const [docRelative, gifRelative, oldAlt, label] of animations) {
  const docPath = path.join(ROOT, docRelative);
  const oldMarkup = `![${oldAlt}](${gifRelative})`;
  let doc = fs.readFileSync(docPath, 'utf8');
  if (!doc.includes(oldMarkup)) continue;
  const gifPath = path.resolve(path.dirname(docPath), decodeURIComponent(gifRelative));
  const mp4Path = gifPath.replace(/\.gif$/i, '.mp4');
  if (!fs.existsSync(gifPath)) throw new Error(`Missing source animation: ${gifPath}`);
  execFileSync('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-y', '-i', gifPath,
    '-vf', "scale='min(1280,iw)':-2:flags=lanczos",
    '-an', '-c:v', 'libx264', '-preset', 'medium', '-crf', '26',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', mp4Path,
  ], {stdio: 'inherit'});
  const mp4Relative = gifRelative.replace(/\.gif$/i, '.mp4');
  const requirePath = /^(?:\.|\/)/.test(mp4Relative) ? mp4Relative : `./${mp4Relative}`;
  const video = `<video className="docs-video" autoPlay loop muted playsInline controls aria-label={${JSON.stringify(label)}}><source src={require(${JSON.stringify(requirePath)}).default} type="video/mp4" /></video>`;
  doc = doc.replace(oldMarkup, video);
  fs.writeFileSync(docPath, doc);
  changed += 1;
  const before = fs.statSync(gifPath).size;
  const after = fs.statSync(mp4Path).size;
  console.log(`${docRelative}: ${(before / 1e6).toFixed(1)} MB GIF -> ${(after / 1e6).toFixed(1)} MB MP4`);
}

console.log(`Optimized ${changed}/${animations.length} referenced animations. Original GIFs remain available for rollback and legacy URLs.`);
