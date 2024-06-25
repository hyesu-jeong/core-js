
/* global gsap */

export function shake(target) {

  /* gsap 하나의 Tween을 생성했다. (어도비 플래시 때 쓰던 이름 실제로 gsap은 어도비 플래시팀이 만들었다.) */
  const animation = gsap.to(target, {
    duration: 0.1,
    x: -10,
    repeat: 5,
    yoyo: true,
  });

  return animation;

}