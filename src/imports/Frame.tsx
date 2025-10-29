import React from "react";
import svgPaths from "./svg-b152wwxwwr";
import { imgGroup } from "./svg-i9wb4";

function Button() {
  return (
    <div className="absolute bg-[rgba(23,23,23,0.8)] h-[48px] left-0 rounded-[8px] top-px w-[150.047px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[78px] not-italic text-[16px] text-center text-white top-[14px] translate-x-[-50%] w-[92px]">
        <p className="leading-[normal]">Get Started</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[50px] left-[166.05px] rounded-[8px] top-0 w-[152.875px]" data-name="button">
      <div aria-hidden="true" className="absolute border border-neutral-300 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[79px] not-italic text-[16px] text-center text-neutral-700 top-[15px] translate-x-[-50%] w-[92px]">
        <p className="leading-[normal]">Learn More</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[50px] left-0 top-[249.5px] w-[592px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button />
      <Button1 />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[299.5px] left-[24px] top-[50.25px] w-[592px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[107px] leading-[0] left-0 not-italic text-[48px] text-neutral-900 top-0 w-[491px]">
        <p className="leading-[48px]">Building the Future of Housing</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[97.5px] leading-[0] left-0 not-italic text-[20px] text-neutral-600 top-[120px] w-[568px]">
        <p className="leading-[33px]">Join Boiler Build in creating innovative housing solutions for the NAHB Student Competition. Where engineering meets architecture to solve real-world housing challenges.</p>
      </div>
      <Div />
    </div>
  );
}

function Span() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[28px] left-[172.13px] top-[186px] w-[247.75px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-0 not-italic text-[18px] text-white top-[3px] w-[248px]">
        <p className="leading-[normal]">Housing Project Visualization</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute bg-neutral-400 h-[400px] left-[664px] rounded-[12px] top-0 w-[592px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Span />
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[400px] left-[80px] top-[100px] w-[1280px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div1 />
      <Div2 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-neutral-50 h-[600px] left-0 top-0 w-[1440px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div3 />
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[40px] left-0 top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[44px] leading-[0] left-[144.55px] not-italic text-[36px] text-center text-neutral-900 top-[-2px] translate-x-[-50%] w-[73px]">
        <p className="leading-[normal]">50+</p>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[24px] left-0 top-[48px] w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[144.91px] not-italic text-[16px] text-center text-neutral-600 top-[2px] translate-x-[-50%] w-[129px]">
        <p className="leading-[normal]">Active Members</p>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-0 top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div4 />
      <Div5 />
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[40px] left-0 top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[44px] leading-[0] left-[144.69px] not-italic text-[36px] text-center text-neutral-900 top-[-2px] translate-x-[-50%] w-[42px]">
        <p className="leading-[normal]">12</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[24px] left-0 top-[48px] w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[144.78px] not-italic text-[16px] text-center text-neutral-600 top-[2px] translate-x-[-50%] w-[154px]">
        <p className="leading-[normal]">Projects Completed</p>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-[316px] top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div7 />
      <Div8 />
    </div>
  );
}

function Div10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[40px] left-0 top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[44px] leading-[0] left-[144.88px] not-italic text-[36px] text-center text-neutral-900 top-[-2px] translate-x-[-50%] w-[28px]">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[24px] left-0 top-[48px] w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[144.5px] not-italic text-[16px] text-center text-neutral-600 top-[2px] translate-x-[-50%] w-[111px]">
        <p className="leading-[normal]">NAHB Awards</p>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-[632px] top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div10 />
      <Div11 />
    </div>
  );
}

function Div13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[40px] left-0 top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[44px] leading-[0] left-[144.81px] not-italic text-[36px] text-center text-neutral-900 top-[-2px] translate-x-[-50%] w-[27px]">
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[24px] left-0 top-[48px] w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[144.56px] not-italic text-[16px] text-center text-neutral-600 top-[2px] translate-x-[-50%] w-[114px]">
        <p className="leading-[normal]">Years Running</p>
      </div>
    </div>
  );
}

function Div15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-[948px] top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div13 />
      <Div14 />
    </div>
  );
}

function Div16() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-[24px] top-0 w-[1232px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div6 />
      <Div9 />
      <Div12 />
      <Div15 />
    </div>
  );
}

function Div17() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-[80px] top-[64px] w-[1280px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div16 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[200px] left-0 top-[600px] w-[1440px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div17 />
    </div>
  );
}

function Div18() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[112px] left-[24px] top-0 w-[1232px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[44px] leading-[0] left-[618.88px] not-italic text-[36px] text-center text-neutral-900 top-0 translate-x-[-50%] w-[309px]">
        <p className="leading-[40px]">About Boiler Build</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[56px] leading-[0] left-[628.44px] not-italic text-[20px] text-center text-neutral-600 top-[56px] translate-x-[-50%] w-[741px]">
        <p className="leading-[28px]">{`We're a student organization dedicated to designing and building innovative housing solutions that compete in the prestigious NAHB Student Competition.`}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[20px] relative shrink-0 w-[15px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
        <g id="Frame">
          <g clipPath="url(#clip0_1_488)">
            <path d={svgPaths.p594b480} fill="var(--fill-0, #525252)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_488">
            <path d="M0 0H15V20H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-center left-0 top-0 w-[15px]" data-name="svg">
      <Frame />
    </div>
  );
}

function I() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-[16.5px] top-[14px] w-[15px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg />
    </div>
  );
}

function Div19() {
  return (
    <div className="absolute bg-neutral-100 left-[33px] rounded-[8px] size-[48px] top-[33px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <I />
    </div>
  );
}

function H3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[28px] left-[33px] top-[105px] w-[323.328px]" data-name="h3">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-0 not-italic text-[20px] text-neutral-900 top-[2px] w-[104px]">
        <p className="leading-[normal]">Innovation</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-[33px] top-[149px] w-[323.328px]" data-name="p">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-0 not-italic text-[16px] text-neutral-600 top-[2px] w-[324px]">
        <p className="leading-[normal]">Pushing boundaries in sustainable housing</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-0 not-italic text-[16px] text-neutral-600 top-[26px] w-[316px]">
        <p className="leading-[normal]">design with cutting-edge technology and</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-0 not-italic text-[16px] text-neutral-600 top-[50px] w-[143px]">
        <p className="leading-[normal]">creative solutions.</p>
      </div>
    </div>
  );
}

function Div20() {
  return (
    <div className="absolute h-[254px] left-0 rounded-[12px] top-0 w-[389.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Div19 />
      <H3 />
      <P />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
        <g id="Frame">
          <g clipPath="url(#clip0_1_397)">
            <path d={svgPaths.p39a88000} fill="var(--fill-0, #525252)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_397">
            <path d="M0 0H25V20H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-center left-0 top-0 w-[25px]" data-name="svg">
      <Frame1 />
    </div>
  );
}

function I1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-[11.5px] top-[14px] w-[25px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg1 />
    </div>
  );
}

function Div21() {
  return (
    <div className="absolute bg-neutral-100 left-[33px] rounded-[8px] size-[48px] top-[33px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <I1 />
    </div>
  );
}

function H4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[28px] left-[33px] top-[105px] w-[323.328px]" data-name="h3">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-0 not-italic text-[20px] text-neutral-900 top-[2px] w-[131px]">
        <p className="leading-[normal]">Collaboration</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-[33px] top-[149px] w-[323.328px]" data-name="p">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-0 not-italic text-[16px] text-neutral-600 top-[2px] w-[246px]">
        <p className="leading-[normal]">Bringing together students from</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-0 not-italic text-[16px] text-neutral-600 top-[26px] w-[232px]">
        <p className="leading-[normal]">engineering, architecture, and</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-0 not-italic text-[16px] text-neutral-600 top-[50px] w-[208px]">
        <p className="leading-[normal]">construction management.</p>
      </div>
    </div>
  );
}

function Div22() {
  return (
    <div className="absolute h-[254px] left-[421.33px] rounded-[12px] top-0 w-[389.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Div21 />
      <H4 />
      <P1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22.5px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 20">
        <g id="Frame">
          <g clipPath="url(#clip0_1_426)">
            <path d={svgPaths.p3c2cfe00} fill="var(--fill-0, #525252)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_426">
            <path d="M0 0H22.5V20H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-center left-0 top-0 w-[22.5px]" data-name="svg">
      <Frame2 />
    </div>
  );
}

function I2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-[12.75px] top-[14px] w-[22.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg2 />
    </div>
  );
}

function Div23() {
  return (
    <div className="absolute bg-neutral-100 left-[33px] rounded-[8px] size-[48px] top-[33px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <I2 />
    </div>
  );
}

function H5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[28px] left-[33px] top-[105px] w-[323.344px]" data-name="h3">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-0 not-italic text-[20px] text-neutral-900 top-[2px] w-[107px]">
        <p className="leading-[normal]">Excellence</p>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-[33px] top-[149px] w-[323.344px]" data-name="p">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-0 not-italic text-[16px] text-neutral-600 top-[2px] w-[317px]">
        <p className="leading-[normal]">Competing at the highest level in national</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-0 not-italic text-[16px] text-neutral-600 top-[26px] w-[264px]">
        <p className="leading-[normal]">housing competitions and winning</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-0 not-italic text-[16px] text-neutral-600 top-[50px] w-[95px]">
        <p className="leading-[normal]">recognition.</p>
      </div>
    </div>
  );
}

function Div24() {
  return (
    <div className="absolute h-[254px] left-[842.66px] rounded-[12px] top-0 w-[389.344px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Div23 />
      <H5 />
      <P2 />
    </div>
  );
}

function Div25() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[254px] left-[24px] top-[176px] w-[1232px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div20 />
      <Div22 />
      <Div24 />
    </div>
  );
}

function Div26() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[430px] left-[80px] top-[80px] w-[1280px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div18 />
      <Div25 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-neutral-50 h-[590px] left-0 top-[800px] w-[1440px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div26 />
    </div>
  );
}

function Div27() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[84px] left-[24px] top-0 w-[1232px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[44px] leading-[0] left-[618.63px] not-italic text-[36px] text-center text-neutral-900 top-0 translate-x-[-50%] w-[216px]">
        <p className="leading-[40px]">Our Projects</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-[618.7px] not-italic text-[20px] text-center text-neutral-600 top-[56px] translate-x-[-50%] w-[651px]">
        <p className="leading-[28px]">Explore our award-winning housing projects and innovative designs.</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[28px] left-[177.25px] top-[114px] w-[245.5px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-0 not-italic text-[18px] text-white top-[3px] w-[246px]">
        <p className="leading-[normal]">Sustainable Tiny Home 2024</p>
      </div>
    </div>
  );
}

function Div28() {
  return (
    <div className="absolute bg-neutral-400 h-[256px] left-0 top-0 w-[600px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Span1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="Frame">
          <path d="M14 16H0V0H14V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.p18af0c00} fill="var(--fill-0, #171717)" fillOpacity="0.8" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-center left-0 top-[2px] w-[14px]" data-name="svg">
      <Frame3 />
    </div>
  );
}

function I3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-[-2px] w-[14px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg3 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[16px] left-[538px] top-[2px] w-[14px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I3 />
    </div>
  );
}

function Div29() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-[24px] top-[124px] w-[552px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-500 top-0 w-[130px]">
        <p className="leading-[20px]">NAHB Winner 2024</p>
      </div>
      <Button2 />
    </div>
  );
}

function Div30() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[168px] left-0 top-[256px] w-[600px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-[24px] not-italic text-[20px] text-neutral-900 top-[24px] w-[157px]">
        <p className="leading-[28px]">EcoHouse 2024</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[48px] leading-[0] left-[24px] not-italic text-[16px] text-neutral-600 top-[60px] w-[507px]">
        <p className="leading-[24px]">A 400 sq ft sustainable tiny home featuring solar panels, rainwater collection, and smart home technology.</p>
      </div>
      <Div29 />
    </div>
  );
}

function Div31() {
  return (
    <div className="absolute bg-neutral-50 h-[424px] left-0 rounded-[12px] top-0 w-[600px]" data-name="div">
      <div className="h-[424px] overflow-clip relative w-[600px]">
        <Div28 />
        <Div30 />
      </div>
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[28px] left-[173.48px] top-[114px] w-[253.031px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-0 not-italic text-[18px] text-white top-[3px] w-[254px]">
        <p className="leading-[normal]">Affordable Housing Unit 2023</p>
      </div>
    </div>
  );
}

function Div32() {
  return (
    <div className="absolute bg-neutral-400 h-[256px] left-0 top-0 w-[600px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Span2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="Frame">
          <path d="M14 16H0V0H14V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.p18af0c00} fill="var(--fill-0, #171717)" fillOpacity="0.8" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-center left-0 top-[2px] w-[14px]" data-name="svg">
      <Frame4 />
    </div>
  );
}

function I4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-[-2px] w-[14px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg4 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[16px] left-[538px] top-[2px] w-[14px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I4 />
    </div>
  );
}

function Div33() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-[24px] top-[124px] w-[552px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-500 top-0 w-[129px]">
        <p className="leading-[20px]">NAHB Finalist 2023</p>
      </div>
      <Button3 />
    </div>
  );
}

function Div34() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[168px] left-0 top-[256px] w-[600px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-[24px] not-italic text-[20px] text-neutral-900 top-[24px] w-[181px]">
        <p className="leading-[28px]">Urban Living 2023</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[48px] leading-[0] left-[24px] not-italic text-[16px] text-neutral-600 top-[60px] w-[466px]">
        <p className="leading-[24px]">An innovative affordable housing solution designed for urban environments with modular construction.</p>
      </div>
      <Div33 />
    </div>
  );
}

function Div35() {
  return (
    <div className="absolute bg-neutral-50 h-[424px] left-[632px] rounded-[12px] top-0 w-[600px]" data-name="div">
      <div className="h-[424px] overflow-clip relative w-[600px]">
        <Div32 />
        <Div34 />
      </div>
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Div36() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[424px] left-[24px] top-[148px] w-[1232px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div31 />
      <Div35 />
    </div>
  );
}

function Div37() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[572px] left-[80px] top-[80px] w-[1280px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div27 />
      <Div36 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute h-[732px] left-0 top-[1390px] w-[1440px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div37 />
    </div>
  );
}

function Div38() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[84px] left-[24px] top-0 w-[1232px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[44px] leading-[0] left-[618.8px] not-italic text-[36px] text-center text-neutral-900 top-0 translate-x-[-50%] w-[268px]">
        <p className="leading-[40px]">Meet Our Team</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-[618.55px] not-italic text-[20px] text-center text-neutral-600 top-[56px] translate-x-[-50%] w-[518px]">
        <p className="leading-[28px]">{`The talented individuals behind Boiler Build's success.`}</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[6.3%_21.86%_-19.27%_10.98%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-10.541px_-6.044px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 109">
        <g id="Group">
          <path d={svgPaths.p46f6180} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p42e8d00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[68.04%_-21.61%_-51.26%_-29.41%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[28.239px_-65.322px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 145 80">
        <g id="Group">
          <path d={svgPaths.p4e91000} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p609280} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p792f880} fill="var(--fill-0, black)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p9cf4f70} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[-9.28%_19.95%_42.2%_9.4%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-9.025px_8.908px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 65">
        <g id="Group">
          <path d={svgPaths.p2fc7fc00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[54.13%_41.53%_35.65%_47.16%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-45.268px_-51.963px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10">
        <g id="Group">
          <path d={svgPaths.p2b13c700} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p42b2200} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p31c60700} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[46.46%_36.73%_51.07%_56.83%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-54.557px_-44.606px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3">
        <g id="Group">
          <path d={svgPaths.p2ed3b380} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[37.2%_26.59%_58.41%_42.34%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-40.642px_-35.711px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 5">
        <g id="Group">
          <path d={svgPaths.p3058ef00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[26.9%_24.71%_67.95%_39.86%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-38.266px_-25.824px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 5">
        <g id="Group">
          <path d={svgPaths.p12abfb0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[-9.28%_-21.61%_-51.26%_-29.41%]" data-name="Group">
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[-9.28%_-21.61%_-51.26%_-29.41%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group9 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[96px]" data-name="Frame">
      <div className="overflow-clip relative size-[96px]">
        <MaskGroup />
      </div>
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Img() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[94px] size-[96px] top-0" data-name="img">
      <Frame5 />
    </div>
  );
}

function Div39() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[188px] left-0 top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Img />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-[144.91px] not-italic text-[18px] text-center text-neutral-900 top-[112px] translate-x-[-50%] w-[105px]">
        <p className="leading-[28px]">Sarah Chen</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-[144.73px] not-italic text-[14px] text-center text-neutral-600 top-[144px] translate-x-[-50%] w-[68px]">
        <p className="leading-[20px]">President</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[16px] leading-[0] left-[144.88px] not-italic text-[12px] text-center text-neutral-500 top-[172px] translate-x-[-50%] w-[101px]">
        <p className="leading-[16px]">Civil Engineering</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[6.3%_21.86%_-19.27%_10.98%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-10.541px_-6.044px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 109">
        <g id="Group">
          <path d={svgPaths.p4731440} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p13978a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[73.97%_-22.25%_-50.24%_-29.59%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[28.403px_-71.011px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 74">
        <g id="Group">
          <path d={svgPaths.p2f6fc600} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p12c22680} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[-11.65%_8.12%_13.33%_-19.5%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[18.721px_11.181px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 95">
        <g id="Group">
          <path d={svgPaths.p7f00180} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[54.13%_36.52%_36.47%_47.16%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-45.269px_-51.963px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
        <g id="Group">
          <path d={svgPaths.p31e6e100} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1d0d5a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p31c60700} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[31.84%_36.75%_48.99%_54.58%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-52.396px_-30.563px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 19">
        <g id="Group">
          <path d={svgPaths.p2be8cd00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[34.01%_28.39%_55.25%_44.44%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-42.66px_-32.646px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 11">
        <g id="Group">
          <path d={svgPaths.p18575000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[25.97%_25.82%_66.78%_40.93%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-39.29px_-24.928px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 7">
        <g id="Group">
          <path d={svgPaths.pc51900} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2d513900} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[25.97%_25.82%_66.78%_40.93%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[92.8%_-10.98%_-51.04%_83.81%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-80.462px_-89.084px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 56">
        <g id="Group">
          <path d={svgPaths.p22c58900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3d302c80} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[-11.65%_-22.25%_-51.04%_-29.59%]" data-name="Group">
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group18 />
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[-11.65%_-22.25%_-51.04%_-29.59%]" data-name="Group">
      <Group20 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group21 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[96px]" data-name="Frame">
      <div className="overflow-clip relative size-[96px]">
        <MaskGroup1 />
      </div>
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Img1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[94px] size-[96px] top-0" data-name="img">
      <Frame6 />
    </div>
  );
}

function Div40() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[188px] left-[316px] top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Img1 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-[144.69px] not-italic text-[18px] text-center text-neutral-900 top-[112px] translate-x-[-50%] w-[147px]">
        <p className="leading-[28px]">Marcus Johnson</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-[144.67px] not-italic text-[14px] text-center text-neutral-600 top-[144px] translate-x-[-50%] w-[101px]">
        <p className="leading-[20px]">Vice President</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[16px] leading-[0] left-[144.77px] not-italic text-[12px] text-center text-neutral-500 top-[172px] translate-x-[-50%] w-[75px]">
        <p className="leading-[16px]">Architecture</p>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[6.3%_21.86%_-19.27%_10.98%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-10.541px_-6.044px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 109">
        <g id="Group">
          <path d={svgPaths.p2dc29bc0} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3744e028} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[72.47%_-22.1%_-52.02%_-29.59%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[28.404px_-69.575px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 77">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2f178300} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p34873d80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[113.25%_37.58%_-39.41%_30.42%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-29.205px_-108.715px] mask-size-[96px_96px] mix-blend-difference" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute bottom-[-0.02%] left-[-0.02%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 26">
          <g id="Group" style={{ mixBlendMode: "difference" }}>
            <path d={svgPaths.p2973be80} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.65138" />
            <path clipRule="evenodd" d={svgPaths.p3058a8f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
            <path d={svgPaths.p178bb600} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p2b9d7e00} id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="1.65138" />
            <path d={svgPaths.p25814680} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p1cbc3f00} id="Vector_6" stroke="var(--stroke-0, white)" strokeWidth="1.65138" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[72.47%_-22.1%_-52.02%_-29.59%]" data-name="Group">
      <div className="absolute inset-[73.86%_-21.27%_-51.76%_-28.82%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[27.666px_-70.905px] mask-size-[96px_96px]" data-name="Vector" style={{ maskImage: `url('${imgGroup}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 145 75">
          <path d={svgPaths.p1e26b400} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group24 />
      <Group25 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[-18.01%_16.56%_60.4%_11.8%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-11.329px_17.286px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 56">
        <g id="Group">
          <path d={svgPaths.p1c512980} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[56.71%_38.52%_38.62%_55.16%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-52.955px_-54.444px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
        <g id="Group">
          <path d={svgPaths.p1c73d00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[44.05%_37.5%_50.78%_54.17%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-52.007px_-42.288px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5">
        <g id="Group">
          <path d={svgPaths.p28e97500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[34.01%_28.39%_55.25%_44.44%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-42.66px_-32.646px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 11">
        <g id="Group">
          <path d={svgPaths.p18575000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[25.97%_25.82%_66.78%_40.93%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-39.29px_-24.928px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 7">
        <g id="Group">
          <path d={svgPaths.pc51900} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2d513900} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[25.97%_25.82%_66.78%_40.93%]" data-name="Group">
      <Group31 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[-18.01%_-22.1%_-52.02%_-29.59%]" data-name="Group">
      <Group23 />
      <Group26 />
      <Group27 />
      <Group28 />
      <Group29 />
      <Group30 />
      <Group32 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[-18.01%_-22.1%_-52.02%_-29.59%]" data-name="Group">
      <Group33 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group34 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[96px]" data-name="Frame">
      <div className="overflow-clip relative size-[96px]">
        <MaskGroup2 />
      </div>
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Img2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[94px] size-[96px] top-0" data-name="img">
      <Frame7 />
    </div>
  );
}

function Div41() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[188px] left-[632px] top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Img2 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-[144.56px] not-italic text-[18px] text-center text-neutral-900 top-[112px] translate-x-[-50%] w-[142px]">
        <p className="leading-[28px]">Emily Rodriguez</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-[144.94px] not-italic text-[14px] text-center text-neutral-600 top-[144px] translate-x-[-50%] w-[115px]">
        <p className="leading-[20px]">Project Manager</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[16px] leading-[0] left-[144.72px] not-italic text-[12px] text-center text-neutral-500 top-[172px] translate-x-[-50%] w-[156px]">
        <p className="leading-[16px]">Construction Management</p>
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute inset-[6.3%_21.86%_-19.27%_10.98%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-10.541px_-6.044px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 109">
        <g id="Group">
          <path d={svgPaths.p46f6180} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p42e8d00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute inset-[68.04%_-21.61%_-51.26%_-29.41%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[28.239px_-65.322px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 145 80">
        <g id="Group">
          <path d={svgPaths.p4e91000} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p609280} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p792f880} fill="var(--fill-0, black)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p9cf4f70} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute inset-[-17.78%_3.78%_61.29%_5.78%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-5.547px_17.071px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87 55">
        <g id="Group">
          <path d={svgPaths.p3f118300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute inset-[55.74%_35.41%_36.28%_51.44%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-49.382px_-53.508px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 8">
        <g id="Group">
          <path d={svgPaths.p546f880} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute inset-[33.16%_36.53%_49.95%_54.23%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-52.058px_-31.839px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 17">
        <g id="Group">
          <path d={svgPaths.p1e492800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pb476100} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[33.16%_36.53%_49.95%_54.23%]" data-name="Group">
      <Group40 />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[36.45%_28.22%_60.91%_44.59%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-42.801px_-34.991px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 3">
        <g id="Group">
          <path d={svgPaths.p67d5b80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute inset-[25.34%_24%_67.72%_39.37%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-37.794px_-24.329px] mask-size-[96px_96px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 7">
        <g id="Group">
          <path d={svgPaths.p8149900} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[-17.78%_-21.61%_-51.26%_-29.41%]" data-name="Group">
      <Group36 />
      <Group37 />
      <Group38 />
      <Group39 />
      <Group41 />
      <Group42 />
      <Group43 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[-17.78%_-21.61%_-51.26%_-29.41%]" data-name="Group">
      <Group44 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group45 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[96px]" data-name="Frame">
      <div className="overflow-clip relative size-[96px]">
        <MaskGroup3 />
      </div>
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Img3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[94px] size-[96px] top-0" data-name="img">
      <Frame8 />
    </div>
  );
}

function Div42() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[188px] left-[948px] top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Img3 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-[144.53px] not-italic text-[18px] text-center text-neutral-900 top-[112px] translate-x-[-50%] w-[97px]">
        <p className="leading-[28px]">David Park</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-[144.98px] not-italic text-[14px] text-center text-neutral-600 top-[144px] translate-x-[-50%] w-[106px]">
        <p className="leading-[20px]">Technical Lead</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[16px] leading-[0] left-[144.92px] not-italic text-[12px] text-center text-neutral-500 top-[172px] translate-x-[-50%] w-[142px]">
        <p className="leading-[16px]">Mechanical Engineering</p>
      </div>
    </div>
  );
}

function Div43() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[188px] left-[24px] top-[148px] w-[1232px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div39 />
      <Div40 />
      <Div41 />
      <Div42 />
    </div>
  );
}

function Div44() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[336px] left-[80px] top-[80px] w-[1280px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div38 />
      <Div43 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-neutral-50 h-[496px] left-0 top-[2122px] w-[1440px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div44 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[48px] left-[252.39px] rounded-[8px] top-px w-[174.344px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[90px] not-italic text-[16px] text-center text-neutral-900 top-[14px] translate-x-[-50%] w-[116px]">
        <p className="leading-[normal]">Join Our Team</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[50px] left-[442.73px] rounded-[8px] top-0 w-[152.875px]" data-name="button">
      <div aria-hidden="true" className="absolute border border-neutral-600 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[79px] not-italic text-[16px] text-center text-white top-[15px] translate-x-[-50%] w-[92px]">
        <p className="leading-[normal]">Learn More</p>
      </div>
    </div>
  );
}

function Div45() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[50px] left-[24px] top-[152px] w-[848px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Div46() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[202px] left-[272px] top-[80px] w-[896px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[44px] leading-[0] left-[450.86px] not-italic text-[36px] text-center text-white top-0 translate-x-[-50%] w-[451px]">
        <p className="leading-[40px]">Ready to Build the Future?</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[56px] leading-[0] left-[450.83px] not-italic text-[20px] text-center text-neutral-300 top-[64px] translate-x-[-50%] w-[809px]">
        <p className="leading-[28px]">Join Boiler Build and be part of creating innovative housing solutions that make a real difference.</p>
      </div>
      <Div45 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute bg-[rgba(23,23,23,0.8)] h-[362px] left-0 top-[2618px] w-[1440px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div46 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[2980px] left-0 top-[73px] w-[1440px]" data-name="main">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15.75px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
        <g id="Frame">
          <path d="M15.75 14H0V0H15.75V14Z" stroke="var(--stroke-0, #E5E7EB)" />
          <g id="Vector"></g>
        </g>
      </svg>
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-center justify-center left-0 top-0 w-[15.75px]" data-name="svg">
      <Frame9 />
    </div>
  );
}

function I5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[14px] left-[8.13px] top-[9px] w-[15.75px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg5 />
    </div>
  );
}

function Div47() {
  return (
    <div className="absolute bg-neutral-800 left-0 rounded-[8px] size-[32px] top-0" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <I5 />
    </div>
  );
}

function Div48() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[32px] left-0 top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div47 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[28px] leading-[0] left-[44px] not-italic text-[18px] text-neutral-900 top-[2px] w-[96px]">
        <p className="leading-[28px]">Boiler Build</p>
      </div>
    </div>
  );
}

function Div49() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[140px] left-0 top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div48 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[40px] leading-[0] left-0 not-italic text-[14px] text-neutral-600 top-[48px] w-[272px]">
        <p className="leading-[20px]">{`Building innovative housing solutions for tomorrow's challenges.`}</p>
      </div>
    </div>
  );
}

function Li() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-0 w-[284px]" data-name="li">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-600 top-px w-[40px]">
        <p className="leading-[20px]">About</p>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-[28px] w-[284px]" data-name="li">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-600 top-px w-[54px]">
        <p className="leading-[20px]">Projects</p>
      </div>
    </div>
  );
}

function Li2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-[56px] w-[284px]" data-name="li">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-600 top-px w-[37px]">
        <p className="leading-[20px]">Team</p>
      </div>
    </div>
  );
}

function Li3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-[84px] w-[284px]" data-name="li">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-600 top-px w-[53px]">
        <p className="leading-[20px]">Contact</p>
      </div>
    </div>
  );
}

function Ul() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[104px] left-0 top-[36px] w-[284px]" data-name="ul">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Li />
      <Li1 />
      <Li2 />
      <Li3 />
    </div>
  );
}

function Div50() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[140px] left-[316px] top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-900 top-0 w-[82px]">
        <p className="leading-[20px]">Quick Links</p>
      </div>
      <Ul />
    </div>
  );
}

function Li4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-0 w-[284px]" data-name="li">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-600 top-px w-[125px]">
        <p className="leading-[20px]">NAHB Competition</p>
      </div>
    </div>
  );
}

function Li5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-[28px] w-[284px]" data-name="li">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-600 top-px w-[88px]">
        <p className="leading-[20px]">Past Winners</p>
      </div>
    </div>
  );
}

function Li6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-[56px] w-[284px]" data-name="li">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-600 top-px w-[70px]">
        <p className="leading-[20px]">Guidelines</p>
      </div>
    </div>
  );
}

function Li7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-[84px] w-[284px]" data-name="li">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-600 top-px w-[70px]">
        <p className="leading-[20px]">Resources</p>
      </div>
    </div>
  );
}

function Ul1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[104px] left-0 top-[36px] w-[284px]" data-name="ul">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Li4 />
      <Li5 />
      <Li6 />
      <Li7 />
    </div>
  );
}

function Div51() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[140px] left-[632px] top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-900 top-0 w-[86px]">
        <p className="leading-[20px]">Competition</p>
      </div>
      <Ul1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[14px] relative shrink-0 w-[12.25px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Frame">
          <g clipPath="url(#clip0_1_432)">
            <path d={svgPaths.p14801e70} fill="var(--fill-0, #525252)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_432">
            <path d="M0 0H12.25V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg6() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-center justify-center left-0 top-0 w-[12.25px]" data-name="svg">
      <Frame10 />
    </div>
  );
}

function I6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[14px] left-[9.88px] top-[9px] w-[12.25px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg6 />
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute bg-neutral-100 left-0 rounded-[8px] size-[32px] top-0" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <I6 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[14px] relative shrink-0 w-[12.25px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Frame">
          <g clipPath="url(#clip0_1_408)">
            <path d={svgPaths.p18b96100} fill="var(--fill-0, #525252)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_408">
            <path d="M0 0H12.25V14H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-center justify-center left-0 top-0 w-[12.25px]" data-name="svg">
      <Frame11 />
    </div>
  );
}

function I7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[14px] left-[9.88px] top-[9px] w-[12.25px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg7 />
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute bg-neutral-100 left-[44px] rounded-[8px] size-[32px] top-0" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <I7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <path d="M14 14H0V0H14V14Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.p3d2da200} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[14px] top-0" data-name="svg">
      <Frame12 />
    </div>
  );
}

function I8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[9px] size-[14px] top-[9px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg8 />
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute bg-neutral-100 left-[88px] rounded-[8px] size-[32px] top-0" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <I8 />
    </div>
  );
}

function Div52() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[32px] left-0 top-[36px] w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Span3 />
      <Span4 />
      <Span5 />
    </div>
  );
}

function Div53() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[140px] left-[948px] top-0 w-[284px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-0 not-italic text-[14px] text-neutral-900 top-0 w-[61px]">
        <p className="leading-[20px]">Connect</p>
      </div>
      <Div52 />
    </div>
  );
}

function Div54() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[140px] left-[24px] top-0 w-[1232px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div49 />
      <Div50 />
      <Div51 />
      <Div53 />
    </div>
  );
}

function Div55() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[53px] left-[24px] top-[172px] w-[1232px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[0] left-[618.61px] not-italic text-[14px] text-center text-neutral-600 top-[33px] translate-x-[-50%] w-[267px]">
        <p className="leading-[20px]">© 2025 Boiler Build. All rights reserved.</p>
      </div>
    </div>
  );
}

function Div56() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[225px] left-[80px] top-[49px] w-[1280px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div54 />
      <Div55 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[322px] left-0 top-[3053px] w-[1440px]" data-name="footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <Div56 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20.25px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 18">
        <g id="Frame">
          <path d="M20.25 18H0V0H20.25V18Z" stroke="var(--stroke-0, #E5E7EB)" />
          <g id="Vector"></g>
        </g>
      </svg>
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-0 top-0 w-[20.25px]" data-name="svg">
      <Frame13 />
    </div>
  );
}

function I9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[18px] left-[9.88px] top-[11px] w-[20.25px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg9 />
    </div>
  );
}

function Div57() {
  return (
    <div className="absolute bg-neutral-800 left-0 rounded-[8px] size-[40px] top-0" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <I9 />
    </div>
  );
}

function Div58() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[40px] left-0 top-0 w-[179.719px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div57 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[32px] leading-[0] left-[52px] not-italic text-[24px] text-neutral-900 top-[4px] w-[128px]">
        <p className="leading-[32px]">Boiler Build</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[24px] left-[394.91px] top-[8px] w-[427.219px]" data-name="nav">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-0 not-italic text-[16px] text-neutral-600 top-0 w-[46px]">
        <p className="leading-[24px]">About</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[77.13px] not-italic text-[16px] text-neutral-600 top-0 w-[62px]">
        <p className="leading-[24px]">Projects</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[170.56px] not-italic text-[16px] text-neutral-600 top-0 w-[93px]">
        <p className="leading-[24px]">Competition</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[294.25px] not-italic text-[16px] text-neutral-600 top-0 w-[42px]">
        <p className="leading-[24px]">Team</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[367.81px] not-italic text-[16px] text-neutral-600 top-0 w-[61px]">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[40px] left-0 top-0 w-[73.781px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[39.5px] not-italic text-[16px] text-center text-neutral-600 top-[10px] translate-x-[-50%] w-[47px]">
        <p className="leading-[normal]">Login</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[rgba(23,23,23,0.8)] h-[40px] left-[89.78px] rounded-[8px] top-0 w-[104.906px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[0] left-[55px] not-italic text-[16px] text-center text-white top-[10px] translate-x-[-50%] w-[62px]">
        <p className="leading-[normal]">Join Us</p>
      </div>
    </div>
  );
}

function Div59() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[40px] left-[1037.31px] top-0 w-[194.688px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Div60() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[40px] left-[24px] top-[16px] w-[1232px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div58 />
      <Nav />
      <Div59 />
    </div>
  );
}

function Div61() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-[80px] top-0 w-[1280px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div60 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[73px] left-0 top-0 w-[1440px]" data-name="header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <Div61 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[3375px] relative shrink-0 w-[1440px]" data-name="body">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Main />
      <Footer />
      <Header />
    </div>
  );
}

export default function Frame14() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip relative size-full">
        <Body />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}