$(document).ready(function () {
  (function (window) {
    "use strict";

    function classReg(className) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    let hasClass, addClass, removeClass;

    if ("classList" in document.documentElement) {
      hasClass = function (elem, c) {
        return elem.classList.contains(c);
      };
      addClass = function (elem, c) {
        elem.classList.add(c);
      };
      removeClass = function (elem, c) {
        elem.classList.remove(c);
      };
    } else {
      hasClass = function (elem, c) {
        return classReg(c).test(elem.className);
      };
      addClass = function (elem, c) {
        if (!hasClass(elem, c)) {
          elem.className = elem.className + " " + c;
        }
      };
      removeClass = function (elem, c) {
        elem.className = elem.className.replace(classReg(c), " ");
      };
    }

    function toggleClass(elem, c) {
      let fn = hasClass(elem, c) ? removeClass : addClass;
      fn(elem, c);
    }

    let classie = {
      // full names
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      // short names
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass,
    };

    // transport
    if (typeof define === "function" && define.amd) {
      // AMD
      define(classie);
    } else {
      // browser global
      window.classie = classie;
    }
  })(window);

  let ModalEffects = (function () {
    function init() {
      let overlay = document.querySelector(".md-overlay");

      [].slice
        .call(document.querySelectorAll(".md-trigger"))
        .forEach(function (el, i) {
          let modal = document.querySelector(
              "#" + el.getAttribute("data-modal")
            ),
            close = modal.querySelector(".md-close");

          function removeModal(hasPerspective) {
            let content = modal.querySelector(".modal-content"); // Replace ".modal-content" with the actual class or ID of your content element
            content.innerHTML = ""; // Clear the content
            classie.remove(modal, "md-show");
            if (hasPerspective) {
              classie.remove(document.documentElement, "md-perspective");
            }
          }

          function removeModalHandler() {
            removeModal(classie.has(el, "md-setperspective"));
          }

          el.addEventListener("click", function (ev) {
            let modalContent = modal.querySelector(".modal-content"); // Replace ".modal-content" with the actual class or ID of your content element
            modalContent.innerHTML =
              "<p>This is the new content of the modal.</p>"; // Set the content to a new HTML string
            classie.add(modal, "md-show");
            overlay.removeEventListener("click", removeModalHandler);
            overlay.addEventListener("click", removeModalHandler);

            if (classie.has(el, "md-setperspective")) {
              setTimeout(function () {
                classie.add(document.documentElement, "md-perspective");
              }, 25);
            }
          });

          close.addEventListener("click", function (ev) {
            ev.stopPropagation();
            removeModalHandler();
          });
        });
    }

    init();
  })();

  /*--------------------------------------------------------------
  # Show draw number history
  --------------------------------------------------------------*/
  const button = $(".draw-num-box");
  const list = $(".ball-history-list-SSC");

  button.mouseover(function () {
    list.show();
  });

  button.mouseout(function () {
    list.hide();
  });

  list.mouseover(function () {
    list.show();
  });

  list.mouseout(function () {
    list.hide();
  });
});

// const tooltipBtn = document.querySelector(".tooltip-btn");

// tooltipBtn.addEventListener("mouseover", () => {
//   console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
//   tooltipBtn.setAttribute("data-show-tooltip", "");
// });

// tooltipBtn.addEventListener("mouseout", () => {
//   console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
//   tooltipBtn.removeAttribute("data-show-tooltip");
// });
