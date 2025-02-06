varying vec2 vUv;
uniform vec3 uColor1;
uniform vec3 uColor2;

void main() {

  vec3 color = mix(uColor1, uColor2, vUv.y);
  gl_FragColor = vec4(color, 1.0);
}
