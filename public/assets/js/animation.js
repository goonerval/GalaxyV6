//---------------------------------//
//---------------------------------//
//---------------------------------//
// WELCOME ANIMATION SCRIPT //
//---------------------------------//
//---------------------------------//
//---------------------------------//

gsap.fromTo(
  ".h1one",
  {
    x: -150,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "expo.inOut",
  }
);
gsap.fromTo(
  ".h1two",
  {
    y: -200,
    opacity: 0,
  },
  {
    delay: 0.5,
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "expo.inOut",
  }
);
gsap.fromTo(
  ".h1three",
  {
    y: 200,
    opacity: 0,
  },
  {
    delay: 0.5,
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "expo.inOut",
  }
);
gsap.fromTo(
  ".h1four",
  {
    x: 140,
    opacity: 0,
  },
  {
    delay: 0.5,
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "expo.inOut",
  }
);
gsap.fromTo(
  ".h1five",
  {
    y: -100,
    opacity: 0,
  },
  {
    delay: 0.2,
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "expo.inOut",
  }
);
gsap.fromTo(
  ".h1six",
  {
    x: 100,
    opacity: 0,
  },
  {
    delay: 0.7,
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "expo.inOut",
  }
);
gsap.fromTo(
  ".h1seven",
  {
    opacity: 0,
  },
  {
    delay: 1.8,
    opacity: 1,
    duration: 1,
  }
);
gsap.fromTo(
  ".h1eight",
  {
    opacity: 0,
  },
  {
    delay: 2,
    opacity: 1,
    duration: 0.5,
    onComplete: function () {
      const body = document.getElementById("body");
      body.addEventListener("click", sweepUp, { once: true });
      gsap.fromTo(
        ".cta",
        {
          y: 20,
        },
        {
          opacity: 1,
          duration: 0.5,
          y: 0,
          ease: "power1.out",
        }
      );
    },
  }
);
function sweepUp() {
  gsap.to(".h1one", {
    y: "-300",
    duration: 2,
    ease: "expo.inOut",
    opacity: 0,
    onComplete: function () {
      const message = document.getElementById("welcomeMsgDiv");
      message.style.display = "none";
      startOnboarding();
    },
  });
  gsap.to(".h1two", {
    y: "-600",
    delay: 0.5,
    duration: 2,
    ease: "expo.inOut",
    opacity: 0,
  });
  gsap.to(".h1three", {
    y: "-100",
    duration: 2,
    delay: 0.2,
    ease: "expo.inOut",
    opacity: 0,
  });
  gsap.to(".h1four", {
    y: "-800",
    delay: 0.7,
    duration: 2,
    ease: "expo.inOut",
    opacity: 0,
  });
  gsap.to(".h1five", {
    delay: 0.8,

    y: "-400",
    duration: 2,
    ease: "expo.inOut",
    opacity: 0,
  });
  gsap.to(".h1six", {
    delay: 0.3,
    y: "-200",
    duration: 2,
    ease: "expo.inOut",
    opacity: 0,
  });
  gsap.to(".h1seven", {
    delay: 0.7,
    y: "-500",
    duration: 2,
    ease: "expo.inOut",
    opacity: 0,
  });
  gsap.to(".h1eight", {
    y: "-300",
    duration: 2,
    ease: "expo.inOut",
    opacity: 0,
  });
  gsap.to(".cta", {
    opacity: 0,
    delay: 1,
  });
}

//---------------------------------//
//---------------------------------//
//---------------------------------//
// ONBOARDING ANIMATION SCRIPT //
//---------------------------------//
//---------------------------------//
//---------------------------------//
function startOnboarding() {
  gsap.fromTo(
    ".stagger1",
    {
      y: 20,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      stagger: 0.2,
    }
  );
}
function spread() {
  gsap.to(".stagger1", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  })
}